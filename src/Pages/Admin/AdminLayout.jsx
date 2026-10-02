import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import {
  FaBookOpen,
  FaSignOutAlt,
  FaHome,
  FaBars,
  FaTimes,
  FaChevronRight,
} from 'react-icons/fa'
import { logoImg } from '../../assets/images'
import { authStorage } from '../../services/api'

const AdminLayout = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const user = authStorage.getUser() || { username: 'praisewave', role: 'admin' }

  const menuItems = [
    {
      to: '/admin/blogs',
      label: 'Blogs',
      icon: <FaBookOpen className="w-4 h-4 flex-shrink-0" />,
      desc: 'Articles & Tutorials',
    },
  ]

  const handleLogout = () => {
    authStorage.clear()
    navigate('/login')
  }

  // Auth guard
  useEffect(() => {
    if (!authStorage.isAuthenticated()) {
      navigate('/login')
    }
  }, [navigate])

  const { pathname } = useLocation()

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className="min-h-screen bg-[#060914] text-slate-100 flex">
      {/* ─── STICKY SIDEBAR (desktop) ─── */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-[#0a0f24] border-r border-white/10 text-white flex flex-col
        transition-transform duration-300 ease-out shadow-2xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen lg:flex-shrink-0
      `}
      >
        {/* Branding */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-700 via-orange-500 to-yellow-400 p-[1px] flex items-center justify-center flex-shrink-0">
              <div className="w-full h-full bg-white rounded-lg p-0.5 flex items-center justify-center overflow-hidden">
                <img src={logoImg} alt="PraiseWave Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <span className="text-sm font-black tracking-wider uppercase text-white leading-tight">
              PraiseWave <span className="text-cyan-400">Admin</span>
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        {/* User Profile */}
        <div className="px-4 py-4 border-b border-white/5 bg-black/20 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-500 flex items-center justify-center font-black text-white text-sm shadow-lg flex-shrink-0">
              {user.username ? user.username.charAt(0).toUpperCase() : 'P'}
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">
                Logged in as
              </p>
              <h4 className="font-bold text-sm text-white truncate">
                {user.username || 'praisewave'}
              </h4>
            </div>
          </div>
        </div>

        {/* Navigation — takes up remaining space and scrolls if needed */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest px-3 pb-2">
            Management
          </p>
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                group flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200
                ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-600/30 font-bold'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }
              `}
            >
              {item.icon}
              <div className="flex-1 min-w-0">
                <span className="block leading-tight">{item.label}</span>
                <span className="block text-[9px] opacity-60 leading-tight">{item.desc}</span>
              </div>
              <FaChevronRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-40 transition-opacity flex-shrink-0" />
            </NavLink>
          ))}
        </nav>

        {/* Footer Actions */}
        <div className="p-3 border-t border-white/10 space-y-1 flex-shrink-0">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-all"
          >
            <FaHome className="w-4 h-4 flex-shrink-0 text-cyan-400" />
            <span>View Public Site</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-sm text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-all text-left"
          >
            <FaSignOutAlt className="w-4 h-4 flex-shrink-0" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ─── MOBILE BACKDROP ─── */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/70 z-30 lg:hidden backdrop-blur-sm"
        />
      )}

      {/* ─── MAIN CONTENT ─── */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Mobile Top Bar */}
        <header className="lg:hidden sticky top-0 z-20 bg-[#0a0f24] border-b border-white/10 text-white flex items-center justify-between px-4 py-3 shadow-lg flex-shrink-0">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-white hover:bg-white/10 rounded-xl transition-all"
          >
            <FaBars className="w-5 h-5" />
          </button>
          <span className="text-base font-black tracking-wider uppercase">
            PraiseWave <span className="text-cyan-400">Admin</span>
          </span>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-black text-white text-sm">
            {user.username ? user.username.charAt(0).toUpperCase() : 'P'}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
