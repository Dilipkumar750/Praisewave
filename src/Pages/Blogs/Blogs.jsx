import { useState } from 'react'
import { pianoImg, guitarImg, vocalImg, violinImg, drumsImg, theoryImg } from '../../assets/images'
import { FaWhatsapp, FaGuitar, FaMicrophone } from 'react-icons/fa6'
import { GiGrandPiano, GiViolin, GiDrumKit, GiMusicalScore } from 'react-icons/gi'
import { HiArrowRight } from 'react-icons/hi2'

const blogs = [
  {
    id: 1,
    category: 'Piano Technique',
    title: '5 Essential Finger Dexterity Drills Every Pianist Must Practice Daily',
    excerpt: 'Hanon and Czerny exercises broken down for modern pianists. How 15 minutes of intentional slow practice builds velocity, clean articulation, and prevents wrist fatigue.',
    date: 'Sep 12, 2026',
    readTime: '5 min read',
    author: 'David M. · Trinity Diploma',
    tag: 'Piano',
    image: pianoImg,
    accent: 'from-purple-600 to-indigo-700',
    icon: <GiGrandPiano className="w-8 h-8 text-purple-300" />,
  },
  {
    id: 2,
    category: 'Guitar Mastery',
    title: 'Conquering the F-Major Barre Chord: The Ergonomic Trick Most Teachers Miss',
    excerpt: 'Struggling with buzzy strings or thumb cramps? Learn how elbow leverage, guitar neck angle, and index finger bone placement make barre chords feel completely effortless.',
    date: 'Sep 06, 2026',
    readTime: '6 min read',
    author: 'Samson K. · Lead Guitarist',
    tag: 'Guitar',
    image: guitarImg,
    accent: 'from-amber-600 to-rose-700',
    icon: <FaGuitar className="w-8 h-8 text-amber-300" />,
  },
  {
    id: 3,
    category: 'Vocal Health',
    title: 'Morning Vocal Warm-Up Routine: Safe Techniques to Expand Your High Register',
    excerpt: 'Lip trills, siren glides, and straw phonation exercises. Discover how professional vocalists safeguard their vocal cords and smooth out their chest-to-head voice break.',
    date: 'Aug 29, 2026',
    readTime: '4 min read',
    author: 'Rachel S. · Vocal Coach',
    tag: 'Vocals',
    image: vocalImg,
    accent: 'from-pink-600 to-fuchsia-700',
    icon: <FaMicrophone className="w-8 h-8 text-pink-300" />,
  },
  {
    id: 4,
    category: 'Music Theory',
    title: 'The Circle of Fifths Demystified: How to Transpose and Modulate Any Song',
    excerpt: 'Stop memorizing key signatures by rote. Understand the geometric symmetry of Western harmony and start composing your own chord progressions with confidence.',
    date: 'Aug 21, 2026',
    readTime: '7 min read',
    author: 'Faculty Academic Board',
    tag: 'Theory',
    image: theoryImg,
    accent: 'from-cyan-600 to-blue-700',
    icon: <GiMusicalScore className="w-8 h-8 text-cyan-300" />,
  },
  {
    id: 5,
    category: 'Violin Intonation',
    title: 'Developing Perfect Intonation on the Fretless Fingerboard',
    excerpt: 'Unlike piano or fretted guitar, violin requires tactile muscle memory and acute auditory perception. Here is our academy system for mastering pure pitches.',
    date: 'Aug 14, 2026',
    readTime: '6 min read',
    author: 'Anita V. · Symphony Violinist',
    tag: 'Violin',
    image: violinImg,
    accent: 'from-emerald-600 to-teal-700',
    icon: <GiViolin className="w-8 h-8 text-emerald-300" />,
  },
  {
    id: 6,
    category: 'Drum Grooves',
    title: 'The Four Limb Independence Blueprint for Intermediate Drummers',
    excerpt: 'Isolating the hi-hat foot from your kick pedal while maintaining dynamic snare ghost notes. Practical exercise progressions to build rock-solid internal time.',
    date: 'Aug 04, 2026',
    readTime: '5 min read',
    author: 'Karthik P. · Studio Drummer',
    tag: 'Drums',
    image: drumsImg,
    accent: 'from-yellow-600 to-amber-700',
    icon: <GiDrumKit className="w-8 h-8 text-yellow-300" />,
  },
]

const tags = ['All', 'Piano', 'Guitar', 'Vocals', 'Theory', 'Violin', 'Drums']

const Blogs = () => {
  const [activeTag, setActiveTag] = useState('All')

  const filtered =
    activeTag === 'All' ? blogs : blogs.filter((b) => b.tag === activeTag)

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ─── Header ─────────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
          The PraiseWave Conservatory Journal
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
          Masterclass Insights & <span className="gradient-text-vibrant">Practical Guides</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Written by our certified concert faculty to accelerate your instrument practice, vocal longevity, and understanding of musical theory.
        </p>
      </div>

      {/* ─── Category Filter Tags ───────────────────── */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActiveTag(t)}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${activeTag === t
                ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/25 scale-105'
                : 'glass-pill text-slate-300 hover:text-white hover:bg-white/10'
              }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ─── Featured Article Banner (When 'All' selected) ──── */}
      {activeTag === 'All' && (
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl mb-14 overflow-hidden relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Featured Masterclass
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {blogs[0].readTime} · {blogs[0].date}
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-4 group-hover:text-purple-300 transition-colors">
                {blogs[0].title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {blogs[0].excerpt}
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-white/10">
                <div className="text-xs text-slate-400">
                  By <strong className="text-white">{blogs[0].author}</strong>
                </div>

                <a
                  href={`https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20read%20your%20article%20on%20${encodeURIComponent(blogs[0].title)}%20and%20want%20to%20learn%20more.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !text-xs !py-2.5 !px-5 flex items-center gap-2 group"
                >
                  <FaWhatsapp className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Discuss with Faculty</span>
                  <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-purple-500/30 relative group/img shadow-xl">
                <img
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b1f] via-transparent to-black/20" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-purple-300 border border-purple-400/30">
                    Piano Conservatory Suite
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Articles Grid ──────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {(activeTag === 'All' ? filtered.slice(1) : filtered).map((blog) => (
          <article
            key={blog.id}
            className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10"
          >
            {/* Real Article Photo Banner */}
            <div className="relative h-44 overflow-hidden group/img">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b20] via-transparent to-black/20" />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-cyan-300 border border-cyan-400/30">
                  {blog.category}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="text-[10px] text-slate-200 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full font-medium">
                  {blog.readTime}
                </span>
              </div>
            </div>

            <div className="p-6 pt-3 flex flex-col justify-between flex-1">
              <div>
                {/* Title & Excerpt */}
                <h3 className="text-base font-bold text-white leading-snug mb-2.5 hover:text-purple-300 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              {/* Footer Meta */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[11px] text-slate-400 truncate max-w-[140px]">{blog.author}</span>
                <a
                  href={`https://wa.me/919500603579?text=Hi%20PraiseWave!%20I'd%20like%20guidance%20on%20${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group"
                >
                  <span>Read Guide</span>
                  <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ─── Faculty Q&A Newsletter Card ────────────── */}
      <div className="rounded-3xl p-8 sm:p-12 border border-white/15 bg-gradient-to-r from-purple-950/40 via-slate-900/80 to-emerald-950/40 backdrop-blur-xl text-center">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
          Have a Specific Technique Question or Practice Hurdle?
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
          Our senior mentors regularly answer questions from aspiring musicians. Connect with us on WhatsApp for tailored feedback.
        </p>
        <a
          href="https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20have%20a%20technique%20question%20about%20my%20instrument."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp text-xs sm:text-sm py-3.5 px-7 inline-flex items-center gap-2.5 group"
        >
          <FaWhatsapp className="w-4 h-4" />
          <span>Ask a Question on WhatsApp</span>
          <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

export default Blogs
