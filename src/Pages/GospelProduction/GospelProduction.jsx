import { FaWhatsapp } from 'react-icons/fa6'
import { FaChurch } from 'react-icons/fa6'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'
import { FiCheck } from 'react-icons/fi'
import { MdOutlineLibraryMusic } from 'react-icons/md'
import {
  gospelWorshipImg,
  gospelKeysDawImg,
  gospelMentorshipImg,
  gospelDawImg,
  gospelMinistryImg,
  gospelGrowthImg,
  theoryImg,
  pianoImg
} from '../../assets/images'

const waLink = (title) =>
  `https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20want%20to%20enroll%20in%20${encodeURIComponent(title)}.%20Please%20share%20details.`

/* ─── Course Sections ────────────────────────── */
const modules = [
  {
    title: 'Gospel Keyboard Foundations',
    items: [
      'Chord-based Worship Playing',
      'Gospel Chord Voicings & Extensions',
      'Praise & Worship Patterns',
      'Transitions & Song Arrangements',
      'Playing in All 12 Keys',
    ],
    icon: '🎹',
    color: 'from-purple-600 to-indigo-600',
  },
  {
    title: 'Gospel Music Production',
    items: [
      'DAW Setup for Gospel Production',
      'Gospel Beat & Rhythm Programming',
      'Choir & Instrument Arrangement',
      'Sound Selection for Gospel Genre',
      'Mixing Vocals & Instruments',
    ],
    icon: '🎧',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Song Building & Ministry',
    items: [
      'Song Structure & Arrangement',
      'Intro, Verse, Chorus & Bridge Design',
      'Creating Worship Atmospheres',
      'Reharmonisation for Gospel',
      'Practical Ministry Application',
    ],
    icon: '🎼',
    color: 'from-rose-500 to-pink-600',
  },
]

const sixWhyCards = [
  {
    id: 1,
    image: gospelWorshipImg,
    icon: '✝️',
    tag: 'Worship & Sanctuary',
    badge: 'Faith-Centered Curriculum',
    badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
    heading: 'Faith-Centered Curriculum',
    subheading: 'Worship & Church Ready',
    details: 'Every lesson is designed with Gospel worship in mind — worship patterns, sacred harmony, ministry application, and practical church-ready playing techniques.',
    points: [
      'Gospel chord voicings, 2-5-1s & turnarounds',
      'Creating worship atmospheres & hymn transitions',
      'Confident transposition across all 12 keys',
    ],
    accentColor: '#c084fc',
    borderColor: 'border-purple-500/25 hover:border-purple-500/50',
    glowColor: 'hover:shadow-[0_0_30px_rgba(124,58,237,0.20)]',
  },
  {
    id: 2,
    image: gospelKeysDawImg,
    icon: '🎹',
    tag: 'Dual Mastery',
    badge: '2-in-1 Integration',
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    heading: 'Keyboard + Production Combined',
    subheading: 'Live Keys & Studio Tracks',
    details: 'Learn to play keyboard and produce Gospel music simultaneously with an integrated, practical approach that bridges instrumental performance and DAW music production.',
    points: [
      'Simultaneous keyboard playing & DAW workflows',
      'Translating live chords into full multitrack arrangements',
      'Mastering rhythm, basslines & synth layers together',
    ],
    accentColor: '#fbbf24',
    borderColor: 'border-amber-500/25 hover:border-amber-500/50',
    glowColor: 'hover:shadow-[0_0_30px_rgba(251,191,36,0.20)]',
  },
  {
    id: 3,
    image: gospelMentorshipImg,
    icon: '📡',
    tag: 'Dedicated Attention',
    badge: 'Live 1-on-1 Sessions',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    heading: 'Personalized 1-on-1 Mentorship',
    subheading: 'Direct Coaching with Calix Joshua',
    details: 'Personalized live online sessions with full individual attention on your progress. No crowded group classes or rushed generic tutorials — learn at your personal pace.',
    points: [
      '100% individual focus on your hand posture & tone',
      'Instant real-time feedback & live question clearing',
      'Flexible scheduling tailored for busy students & musicians',
    ],
    accentColor: '#67e8f9',
    borderColor: 'border-cyan-500/25 hover:border-cyan-500/50',
    glowColor: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.20)]',
  },
  {
    id: 4,
    image: gospelDawImg,
    icon: '🎚️',
    tag: 'DAW Studio Workflows',
    badge: 'Hands-On DAW Training',
    badgeColor: 'border-orange-500/30 bg-orange-500/10 text-orange-300',
    heading: 'Hands-On DAW Training',
    subheading: 'Professional Studio Workflows',
    details: 'Master professional digital audio workstation workflows tailored for Gospel music — from gospel beat programming and choir layering to mixing vocals and instruments.',
    points: [
      'Gospel groove & rhythm section programming',
      'Choir multitracking, vocal tuning & instrument arrangement',
      'Clean audio mixing, compression & master output balance',
    ],
    accentColor: '#f97316',
    borderColor: 'border-orange-500/25 hover:border-orange-500/50',
    glowColor: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.20)]',
  },
  {
    id: 5,
    image: gospelMinistryImg,
    icon: '🎶',
    tag: 'Live Praise Team',
    badge: 'Ministry-Ready Skills',
    badgeColor: 'border-rose-500/30 bg-rose-500/10 text-rose-300',
    heading: 'Ministry-Ready Skills',
    subheading: 'Sunday Worship & Band Ready',
    details: 'Develop real-world capabilities to accompany church choirs, lead praise teams, back up guest vocalists, and lead spontaneous worship moments seamlessly.',
    points: [
      'Live choir accompaniment & pastor talk-music patterns',
      'Spontaneous worship transitions & dynamic modulation',
      'Seamless coordination with church drummer & bassist',
    ],
    accentColor: '#fb7185',
    borderColor: 'border-rose-500/25 hover:border-rose-500/50',
    glowColor: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.20)]',
  },
  {
    id: 6,
    image: gospelGrowthImg,
    icon: '🏆',
    tag: 'Measurable Growth',
    badge: 'Structured Progression',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    heading: 'Structured Progression',
    subheading: 'Foundations to Advanced Pro',
    details: 'Clear milestones from beginner foundations to confident Gospel musician and producer with measurable step-by-step progress every single month.',
    points: [
      'Step-by-step practical & theory roadmap',
      'Monthly progress milestones & recorded assignments',
      'Official Certificate of Completion from PraiseWave',
    ],
    accentColor: '#34d399',
    borderColor: 'border-emerald-500/25 hover:border-emerald-500/50',
    glowColor: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.20)]',
  },
]



const GospelProduction = () => {
  return (
    <div className="pb-24">
      {/* ═══════════════════════════════════════════════════════
          GOSPEL PRODUCTION — CINEMATIC HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-0 pb-0">

        {/* ── Deep Cinematic Background ── */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02050e] via-[#060b1a] to-[#030610]" />

        {/* ── Cross / Divine Light Ray — centred ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Vertical beam */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full opacity-20"
            style={{ background: 'linear-gradient(180deg, transparent 0%, #fbbf24 30%, #f97316 60%, transparent 100%)' }}
          />
          {/* Horizontal beam */}
          <div
            className="absolute top-[38%] left-0 w-full h-[2px] opacity-15"
            style={{ background: 'linear-gradient(90deg, transparent 0%, #7c3aed 20%, #fbbf24 50%, #7c3aed 80%, transparent 100%)' }}
          />
          {/* Cross glow burst */}
          <div
            className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(251,191,36,0.18) 0%, rgba(124,58,237,0.10) 40%, transparent 70%)',
              animation: 'pulse-glow 5s ease-in-out infinite',
            }}
          />
        </div>

        {/* ── Ambient logo-color glows ── */}
        <div className="absolute top-10 left-0 w-[600px] h-[600px] rounded-full opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 65%)', filter: 'blur(90px)' }} />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.30) 0%, transparent 65%)', filter: 'blur(80px)' }} />
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 65%)', filter: 'blur(70px)' }} />

        {/* ── Animated Frequency / Soundwave Bars — background ── */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[3px] px-4 h-40 pointer-events-none overflow-hidden opacity-20">
          {Array.from({ length: 80 }).map((_, i) => {
            const heights = [20, 35, 55, 70, 90, 75, 60, 45, 30, 50, 80, 65, 40, 25, 70, 85, 45, 30, 60, 90, 55, 35, 75, 50, 40, 65, 80, 30, 55, 70, 45, 60, 85, 25, 50, 40, 75, 90, 35, 60, 55, 45, 70, 30, 80, 65, 50, 25, 85, 40, 60, 75, 35, 55, 90, 45, 70, 30, 50, 65, 80, 25, 60, 40, 75, 55, 90, 35, 70, 50, 65, 45, 80, 30, 55, 75, 40, 60, 85, 45]
            const h = heights[i % heights.length]
            const dur = (0.6 + (i % 7) * 0.15).toFixed(2)
            const delay = ((i % 12) * 0.08).toFixed(2)
            const isGold = i % 5 === 0
            const isOrange = i % 7 === 0
            const isCyan = i % 9 === 0
            const color = isGold
              ? 'linear-gradient(to top, #f97316, #fbbf24)'
              : isOrange
              ? 'linear-gradient(to top, #ea580c, #f97316)'
              : isCyan
              ? 'linear-gradient(to top, #1d4ed8, #06b6d4)'
              : 'linear-gradient(to top, #6d28d9, #7c3aed)'
            return (
              <div
                key={i}
                className="flex-shrink-0 rounded-t-full"
                style={{
                  width: '3px',
                  height: `${h}%`,
                  background: color,
                  animation: `eq-dance ${dur}s ease-in-out infinite alternate`,
                  animationDelay: `${delay}s`,
                }}
              />
            )
          })}
        </div>

        {/* ── DAW Track-lane decorative lines (top) ── */}
        <div className="absolute top-24 left-0 right-0 pointer-events-none opacity-10">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="flex items-center mb-3 px-8 gap-2">
              <div className="w-16 h-5 rounded-md" style={{ background: i % 2 === 0 ? 'rgba(124,58,237,0.6)' : 'rgba(249,115,22,0.6)' }} />
              <div className="flex-1 h-[1px]" style={{ background: `repeating-linear-gradient(90deg, ${i % 2 === 0 ? 'rgba(124,58,237,0.5)' : 'rgba(249,115,22,0.5)'} 0, ${i % 2 === 0 ? 'rgba(124,58,237,0.5)' : 'rgba(249,115,22,0.5)'} 40px, transparent 40px, transparent 60px)` }} />
            </div>
          ))}
        </div>

        {/* ── Main Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* ── LEFT: Copy ── */}
            <div className="flex flex-col">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full mb-5 text-[11px] font-bold uppercase tracking-wider border"
                style={{ background: 'rgba(124,58,237,0.12)', borderColor: 'rgba(124,58,237,0.30)', color: '#c4b5fd' }}>
                <FaChurch className="w-3 h-3" style={{ color: '#fbbf24' }} />
                <span style={{ color: '#fbbf24' }}>Gospel</span>
                <span className="w-px h-2.5 bg-white/20" />
                <span>Music Production</span>
              </div>

              {/* Headline */}
              <h1 className="font-heading font-black leading-[1.12] mb-4 tracking-tight"
                style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)' }}>
                <span className="text-white block">Create Music</span>
                <span className="block" style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #f97316 50%, #fbbf24 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  That Glorifies God
                </span>
                <span className="block text-slate-400 text-lg sm:text-xl font-bold mt-1.5" style={{ WebkitTextFillColor: 'unset' }}>
                  — From Keys to DAW 🎚️
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-lg"
                style={{ borderLeft: '3px solid rgba(249,115,22,0.5)', paddingLeft: '0.85rem' }}>
                Master Gospel keyboard playing and music production in one powerful program. Worship chord voicings, full DAW workflows, Gospel beats — all 1-on-1 with Calix Joshua.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-7">
                <a
                  href={waLink('Gospel Music Production Course')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs text-white overflow-hidden shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #f97316 60%, #fbbf24 100%)',
                    boxShadow: '0 8px 30px rgba(124,58,237,0.35), 0 0 0 1px rgba(249,115,22,0.20)',
                  }}
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(135deg, #6d28d9 0%, #ea580c 60%, #f59e0b 100%)' }} />
                  <FaWhatsapp className="w-4 h-4 relative z-10 text-emerald-300" />
                  <span className="relative z-10">Enquire on WhatsApp</span>
                  <HiArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+919500603579"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white border transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(124,58,237,0.30)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.50)'; e.currentTarget.style.background = 'rgba(124,58,237,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.30)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                >
                  📞 <span>+91 95006 03579</span>
                </a>
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Live 1-on-1',    color: '#7c3aed' },
                  { label: 'Gospel-Focused', color: '#f97316' },
                  { label: 'DAW Training',   color: '#fbbf24' },
                  { label: 'Ministry Ready', color: '#06b6d4' },
                ].map(tag => (
                  <span key={tag.label}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold"
                    style={{ background: `${tag.color}18`, border: `1px solid ${tag.color}35`, color: tag.color }}>
                    <FiCheck className="w-2.5 h-2.5" />
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Production Console Visual ── */}
            <div className="relative">

              {/* Floating outer glow ring */}
              <div className="absolute -inset-4 rounded-[2rem] opacity-25 blur-2xl pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.6), rgba(249,115,22,0.4), rgba(251,191,36,0.3))' }} />

              {/* Console card */}
              <div className="relative rounded-[1.75rem] overflow-hidden border"
                style={{
                  background: 'linear-gradient(145deg, rgba(124,58,237,0.10) 0%, rgba(10,16,38,0.95) 40%, rgba(249,115,22,0.06) 100%)',
                  backdropFilter: 'blur(20px)',
                  borderColor: 'rgba(124,58,237,0.25)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(124,58,237,0.20)',
                }}>

                {/* ── Console Top Bar ── */}
                <div className="flex items-center justify-between px-4 py-3 border-b"
                  style={{ borderColor: 'rgba(124,58,237,0.20)', background: 'rgba(0,0,0,0.30)' }}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-1.5 tracking-wider">PRAISE DAW — Gospel Session</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono" style={{ color: '#fbbf24' }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#f97316' }} />
                    REC LIVE
                  </div>
                </div>

                {/* ── DAW Track Lanes ── */}
                <div className="px-4 pt-3.5 pb-2.5">
                  {[
                    { name: 'Keyboard',  color: '#7c3aed', bars: [90, 60, 80, 40, 95, 55, 70, 85, 45, 75, 30, 90] },
                    { name: 'Choir',     color: '#f97316', bars: [50, 80, 30, 90, 65, 45, 75, 55, 85, 40, 70, 60] },
                    { name: 'Beat',      color: '#fbbf24', bars: [70, 95, 50, 80, 35, 90, 60, 75, 45, 85, 55, 70] },
                    { name: 'Bass',      color: '#06b6d4', bars: [40, 65, 85, 30, 70, 90, 50, 60, 80, 35, 75, 55] },
                  ].map((track) => (
                    <div key={track.name} className="flex items-center gap-2.5 mb-2">
                      {/* Track label */}
                      <div className="w-12 text-right text-[9px] font-bold flex-shrink-0 tracking-wide"
                        style={{ color: track.color }}>{track.name}</div>
                      {/* Waveform blocks */}
                      <div className="flex items-center gap-[2px] flex-1">
                        {track.bars.map((h, i) => (
                          <div key={i} className="flex-1 rounded-[1px]"
                            style={{
                              height: `${h * 0.24}px`,
                              background: `linear-gradient(to top, ${track.color}99, ${track.color}dd)`,
                              opacity: 0.7 + (i % 3) * 0.1,
                              animationDelay: `${i * 0.05}s`,
                            }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── BPM / Key / Time Display ── */}
                <div className="mx-4 mb-3 p-2.5 rounded-lg flex items-center justify-between"
                  style={{ background: 'rgba(0,0,0,0.40)', border: '1px solid rgba(124,58,237,0.18)' }}>
                  {[
                    { label: 'BPM', value: '92', color: '#f97316' },
                    { label: 'KEY', value: 'G Maj', color: '#7c3aed' },
                    { label: 'TIME', value: '4/4', color: '#fbbf24' },
                    { label: 'BARS', value: '16', color: '#06b6d4' },
                  ].map(item => (
                    <div key={item.label} className="text-center">
                      <div className="text-[8px] font-bold tracking-widest text-slate-500 uppercase">{item.label}</div>
                      <div className="text-xs font-black mt-0.5" style={{ color: item.color }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* ── Animated EQ Visualizer ── */}
                <div className="mx-4 mb-3.5">
                  <div className="text-[8px] font-bold tracking-widest text-slate-500 uppercase mb-1">Master Output</div>
                  <div className="flex items-end gap-[2px] h-12 px-1 rounded-lg overflow-hidden"
                    style={{ background: 'rgba(0,0,0,0.50)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    {Array.from({ length: 36 }).map((_, i) => {
                      const hts = [40, 60, 80, 95, 70, 50, 85, 65, 45, 75, 90, 55, 30, 80, 70, 60, 85, 40, 95, 50, 65, 75, 45, 80, 30, 90, 55, 70, 60, 85, 40, 75, 50, 95, 65, 45]
                      const h = hts[i % hts.length]
                      const dur = (0.5 + (i % 5) * 0.18).toFixed(2)
                      const delay = ((i % 8) * 0.09).toFixed(2)
                      const isGold = i > 26
                      const isMid  = i > 18
                      const c = isGold
                        ? 'linear-gradient(to top, #f97316, #fbbf24)'
                        : isMid
                        ? 'linear-gradient(to top, #7c3aed, #f97316)'
                        : 'linear-gradient(to top, #1d4ed8, #7c3aed)'
                      return (
                        <div key={i} className="flex-1 rounded-t-sm"
                          style={{
                            height: `${h}%`,
                            background: c,
                            animation: `eq-dance ${dur}s ease-in-out infinite alternate`,
                            animationDelay: `${delay}s`,
                          }} />
                      )
                    })}
                  </div>
                </div>

                {/* ── Bottom Stat Row ── */}
                <div className="grid grid-cols-3 gap-0 border-t" style={{ borderColor: 'rgba(124,58,237,0.18)' }}>
                  {[
                    { label: 'Sessions',   value: '1-on-1',  color: '#7c3aed' },
                    { label: 'Duration',   value: 'Flexible', color: '#f97316' },
                    { label: 'Focus',      value: 'Gospel',  color: '#fbbf24' },
                  ].map((s, i) => (
                    <div key={s.label}
                      className={`py-2.5 text-center ${i < 2 ? 'border-r' : ''}`}
                      style={{ borderColor: 'rgba(124,58,237,0.15)' }}>
                      <div className="text-xs font-black" style={{ color: s.color }}>{s.value}</div>
                      <div className="text-[8px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl text-[11px] font-bold border shadow-xl"
                style={{
                  background: 'rgba(6,11,26,0.92)',
                  borderColor: 'rgba(6,182,212,0.30)',
                  color: '#67e8f9',
                  boxShadow: '0 6px 18px rgba(6,182,212,0.20)',
                  backdropFilter: 'blur(10px)',
                }}>
                🎚️ DAW + Keyboard Training
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom fade into next section ── */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #060b1a)' }} />
      </section>

      {/* ─── Course Modules ───────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
            <HiSparkles className="w-3.5 h-3.5" />
            Course Curriculum
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
            What You'll <span className="gradient-text-vibrant">Master</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A comprehensive Gospel music education — keyboard, production, and ministry skills in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <div
              key={mod.title}
              className="glass-card glass-card-hover rounded-3xl p-7 border border-white/10 flex flex-col"
            >
              {/* Icon + Number */}
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${mod.color} flex items-center justify-center text-2xl shadow-md`}>
                  {mod.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Module {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-white mb-4 leading-tight">{mod.title}</h3>

              <ul className="flex flex-col gap-2.5 flex-1">
                {mod.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <FiCheck className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Why Our Gospel Program Section (6 Pillars with Images: Left Heading, Right Details) ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Subtle background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.45) 0%, rgba(249,115,22,0.25) 45%, transparent 70%)', filter: 'blur(110px)' }} />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-orange-500/10 text-amber-300 border border-amber-500/25 mb-4 shadow-sm">
            <HiSparkles className="w-3.5 h-3.5 text-amber-400" />
            The PraiseWave Difference
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-5">
            Why Our <span className="gradient-text-vibrant">Gospel Program?</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover why musicians and worship leaders choose PraiseWave — an authentic fusion of sacred worship playing, modern DAW production, and personal 1-on-1 mentorship.
          </p>
        </div>

        {/* ── 6 Cards Grid (Each with Image & Left Heading, Right Details) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {sixWhyCards.map((card, idx) => (
            <div
              key={card.heading}
              className={`group glass-card rounded-3xl overflow-hidden border ${card.borderColor} ${card.glowColor} transition-all duration-500 flex flex-col`}
              style={{
                background: 'linear-gradient(165deg, rgba(20, 27, 45, 0.85) 0%, rgba(10, 15, 30, 0.95) 100%)',
              }}
            >
              {/* Card Inner Split: Left Column (Image & Heading) / Right Column (Details & Points) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                
                {/* ── Left Side: Image + Badge + Heading ── */}
                <div className="sm:col-span-5 flex flex-col bg-slate-950/40 border-b sm:border-b-0 sm:border-r border-white/10 relative">
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-44 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.heading}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/40 to-transparent" />
                    
                    {/* Floating Category Tag */}
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md bg-black/70 border border-white/20 text-white shadow-md">
                      {card.tag}
                    </div>

                    {/* Number index pill */}
                    <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-900/80 text-amber-300 border border-amber-400/30">
                      0{card.id}
                    </div>
                  </div>

                  {/* Left Side Header Content */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{card.icon}</span>
                        <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${card.badgeColor}`}>
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-white leading-tight group-hover:text-amber-300 transition-colors">
                        {card.heading}
                      </h3>
                      <div className="text-xs font-semibold text-slate-400 mt-1">
                        {card.subheading}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Right Side: Details & Bullet Points ── */}
                <div className="sm:col-span-7 p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                      Program Overview
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {card.details}
                    </p>

                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: card.accentColor }} />
                      Key Takeaways:
                    </div>

                    <ul className="flex flex-col gap-2.5">
                      {card.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                          <span
                            className="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                            style={{ background: `${card.accentColor}25`, color: card.accentColor }}
                          >
                            <FiCheck className="w-3 h-3" />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-semibold" style={{ color: card.accentColor }}>
                      ● Active Module Focus
                    </span>
                    <span className="text-slate-500">
                      PraiseWave Live
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ─── Enroll CTA Banner ────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 border border-rose-500/30 bg-gradient-to-br from-rose-900/40 via-slate-900/80 to-purple-950/60 backdrop-blur-2xl shadow-2xl text-center">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-400/20 text-rose-300 border border-rose-400/30 mb-4">
              Enrollment Open · Limited Seats
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              Ready to Create Gospel Music?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Join PraiseWave Music Academy and start your Gospel Keyboard & Production journey today with live, personalized guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waLink('Gospel Music Production Course')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-4 px-8 w-full sm:w-auto shadow-xl flex items-center justify-center gap-2.5 group"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                <span>Enquire &amp; Enroll on WhatsApp</span>
                <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+919500603579"
                className="btn-secondary text-sm py-4 px-8 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                📞 +91 95006 03579
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

export default GospelProduction
