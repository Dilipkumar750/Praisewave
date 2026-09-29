import { useState, useEffect } from 'react'
import { hero1, hero2, hero3 } from '../../assets/images'
import { FaWhatsapp } from 'react-icons/fa6'
import { GiGrandPiano, GiPianoKeys, GiMusicalScore } from 'react-icons/gi'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

const featuredInstruments = [
  {
    color: 'from-purple-500 to-indigo-600',
    image: hero1,
    icon: <GiPianoKeys className="w-6 h-6" />,
  },
  {
    color: 'from-cyan-500 to-blue-600',
    image: hero2,
    icon: <GiMusicalScore className="w-6 h-6" />,
  },
  {
    color: 'from-amber-500 to-rose-600',
    image: hero3,
    icon: <GiGrandPiano className="w-6 h-6" />,
  },
]

const stats = [
  { value: '75+', label: 'Active Students', sub: 'Kids to Adults' },
  { value: '100%', label: 'Structured Learning', sub: 'Step-by-Step' },
  { value: '10+', label: 'Years Experience', sub: 'Calix Joshua' },
  { value: '4.9★', label: 'Student Rating', sub: 'Over 100+ Reviews' },
]

const Hero = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % featuredInstruments.length)
    }, 3800)
    return () => clearInterval(timer)
  }, [])

  const current = featuredInstruments[activeIdx]

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
      {/* ─── Ambient Glow Mesh — logo colors ────────── */}
      {/* Purple — piano lid top */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-700/18 blur-[150px] rounded-full pointer-events-none -z-10 animate-glow" />
      {/* Ocean Blue — wave base */}
      <div className="absolute top-2/3 right-10 w-[420px] h-[420px] bg-blue-700/14 blur-[130px] rounded-full pointer-events-none -z-10" />
      {/* Orange — piano lid sunset */}
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      {/* Cyan — wave highlight */}
      <div className="absolute bottom-10 right-1/3 w-[280px] h-[280px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ─── Left Column: Hero Typography & CTAs ──── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Season & Pricing Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-orange-400/25 mb-6 text-xs font-semibold animate-badge-pulse">
              <span className="flex h-2 w-2 rounded-full bg-orange-400 animate-ping" />
              <HiSparkles className="w-3.5 h-3.5 text-orange-300" />
              <span className="text-orange-300 font-bold">Monthly 8 Classes (45–50 Mins) at Just ₹1,099</span>
              <span className="text-slate-400">· Flexible Available Slots</span>
            </div>

            {/* User H1 */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] mb-6">
              Every Great Musician Starts with the{' '}
              <span className="gradient-text-vibrant">
                Right Foundation
              </span>
            </h1>

            {/* User Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              At Praisewave Music Academy, beginners learn keyboard with a simple and structured approach that helps them understand music, develop confidence, and grow step by step.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href="https://id-preview--a3e98e3c-c717-4307-8bd9-33436b07bb93.lovable.app/?__lovable_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMUhtRVNYUFZ2Nk5IdlQxUUxnU1BmTlVVRnpGMyIsInByb2plY3RfaWQiOiJhM2U5OGUzYy1jNzE3LTQzMDctOGJkOS0zMzQzNmIwN2JiOTMiLCJhY2Nlc3NfdHlwZSI6InByb2plY3QiLCJpc3OiOiJsb3ZhYmxlLWFwaSIsInN1YiI6ImEzZTk4ZTNjLWM3MTctNDMwNy04YmQ5LTMzNDM2YjA3YmI5MyIsImF1ZCI6WyJsb3ZhYmxlLWFwcCJdLCJleHAiOjE3NzUxMzc4MzEsIm5iZiI6MTc3NDUzMzAzMSwiaWF0IjoxNzc0NTMzMDMxfQ.Fk8eKFok4N5j5qt2c7lunbsOPVpLee-bSyFS4Cbe5t532vFiLpLgkKbCIMd3iDIPu22wo9RyWfPjb2h7h2T3kr1Z5pqISozEQXZ-Y9EZaNydtHjCpoL9CQHZpcSVoGnNgivTNrFKgoDfl1BsseKvebANADdh7cjIvTMQMDAiqHnmcJFRg5_v1iUeD52DxEQ6FBq-dilmvv3OwZoPSz0M0i-EFhwBrCqHnW6yBOOj8scH7v7Kvm4fzUcO3CiJYUHAP0VPnViyR8i-cPjHzOl5zpyFrZaygNazo-g5p424UVuLg5tQS8ab8rih_TJfE8wgK4W2ng_ob2fh2JfPdbJEUoYHjN_YFLe9ODTsj44X2MK9RjvemMLWxrBGOwWTFTpVAvXfXzWFM70DGKbOA0UfWpJiIF5sqo0V3JZH4nDc8kaeHRqpDE-_D1JjWeG7x6Y8Pa22ZgViWPG-vHpgn2ZOMyPth_tzG4RS8h6wiNv1h9XMmLmPvYdgOgBfjKcMC-vAsr8Ty3QyubDI3ErHFX3FykKbqmU5kVeo3jo-fdv4wI4VmHDyqQLXLl6tq_F2IeiBTqJjB23c0znd7nsIqFyxmD2G_H7MjrmDcd7NudvHCslR2eYcHls0pidiv4WyEgKVszef_a-UQTmsIag30CkmEx97yxiosfBjZpBTcxoE89I#enroll"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-3 text-sm py-3.5 px-7 shadow-xl shadow-purple-900/30 group"
              >
                <span>Begin Your Journey</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/20">₹1,099</span>
                <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/919361492530?text=Hi%20PraiseWave!%20I%20want%20to%20begin%20my%20keyboard%20journey."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2.5 text-sm py-3.5 px-6 group"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
                <FiArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Micro Credibility Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                  <FiCheck className="w-3 h-3" />
                </div>
                <span>Structured Keyboard Syllabus</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px]">
                  <FiCheck className="w-3 h-3" />
                </div>
                <span>100% Live Online Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-[10px]">
                  <FiCheck className="w-3 h-3" />
                </div>
                <span>Free Trial Included</span>
              </div>
            </div>

          </div>

          {/* ─── Right Column: Interactive Studio Console ──── */}
          <div className="lg:col-span-5 relative">

            {/* Glowing Backdrop Frame */}
            <div className="relative glass-card rounded-3xl p-6 sm:p-8 border border-white/15 overflow-hidden shadow-2xl">

              {/* Studio Console Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 pl-2">Live Music Studio</span>
                </div>

                {/* Visualizer Equalizer Bar */}
                <div className="flex items-end gap-1 h-5 px-2 py-0.5 bg-black/40 rounded-md border border-white/5">
                  <span className="eq-bar" />
                  <span className="eq-bar" />
                  <span className="eq-bar" />
                  <span className="eq-bar" />
                  <span className="eq-bar" />
                  <span className="eq-bar" />
                </div>
              </div>

              {/* Active Instrument Dynamic Card */}
              <div className="mt-5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 relative overflow-hidden transition-all duration-500 shadow-xl">
                {/* Real Instrument Photo Header with Glow Overlay */}
                <div className="relative h-44 sm:h-48 overflow-hidden group">
                  <img
                    src={current.image}
                    alt="PraiseWave Music Studio"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d26] via-[#090d26]/40 to-transparent" />

                  <div className="absolute top-3 right-3">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${current.color} flex items-center justify-center text-white shadow-lg`}>
                      {current.icon}
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  {/* Instrument Selector Dots */}
                  <div className="flex items-center gap-2">
                    {featuredInstruments.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIdx(i)}
                        aria-label={`Switch slide ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${activeIdx === i ? 'w-8 bg-gradient-to-r from-purple-600 to-orange-400' : 'w-2 bg-white/20 hover:bg-white/40'
                          }`}
                      />
                    ))}
                    <span className="text-[11px] text-slate-400 ml-auto">Click to switch</span>
                  </div>
                </div>
              </div>

              {/* Fast Stats Row */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="glass-card rounded-xl p-3.5 border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Certification</div>
                  <div className="text-sm font-bold text-white mt-0.5">Keyboard Focused</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> Structured Syllabus
                  </div>
                </div>
                <div className="glass-card rounded-xl p-3.5 border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Trial Class</div>
                  <div className="text-sm font-bold gradient-text-gold mt-0.5">Free 30 Minutes</div>
                  <div className="text-[10px] text-slate-400 mt-1">1-on-1 with Mentor</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ─── Bottom Stats Bar ────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((st) => (
            <div key={st.label} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold gradient-text-vibrant tracking-tight">
                {st.value}
              </span>
              <span className="text-sm font-semibold text-white mt-1">
                {st.label}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">
                {st.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero
