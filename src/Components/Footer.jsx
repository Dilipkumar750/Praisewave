import { Link } from 'react-router-dom'
import { logoImg } from '../assets/images'
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaChurch,
  FaGraduationCap,
  FaSliders,
  FaHeadphones,
  FaHouse,
  FaStar,
  FaBookOpen,
  FaEnvelope,
  FaCalendarDays,
  FaLayerGroup,
  FaFileContract,
  FaShieldHalved
} from 'react-icons/fa6'
import { GiGrandPiano, GiPianoKeys, GiMusicalScore } from 'react-icons/gi'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'

const footerSections = [
  {
    title: 'Academy',
    icon: <FaGraduationCap className="w-4 h-4 text-purple-400" />,
    links: [
      { label: 'About PraiseWave', path: '/', icon: <FaHouse className="w-3 h-3 text-purple-400" /> },
      { label: 'Courses & Syllabus', path: '/courses', icon: <GiGrandPiano className="w-3 h-3 text-cyan-400" /> },
      { label: 'Student Testimonials', path: '/testimonials', icon: <FaStar className="w-3 h-3 text-amber-400" /> },
      { label: 'Gospel Production (₹19,999–₹29,999)', path: '/gospel-production', icon: <FaSliders className="w-3 h-3 text-rose-400" /> },
      { label: 'Articles & Tutorials', path: '/blogs', icon: <FaBookOpen className="w-3 h-3 text-emerald-400" /> },
      { label: 'Contact & Free Trial', path: '/contact', icon: <FaEnvelope className="w-3 h-3 text-sky-400" /> },
      { label: 'Terms & Conditions', path: '/terms', icon: <FaFileContract className="w-3 h-3 text-indigo-400" /> },
    ],
  },
  {
    title: 'Keyboard Programs',
    icon: <GiGrandPiano className="w-4 h-4 text-cyan-400" />,
    links: [
      { label: 'Keyboard Basics (₹1,699/mo)', path: '/courses', icon: <GiPianoKeys className="w-3 h-3 text-cyan-400" /> },
      { label: 'Keyboard + Theory (₹2,499/mo)', path: '/courses', icon: <GiMusicalScore className="w-3 h-3 text-purple-400" /> },
      { label: 'Intermediate Keyboard (₹2,999/mo)', path: '/courses', icon: <GiGrandPiano className="w-3 h-3 text-amber-400" /> },
      { label: 'Monthly 8 Classes (45–50 Mins)', path: '/courses', icon: <FaCalendarDays className="w-3 h-3 text-emerald-400" /> },
      { label: 'Church & Worship Playing', path: '/courses', icon: <FaChurch className="w-3 h-3 text-rose-400" /> },
    ],
  },
  {
    title: 'Production & Theory',
    icon: <FaSliders className="w-4 h-4 text-amber-400" />,
    links: [
      { label: 'Gospel Electronic Production', path: '/gospel-production', icon: <FaHeadphones className="w-3 h-3 text-amber-400" /> },
      { label: 'Keyboard + Production Bundle', path: '/courses', icon: <FaLayerGroup className="w-3 h-3 text-rose-400" /> },
      { label: 'Music Theory Grade 1', path: '/courses', icon: <GiMusicalScore className="w-3 h-3 text-emerald-400" /> },
      { label: 'Music Theory Grade 2', path: '/courses', icon: <GiMusicalScore className="w-3 h-3 text-teal-400" /> },
      { label: 'Music Theory Grade 3', path: '/courses', icon: <GiMusicalScore className="w-3 h-3 text-sky-400" /> },
    ],
  },
]

const socialLinks = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/praisewavemusic',
    color: 'hover:text-[#E1306C] hover:bg-[#E1306C]/15 hover:border-[#E1306C]/40',
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    url: 'https://wa.me/919361492530?text=Hi%20PraiseWave!%20I%20have%20an%20inquiry.',
    color: 'hover:text-[#25D366] hover:bg-[#25D366]/15 hover:border-[#25D366]/40',
  },
  {
    name: 'Facebook',
    icon: FaFacebookF,
    url: 'https://www.facebook.com/praisewavemusic',
    color: 'hover:text-[#1877F2] hover:bg-[#1877F2]/15 hover:border-[#1877F2]/40',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    url: 'https://www.youtube.com/@praisewavemusic',
    color: 'hover:text-[#FF0000] hover:bg-[#FF0000]/15 hover:border-[#FF0000]/40',
  },
]

const Footer = () => {
  return (
    <footer className="relative bg-[#04080f] border-t border-purple-600/20 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-purple-700/12 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-blue-700/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[200px] bg-orange-500/10 blur-[100px] pointer-events-none" />

      {/* Musical Wave Accent Bar — logo gradient */}
      <div className="w-full h-1 bg-gradient-to-r from-purple-600 via-orange-500 via-yellow-400 to-cyan-500 absolute top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 mb-12 md:mb-14">

          {/* Brand Col (full width on mobile, half on tablet, 4 cols on desktop) */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-700 via-orange-500 to-yellow-400 p-[1.5px] shadow-lg shadow-purple-600/25 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-white rounded-2xl p-0.5 overflow-hidden flex items-center justify-center">
                  <img
                    src={logoImg}
                    alt="PraiseWave Music Academy"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  PraiseWave
                </span>
                <span className="text-[10px] font-semibold tracking-[0.22em] text-cyan-400 uppercase">
                  Music Academy
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Structured keyboard training, church worship music, music theory, and full electronic Gospel production. Founded by Calix Joshua.
            </p>

            {/* Studio Address Box with React Icon */}
            <div className="glass-card rounded-2xl p-3.5 border border-white/10 max-w-md">
              <div className="flex items-start gap-2.5">
                <FiMapPin className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white block font-semibold mb-0.5">Chennai Studio Academy:</strong>
                  Vasudeva Garden, No 26/24b, 2nd Ave, Anna Ayyar Thottam, Ponniammanmedu, Chennai, Tamil Nadu 600110
                  <a
                    href="https://maps.google.com/?q=Vasudeva+Garden+No+26/24b+2nd+Ave+Anna+Ayyar+Thottam+Ponniammanmedu+Chennai+Tamil+Nadu+600110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-cyan-400 hover:text-cyan-300 font-semibold mt-1"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media & Contact Actions */}
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <div className="flex items-center gap-2 glass-pill p-1.5 rounded-full border border-white/10">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit PraiseWave on ${social.name}`}
                      title={social.name}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-slate-300 border border-transparent transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 ${social.color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>

              <a
                href="tel:+919361492530"
                className="glass-pill text-xs font-semibold text-slate-300 hover:text-white py-2.5 px-4 rounded-full border border-white/10 flex items-center gap-1.5"
              >
                <FiPhone className="w-3.5 h-3.5 text-cyan-400" />
                <span>93614 92530</span>
              </a>
            </div>
          </div>

          {/* Links Columns (full width on mobile, half on tablet, 8 cols on desktop) */}
          <div className="md:col-span-1 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {footerSections.map((sec) => (
              <div key={sec.title} className="flex flex-col gap-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-white/10 pb-2 flex items-center gap-2">
                  {sec.icon}
                  <span>{sec.title}</span>
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {sec.links.map((lnk) => (
                    <li key={lnk.label}>
                      <Link
                        to={lnk.path}
                        className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2 group"
                      >
                        <span className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform">
                          {lnk.icon}
                        </span>
                        <span>{lnk.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} PraiseWave Music Academy. All rights reserved. Designed with <span className="text-rose-500 inline-block animate-pulse">❤️</span> by{' '}
            <a
              href="https://www.linkedin.com/in/dilip-kumar750"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium underline underline-offset-4 decoration-cyan-400/40 hover:decoration-cyan-400"
            >
              Dilipkumar
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="text-cyan-400 font-semibold">100% Live Online Classes</span>
            <span>•</span>
            <span>Monthly 8 Classes (45–50 Mins)</span>
            <span>•</span>
            <span className="text-amber-400">1-on-1 Guidance</span>
            <span>•</span>
            <Link to="/terms" className="text-slate-400 hover:text-cyan-300 underline underline-offset-2 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer