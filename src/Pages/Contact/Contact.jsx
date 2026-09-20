import { useState } from 'react'
import { pianoImg, vocalImg, theoryImg, logoImg } from '../../assets/images'
import { FaWhatsapp, FaMapLocationDot } from 'react-icons/fa6'
import { HiArrowRight, HiChevronDown, HiChevronUp } from 'react-icons/hi2'
import { FiPhone, FiMail, FiClock, FiMapPin, FiCheck } from 'react-icons/fi'

const faqs = [
  {
    q: 'What is the minimum age to join PraiseWave?',
    a: 'We welcome enthusiastic learners from age 5 through adults of all ages! For young learners, we employ fun, interactive, rhythm-based methods that nurture a lifelong love for music.',
  },
  {
    q: 'Are online music classes as effective as in-person studio lessons?',
    a: 'Yes, absolutely. Our instructors use multi-angle HD cameras and studio-grade direct-line audio so you can clearly see finger placements, hand posture, and hear studio-quality sound without latency.',
  },
  {
    q: 'Is the 30-minute trial class really 100% free?',
    a: 'Yes, completely free with zero commitment or payment info needed. It is a dedicated 30-minute 1-on-1 session where we assess your musical goals and show you our methodology.',
  },
  {
    q: 'Do I need to own an instrument before starting?',
    a: 'Not right away! For studio students in Chennai, we provide grand pianos, guitars, and drum kits. For online students, our advisors will guide you on the best instruments to purchase within your budget.',
  },
  {
    q: 'Can I prepare for Trinity College London or ABRSM exams here?',
    a: 'Yes. We are an authorized training partner for both Trinity College London and ABRSM. We provide full syllabus coverage, ear-training, sight reading, and mock exams.',
  },
]

const contactCards = [
  {
    title: 'Chennai Studio Location',
    desc: 'Vasudeva Garden, No 26/24b, 2nd Ave, Anna Ayyar Thottam, Ponniammanmedu, Chennai, Tamil Nadu 600110',
    actionText: 'Open Google Maps Directions',
    actionHref: 'https://maps.google.com/?q=Vasudeva+Garden+No+26/24b+2nd+Ave+Anna+Ayyar+Thottam+Ponniammanmedu+Chennai+Tamil+Nadu+600110',
    icon: <FiMapPin className="w-5 h-5 text-purple-400" />,
  },
  {
    title: 'Direct Phone & Hotline',
    desc: '+91 95006 03579',
    actionText: 'Call Studio Advisor',
    actionHref: 'tel:+919500603579',
    icon: <FiPhone className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: 'Email Admissions',
    desc: 'hello@praisewave.in',
    actionText: 'Send Email',
    actionHref: 'mailto:hello@praisewave.in',
    icon: <FiMail className="w-5 h-5 text-pink-400" />,
  },
  {
    title: 'Visiting Hours',
    desc: 'Mon – Sat: 9:00 AM – 8:00 PM (Sun by Appt)',
    actionText: 'Book Weekend Slot',
    actionHref: 'https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20would%20like%20to%20visit%20the%20studio%20this%20weekend.',
    icon: <FiClock className="w-5 h-5 text-amber-400" />,
  },
]

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    instrument: 'Piano & Keyboard',
    learningMode: 'In-Studio (Chennai)',
    message: '',
  })
  const [openFaq, setOpenFaq] = useState(0)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hello PraiseWave Music Academy! 👋\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Instrument of Interest:* ${form.instrument}\n*Learning Mode:* ${form.learningMode}\n*Notes / Questions:* ${form.message || 'I would like to schedule my free 30-minute trial class.'}`
    )
    window.open(`https://wa.me/919500603579?text=${text}`, '_blank')
  }

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ─── Hero Header ────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
          Contact & Enrollment Concierge
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
          Let’s Discuss Your <span className="gradient-text-vibrant">Musical Journey</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Have questions about our syllabus, fee structure, or timings? Reach out directly or submit your details to book a free 1-on-1 trial class.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* ─── Left Column: Contact Methods & FAQ ──── */}
        <div className="lg:col-span-6 flex flex-col gap-8">

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="glass-card rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                    {card.icon}
                  </div>
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {card.title}
                  </h2>
                  <p className="text-sm font-semibold text-white mb-3">
                    {card.desc}
                  </p>
                </div>
                {card.actionHref !== '#' ? (
                  <a
                    href={card.actionHref}
                    target={card.actionHref.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 self-start"
                  >
                    <span>{card.actionText}</span>
                    <span>→</span>
                  </a>
                ) : (
                  <span className="text-xs text-slate-500">{card.actionText}</span>
                )}
              </div>
            ))}
          </div>

          {/* Studio Atmosphere Card */}
          <div className="glass-card rounded-3xl overflow-hidden border border-white/15">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src={theoryImg}
                alt="PraiseWave Music Studio Chennai"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f24] via-transparent to-black/30" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-400/30">
                  Chennai Acoustic Studio
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-lg text-white mb-1.5">
                Sound-Treated Music Production & Lesson Suites
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Equipped with acoustic pianos, premium tube amplifiers, condenser microphones, and comfortable seating for student-mentor sessions.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Free Studio Parking
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Ponniammanmedu Landmark
                </span>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Concierge Card */}
          <div className="rounded-3xl p-6 sm:p-7 border border-emerald-500/25 bg-gradient-to-br from-emerald-950/40 via-slate-900/60 to-slate-950/80 backdrop-blur-xl shadow-xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Instant WhatsApp Concierge</h2>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Now · Replies in under 5 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              Prefer chatting directly? Message our academic coordinator to get instant course fees, mentor schedules, and immediate trial booking.
            </p>

            <a
              href="https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20would%20like%20to%20learn%20more%20about%20your%20music%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full !text-sm !py-3.5 shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2.5 group"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Chat with Academic Coordinator</span>
              <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Interactive Accordion FAQ */}
          <div>
            <h2 className="font-heading font-extrabold text-2xl text-white tracking-tight mb-5">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, idx) => (
                <div
                  key={faq.q}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 text-cyan-400 w-5 h-5 flex items-center justify-center">
                      {openFaq === idx ? <HiChevronUp className="w-4 h-4" /> : <HiChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ─── Right Column: Luxury Trial Booking Form ──── */}
        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <div className="glass-card rounded-3xl p-6 sm:p-9 border border-white/15 shadow-2xl">
            <div className="mb-8">
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/20">
                Direct Application
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight mt-3 mb-2">
                Book Your Free 1-on-1 Trial
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Fill in the details below. We'll immediately prep your schedule and confirm your free 30-minute private trial class.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full Name */}
              <div>
                <label htmlFor="contact-form-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Student / Guardian Full Name *
                </label>
                <input
                  id="contact-form-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Arjun Kumar"
                  value={form.name}
                  onChange={handleChange}
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                />
              </div>

              {/* WhatsApp Phone */}
              <div>
                <label htmlFor="contact-form-phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  WhatsApp Contact Number *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                    +91
                  </span>
                  <input
                    id="contact-form-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    className="glass-input w-full pl-14 pr-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              {/* Instrument Selection */}
              <div>
                <label htmlFor="contact-form-instrument" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Instrument of Interest *
                </label>
                <select
                  id="contact-form-instrument"
                  name="instrument"
                  value={form.instrument}
                  onChange={handleChange}
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm cursor-pointer"
                >
                  <option value="Piano & Keyboard" className="bg-[#0b0f24] text-white">Piano & Keyboard (Classical & Pop)</option>
                  <option value="Acoustic & Electric Guitar" className="bg-[#0b0f24] text-white">Acoustic & Electric Guitar</option>
                  <option value="Western Vocals" className="bg-[#0b0f24] text-white">Western Vocals & Breath Mastery</option>
                  <option value="Carnatic Vocals" className="bg-[#0b0f24] text-white">Carnatic Classical Vocals</option>
                  <option value="Violin" className="bg-[#0b0f24] text-white">Violin (Classical & Suzuki)</option>
                  <option value="Drums & Percussion" className="bg-[#0b0f24] text-white">Drum Kit & Percussion</option>
                  <option value="Music Theory & Composition" className="bg-[#0b0f24] text-white">Music Theory & Ear Training</option>
                </select>
              </div>

              {/* Learning Mode Preference */}
              <div>
                <label htmlFor="contact-form-mode" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Preferred Mode *
                </label>
                <select
                  id="contact-form-mode"
                  name="learningMode"
                  value={form.learningMode}
                  onChange={handleChange}
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm cursor-pointer"
                >
                  <option value="In-Studio (Chennai Acoustic Studio)" className="bg-[#0b0f24] text-white">In-Studio (Chennai Studio)</option>
                  <option value="Live 1-on-1 Online Class" className="bg-[#0b0f24] text-white">Live 1-on-1 Online Class (HD Audio)</option>
                  <option value="Hybrid (Both Studio & Online)" className="bg-[#0b0f24] text-white">Hybrid (Studio + Online)</option>
                </select>
              </div>

              {/* Message / Goal */}
              <div>
                <label htmlFor="contact-form-message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Any Prior Experience or Musical Goals? (Optional)
                </label>
                <textarea
                  id="contact-form-message"
                  name="message"
                  rows={3}
                  placeholder="e.g. Complete beginner / want to clear Grade 3 Trinity / prefer weekend mornings..."
                  value={form.message}
                  onChange={handleChange}
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-whatsapp w-full !py-4 !text-sm font-bold tracking-wide mt-2 shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>Submit & Confirm Trial on WhatsApp</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center mt-1">
                <FiCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>No credit card required. Free 30-minute private evaluation.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
