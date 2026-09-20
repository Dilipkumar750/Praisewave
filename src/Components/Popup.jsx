import { useState, useEffect } from 'react'
import { logoImg } from '../assets/images'

const Popup = () => {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    // Show after 5 seconds
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('pw_popup_dismissed')
      if (!dismissed) {
        setVisible(true)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    setClosing(true)
    sessionStorage.setItem('pw_popup_dismissed', 'true')
    setTimeout(() => {
      setVisible(false)
      setClosing(false)
    }, 300)
  }

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9998] flex items-center justify-center p-4 transition-all duration-300 ${
        closing ? 'opacity-0 backdrop-blur-none' : 'opacity-100 backdrop-blur-md bg-slate-950/80'
      }`}
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-lg rounded-3xl p-7 sm:p-9 border border-purple-500/30 bg-gradient-to-br from-[#12163a] via-[#0b0f26] to-[#080a1c] shadow-2xl shadow-purple-950/60 transition-all duration-300 ${
          closing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />

        {/* Close button */}
        <button
          type="button"
          onClick={close}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center text-sm transition-colors"
        >
          ✕
        </button>

        {/* Top Header with Logo */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white p-0.5 shadow-md flex-shrink-0">
            <img src={logoImg} alt="PraiseWave Logo" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-cyan-500/10 text-cyan-300 border border-cyan-400/25">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Complimentary VIP Trial Pass</span>
          </div>
        </div>

        <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-3">
          Claim Your Free 30-Minute Private Trial Session
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          Meet with a senior mentor, test your instrument affinity, and receive a customized 90-day musical development roadmap — 100% free with no obligation.
        </p>

        {/* Highlights Row */}
        <div className="grid grid-cols-3 gap-2.5 mb-7 text-center">
          <div className="glass-card rounded-xl p-3 border border-white/10">
            <div className="text-base font-extrabold text-white">1-on-1</div>
            <div className="text-[10px] text-slate-400 uppercase mt-0.5">Direct Mentor</div>
          </div>
          <div className="glass-card rounded-xl p-3 border border-white/10">
            <div className="text-base font-extrabold gradient-text-gold">Free</div>
            <div className="text-[10px] text-slate-400 uppercase mt-0.5">30 Minutes</div>
          </div>
          <div className="glass-card rounded-xl p-3 border border-white/10">
            <div className="text-base font-extrabold text-cyan-400">All Ages</div>
            <div className="text-[10px] text-slate-400 uppercase mt-0.5">Kids & Adults</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20would%20like%20to%20claim%20my%20Free%2030-Minute%20Trial%20Class%20Pass."
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="btn-whatsapp flex-1 !text-xs !py-3.5 flex items-center justify-center gap-2 font-bold"
          >
            <span>Claim Free Pass on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={close}
            className="glass-pill px-5 py-3 rounded-full text-xs font-semibold text-slate-300 hover:text-white border border-white/10"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup
