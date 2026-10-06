import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiGetBlogs, authStorage } from '../../services/api'
import { FaWhatsapp, FaBookOpen, FaShieldHalved, FaPenToSquare } from 'react-icons/fa6'
import { GiGrandPiano, GiMusicalScore, GiPianoKeys, GiMetronome } from 'react-icons/gi'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'

const tags = ['All', 'Keyboard', 'Chords', 'Theory', 'Rhythm', 'Technique', 'Worship']

const Blogs = () => {
  const [activeTag, setActiveTag] = useState('All')
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const isAuthenticated = authStorage.isAuthenticated()

  useEffect(() => {
    loadArticles(activeTag)
  }, [activeTag])

  const loadArticles = async (tag) => {
    try {
      setLoading(true)
      const data = await apiGetBlogs(tag)
      setBlogs(data)
    } catch (err) {
      console.error('Error loading articles:', err)
    } finally {
      setLoading(false)
    }
  }

  const featuredArticle = blogs[0] || null
  const gridArticles = activeTag === 'All' ? blogs.slice(1) : blogs

  // Helper: prefer slug, fall back to numeric/mongo id
  const getKey = (b) => b.slug || b.numericId || b.id || b._id

  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ─── Header ─────────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20">
            <FaBookOpen className="w-3.5 h-3.5 text-cyan-400" />
            The PraiseWave Conservatory Journal
          </span>

          {isAuthenticated && (
            <Link
              to="/admin/blogs"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25 transition-colors"
            >
              <FaShieldHalved className="w-3 h-3" />
              <span>Admin Manager</span>
            </Link>
          )}
        </div>

        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
          Masterclass Insights &amp; <span className="gradient-text-vibrant">Practical Guides</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Written by Calix Joshua and the PraiseWave faculty to accelerate your keyboard practice, deepen your music theory, and strengthen your live worship playing.
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
      {activeTag === 'All' && featuredArticle && (
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl mb-14 overflow-hidden relative group">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="md:col-span-1 lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Featured Masterclass
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {featuredArticle.readTime} · {featuredArticle.date}
                </span>
              </div>

              <Link to={`/blogs/${getKey(featuredArticle)}`}>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-4 hover:text-purple-300 transition-colors">
                  {featuredArticle.title}
                </h2>
              </Link>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/10">
                <div className="text-xs text-slate-400">
                  By <strong className="text-white">{featuredArticle.author}</strong> ({featuredArticle.authorRole})
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to={`/blogs/${getKey(featuredArticle)}`}
                    className="btn-primary !text-xs !py-2.5 !px-5 flex items-center gap-2 group"
                  >
                    <span>Read Full Article</span>
                    <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={`https://wa.me/919361492530?text=Hi%20Calix!%20I%20read%20your%20article%20on%20${encodeURIComponent(featuredArticle.title)}%20and%20want%20to%20learn%20more.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp !text-xs !py-2.5 !px-4 flex items-center gap-1.5"
                    title="Discuss on WhatsApp"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Discuss</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-1 lg:col-span-5 flex items-center justify-center">
              <Link
                to={`/blogs/${getKey(featuredArticle)}`}
                className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-purple-500/30 relative group/img shadow-xl block"
              >
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b1f] via-transparent to-black/20" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-purple-300 border border-purple-400/30">
                    {featuredArticle.category}
                  </span>
                  <span className="text-[11px] text-cyan-300 font-bold bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                    Read Now →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ─── Articles Grid ──────────────────────────── */}
      {loading ? (
        <div className="p-12 text-center text-slate-400 text-sm">
          Loading masterclass articles...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {gridArticles.map((blog) => {
            const blogKey = getKey(blog)
            return (
              <article
                key={blogKey}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 group"
              >
                {/* Real Article Photo Banner with Link */}
                <Link to={`/blogs/${blogKey}`} className="relative h-48 overflow-hidden block">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                </Link>

                <div className="p-6 pt-4 flex flex-col justify-between flex-1">
                  <div>
                    {/* Title & Excerpt */}
                    <Link to={`/blogs/${blogKey}`}>
                      <h3 className="text-base font-bold text-white leading-snug mb-2.5 group-hover:text-purple-300 transition-colors">
                        {blog.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Footer Meta */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-[11px] text-slate-400 truncate max-w-[140px]">{blog.author}</span>
                    <Link
                      to={`/blogs/${blogKey}`}
                      className="font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                    >
                      <span>Read Article</span>
                      <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}

      {/* ─── Faculty Q&A Newsletter Card ────────────── */}
      <div className="rounded-3xl p-8 sm:p-12 border border-white/15 bg-gradient-to-r from-purple-950/40 via-slate-900/80 to-emerald-950/40 backdrop-blur-xl text-center">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
          Have a Specific Keyboard Question or Practice Hurdle?
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
          Calix Joshua and our faculty regularly answer questions from aspiring musicians. Connect with us on WhatsApp for tailored guidance.
        </p>
        <a
          href="https://wa.me/919361492530?text=Hi%20Calix!%20I%20have%20a%20technique%20question%20about%20my%20keyboard%20playing."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp text-xs sm:text-sm py-3.5 px-7 inline-flex items-center gap-2.5 group"
        >
          <FaWhatsapp className="w-4 h-4" />
          <span>Ask Calix Joshua on WhatsApp (+91 93614 92530)</span>
          <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

export default Blogs
