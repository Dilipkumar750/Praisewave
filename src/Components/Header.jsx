import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { logoImg } from '../assets/images'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiSparkles, HiArrowRight } from 'react-icons/hi2'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'Gospel Production', path: '/gospel-production' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Articles & Tips', path: '/blogs' },
  { label: 'Contact', path: '/contact' },
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 ${scrolled
            ? 'glass-nav shadow-2xl shadow-purple-950/40 py-2.5 px-5 sm:px-6 border border-white/15'
            : 'bg-slate-950/60 backdrop-blur-xl py-3 px-5 sm:px-6 border border-white/10'
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

        {/* ─── Clean Desktop Navigation Links ────────────────────── */}
        <nav className="hidden lg:flex items-center gap-1.5 glass-pill px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${isActive
                  ? 'text-white bg-gradient-to-r from-purple-600/80 to-cyan-600/60 shadow-sm shadow-purple-500/30 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* ─── Desktop Right Actions ────────────────── */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <a
            href="tel:+919361492530"
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors py-2.5 px-4 rounded-full glass-pill border border-white/10 hover:border-cyan-400/30"
          >
            <FiPhone className="w-3.5 h-3.5 text-cyan-400" />
            <span>+91 93614 92530</span>
          </a>

          <a
            href="https://wa.me/919361492530?text=Hi%20PraiseWave!%20I%20would%20like%20to%20book%20a%20free%20trial%20class."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !text-xs !py-2.5 !px-5 shadow-lg shadow-purple-900/30 flex items-center gap-2 group"
          >
            <HiSparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Book Free Trial</span>
            <HiArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* ─── Mobile Right Actions ───────────────────── */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick WhatsApp on Mobile */}
          <a
            href="https://wa.me/919361492530?text=Hi%20PraiseWave!%20I%20have%20an%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-9 h-9 rounded-full flex items-center justify-center text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>

          {/* Toggle Drawer */}
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
        className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[30rem] opacity-100 mt-2.5' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="glass-card rounded-3xl p-5 flex flex-col gap-2 mx-1 border border-white/15 shadow-2xl bg-slate-950/90 backdrop-blur-2xl">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${isActive
                  ? 'bg-gradient-to-r from-purple-600/40 to-cyan-600/30 text-white border border-purple-500/30 font-bold'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2 mt-1">
            <a
              href="https://wa.me/919361492530?text=Hi%20PraiseWave!%20I%20want%20to%20book%20a%20free%20trial%20class."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-xs !py-3 px-4 rounded-xl flex items-center justify-center gap-2"
            >
              <HiSparkles className="w-4 h-4 text-amber-300" />
              <span>Book Free Trial on WhatsApp</span>
            </a>

            <a
              href="tel:+919361492530"
              className="glass-pill text-xs font-semibold text-slate-200 hover:text-white py-2.5 px-4 rounded-xl border border-white/10 flex items-center justify-center gap-2"
            >
              <FiPhone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call +91 93614 92530</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header