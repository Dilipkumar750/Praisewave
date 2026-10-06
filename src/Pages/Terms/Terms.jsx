import { FaFileContract, FaCalendarCheck, FaCreditCard, FaUserCheck, FaShieldHalved, FaEnvelope, FaWhatsapp } from 'react-icons/fa6'
import { HiSparkles, HiArrowRight } from 'react-icons/hi2'
import { FiClock, FiPhone, FiCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const termsSections = [
  {
    id: 'enrollment',
    title: '1. Enrollment & Admission',
    icon: <FaFileContract className="w-5 h-5 text-purple-400" />,
    content: [
      'Admission to Praisewave Music Academy is open for learners of all ages (kids from age 5 to adults).',
      'Enrollment in our Keyboard, Music Theory, or Gospel Production programs is confirmed upon slot selection and fee clearance.',
      'Students are entitled to a free 30-minute 1-on-1 trial class prior to formal enrollment with no financial commitment.',
    ],
  },
  {
    id: 'schedule',
    title: '2. Class Format, Duration & Scheduling',
    icon: <FaCalendarCheck className="w-5 h-5 text-cyan-400" />,
    content: [
      'Standard monthly courses comprise 8 live 1-on-1 sessions per month (typically 2 sessions per week).',
      'Each individual class duration is 45 to 50 minutes of focused, dedicated personal mentorship.',
      'Classes are conducted according to mutually agreed batch slots (Morning, Evening, or Weekend timings).',
      'In case a student needs to reschedule a class, advance notice of at least 12 to 24 hours is required to arrange a compensatory make-up session.',
    ],
  },
  {
    id: 'fees',
    title: '3. Fees & Payment Terms',
    icon: <FaCreditCard className="w-5 h-5 text-amber-400" />,
    content: [
      'Monthly course fees (e.g. Keyboard Basics at ₹1,699/mo, Keyboard + Theory at ₹2,499/mo, Intermediate at ₹2,999/mo) are payable at the start of each 8-class monthly cycle.',
      'Gospel Electronic Production programs (₹19,999 budget package) and bundle courses are payable as per agreed package milestones.',
      'All payments are transparent with no hidden charges. Practice notes and digital exercises are included.',
    ],
  },
  {
    id: 'modes',
    title: '4. 100% Live Online Class Delivery',
    icon: <FaUserCheck className="w-5 h-5 text-emerald-400" />,
    content: [
      'All courses at PraiseWave Music Academy are conducted exclusively through live, interactive 1-on-1 online classes.',
      'Classes are streamed using high-definition multi-angle camera feeds (overhead keyboard view + face view) with studio-grade direct-line instrument audio for zero background distortion.',
      'Students must have a keyboard at home and a stable internet connection for their live sessions.',
      'Headquarters and production studio operations are located in Chennai for curriculum design and student administration.',
    ],
  },
  {
    id: 'materials',
    title: '5. Learning Materials & Intellectual Property',
    icon: <FaShieldHalved className="w-5 h-5 text-rose-400" />,
    content: [
      'Custom sheet notations, chord charts, practice stems, and DAW project templates provided by Praisewave Music Academy are for personal educational use.',
      'Redistribution, public commercial resale, or unauthorized reproduction of course curriculum materials without prior consent is strictly prohibited.',
    ],
  },
  {
    id: 'conduct',
    title: '6. Code of Conduct & Mutual Respect',
    icon: <HiSparkles className="w-5 h-5 text-purple-400" />,
    content: [
      'We cultivate a warm, encouraging, and supportive atmosphere for beginners and intermediate players.',
      'Praisewave Music Academy reserves the right to discontinue lessons in the rare event of recurring misconduct, unnotified chronic absenteeism, or breach of academy policies.',
    ],
  },
]

const Terms = () => {
  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* ─── Header ─────────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
          <FaFileContract className="w-3.5 h-3.5 text-cyan-400" />
          PraiseWave Music Academy
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Terms &amp; <span className="gradient-text-vibrant">Conditions</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Please review the policies, class guidelines, and terms of service that govern your learning journey at PraiseWave Music Academy.
        </p>
        <div className="mt-3 text-xs text-slate-400 font-medium">
          Effective Date: {new Date().getFullYear()} · Last Updated: September 2026
        </div>
      </div>

      {/* ─── Quick Summary Bar ──────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="glass-card rounded-2xl p-4 border border-purple-500/20 flex items-center gap-3">
          <FiClock className="w-5 h-5 text-purple-400 flex-shrink-0" />
          <div>
            <div className="text-xs font-bold text-white">Monthly 8 Classes</div>
            <div className="text-[11px] text-slate-400">45–50 Mins Per Session</div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-cyan-500/20 flex items-center gap-3">
          <FiPhone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <div>
            <div className="text-xs font-bold text-white">Direct Support</div>
            <div className="text-[11px] text-slate-400">+91 93614 92530</div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-emerald-500/20 flex items-center gap-3">
          <FiCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <div>
            <div className="text-xs font-bold text-white">Transparent Policies</div>
            <div className="text-[11px] text-slate-400">Zero Hidden Charges</div>
          </div>
        </div>
      </div>

      {/* ─── Terms Sections Accordion / Cards ────────── */}
      <div className="space-y-6 mb-16">
        {termsSections.map((sec) => (
          <div
            key={sec.id}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                {sec.icon}
              </div>
              <h2 className="font-heading font-bold text-lg sm:text-xl text-white">
                {sec.title}
              </h2>
            </div>

            <ul className="space-y-3">
              {sec.content.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <FiCheck className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ─── Questions or Clarification Banner ───────── */}
      <div className="rounded-3xl p-8 sm:p-10 border border-purple-500/30 bg-gradient-to-br from-purple-950/40 via-slate-900/80 to-cyan-950/40 backdrop-blur-xl text-center">
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
          Have Questions About Our Terms?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
          Feel free to reach out to Calix Joshua or our admissions team for any queries regarding course schedules, slot bookings, or policies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919361492530?text=Hi%20PraiseWave!%20I%20have%20a%20question%20regarding%20the%20terms%20and%20class%20policies."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !text-xs !py-3 !px-6 inline-flex items-center gap-2"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Chat on WhatsApp (+91 93614 92530)</span>
          </a>

          <Link
            to="/contact"
            className="btn-secondary !text-xs !py-3 !px-6 inline-flex items-center gap-2"
          >
            <span>Contact Admissions Page</span>
            <HiArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Terms
