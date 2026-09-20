import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { logoImg } from '../assets/images'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'
import { FaInstagram, FaWhatsapp, FaFacebookF, FaYoutube } from 'react-icons/fa6'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'Gospel Production', path: '/gospel-production' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Articles & Tips', path: '/blogs' },
  { label: 'Contact', path: '/contact' },
]

const socialLinks = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/praisewavemusic',
    color: 'hover:text-[#E1306C] hover:bg-[#E1306C]/15 hover:border-[#E1306C]/40',
    mobileBg: 'text-pink-400 bg-pink-500/10 border-pink-500/20 hover:bg-pink-500/20',
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    url: 'https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20would%20like%20to%20know%20more%20about%20your%20music%20classes.',
    color: 'hover:text-[#25D366] hover:bg-[#25D366]/15 hover:border-[#25D366]/40',
    mobileBg: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20',
  },
  {
    name: 'Facebook',
    icon: FaFacebookF,
    url: 'https://www.facebook.com/praisewavemusic',
    color: 'hover:text-[#1877F2] hover:bg-[#1877F2]/15 hover:border-[#1877F2]/40',
    mobileBg: 'text-blue-400 bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    url: 'https://www.youtube.com/@praisewavemusic',
    color: 'hover:text-[#FF0000] hover:bg-[#FF0000]/15 hover:border-[#FF0000]/40',
    mobileBg: 'text-red-400 bg-red-500/10 border-red-500/20 hover:bg-red-500/20',
  },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${scrolled
            ? 'glass-nav shadow-2xl shadow-purple-950/40 py-2.5 px-5 sm:px-7 border border-white/10'
            : 'bg-slate-950/40 backdrop-blur-md py-3 sm:py-4 px-5 sm:px-7 border border-white/5'
          } flex items-center justify-between`}
      >
        {/* ─── Brand Logo ───────────────────────────── */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-purple-700 via-orange-500 to-yellow-400 p-[1.5px] shadow-lg shadow-purple-600/25 group-hover:shadow-orange-500/40 transition-all duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-white rounded-2xl p-0.5 overflow-hidden flex items-center justify-center">
              <img
                src={logoImg}
                alt="PraiseWave Music Academy Logo"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5">
              PraiseWave
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] text-cyan-400 uppercase">
              Music Academy
            </span>
          </div>
        </Link>

        {/* ─── Desktop Nav Links ────────────────────── */}
        <nav className="hidden lg:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full border border-white/10 mx-2">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${isActive
                  ? 'text-white bg-gradient-to-r from-purple-600/60 to-cyan-600/40 shadow-sm shadow-purple-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* ─── Social Media & Phone (Desktop Right) ──── */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {/* Social Media Integration Icons */}
          <div className="flex items-center gap-1.5 glass-pill px-2.5 py-1 rounded-full border border-white/10">
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
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-slate-300 border border-transparent transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 ${social.color}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              )
            })}
          </div>

          <a
            href="tel:+919500603579"
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors py-2 px-3.5 rounded-full glass-pill border border-white/10 hover:border-cyan-400/30"
          >
            <FiPhone className="w-3.5 h-3.5 text-cyan-400" />
            <span>+91 95006 03579</span>
          </a>
        </div>

        {/* ─── Mobile Menu Actions ───────────────────── */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick WhatsApp on Mobile Header */}
          <a
            href="https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20have%20an%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-9 h-9 rounded-full flex items-center justify-center text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label="Toggle Navigation Menu"
            className="flex items-center justify-center w-9 h-9 rounded-full glass-pill border border-white/15 text-slate-200 hover:text-white"
          >
            {mobileMenuOpen ? (
              <FiX className="w-4 h-4" />
            ) : (
              <FiMenu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu Drawer ─────────────────────── */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[32rem] opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="glass-card rounded-3xl p-5 flex flex-col gap-3 mx-2 border border-white/15 shadow-2xl">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${isActive
                  ? 'bg-purple-600/30 text-white border border-purple-500/30'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Social Media Integration Grid for Mobile */}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-1">
              Connect With Us
            </span>
            <div className="grid grid-cols-4 gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`PraiseWave on ${social.name}`}
                    className={`flex flex-col items-center justify-center gap-1.5 py-2.5 rounded-xl border text-xs font-medium transition-transform active:scale-95 ${social.mobileBg}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px]">{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+919500603579"
              className="glass-pill text-xs font-semibold text-slate-200 hover:text-white py-3 px-4 rounded-xl border border-white/10 flex items-center justify-center gap-2"
            >
              <FiPhone className="w-4 h-4 text-cyan-400" />
              <span>Call +91 95006 03579</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header