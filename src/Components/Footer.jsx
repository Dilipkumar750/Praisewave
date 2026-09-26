import { Link } from 'react-router-dom'
import { logoImg } from '../assets/images'
import { FaInstagram, FaWhatsapp, FaFacebookF, FaYoutube } from 'react-icons/fa6'

const footerLinks = {
  Academy: [
    { label: 'About PraiseWave', path: '/' },
    { label: 'Courses & Syllabus', path: '/courses' },
    { label: 'Student Testimonials', path: '/testimonials' },
    { label: 'Gospel Production', path: '/gospel-production' },
    { label: 'Masterclass Articles', path: '/blogs' },
    { label: 'Contact & Admissions', path: '/contact' },
  ],
  Instruments: [
    { label: 'Piano & Keyboard', path: '/courses' },
    { label: 'Acoustic & Electric Guitar', path: '/courses' },
    { label: 'Western & Carnatic Vocals', path: '/courses' },
    { label: 'Classical Violin', path: '/courses' },
    { label: 'Drums & Percussion', path: '/courses' },
  ],
  Accreditation: [
    { label: 'Trinity College London', path: '/courses' },
    { label: 'ABRSM Royal Schools', path: '/courses' },
    { label: 'RockSchool International', path: '/courses' },
    { label: 'Annual Concert Recitals', path: '/' },
  ],
}

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
    url: 'https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20have%20an%20inquiry.',
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
      {/* Ambient background glow — logo colors */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-purple-700/12 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-blue-700/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[200px] bg-orange-500/08 blur-[100px] pointer-events-none" />

      {/* Musical Wave Accent Bar — logo gradient: purple → orange → gold → cyan */}
      <div className="w-full h-1 bg-gradient-to-r from-purple-600 via-orange-500 via-yellow-400 to-cyan-500 absolute top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
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

            {/* Studio Address Box */}
            <div className="glass-card rounded-2xl p-3.5 border border-white/10 mt-1 max-w-md">
              <div className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
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
                href="https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !text-xs !py-2.5 !px-4 inline-flex items-center gap-2"
              >
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+919500603579"
                className="glass-pill text-xs font-semibold text-slate-300 hover:text-white py-2.5 px-4 rounded-full border border-white/10"
              >
                +91 95006 03579
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                {title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((lnk) => (
                  <li key={lnk.label}>
                    <Link
                      to={lnk.path}
                      className="text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                    >
                      {lnk.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} PraiseWave Music Academy. All rights reserved. designed by <a href="https://www.linkedin.com/in/dilip-kumar750" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-400 transition-colors">Dilipkumar</a> 
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer