import { Link } from 'react-router-dom'
import { FaStar, FaWhatsapp, FaQuoteLeft } from 'react-icons/fa6'
import { HiArrowRight, HiCheckBadge, HiSparkles } from 'react-icons/hi2'
import { FiUsers, FiAward, FiHeart, FiCheck, FiMessageSquare } from 'react-icons/fi'

const testimonials = [
  {
    id: 't-1',
    name: 'Kingston',
    role: 'Parent of Keyboard Student',
    category: 'parent',
    tag: 'Keyboard Classes',
    rating: 5,
    date: 'Recent Review',
    highlight: 'Master is patient, friendly, and explains everything clearly',
    text: 'We are very happy with the keyboard classes. The Master is patient, friendly, and explains everything clearly. My daughter is enjoying the classes and has developed a good interest in learning keyboard. We can see a nice improvement in her confidence and playing skills. Thank you for the excellent guidance and support!',
    initials: 'K',
    accent: 'from-purple-500 to-indigo-500',
    glow: 'shadow-purple-900/30',
    badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  },
  {
    id: 't-2',
    name: 'Pradeep',
    role: 'Keyboard & Music Student',
    category: 'student',
    tag: '1-on-1 Mentorship',
    rating: 5,
    date: 'Recent Review',
    highlight: 'Every session is very useful and easy to understand',
    text: 'Your teaching and sessions are really amazing brother . Every session is very useful and easy to understand. The way you explain everything is really good, and I’m learning a lot from you. Thank you so much for all the guidance and support brother',
    initials: 'P',
    accent: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-900/30',
    badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  },
  {
    id: 't-3',
    name: 'Felix David',
    role: 'Keyboard Student',
    category: 'student',
    tag: 'Intermediate level',
    rating: 5,
    date: 'Verified Student',
    highlight: 'Teaching is excellent and lessons are easy to follow',
    text: 'I am enjoying my keyboard classes very much. The teaching is excellent, and the lessons are easy to follow. I have learned many new techniques and improved my playing skills. Thank you for your guidance and encouragement. Highly recommended!',
    initials: 'F',
    accent: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-900/30',
    badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  },
  {
    id: 't-4',
    name: 'Srivasu Nyapathy',
    role: 'Parent of Keyboard Student',
    category: 'parent',
    tag: 'Beginner level',
    rating: 5,
    date: 'Verified Parent',
    highlight: 'Teaches the notes in high detail with immense patience',
    text: "I joined my kid during his summer holidays. The teacher is very flexible and can reschedule class for the kids' priority like homework. The teacher teaches the notes in high detail and does not make us do it on our own by just pressing keys. This teacher has a lot of experience and I would recommend him to teach your children keyboard.",
    initials: 'S',
    accent: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-900/30',
    badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  },
  {
    id: 't-5',
    name: 'Balu Prasad',
    role: 'Intermediate Level Keyboard Student',
    category: 'student',
    tag: 'Intermediate Level',
    rating: 5,
    date: 'Verified Student',
    highlight: 'Advanced lessons are easy to understand & affordable',
    text: "I joined your keyboard classes two months ago, and I'm really happy with my learning experience. The advanced lessons you teach are easy to understand, and I feel that I'm improving with every class. I also sincerely appreciate that you charge a very affordable fee compared to many others. Thank you so much for your guidance, support, and dedication. I'm grateful to be your student 😊",
    initials: 'B',
    accent: 'from-fuchsia-500 to-pink-500',
    glow: 'shadow-fuchsia-900/30',
    badgeColor: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30',
  },
]

const stats = [
  { label: '5-Star Average Rating', value: '5.0 ★', icon: <FaStar className="w-5 h-5 text-amber-400" /> },
  { label: '1-on-1 Dedicated Classes', value: '100%', icon: <FiUsers className="w-5 h-5 text-cyan-400" /> },
  { label: 'Passionate Student Community', value: '10+ Years', icon: <FiAward className="w-5 h-5 text-purple-400" /> },
  { label: 'Parent & Student Satisfaction', value: '100%', icon: <FiHeart className="w-5 h-5 text-pink-400" /> },
]

const Testimonials = () => {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ─── Hero Section ──────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
          <HiSparkles className="w-3.5 h-3.5 text-cyan-400" />
          Real Student &amp; Parent Experiences
        </span>
        <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
          Loved by Beginners &amp;{' '}
          <span className="gradient-text-vibrant">Growing Musicians</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Read genuine reviews and success stories from learners and parents who built authentic confidence, technique, and musical intuition at Praisewave Music Academy.
        </p>
      </div>

      {/* ─── Highlights Stats Row ──────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card rounded-2xl p-5 border border-white/10 text-center flex flex-col items-center justify-center gap-1.5"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-1">
              {stat.icon}
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
            <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ─── Testimonials Grid ─────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between border border-white/10 shadow-xl ${t.glow} relative overflow-hidden transition-all duration-300`}
          >
            {/* Ambient Corner Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${t.accent} opacity-10 rounded-bl-full pointer-events-none`} />

            <div>
              {/* Header: Rating Stars & Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-sm" />
                  ))}
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${t.badgeColor}`}>
                  {t.tag}
                </span>
              </div>

              {/* Quote Icon & Highlight */}
              <div className="flex items-start gap-2.5 mb-3 text-cyan-300 font-semibold text-sm leading-snug">
                <FaQuoteLeft className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5 opacity-80" />
                <span>"{t.highlight}"</span>
              </div>

              {/* Main Testimonial Text */}
              <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                "{t.text}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${t.accent} flex items-center justify-center text-white font-extrabold text-base shadow-md`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <HiCheckBadge className="w-4 h-4 text-cyan-400" title="Verified Review" />
                  </div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
              <span className="text-[10px] text-slate-500 font-medium">
                {t.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Share Your Experience Box ─────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {/* Why Students Love Us */}
        <div className="glass-card rounded-3xl p-8 border border-white/15 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/20">
              Why Learn With Us
            </span>
            <h2 className="font-heading font-bold text-2xl text-white mt-3 mb-4">
              The PraiseWave Difference
            </h2>
            <ul className="flex flex-col gap-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <FiCheck className="w-3.5 h-3.5" />
                </span>
                <span><strong>Patience &amp; Clear Explanations:</strong> Lessons simplified step-by-step so beginners never feel overwhelmed.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <FiCheck className="w-3.5 h-3.5" />
                </span>
                <span><strong>Complete Musical Understanding:</strong> Learn the 'why' behind chords, scales, and notation instead of rote memory.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <FiCheck className="w-3.5 h-3.5" />
                </span>
                <span><strong>Flexible Scheduling:</strong> Accommodating school hours, homework, and work commitments.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <FiCheck className="w-3.5 h-3.5" />
                </span>
                <span><strong>Affordable Fee Structure:</strong> High-quality 1-on-1 instruction accessible at transparent pricing from ₹1,699/mo.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
            <span className="text-xs text-slate-400">Want to see for yourself?</span>
            <Link to="/courses" className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              <span>Explore Courses</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Share Review CTA */}
        <div className="rounded-3xl p-8 border border-purple-500/30 bg-gradient-to-br from-purple-950/50 via-slate-900/70 to-slate-950/90 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-4">
              <FiMessageSquare className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-white mb-2">
              Are You a Student or Parent?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Your feedback means the world to us and inspires future musicians! Share your experience with Calix Joshua &amp; PraiseWave Music Academy directly on WhatsApp.
            </p>
          </div>

          <a
            href="https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20would%20like%20to%20share%20my%20feedback%20and%20review."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs sm:text-sm !py-3.5 px-6 flex items-center justify-center gap-2 group"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Send Your Review on WhatsApp</span>
            <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* ─── Bottom CTA Banner ─────────────────────── */}
      <div className="rounded-3xl p-8 sm:p-12 border border-white/15 bg-gradient-to-r from-purple-900/40 via-slate-900/80 to-cyan-900/40 backdrop-blur-xl text-center">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
          Experience the Difference with a Free 30-Minute Trial
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6">
          Schedule your free 1-on-1 private evaluation session today. Zero payment or commitments required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="btn-primary text-xs sm:text-sm py-3.5 px-7 inline-flex items-center gap-2 group"
          >
            <span>Book Free Trial Class</span>
            <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20would%20like%20to%20book%20a%20free%20trial%20class."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs sm:text-sm py-3.5 px-7 inline-flex items-center gap-2.5 group"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Chat with Calix Joshua</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
