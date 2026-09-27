import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaBookOpen,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa'
import api from '../../services/api'

const JournalsDashboard = () => {
  const [journals, setJournals] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchJournals()
  }, [])

  const fetchJournals = async () => {
    setLoading(true)
    try {
      const data = await api.journals.getAll()
      setJournals(data)
    } catch (err) {
      setError('Failed to fetch journals. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this journal article?')) return
    try {
      await api.journals.delete(id)
      setJournals(journals.filter((j) => (j.numericId || j.id || j._id) !== id))
    } catch (err) {
      alert(err.message || 'Failed to delete journal article')
    }
  }

  const filtered = journals.filter(
    (j) =>
      j.title?.toLowerCase().includes(search.toLowerCase()) ||
      j.category?.toLowerCase().includes(search.toLowerCase()) ||
      (j.author && j.author.toLowerCase().includes(search.toLowerCase()))
  )

  const Spinner = () => (
    <div className="py-20 text-center">
      <svg
        className="animate-spin h-8 w-8 text-cyan-400 mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <p className="text-slate-400 font-semibold text-sm">Fetching articles...</p>
    </div>
  )

  return (
    <div className="space-y-4 sm:space-y-6 text-left">
      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-[#0a0f24] p-4 sm:p-6 rounded-2xl border border-white/10 shadow-xl">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <FaBookOpen className="text-cyan-400" /> Blogs Dashboard
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Manage, write, and curate PraiseWave conservatory masterclass articles.
          </p>
        </div>
        <Link
          to="/admin/blogs/new"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 hover:opacity-95 text-white font-bold rounded-xl shadow-lg shadow-purple-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm w-full sm:w-auto"
        >
          <FaPlus /> Write Article
        </Link>
      </div>

      {/* ── Search + Count ── */}
      <div className="bg-[#0a0f24] rounded-2xl border border-white/10 shadow-xl overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
            <input
              type="text"
              placeholder="Search by title, category, or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm placeholder-slate-400 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
            />
          </div>
          <span className="text-xs text-slate-400 font-bold tracking-wider uppercase whitespace-nowrap self-center">
            {filtered.length} Article{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* ── States ── */}
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className="p-8 text-center bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-xl m-4">
            <p className="font-semibold text-sm">{error}</p>
            <button
              onClick={fetchJournals}
              className="mt-2 text-sm text-cyan-400 font-bold hover:underline"
            >
              Retry
            </button>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center px-4">
            <FaBookOpen className="mx-auto text-slate-600 w-10 h-10 mb-3" />
            <p className="text-slate-400 font-medium">No articles found.</p>
            <p className="text-slate-500 text-xs mt-1">
              Try a different search or write a new article.
            </p>
          </div>
        ) : (
          <>
            {/* ── DESKTOP TABLE (md+) ── */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-slate-400 text-[10px] font-black uppercase tracking-wider">
                    <th className="py-3 px-4 lg:px-6">Article</th>
                    <th className="py-3 px-4 lg:px-6">Category</th>
                    <th className="py-3 px-4 lg:px-6 hidden lg:table-cell">Author</th>
                    <th className="py-3 px-4 lg:px-6 hidden xl:table-cell">Date</th>
                    <th className="py-3 px-4 lg:px-6">Status</th>
                    <th className="py-3 px-4 lg:px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {filtered.map((item) => {
                    const itemId = item.numericId || item.id || item._id
                    return (
                      <tr
                        key={itemId}
                        className="hover:bg-white/5 transition-colors group"
                      >
                        <td className="py-4 px-4 lg:px-6">
                          <div className="flex items-center gap-3">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-12 h-8 object-cover rounded-lg border border-white/10 flex-shrink-0"
                              />
                            ) : (
                              <div className="w-12 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 text-xs flex-shrink-0">
                                <FaBookOpen />
                              </div>
                            )}
                            <div className="min-w-0">
                              <h4 className="font-bold text-white truncate max-w-[180px] lg:max-w-xs group-hover:text-cyan-300 transition-colors text-sm">
                                {item.title}
                              </h4>
                              <p className="text-slate-400 text-xs mt-0.5 truncate max-w-[180px] lg:max-w-xs">
                                {item.excerpt || item.summary}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 lg:px-6">
                          <span
                            className="inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          >
                            {item.category}
                          </span>
                        </td>
                        <td className="py-4 px-4 lg:px-6 hidden lg:table-cell">
                          <div className="flex items-center gap-1.5">
                            <FaUser className="text-slate-400 w-3 h-3 flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="font-bold text-slate-200 text-xs truncate">
                                {item.author}
                              </p>
                              <p className="text-[9px] text-slate-400 truncate">
                                {item.authorRole}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 lg:px-6 hidden xl:table-cell">
                          <div className="flex items-center gap-1 text-xs text-slate-300 whitespace-nowrap">
                            <FaCalendarAlt className="text-slate-400 w-3 h-3" />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5 whitespace-nowrap">
                            <FaClock className="w-3 h-3" />
                            <span>{item.readTime}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 lg:px-6">
                          {item.published !== false ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                              <FaEye className="w-2.5 h-2.5" /> Live
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-500/15 text-slate-400 border border-slate-500/30">
                              <FaEyeSlash className="w-2.5 h-2.5" /> Draft
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4 lg:px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              to={`/blogs/${itemId}`}
                              target="_blank"
                              className="p-2 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-cyan-300 rounded-lg transition-all border border-white/10"
                              title="View Public Article"
                            >
                              <FaEye className="w-3.5 h-3.5" />
                            </Link>
                            <Link
                              to={`/admin/blogs/edit/${itemId}`}
                              className="p-2 bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25 hover:text-cyan-200 rounded-lg transition-all border border-cyan-500/30"
                              title="Edit Article"
                            >
                              <FaEdit className="w-3.5 h-3.5" />
                            </Link>
                            <button
                              onClick={() => handleDelete(itemId)}
                              className="p-2 bg-rose-500/15 text-rose-400 hover:bg-rose-500/25 hover:text-rose-300 rounded-lg transition-all border border-rose-500/30"
                              title="Delete Article"
                            >
                              <FaTrash className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* ── MOBILE CARDS (< md) ── */}
            <div className="md:hidden divide-y divide-white/5">
              {filtered.map((item) => {
                const itemId = item.numericId || item.id || item._id
                return (
                  <div
                    key={itemId}
                    className="p-4 flex gap-3 hover:bg-white/5 transition-colors"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-14 object-cover rounded-xl border border-white/10 flex-shrink-0"
                      />
                    ) : (
                      <div className="w-16 h-14 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 flex-shrink-0">
                        <FaBookOpen className="w-4 h-4" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-white text-sm leading-tight line-clamp-2 flex-1">
                          {item.title}
                        </h4>
                        <div className="flex gap-1.5 flex-shrink-0">
                          <Link
                            to={`/admin/blogs/edit/${itemId}`}
                            className="p-1.5 bg-cyan-500/15 text-cyan-300 rounded-lg border border-cyan-500/30"
                          >
                            <FaEdit className="w-3 h-3" />
                          </Link>
                          <button
                            onClick={() => handleDelete(itemId)}
                            className="p-1.5 bg-rose-500/15 text-rose-400 rounded-lg border border-rose-500/30"
                          >
                            <FaTrash className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <span
                          className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        >
                          {item.category}
                        </span>
                        {item.published !== false ? (
                          <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">
                            Live
                          </span>
                        ) : (
                          <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-500/15 text-slate-400">
                            Draft
                          </span>
                        )}
                        <span className="text-[9px] text-slate-400 flex items-center gap-1">
                          <FaCalendarAlt className="w-2.5 h-2.5" /> {item.date}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                        {item.author} · {item.readTime}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default JournalsDashboard
