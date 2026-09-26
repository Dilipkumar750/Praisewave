import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { GiGrandPiano, GiMusicalScore } from 'react-icons/gi'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'
import { FiCheck } from 'react-icons/fi'

/* ─── Keyboard Plans ─────────────────────────── */
const keyboardPlans = [
  {
    id: 'kb-1',
    number: '01',
    title: 'Keyboard Basics',
    subtitle: 'Beginner',
    category: 'Keyboard',
    fee: '₹1,699',
    period: '/ Month',
    desc: 'Build a strong foundation in keyboard playing and basic music theory.',
    features: [
      'Keyboard Basics',
      'Octaves',
      'Scales',
      'Relative Chords',
      'Basic Chord Knowledge',
      'Playing Techniques',
      'Live 1-on-1 Sessions',
    ],
    cta: 'Start Learning →',
    accent: 'from-purple-600 to-indigo-600',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-900/30',
    badge: 'Beginner',
    badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/25',
    icon: <GiGrandPiano className="w-6 h-6" />,
  },
  {
    id: 'kb-2',
    number: '02',
    title: 'Keyboard + Trinity Theory',
    subtitle: 'Intermediate',
    category: 'Keyboard',
    fee: '₹2,499',
    period: '/ Month',
    desc: 'Develop your keyboard skills alongside structured Trinity Music Theory up to Grade 3.',
    features: [
      'Staff & Notation',
      'Note Values',
      'Music Notation',
      'Scales & Chords',
      'Music Theory',
      'Keyboard Playing',
      'Live 1-on-1 Sessions',
    ],
    cta: 'Learn & Progress →',
    accent: 'from-cyan-600 to-blue-600',
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-900/30',
    badge: 'Most Popular',
    badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
    icon: <GiMusicalScore className="w-6 h-6" />,
  },
  {
    id: 'kb-3',
    number: '03',
    title: 'Intermediate Keyboard',
    subtitle: 'Advanced',
    category: 'Keyboard',
    fee: '₹2,999',
    period: '/ Month',
    desc: 'Take your keyboard playing to the next level with advanced chords, grooves, and practical playing techniques.',
    features: [
      'All Advanced Chords',
      'Backing Grooves',
      'Chord Formats',
      'Reharmonisation',
      'Live Playing Techniques',
      'Practical Chord Application',
      'Live 1-on-1 Sessions',
    ],
    cta: 'Level Up Your Playing →',
    accent: 'from-fuchsia-600 to-pink-600',
    border: 'border-fuchsia-500/30',
    glow: 'shadow-fuchsia-900/30',
    badge: 'Advanced',
    badgeColor: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/25',
    icon: <GiGrandPiano className="w-6 h-6" />,
  },
]

/* ─── Production Plans ───────────────────────── */
const productionPlans = [
  {
    id: 'prod-1',
    emoji: '🎧',
    title: 'Music Production',
    category: 'Production',
    duration: '2-Month Course',
    fee: '₹18,999',
    desc: 'Learn the complete process of creating and producing music through practical, hands-on training.',
    features: [
      'Music Production Basics',
      'DAW & Production Workflow',
      'Beat & Rhythm Programming',
      'Arrangement & Instrumentation',
      'Sound Selection & Design',
      'Mixing Basics',
      'Practical Project-Based Learning',
      'Live 1-on-1 Sessions',
    ],
    cta: 'Start Your Production Journey →',
    accent: 'from-amber-500 to-orange-600',
    border: 'border-amber-500/30',
    glow: 'shadow-amber-900/30',
    badge: 'Standalone',
    badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/25',
  },
  {
    id: 'prod-2',
    emoji: '🎹',
    title: 'Keyboard + Music Production',
    category: 'Production',
    duration: '4-Month Course',
    fee: '₹24,999',
    desc: 'Build your keyboard skills from the basics to intermediate level while learning practical music production.',
    features: [
      'Keyboard Basics to Intermediate',
      'Scales, Chords & Chord Formats',
      'Backing Grooves',
      'Reharmonisation',
      'Music Production Basics',
      'DAW & Production Workflow',
      'Beat & Rhythm Programming',
      'Arrangement & Instrumentation',
      'Mixing Basics',
      'Practical Project-Based Learning',
      'Live 1-on-1 Sessions',
    ],
    cta: 'Learn. Play. Produce. →',
    accent: 'from-rose-500 to-red-600',
    border: 'border-rose-500/30',
    glow: 'shadow-rose-900/30',
    badge: 'Bundle · Best Value',
    badgeColor: 'bg-rose-500/15 text-rose-300 border-rose-500/25',
    featured: true,
  },
]

/* ─── Theory Plans ───────────────────────────── */
const theoryPlans = [
  {
    id: 'th-1',
    emoji: '🎼',
    title: 'Music Theory — Grade 1',
    category: 'Theory',
    level: 'Level: 0 → Grade 1',
    fee: '₹1,099',
    period: '/ Month',
    desc: 'Build your music theory foundation with structured lessons from the basics.',
    features: [
      'Staff & Notation',
      'Note Values',
      'Scales',
      'Key Signatures',
      'Intervals',
      'Basic Chord Concepts',
    ],
    cta: 'Start Learning →',
    accent: 'from-emerald-600 to-teal-600',
    border: 'border-emerald-500/30',
    glow: 'shadow-emerald-900/30',
    badge: 'Grade 1',
    badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
  },
  {
    id: 'th-2',
    emoji: '🎼',
    title: 'Music Theory — Grade 2',
    category: 'Theory',
    level: 'Level: Grade 2',
    fee: '₹1,299',
    period: '/ Month',
    desc: 'Develop your understanding of music theory with more advanced concepts and notation.',
    features: [
      'Advanced Notation',
      'Scales & Key Signatures',
      'Intervals',
      'Chords & Harmony',
      'Rhythm & Time Signatures',
      'Grade 2 Theory Concepts',
    ],
    cta: 'Continue Learning →',
    accent: 'from-teal-600 to-cyan-600',
    border: 'border-teal-500/30',
    glow: 'shadow-teal-900/30',
    badge: 'Grade 2',
    badgeColor: 'bg-teal-500/15 text-teal-300 border-teal-500/25',
  },
  {
    id: 'th-3',
    emoji: '🎼',
    title: 'Music Theory — Grade 3',
    category: 'Theory',
    level: 'Level: Grade 3',
    fee: '₹1,499',
    period: '/ Month',
    desc: 'Take your theory knowledge further with advanced concepts in harmony, notation and musical structure.',
    features: [
      'Advanced Notation',
      'Harmony',
      'Chords & Progressions',
      'Scales & Key Signatures',
      'Rhythm & Time Signatures',
      'Grade 3 Theory Concepts',
    ],
    cta: 'Advance Your Theory →',
    accent: 'from-sky-600 to-blue-600',
    border: 'border-sky-500/30',
    glow: 'shadow-sky-900/30',
    badge: 'Grade 3',
    badgeColor: 'bg-sky-500/15 text-sky-300 border-sky-500/25',
  },
]

/* ─── Enroll WhatsApp helper ─────────────────── */
const waLink = (title) =>
  `https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20want%20to%20enroll%20in%20${encodeURIComponent(title)}.%20Please%20share%20schedules%20and%20batch%20timings.`

/* ─── Reusable Feature List ──────────────────── */
const FeatureList = ({ features }) => (
  <ul className="flex flex-col gap-2">
    {features.map((feat) => (
      <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
        <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mt-0.5 flex-shrink-0">
          <FiCheck className="w-3 h-3" />
        </span>
        <span>{feat}</span>
      </li>
    ))}
  </ul>
)

/* ─── Keyboard Card Component ────────────────── */
const KeyboardCard = ({ plan }) => (
  <div
    className={`glass-card glass-card-hover rounded-3xl flex flex-col border ${plan.border} shadow-2xl ${plan.glow} overflow-hidden transition-all duration-300`}
  >
    <div className={`h-1.5 w-full bg-gradient-to-r ${plan.accent}`} />
    <div className="p-7 pt-6 flex flex-col flex-1">
      <div className="flex items-start justify-between mb-5">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${plan.accent} flex items-center justify-center text-white shadow-md`}>
          {plan.icon}
        </div>
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${plan.badgeColor}`}>
          {plan.badge}
        </span>
      </div>
      <div className="mb-1">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          {plan.number}
        </span>
      </div>
      <h2 className="text-xl font-extrabold text-white mb-1 leading-tight">{plan.title}</h2>
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-2xl font-black gradient-text-gold">{plan.fee}</span>
        <span className="text-xs text-slate-400 font-semibold">{plan.period}</span>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed mb-5">{plan.desc}</p>
      <div className="pt-4 border-t border-white/10 flex-1 mb-6">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
          You'll Learn:
        </div>
        <FeatureList features={plan.features} />
      </div>
      <a
        href={waLink(plan.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full !text-xs !py-3 flex items-center justify-center gap-2 group mt-auto"
      >
        <FaWhatsapp className="w-3.5 h-3.5 text-emerald-300" />
        <span>{plan.cta}</span>
        <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
)

/* ─── Production Card Component ──────────────── */
const ProductionCard = ({ plan }) => (
  <div
    className={`glass-card glass-card-hover rounded-3xl flex flex-col border ${plan.border} shadow-2xl ${plan.glow} overflow-hidden relative transition-all duration-300 ${plan.featured ? 'ring-1 ring-rose-500/40' : ''}`}
  >
    {plan.featured && (
      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-black bg-gradient-to-r from-rose-500 to-red-500 text-white uppercase tracking-wider shadow-lg z-10">
        Best Value
      </div>
    )}
    <div className={`h-1.5 w-full bg-gradient-to-r ${plan.accent}`} />
    <div className="p-8 pt-7 flex flex-col flex-1">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-4xl">{plan.emoji}</span>
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${plan.badgeColor}`}>
          {plan.badge}
        </span>
      </div>
      <h2 className="text-xl font-extrabold text-white mb-1 leading-tight">{plan.title}</h2>
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-2xl font-black gradient-text-gold">{plan.fee}</span>
      </div>
      <div className="text-xs text-slate-400 font-semibold mb-3">{plan.duration}</div>
      <p className="text-sm text-slate-400 leading-relaxed mb-5">{plan.desc}</p>
      <div className="pt-4 border-t border-white/10 flex-1 mb-6">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
          What You'll Learn:
        </div>
        <FeatureList features={plan.features} />
      </div>
      <a
        href={waLink(plan.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full !text-xs !py-3 flex items-center justify-center gap-2 group mt-auto"
      >
        <FaWhatsapp className="w-3.5 h-3.5 text-emerald-300" />
        <span>{plan.cta}</span>
        <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
)

/* ─── Theory Card Component ──────────────────── */
const TheoryCard = ({ plan }) => (
  <div
    className={`glass-card glass-card-hover rounded-3xl flex flex-col border ${plan.border} shadow-2xl ${plan.glow} overflow-hidden transition-all duration-300`}
  >
    <div className={`h-1.5 w-full bg-gradient-to-r ${plan.accent}`} />
    <div className="p-7 pt-6 flex flex-col flex-1">
      <div className="flex items-start justify-between mb-5">
        <span className="text-3xl">{plan.emoji}</span>
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${plan.badgeColor}`}>
          {plan.badge}
        </span>
      </div>
      <h2 className="text-xl font-extrabold text-white mb-1 leading-tight">{plan.title}</h2>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-2xl font-black gradient-text-gold">{plan.fee}</span>
        <span className="text-xs text-slate-400 font-semibold">{plan.period}</span>
      </div>
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">{plan.level}</div>
      <p className="text-sm text-slate-400 leading-relaxed mb-5">{plan.desc}</p>
      <div className="pt-4 border-t border-white/10 flex-1 mb-6">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
          You'll Learn:
        </div>
        <FeatureList features={plan.features} />
      </div>
      <a
        href={waLink(plan.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full !text-xs !py-3 flex items-center justify-center gap-2 group mt-auto"
      >
        <FaWhatsapp className="w-3.5 h-3.5 text-emerald-300" />
        <span>{plan.cta}</span>
        <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
)

const Courses = () => {
  const [activeTab, setActiveTab] = useState('all')

  const totalCount = keyboardPlans.length + productionPlans.length + theoryPlans.length

  const tabs = [
    { id: 'all', label: '✨ All Courses', count: totalCount },
    { id: 'keyboard', label: '🎹 Keyboard', count: keyboardPlans.length },
    { id: 'production', label: '🎧 Production', count: productionPlans.length },
    { id: 'theory', label: '🎼 Theory', count: theoryPlans.length },
  ]

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ─── Page Header ──────────────────────── */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
          <HiSparkles className="w-3.5 h-3.5 text-cyan-400" />
          Keyboard Courses &amp; Programs
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
          Courses Built for{' '}
          <span className="gradient-text-vibrant">Every Level</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          From first-time beginners to advanced players — every course is taught live,
          1-on-1, with a structured approach to real musical growth.
        </p>
      </div>

      {/* ─── Tab Switcher with All Filter ─────────────────────── */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white shadow-lg shadow-purple-500/30 scale-105'
                : 'glass-pill text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
          >
            <span>{tab.label}</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'}`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* ─── ALL COURSES VIEW ───────────────────── */}
      {activeTab === 'all' && (
        <div className="space-y-20 mb-20">
          {/* Keyboard Section in All */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 border-b border-white/10 pb-4">
              <div>
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">
                  Category · 01
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white flex items-center gap-2 mt-1">
                  🎹 Keyboard &amp; Piano Courses
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('keyboard')}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors self-start sm:self-auto"
              >
                <span>View Only Keyboard ({keyboardPlans.length})</span>
                <span>→</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyboardPlans.map((plan) => (
                <KeyboardCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>

          {/* Production Section in All */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 border-b border-white/10 pb-4">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                  Category · 02
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white flex items-center gap-2 mt-1">
                  🎧 Music Production &amp; Audio
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('production')}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors self-start sm:self-auto"
              >
                <span>View Only Production ({productionPlans.length})</span>
                <span>→</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {productionPlans.map((plan) => (
                <ProductionCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>

          {/* Theory Section in All */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 border-b border-white/10 pb-4">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
                  Category · 03
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white flex items-center gap-2 mt-1">
                  🎼 Music Theory &amp; Trinity Grades
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('theory')}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors self-start sm:self-auto"
              >
                <span>View Only Theory ({theoryPlans.length})</span>
                <span>→</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {theoryPlans.map((plan) => (
                <TheoryCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── Keyboard Only Tab ───────────────────── */}
      {activeTab === 'keyboard' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 animate-fadeIn">
          {keyboardPlans.map((plan) => (
            <KeyboardCard key={plan.id} plan={plan} />
          ))}
        </div>
      )}

      {/* ─── Production Only Tab ─────────────────── */}
      {activeTab === 'production' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 animate-fadeIn">
          {productionPlans.map((plan) => (
            <ProductionCard key={plan.id} plan={plan} />
          ))}
        </div>
      )}

      {/* ─── Theory Only Tab ─────────────────────── */}
      {activeTab === 'theory' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 animate-fadeIn">
          {theoryPlans.map((plan) => (
            <TheoryCard key={plan.id} plan={plan} />
          ))}
        </div>
      )}

      {/* ─── Bottom Guidance Banner ────────────── */}
      <div className="rounded-3xl p-8 sm:p-12 border border-white/15 bg-gradient-to-r from-purple-900/40 via-slate-900/80 to-cyan-900/40 backdrop-blur-xl text-center">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
          Not Sure Which Course Is Right for You?
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6">
          Chat with us on WhatsApp and we'll guide you to the perfect course based on your current level and goals.
        </p>
        <a
          href="https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20need%20guidance%20on%20choosing%20the%20right%20course."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp text-xs sm:text-sm py-3.5 px-7 inline-flex items-center gap-2.5 group"
        >
          <FaWhatsapp className="w-4 h-4" />
          <span>Get Free Guidance on WhatsApp</span>
          <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

export default Courses
