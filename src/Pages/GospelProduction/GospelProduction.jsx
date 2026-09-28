import { FaWhatsapp, FaChurch } from 'react-icons/fa6'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'
import { FiCheck } from 'react-icons/fi'
import {
  gospelWorshipImg,
  gospelKeysDawImg,
  gospelMentorshipImg,
  gospelDawImg,
  gospelMinistryImg,
  gospelGrowthImg
} from '../../assets/images'

const waLink = (title) =>
  `https://wa.me/919361492530?text=Hi%20PraiseWave!%20I%20want%20to%20book%20the%20${encodeURIComponent(title)}%20service.%20Please%20share%20details.`

/* ─── Production Service Breakdown ────────────────────────── */
const modules = [
  {
    title: 'Beat & Rhythm Production',
    desc: 'Gospel drum programming, 808s, groove design, and custom MIDI sequencing for your track.',
    items: [
      'DAW Setup & Project Workflow',
      'Gospel Beat & Loop Programming',
      'Groove Design & Custom MIDI Timing',
    ],
    icon: '🥁',
    color: 'from-purple-600 to-indigo-600',
  },
  {
    title: 'Sound Design & Arrangement',
    desc: 'Worship pads, piano layers, synth textures, and dynamic gospel song builds.',
    items: [
      'Gospel Song Architecture & Structure',
      'Synth, Pad & Piano Layering',
      'Choir & Vocal Arrangement',
    ],
    icon: '🎛️',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Mixing & Mastering',
    desc: 'Surgical EQ, compression, spatial depth, and streaming-ready mastering.',
    items: [
      'Pro Mixing (EQ, Dynamics & FX)',
      'Stereo Width & Spatial Reverb',
      'Streaming Master (-14 LUFS standard)',
    ],
    icon: '🎚️',
    color: 'from-rose-500 to-pink-600',
  },
]

/* ─── Production Highlights ────────────────────────── */
const highlights = [
  {
    id: 1,
    image: gospelWorshipImg,
    icon: '🎧',
    title: 'Complete Song Production',
    desc: 'Full Gospel backing tracks built from initial beat to final master ready for digital release.',
    accent: '#c084fc',
    border: 'border-purple-500/25',
  },
  {
    id: 2,
    image: gospelKeysDawImg,
    icon: '🎛️',
    title: 'Sound Design & Layering',
    desc: 'Rich worship pads, lead synths, acoustic piano layers, and atmospheric textures crafted for your song.',
    accent: '#fbbf24',
    border: 'border-amber-500/25',
  },
  {
    id: 3,
    image: gospelMentorshipImg,
    icon: '📡',
    title: 'Producer Collaboration',
    desc: 'Personal song consultation and arrangement feedback directly with producer Calix Joshua.',
    accent: '#67e8f9',
    border: 'border-cyan-500/25',
  },
  {
    id: 4,
    image: gospelDawImg,
    icon: '🎚️',
    title: 'Pro Mix & Mastering',
    desc: 'Industry-standard mixing and mastering tuned for Spotify, Apple Music, and YouTube.',
    accent: '#f97316',
    border: 'border-orange-500/25',
  },
  {
    id: 5,
    image: gospelMinistryImg,
    icon: '🎶',
    title: 'Gospel & Worship Style',
    desc: 'Authentic worship chord progressions, choir stacking, and praise energy tailored to your song.',
    accent: '#fb7185',
    border: 'border-rose-500/25',
  },
  {
    id: 6,
    image: gospelGrowthImg,
    icon: '🏆',
    title: 'Commercial Release Deliverables',
    desc: 'Receive complete multitrack stems, high-resolution WAV masters, and full commercial usage rights.',
    accent: '#34d399',
    border: 'border-emerald-500/25',
  },
]

const packages = [
  {
    id: 'electronic',
    badge: 'Complete Electronic',
    title: 'Complete Gospel Music Production',
    price: '₹19,999',
    sub: 'per song',
    note: 'No live instruments included. 100% electronic / in-the-box song production.',
    accent: '#f97316',
    border: 'border-amber-500/30',
    glow: 'rgba(249,115,22,0.12)',
    features: [
      'Gospel arrangement & full production',
      'Electronic instrumentation & programming',
      'Drums, bass, keys & synths',
      'Vocal editing & processing',
      'Complete mixing & mastering',
      'Final WAV + MP3 + Multitrack stems delivery',
    ],
    waText: 'Complete Gospel Music Production — Electronic (₹19,999 per song)',
  },
  {
    id: 'full',
    badge: 'Most Popular',
    title: 'Full Gospel Music Production',
    price: '₹29,999',
    sub: 'per song',
    note: 'Includes live guitars & advanced vocal tuning. Studio recording charges extra.',
    accent: '#7c3aed',
    border: 'border-purple-500/30',
    glow: 'rgba(124,58,237,0.14)',
    features: [
      'Complete Gospel music production',
      'Electronic & rhythm programming',
      'Live electric guitar recording',
      'Acoustic guitar recording',
      'Vocal tuning & editing with Melodyne',
      'Complete mixing & mastering',
      'Final WAV + MP3 + Multitrack stems delivery',
    ],
    waText: 'Full Gospel Music Production with Live Instruments (₹29,999 per song)',
  },
]

const GospelProduction = () => {
  return (
    <div className="pb-24">
      {/* ═══════════════════════════════════════════════════════
          GOSPEL PRODUCTION — HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-16">
        {/* Ambient Glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02050e] via-[#060b1a] to-[#030610]" />
        <div className="absolute top-10 left-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 65%)', filter: 'blur(90px)' }} />
        <div className="absolute bottom-10 right-0 w-[450px] h-[450px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.30) 0%, transparent 65%)', filter: 'blur(80px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left: Copy */}
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full mb-4 text-[11px] font-bold uppercase tracking-wider border"
                style={{ background: 'rgba(124,58,237,0.12)', borderColor: 'rgba(124,58,237,0.30)', color: '#c4b5fd' }}>
                <FaChurch className="w-3 h-3 text-amber-400" />
                <span>Gospel Production Service · ₹19,999 – ₹29,999 / Song</span>
              </div>

              <h1 className="font-heading font-black leading-[1.15] mb-4 tracking-tight"
                style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)' }}>
                <span className="text-white block">Full Electronic Gospel Production</span>
                <span className="gradient-text-vibrant block">
                  With Pro Mix &amp; Mastering
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
                Bring your Gospel songs to life with professional music production, custom sound design, beat programming, and industry-standard mixing &amp; mastering by producer Calix Joshua.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={waLink('Gospel Music Production Service (₹19,999/song)')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !text-xs !py-3.5 !px-6 flex items-center justify-center gap-2.5 shadow-lg group"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                  <span>Book Production Service on WhatsApp</span>
                  <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+919361492530"
                  className="btn-secondary !text-xs !py-3.5 !px-5 flex items-center justify-center gap-2"
                >
                  📞 <span>+91 93614 92530</span>
                </a>
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Per-Song Service', color: '#7c3aed' },
                  { label: 'Mix & Mastering Included', color: '#f97316' },
                  { label: '₹19,999 Starting Price', color: '#fbbf24' },
                  { label: 'Full Multitrack Stems', color: '#06b6d4' },
                ].map(tag => (
                  <span key={tag.label}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold"
                    style={{ background: `${tag.color}15`, border: `1px solid ${tag.color}30`, color: tag.color }}>
                    <FiCheck className="w-2.5 h-2.5" />
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Sleek DAW Console Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/25 bg-slate-950/70 backdrop-blur-xl shadow-2xl p-4 sm:p-5">
                {/* Console Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 pl-1">PRAISE DAW — Song Production</span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    PRODUCTION STUDIO
                  </span>
                </div>

                {/* DAW Tracks */}
                <div className="space-y-2 mb-4">
                  {[
                    { name: 'Keyboard', color: '#7c3aed', bars: [90, 60, 80, 40, 95, 55, 70, 85, 45, 75] },
                    { name: 'Choir', color: '#f97316', bars: [50, 80, 30, 90, 65, 45, 75, 55, 85, 40] },
                    { name: 'Beat', color: '#fbbf24', bars: [70, 95, 50, 80, 35, 90, 60, 75, 45, 85] },
                    { name: 'Bass', color: '#06b6d4', bars: [40, 65, 85, 30, 70, 90, 50, 60, 80, 35] },
                  ].map((track) => (
                    <div key={track.name} className="flex items-center gap-2">
                      <span className="w-12 text-right text-[9px] font-bold" style={{ color: track.color }}>
                        {track.name}
                      </span>
                      <div className="flex items-center gap-1 flex-1">
                        {track.bars.map((h, i) => (
                          <div key={i} className="flex-1 rounded-[1px]"
                            style={{
                              height: `${h * 0.18}px`,
                              background: track.color,
                              opacity: 0.75,
                            }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Display Bar */}
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-around text-center mb-3">
                  <div>
                    <div className="text-[8px] font-bold text-slate-500">TEMPO</div>
                    <div className="text-xs font-black text-amber-400">92 BPM</div>
                  </div>
                  <div>
                    <div className="text-[8px] font-bold text-slate-500">KEY</div>
                    <div className="text-xs font-black text-purple-400">G Major</div>
                  </div>
                  <div>
                    <div className="text-[8px] font-bold text-slate-500">MASTER</div>
                    <div className="text-xs font-black text-emerald-400">-14 LUFS</div>
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-slate-400 pt-2 border-t border-white/5">
                  <div><strong>Delivery:</strong> WAV + Stems</div>
                  <div><strong>Format:</strong> Commercial Master</div>
                  <div className="text-amber-300 font-bold">₹19,999 / Song</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Service Breakdown Section ───────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-3">
            <HiSparkles className="w-3.5 h-3.5 text-cyan-400" />
            Production Workflow
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
            What's Included in the <span className="gradient-text-vibrant">Service</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod, idx) => (
            <div
              key={mod.title}
              className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${mod.color} flex items-center justify-center text-xl shadow-md`}>
                    {mod.icon}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">
                    Phase 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">{mod.title}</h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">{mod.desc}</p>

                <ul className="space-y-2">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
                      <FiCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Highlights Grid (6 Cards) ───────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-3">
            <HiSparkles className="w-3.5 h-3.5 text-amber-400" />
            Service Benefits
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
            Why Produce Your Music with <span className="gradient-text-gold">PraiseWave</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((card) => (
            <div
              key={card.title}
              className="glass-card rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div className="relative h-36 rounded-xl overflow-hidden mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <span className="absolute top-2.5 left-2.5 text-lg p-1.5 rounded-lg bg-black/60 backdrop-blur-md">
                  {card.icon}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white mb-1.5">{card.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Dual Pricing Cards ────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-3">
            <HiSparkles className="w-3.5 h-3.5 text-amber-400" />
            Production Packages
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
            Choose Your <span className="gradient-text-gold">Production Package</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            From full electronic to live-instrument production — professionally mixed &amp; mastered per song.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`glass-card rounded-3xl p-7 border ${pkg.border} flex flex-col`}
              style={{ background: pkg.glow }}
            >
              {/* Badge + Title */}
              <div className="mb-5">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-3 inline-block"
                  style={{ color: pkg.accent, background: `${pkg.accent}15`, borderColor: `${pkg.accent}30` }}>
                  {pkg.badge}
                </span>
                <h3 className="text-lg font-black text-white leading-snug mt-2">{pkg.title}</h3>
              </div>

              {/* Price */}
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-black" style={{ color: pkg.accent }}>{pkg.price}</span>
                <span className="text-slate-400 text-sm mb-1 font-medium">{pkg.sub}</span>
              </div>
              <p className="text-[11px] text-slate-500 italic mb-6">{pkg.note}</p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <FiCheck className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: pkg.accent }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={waLink(pkg.waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 group transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: `linear-gradient(135deg, ${pkg.accent}, ${pkg.id === 'full' ? '#db2777' : '#db2777'})`, boxShadow: `0 8px 24px ${pkg.accent}30` }}
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-300" />
                <span>Book Service on WhatsApp</span>
                <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Client Review ───────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="glass-card rounded-3xl p-8 border border-purple-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'rgba(124,58,237,0.08)', filter: 'blur(60px)' }} />
          <div className="text-4xl text-purple-400/40 font-serif leading-none mb-4">&ldquo;</div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
            Calix Joshua is an extraordinary musician and producer. His production arrangements, beat creation, and professional mixing elevated our gospel project to commercial streaming quality. Highly recommended for any artist or ministry!
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)' }}>
              PW
            </div>
            <div>
              <div className="text-sm font-bold text-white">PraiseWave Studio Client</div>
              <div className="text-[11px] text-slate-400">Gospel Artist &amp; Worship Leader</div>
            </div>
            <div className="ml-auto flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <span key={s} className="text-amber-400 text-sm">★</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Compact Bottom CTA ────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="rounded-3xl p-8 border border-white/10 bg-gradient-to-r from-purple-950/40 via-slate-900/80 to-amber-950/30 backdrop-blur-xl">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
            Ready to Produce Your Gospel Song?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-lg mx-auto">
            Book your professional Gospel music production project with Calix Joshua today.
          </p>
          <a
            href={waLink('Gospel Music Production Service (₹19,999)')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !text-xs !py-3 !px-6 inline-flex items-center gap-2"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Book Song Production on WhatsApp (+91 93614 92530)</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default GospelProduction

