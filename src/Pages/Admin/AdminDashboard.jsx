import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  apiGetBlogs,
  apiCreateBlog,
  apiUpdateBlog,
  apiDeleteBlog,
  authStorage,
} from '../../services/api'
import {
  FaPlus,
  FaPenToSquare,
  FaTrash,
  FaArrowRightFromBracket,
  FaEye,
  FaBookOpen,
  FaShieldHalved,
  FaImage,
} from 'react-icons/fa6'
import { HiSparkles, HiOutlineLightBulb } from 'react-icons/hi2'
import { FiCheck, FiX, FiAlertCircle } from 'react-icons/fi'

const categories = ['Piano Technique', 'Chord Progressions', 'Music Theory', 'Rhythm & Timing', 'Hand Technique', 'Worship Keyboard', 'Gospel Production']
const tags = ['Piano', 'Chords', 'Theory', 'Rhythm', 'Technique', 'Worship', 'Production']

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currentId, setCurrentId] = useState(null)
  const navigate = useNavigate()

  // Form State
  const initialForm = {
    title: '',
    category: 'Piano Technique',
    tag: 'Piano',
    readTime: '5 min read',
    author: 'Calix Joshua',
    authorRole: 'Founder & Lead Mentor, PraiseWave',
    image: 'https://images.unsplash.com/photo-1520523839898-507127053c37?w=1200&auto=format&fit=crop&q=80',
    excerpt: '',
    intro: '',
    sections: [
      { heading: '1. Core Concept & Methodology', body: '', tip: '' },
      { heading: '2. Step-by-Step Keyboard Routine', body: '', tip: '' },
    ],
    keyTakeawaysText: '',
  }
  const [form, setForm] = useState(initialForm)

  // Auth guard
  useEffect(() => {
    if (!authStorage.isAuthenticated()) {
      navigate('/login')
    } else {
      loadBlogs()
    }
  }, [])

  const loadBlogs = async () => {
    try {
      setLoading(true)
      const data = await apiGetBlogs()
      setBlogs(data)
    } catch (err) {
      setError(err.message || 'Failed to load articles')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    authStorage.clear()
    navigate('/login')
  }

  const openCreateModal = () => {
    setIsEditing(false)
    setCurrentId(null)
    setForm(initialForm)
    setModalOpen(true)
  }

  const openEditModal = (blog) => {
    setIsEditing(true)
    setCurrentId(blog.numericId || blog.id || blog._id)
    setForm({
      title: blog.title || '',
      category: blog.category || 'Piano Technique',
      tag: blog.tag || 'Piano',
      readTime: blog.readTime || '5 min read',
      author: blog.author || 'Calix Joshua',
      authorRole: blog.authorRole || 'Founder & Lead Mentor, PraiseWave',
      image: blog.image || '',
      excerpt: blog.excerpt || '',
      intro: blog.intro || '',
      sections: blog.sections && blog.sections.length > 0 ? blog.sections : [
        { heading: '1. Core Concept', body: '', tip: '' }
      ],
      keyTakeawaysText: (blog.keyTakeaways || []).join('\n'),
    })
    setModalOpen(true)
  }

  const handleAddSection = () => {
    setForm((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        { heading: `${prev.sections.length + 1}. Practice Drill & Explanation`, body: '', tip: '' },
      ],
    }))
  }

  const handleRemoveSection = (idx) => {
    setForm((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== idx),
    }))
  }

  const handleSectionChange = (idx, field, value) => {
    setForm((prev) => {
      const updated = [...prev.sections]
      updated[idx] = { ...updated[idx], [field]: value }
      return { ...prev, sections: updated }
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccessMsg('')

    try {
      const payload = {
        ...form,
        keyTakeaways: form.keyTakeawaysText
          ? form.keyTakeawaysText.split('\n').map((s) => s.trim()).filter(Boolean)
          : [],
      }

      if (isEditing) {
        await apiUpdateBlog(currentId, payload)
        setSuccessMsg('Article updated successfully!')
      } else {
        await apiCreateBlog(payload)
        setSuccessMsg('New article published successfully!')
      }

      setModalOpen(false)
      loadBlogs()
    } catch (err) {
      setError(err.message || 'Error saving article')
    }
  }

  const handleDelete = async (blog) => {
    const id = blog.numericId || blog.id || blog._id
    if (window.confirm(`Are you sure you want to delete "${blog.title}"?`)) {
      try {
        await apiDeleteBlog(id)
        setSuccessMsg('Article deleted successfully')
        loadBlogs()
      } catch (err) {
        setError(err.message || 'Failed to delete article')
      }
    }
  }

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ─── Top Admin Bar ──────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
              <FaShieldHalved className="w-3 h-3 text-cyan-400" />
              Admin Portal
            </span>
            <span className="text-xs text-slate-400">Logged in as <strong className="text-white">praisewave</strong></span>
          </div>
          <h1 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
            Conservatory <span className="gradient-text-vibrant">Article Manager</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/blogs"
            className="glass-pill px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-2 border border-white/10"
          >
            <FaBookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>View Public Journal</span>
          </Link>

          <button
            type="button"
            onClick={openCreateModal}
            className="btn-primary !text-xs !py-2.5 !px-5 flex items-center gap-2"
          >
            <FaPlus className="w-3.5 h-3.5" />
            <span>New Article</span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="glass-pill px-3.5 py-2.5 rounded-xl text-xs font-semibold text-rose-300 hover:bg-rose-500/20 flex items-center gap-1.5 border border-rose-500/30"
            title="Log Out"
          >
            <FaArrowRightFromBracket className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* ─── Notification Alerts ─────────────────────── */}
      {successMsg && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FiCheck className="w-4 h-4" />
            <span>{successMsg}</span>
          </div>
          <button type="button" onClick={() => setSuccessMsg('')}><FiX className="w-4 h-4" /></button>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FiAlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
          <button type="button" onClick={() => setError('')}><FiX className="w-4 h-4" /></button>
        </div>
      )}

      {/* ─── Articles Table / Cards ─────────────────── */}
      <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl mb-12">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h2 className="font-heading font-bold text-lg text-white">
            Published Articles ({blogs.length})
          </h2>
          <span className="text-xs text-slate-400">Live Dynamic MongoDB Collection</span>
        </div>

        {loading ? (
          <div className="p-12 text-center text-slate-400 text-sm">
            Loading articles from database...
          </div>
        ) : blogs.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-sm">
            No articles found. Click "New Article" to create one!
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {blogs.map((blog) => {
              const displayId = blog.numericId || blog.id || blog._id
              return (
                <div
                  key={displayId}
                  className="p-5 sm:p-6 hover:bg-white/5 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 bg-black/40">
                      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {blog.category}
                        </span>
                        <span className="text-[11px] text-slate-400">{blog.date}</span>
                        <span className="text-[11px] text-slate-500">• {blog.readTime}</span>
                        <span className="text-[10px] text-cyan-400 font-mono">ID: #{displayId}</span>
                      </div>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
                    <Link
                      to={`/blogs/${displayId}`}
                      target="_blank"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors border border-white/10"
                      title="Preview Article"
                    >
                      <FaEye className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => openEditModal(blog)}
                      className="p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 transition-colors border border-cyan-500/30"
                      title="Edit Article"
                    >
                      <FaPenToSquare className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(blog)}
                      className="p-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 transition-colors border border-rose-500/30"
                      title="Delete Article"
                    >
                      <FaTrash className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* ─── Create / Edit Article Modal ────────────── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
          <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-3xl w-full border border-white/15 max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <h2 className="font-heading font-black text-xl text-white flex items-center gap-2">
                <HiSparkles className="w-5 h-5 text-cyan-400" />
                <span>{isEditing ? 'Edit Blog Article' : 'Publish New Blog Article'}</span>
              </h2>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5 Essential Finger Dexterity Drills..."
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Category *
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value, tag: e.target.value.split(' ')[0] })}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm cursor-pointer"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c} className="bg-[#0b0f24] text-white">{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Tag Filter *
                  </label>
                  <select
                    value={form.tag}
                    onChange={(e) => setForm({ ...form, tag: e.target.value })}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm cursor-pointer"
                  >
                    {tags.map((t) => (
                      <option key={t} value={t} className="bg-[#0b0f24] text-white">{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Read Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5 min read"
                    value={form.readTime}
                    onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={form.author}
                    onChange={(e) => setForm({ ...form, author: e.target.value })}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Author Role
                  </label>
                  <input
                    type="text"
                    value={form.authorRole}
                    onChange={(e) => setForm({ ...form, authorRole: e.target.value })}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Short Excerpt (Grid Card Preview) *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Brief 1-2 sentence overview of the article..."
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Intro Callout (Top of Article)
                </label>
                <textarea
                  rows={2}
                  placeholder="Introductory paragraph or motivation..."
                  value={form.intro}
                  onChange={(e) => setForm({ ...form, intro: e.target.value })}
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                />
              </div>

              {/* Sections Editor */}
              <div className="pt-3 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-xs font-bold text-white uppercase tracking-wider">
                    Article Content Sections ({form.sections.length})
                  </label>
                  <button
                    type="button"
                    onClick={handleAddSection}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                  >
                    <FaPlus className="w-3 h-3" />
                    <span>Add Section</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {form.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-300">Section #{sIdx + 1}</span>
                        {form.sections.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveSection(sIdx)}
                            className="text-xs text-rose-400 hover:text-rose-300"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <input
                        type="text"
                        placeholder="Section Heading (e.g. 1. Five-Finger Pattern Drill)"
                        value={sec.heading}
                        onChange={(e) => handleSectionChange(sIdx, 'heading', e.target.value)}
                        className="glass-input w-full px-3 py-2 rounded-lg text-xs"
                      />

                      <textarea
                        rows={3}
                        placeholder="Section explanation, notes, or practice steps..."
                        value={sec.body}
                        onChange={(e) => handleSectionChange(sIdx, 'body', e.target.value)}
                        className="glass-input w-full px-3 py-2 rounded-lg text-xs"
                      />

                      <input
                        type="text"
                        placeholder="Optional Faculty Pro-Tip (e.g. Keep wrists neutral...)"
                        value={sec.tip || ''}
                        onChange={(e) => handleSectionChange(sIdx, 'tip', e.target.value)}
                        className="glass-input w-full px-3 py-2 rounded-lg text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Takeaways */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Key Takeaways Checklist (One per line)
                </label>
                <textarea
                  rows={3}
                  placeholder="15 minutes daily practice&#10;Keep wrists level with keys&#10;Always use a metronome"
                  value={form.keyTakeawaysText}
                  onChange={(e) => setForm({ ...form, keyTakeawaysText: e.target.value })}
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary !text-xs !py-3 !px-7 font-bold shadow-xl"
                >
                  {isEditing ? 'Save Changes' : 'Publish Article'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
