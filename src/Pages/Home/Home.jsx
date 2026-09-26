import Hero from './Hero'
import { pianoImg, calix, drumsImg, theoryImg, logoImg } from '../../assets/images'
import { FaWhatsapp, FaChurch } from 'react-icons/fa6'
import { GiGrandPiano, GiMetronome, GiMusicalScore, GiPianoKeys } from 'react-icons/gi'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

/* ─── Instruments Ticker Data ──────────────────── */
const tickerItems = [
  'Grand Piano & Keyboard',
  'Acoustic & Electric Guitar',
  'Western Vocal Technique',
  'Carnatic Vocal Classical',
  'Classical & Film Violin',
  'Drum Kit & Percussion',
  'Music Theory & Sight Reading',
  'Trinity & ABRSM Grades 1-8',
]

const keyboardCurriculum = [
  {
    title: 'Keyboard Fundamentals',
    desc: 'Learn the basics of the keyboard, including note recognition and understanding the layout of the instrument.',
    icon: <GiPianoKeys className="w-6 h-6 text-purple-400" />,
    badge: 'Foundation',
  },
  {
    title: 'Hand Posture & Playing Technique',
    desc: 'Develop proper hand posture and finger technique to play smoothly and comfortably.',
    icon: <GiGrandPiano className="w-6 h-6 text-cyan-400" />,
    badge: 'Technique',
  },
  {
    title: 'Rhythm & Timing',
    desc: 'Build a strong sense of rhythm and timing, which are essential for confident and accurate playing.',
    icon: <GiMetronome className="w-6 h-6 text-amber-400" />,
    badge: 'Timing',
  },
  {
    title: 'Basic Music Theory',
    desc: 'Understand essential music concepts that support your keyboard playing and overall musical growth.',
    icon: <GiMusicalScore className="w-6 h-6 text-emerald-400" />,
    badge: 'Music Theory',
  },
  {
    title: 'Church-Based Keyboard Playing',
    desc: 'Learn the approach and skills needed for playing keyboard in worship and church music settings.',
    icon: <FaChurch className="w-6 h-6 text-rose-400" />,
    badge: 'Worship & Ministry',
  },
]

const whoIsFor = [
  {
    title: 'Absolute Beginners',
    desc: 'Absolute beginners with no prior musical experience looking for a friendly, zero-pressure start.',
    icon: '🌱',
  },
  {
    title: 'Step-by-Step Learners',
    desc: 'People who want a structured, step-by-step approach to learning keyboard at their own comfortable pace.',
    icon: '🪜',
  },
  {
    title: 'True Musical Growth',
    desc: 'Learners who want to build strong musical fundamentals — not just memorize songs without understanding.',
    icon: '🎹',
  },
]

const enrollLink =
  'https://id-preview--a3e98e3c-c717-4307-8bd9-33436b07bb93.lovable.app/?__lovable_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMUhtRVNYUFZ2Nk5IdlQxUUxnU1BmTlVVRnpGMyIsInByb2plY3RfaWQiOiJhM2U5OGUzYy1jNzE3LTQzMDctOGJkOS0zMzQzNmIwN2JiOTMiLCJhY2Nlc3NfdHlwZSI6InByb2plY3QiLCJpc3MiOiJsb3ZhYmxlLWFwaSIsInN1YiI6ImEzZTk4ZTNjLWM3MTctNDMwNy04YmQ5LTMzNDM2YjA3YmI5MyIsImF1ZCI6WyJsb3ZhYmxlLWFwcCJdLCJleHAiOjE3NzUxMzc4MzEsIm5iZiI6MTc3NDUzMzAzMSwiaWF0IjoxNzc0NTMzMDMxfQ.Fk8eKFok4N5j5qt2c7lunbsOPVpLee-bSyFS4Cbe5t532vFiLpLgkKbCIMd3iDIPu22wo9RyWfPjb2h7h2T3kr1Z5pqISozEQXZ-Y9EZaNydtHjCpoL9CQHZpcSVoGnNgivTNrFKgoDfl1BsseKvebANADdh7cjIvTMQMDAiqHnmcJFRg5_v1iUeD52DxEQ6FBq-dilmvv3OwZoPSz0M0i-EFhwBrCqHnW6yBOOj8scH7v7Kvm4fzUcO3CiJYUHAP0VPnViyR8i-cPjHzOl5zpyFrZaygNazo-g5p424UVuLg5tQS8ab8rih_TJfE8wgK4W2ng_ob2fh2JfPdbJEUoYHjN_YFLe9ODTsj44X2MK9RjvemMLWxrBGOwWTFTpVAvXfXzWFM70DGKbOA0UfWpJiIF5sqo0V3JZH4nDc8kaeHRqpDE-_D1JjWeG7x6Y8Pa22ZgViWPG-vHpgn2ZOMyPth_tzG4RS8h6wiNv1h9XMmLmPvYdgOgBfjKcMC-vAsr8Ty3QyubDI3ErHFX3FykKbqmU5kVeo3jo-fdv4wI4VmHDyqQLXLl6tq_F2IeiBTqJjB23c0znd7nsIqFyxmD2G_H7MjrmDcd7NudvHCslR2eYcHls0pidiv4WyEgKVszef_a-UQTmsIag30CkmEx97yxiosfBjZpBTcxoE89I#enroll'

const Home = () => {
  return (
    <div className="relative">
      {/* ─── Hero Section ───────────────────────────── */}
      <Hero />

      {/* ─── Moving Ribbon Ticker ───────────────────── */}
      <div className="py-6 border-y border-white/10 bg-slate-950/60 backdrop-blur-md overflow-hidden">
        <div className="animate-ticker flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-slate-300">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-6 whitespace-nowrap">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {item}
              </span>
              <span className="text-purple-400/50">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── About Us Section ───────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
              About Us
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              About <span className="gradient-text-vibrant">Praisewave Music Academy</span>
            </h2>

            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 text-white font-medium">
                Praisewave Music Academy was founded by <strong className="text-cyan-300 font-bold">Calix Joshua</strong>, a passionate Gospel musician with <strong>10+ years of experience</strong> in music and <strong>8+ years of experience</strong> in music production.
              </p>

              <p>
                The academy is dedicated to helping beginners build a strong musical foundation through structured keyboard training and essential music knowledge. With a focus on church-based keyboard playing and basic music theory, Praisewave Music Academy aims to guide aspiring musicians to start their musical journey the right way.
              </p>

              <p>
                Through practical teaching and a simple learning approach, the academy helps students grow in confidence and develop their musical skills step by step.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={enrollLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !text-sm !py-3.5 !px-7 shadow-lg shadow-purple-900/40 flex items-center gap-2.5 group"
              >
                <span>Start Your Musical Journey at Just ₹1,699</span>
                <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/919500603579?text=Hi%20Calix%20Joshua!%20I%20would%20like%20to%20know%20more%20about%20Praisewave%20Music%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !text-sm !py-3.5 !px-6 flex items-center gap-2 group"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                <span>Talk with Calix Joshua</span>
                <FiArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Founder & Studio Highlight Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-7 sm:p-9 border border-purple-500/25 relative overflow-hidden shadow-2xl">
              {/* Image Frame */}
              <div className="relative h-96 rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-lg">
                <img
                  src={calix}
                  alt="Calix Joshua Praisewave Music Academy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c20] via-transparent to-black/20" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-white p-0.5 shadow-lg">
                      <img src={logoImg} alt="PraiseWave Logo" className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white leading-none">Calix Joshua</div>
                      <div className="text-[11px] text-cyan-300 mt-0.5">Founder & Lead Instructor</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="glass-card rounded-2xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-black gradient-text-vibrant">10+ Years</div>
                  <div className="text-xs text-slate-300 font-semibold mt-0.5">Music Experience</div>
                </div>

                <div className="glass-card rounded-2xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-black gradient-text-gold">8+ Years</div>
                  <div className="text-xs text-slate-300 font-semibold mt-0.5">Music Production</div>
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 text-center leading-relaxed">
                <FaChurch className="inline w-4 h-4 mr-1.5 text-rose-400" />
                Specialized in <strong>Church-Based Keyboard Playing</strong> &amp; Essential Harmony
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Center Philosophy Section (After About Us) ──── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="relative rounded-3xl p-8 sm:p-14 border border-white/15 bg-gradient-to-b from-purple-950/40 via-slate-900/70 to-[#060919]/90 backdrop-blur-2xl shadow-2xl overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-400/25 mb-5">
            <HiSparkles className="w-3.5 h-3.5 text-cyan-300" />
            Our Core Philosophy
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
            Music Is a Language. <span className="gradient-text-vibrant">We Teach You to Speak It.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Praisewave Music Academy is built for beginners and Intermediate players who want more than just playing songs from memory. Our structured curriculum takes you through the fundamentals of music — notes, scales, chords, rhythm, and technique — so you truly understand what you're playing and why. Whether you've never touched a keyboard or you're starting fresh, we give you the foundation to grow as a real musician.
          </p>

          <a
            href={enrollLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !text-sm !py-3.5 !px-8 shadow-xl inline-flex items-center gap-2.5 group"
          >
            <span>Begin Your Journey at Just ₹1,699</span>
            <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* ─── What You Will Learn in Our Keyboard Training (Box Cards) ──── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
            Structured Syllabus
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
            What You Will Learn in Our Keyboard Training
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            What We Offer in Keyboard Training: 5 core pillars designed to take you from day zero to confident, expressive playing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyboardCurriculum.map((item, idx) => (
            <div
              key={item.title}
              className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between border border-white/10"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-400/20">
                    Step {idx + 1} · {item.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-slate-400">
                <span>Included in Keyboard Course</span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1">
                  1-on-1 Guidance <FiCheck className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}

          {/* Quick Enrollment Card */}
          <div className="glass-card rounded-3xl p-7 flex flex-col justify-between border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-[#0b0f2a]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 mb-4">
                Special Admission
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">
                All 5 Modules Included
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Get full access to the complete beginner keyboard syllabus, guided mentorship, and practice stems.
              </p>
              <div className="text-3xl font-black gradient-text-gold mb-1">₹1,699</div>
              <div className="text-[11px] text-slate-400">Monthly · Beginner Keyboard Course</div>
            </div>

            <a
              href={enrollLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-xs !py-3 w-full mt-6 flex items-center justify-center gap-2 group"
            >
              <span>Enroll Now at ₹1,699/mo</span>
              <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Who This Course Is For ─────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-4">
            Audience Match
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Who This Course Is For
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Praisewave Music Academy is tailored to support learners who are serious about building authentic musical intuition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whoIsFor.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-3xl p-7 flex flex-col justify-between border border-white/10"
            >
              <div>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 mt-6 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <FiCheck className="w-4 h-4" />
                <span>Perfect Match</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Life at PraiseWave: Studio & Recital Showcase ──── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
            Visual Experience
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Life Inside PraiseWave Music Academy
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From focused 1-on-1 acoustic sessions to church worship and recital rehearsals in Chennai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Showcase Item 1: Piano & Theory Suite */}
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10 group">
            <div className="relative h-56 overflow-hidden">
              <img
                src={pianoImg}
                alt="Keyboard Masterclass"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b1f] via-transparent to-black/30" />
              <span className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-600/80 text-white backdrop-blur-md">
                Keyboard Studio Suite
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base text-white mb-1.5">Acoustic Piano & Keyboard</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated keyboard stations for understanding hand posture, notes, chords, and smooth musical phrasing.
              </p>
            </div>
          </div>

          {/* Showcase Item 2: Vocal & Recording Booth */}
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10 group">
            <div className="relative h-56 overflow-hidden">
              <img
                src={theoryImg}
                alt="Music Production Workspace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b1f] via-transparent to-black/30" />
              <span className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-pink-600/80 text-white backdrop-blur-md">
                Music Theory & Production
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base text-white mb-1.5">Music Theory & Sound Craft</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Learn rhythm, scales, chord progressions, and how songs are arranged for live worship and performance.
              </p>
            </div>
          </div>

          {/* Showcase Item 3: Live Recital Arena */}
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10 group">
            <div className="relative h-56 overflow-hidden">
              <img
                src={drumsImg}
                alt="Live Stage & Recitals"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b1f] via-transparent to-black/30" />
              <span className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-600/80 text-white backdrop-blur-md">
                Stage & Recitals
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base text-white mb-1.5">Worship & Stage Recitals</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Build confidence playing with live accompaniments, developing genuine stage presence and ministry skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Ready to Start Your Musical Journey? CTA Banner ──── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 border border-purple-500/30 bg-gradient-to-br from-purple-900/60 via-slate-900/80 to-cyan-950/60 backdrop-blur-2xl shadow-2xl text-center">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 mb-4">
              Enrollment Open · Limited Seats
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              Ready to Start Your Musical Journey?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Join Praisewave Music Academy and begin learning keyboard the right way — with structure, understanding, and confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={enrollLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-4 px-8 w-full sm:w-auto shadow-xl flex items-center justify-center gap-2.5 group"
              >
                <span>Start Your Musical Journey</span>
                <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20want%20to%20enroll%20in%20keyboard%20training."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-4 px-8 w-full sm:w-auto shadow-xl flex items-center justify-center gap-2 group"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <FiArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Chennai Studio: Vasudeva Garden, No 26/24b, 2nd Ave, Anna Ayyar Thottam, Ponniammanmedu, Chennai 600110
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
