import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { apiLogin } from '../../services/api'
import { logoImg } from '../../assets/images'
import { FaUser, FaLock, FaEye, FaEyeSlash, FaArrowRight, FaShieldAlt } from 'react-icons/fa'
import { FiAlertCircle } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi2'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const navigate = useNavigate()

  const handleFill = () => {
    setUsername('praisewave')
    setPassword('praisewave123')
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await apiLogin(username, password)
      navigate('/admin/blogs')
    } catch (err) {
      setError(err.message || 'Invalid credentials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
  }
  const inputFocus = (e) => {
    e.target.style.border = '1px solid rgba(139,92,246,0.6)'
    e.target.style.background = 'rgba(139,92,246,0.08)'
  }
  const inputBlur = (e) => {
    e.target.style.border = '1px solid rgba(255,255,255,0.1)'
    e.target.style.background = 'rgba(255,255,255,0.05)'
  }

  return (
    <div style={{ minHeight: '100vh', background: '#060914', display: 'flex' }}>

      {/* ════ LEFT BRAND PANEL ════ */}
      <div
        className="hidden lg:flex lg:w-[52%] relative overflow-hidden flex-col items-center justify-center p-14"
        style={{ background: 'linear-gradient(135deg, #0d0a2e 0%, #12003a 45%, #030a1f 100%)' }}
      >
        {/* Orbs */}
        <div className="absolute top-[-80px] left-[-80px] w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'rgba(124,58,237,0.35)', filter: 'blur(120px)' }} />
        <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'rgba(6,182,212,0.2)', filter: 'blur(100px)' }} />
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
          backgroundSize: '50px 50px',
        }} />

        <div className="relative z-10 text-center max-w-xs">
          {/* Logo */}
          <div className="w-24 h-24 rounded-3xl mx-auto mb-8 p-[2px]"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#ea580c,#facc15)', boxShadow: '0 20px 60px rgba(124,58,237,0.5)' }}>
            <div className="w-full h-full bg-white rounded-3xl overflow-hidden flex items-center justify-center p-2">
              <img src={logoImg} alt="PraiseWave" className="w-full h-full object-contain" />
            </div>
          </div>

          <h1 className="text-4xl font-black text-white tracking-tight leading-tight mb-4">
            PraiseWave<br />
            <span style={{ background: 'linear-gradient(90deg,#a78bfa,#f472b6,#67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Music Academy
            </span>
          </h1>
          <p className="text-sm leading-relaxed mb-10" style={{ color: '#94a3b8' }}>
            Create, manage and publish world-class keyboard masterclass content for aspiring musicians worldwide.
          </p>

          {[
            { emoji: '🎹', label: 'Manage blog articles & tutorials' },
            { emoji: '✍️', label: 'Rich text editor with image upload' },
            { emoji: '🚀', label: 'Publish & track conservatory content' },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-3 mb-3 px-4 py-3 rounded-2xl text-left"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="text-xl">{f.emoji}</span>
              <span className="text-sm font-medium" style={{ color: '#cbd5e1' }}>{f.label}</span>
            </div>
          ))}

          <div className="mt-8 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#c4b5fd' }}>
            <HiSparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-bold tracking-widest">Staff Portal v2.0</span>
          </div>
        </div>
      </div>

      {/* ════ RIGHT LOGIN PANEL ════ */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full pointer-events-none lg:hidden"
          style={{ background: 'rgba(124,58,237,0.15)', filter: 'blur(120px)' }} />

        <div className="w-full max-w-sm relative z-10">

          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="w-16 h-16 rounded-2xl mx-auto mb-3 p-[1.5px]"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#ea580c,#facc15)' }}>
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex items-center justify-center p-1">
                <img src={logoImg} alt="PraiseWave" className="w-full h-full object-contain" />
              </div>
            </div>
            <h2 className="text-xl font-black text-white">PraiseWave Admin</h2>
          </div>

          {/* Card */}
          <div className="rounded-3xl p-8 sm:p-9"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', backdropFilter: 'blur(20px)', boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}>

            {/* Header */}
            <div className="mb-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4"
                style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)', color: '#67e8f9' }}>
                <FaShieldAlt className="w-3 h-3" />
                <span className="text-[11px] font-bold uppercase tracking-widest">Secure Portal</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Welcome back,<br />
                <span style={{ background: 'linear-gradient(90deg,#a78bfa,#67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  sign in below
                </span>
              </h2>
              <p className="text-xs mt-2" style={{ color: '#64748b' }}>
                Access the PraiseWave content management dashboard
              </p>
            </div>

            {/* Credential hint */}
            <div className="flex items-center justify-between mb-6 p-3 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: '#475569' }}>Default login</p>
                <p className="text-xs font-mono">
                  <span style={{ color: '#67e8f9' }}>praisewave</span>
                  <span style={{ color: '#475569', margin: '0 4px' }}>/</span>
                  <span style={{ color: '#c4b5fd' }}>praisewave123</span>
                </p>
              </div>
              <button type="button" onClick={handleFill}
                className="text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all hover:opacity-80 active:scale-95"
                style={{ background: 'rgba(139,92,246,0.2)', color: '#c4b5fd', border: '1px solid rgba(139,92,246,0.3)' }}>
                Auto Fill
              </button>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2.5 mb-5 p-3.5 rounded-xl text-xs"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#fca5a5' }}>
                <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: '#64748b' }}>
                  Username
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5" style={{ color: '#475569' }} />
                  <input
                    type="text" required placeholder="praisewave"
                    value={username} onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm text-white outline-none transition-all"
                    style={inputStyle} onFocus={inputFocus} onBlur={inputBlur}
                  />
                </div>
              </div>
              {/* Password */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: '#64748b' }}>
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5" style={{ color: '#475569' }} />
                  <input
                    type={showPass ? 'text' : 'password'} required placeholder="Enter password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3.5 rounded-xl text-sm text-white outline-none transition-all"
                    style={inputStyle} onFocus={inputFocus} onBlur={inputBlur}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors hover:text-white"
                    style={{ color: '#475569' }}>
                    {showPass ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit" disabled={loading}
                className="w-full mt-2 py-4 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2.5 group relative overflow-hidden transition-all disabled:opacity-60 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg,#7c3aed 0%,#db2777 55%,#0891b2 100%)', boxShadow: '0 8px 32px rgba(124,58,237,0.4)' }}>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)' }} />
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Dashboard</span>
                    <FaArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 pt-5 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <Link to="/blogs" className="text-xs transition-colors hover:text-cyan-400" style={{ color: '#475569' }}>
                Back to Conservatory Journal
              </Link>
            </div>
          </div>

          <p className="text-center text-[11px] mt-6" style={{ color: '#334155' }}>
            © 2026 PraiseWave Music Academy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
