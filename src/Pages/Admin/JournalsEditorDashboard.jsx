import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import {
  FaLink,
  FaTable,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaEraser,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaCog,
  FaCheck,
  FaTimes,
  FaUpload,
  FaImage,
} from 'react-icons/fa'
import api from '../../services/api'

const JournalsEditorDashboard = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = Boolean(id)
  const editorRef = useRef(null)
  const imageInputRef = useRef(null)

  // Primary fields
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [date, setDate] = useState('')
  const [tags, setTags] = useState('')
  const [published, setPublished] = useState(true)
  const [content, setContent] = useState('')

  // Advanced metadata
  const [category, setCategory] = useState('Piano Technique')
  const [categoryColor, setCategoryColor] = useState('#8b5cf6')
  const [readTime, setReadTime] = useState('5 min read')
  const [author, setAuthor] = useState('Calix Joshua')
  const [authorRole, setAuthorRole] = useState('Founder & Lead Mentor, PraiseWave')
  const [summary, setSummary] = useState('')
  const [image, setImage] = useState('')
  const [imagePreview, setImagePreview] = useState('')

  // UI state
  const [showAdvanced, setShowAdvanced] = useState(true)
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const categoryColorMap = {
    'Piano Technique': '#8b5cf6',
    'Chord Progressions': '#06b6d4',
    'Music Theory': '#10b981',
    'Rhythm & Timing': '#f59e0b',
    'Hand Technique': '#ec4899',
    'Worship Keyboard': '#eab308',
    'Gospel Production': '#f43f5e',
  }

  useEffect(() => {
    if (categoryColorMap[category]) setCategoryColor(categoryColorMap[category])
  }, [category])

  useEffect(() => {
    if (!isEditMode) {
      const generated = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setSlug(generated || 'un-named')
    }
  }, [title, isEditMode])

  useEffect(() => {
    const user = api.auth.getUser() || {}
    if (!isEditMode) {
      setAuthor(user.username === 'praisewave' ? 'Calix Joshua' : user.username || 'Calix Joshua')
      setAuthorRole(user.username === 'praisewave' ? 'Founder & Lead Mentor, PraiseWave' : 'Faculty Mentor')
      const today = new Date()
      const formattedDate = today.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      })
      setDate(formattedDate)
      setImage('https://images.unsplash.com/photo-1520523839898-507127053c37?w=1200&auto=format&fit=crop&q=80')
      setImagePreview('https://images.unsplash.com/photo-1520523839898-507127053c37?w=1200&auto=format&fit=crop&q=80')
      setContent('<p>Write your detailed keyboard masterclass or music theory guide here...</p>')
    } else {
      fetchJournalDetails()
    }
  }, [id])

  const fetchJournalDetails = async () => {
    setFetching(true)
    try {
      const data = await api.journals.getById(id)
      if (!data) throw new Error('Article not found')
      setTitle(data.title || '')
      setCategory(data.category || 'Piano Technique')
      setCategoryColor(data.categoryColor || '#8b5cf6')
      setDate(data.date || '')
      setReadTime(data.readTime || '5 min read')
      setAuthor(data.author || 'Calix Joshua')
      setAuthorRole(data.authorRole || 'Founder & Lead Mentor, PraiseWave')
      setSummary(data.excerpt || data.summary || '')
      setImage(data.image || '')
      setImagePreview(data.image || '')
      setSlug(data.slug || data.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || '')
      setTags(data.tag || (data.tags ? data.tags.join(', ') : 'Piano'))
      setPublished(data.published !== undefined ? data.published : true)

      // Transform structured sections into rich HTML if not already HTML
      if (data.content) {
        setContent(data.content)
      } else if (data.sections && data.sections.length > 0) {
        const sectionsHtml = data.sections
          .map(
            (s) =>
              `<h2>${s.heading}</h2><p>${s.body}</p>${
                s.tip
                  ? `<blockquote style="border-left:4px solid #8b5cf6;padding-left:1rem;font-style:italic;color:#cbd5e1;margin:1rem 0;"><strong>Pro-Tip:</strong> ${s.tip}</blockquote>`
                  : ''
              }`
          )
          .join('')
        const fullHtml = `${data.intro ? `<p style="font-weight:600;font-size:1.05rem;">${data.intro}</p>` : ''}${sectionsHtml}`
        setContent(fullHtml)
      }
    } catch (err) {
      setError('Failed to load article details.')
    } finally {
      setFetching(false)
    }
  }

  useEffect(() => {
    if (editorRef.current && content && !fetching) {
      editorRef.current.innerHTML = content
    }
  }, [fetching])

  const getUrlPreview = () => `/blogs/${id || slug || 'un-named'}`

  const execCmd = (command, value = null) => {
    document.execCommand(command, false, value)
    if (editorRef.current) setContent(editorRef.current.innerHTML)
  }

  const handleLink = () => {
    const url = prompt('Enter URL:', 'https://')
    if (url) execCmd('createLink', url)
  }

  const insertHTML = (html) => {
    const sel = window.getSelection()
    if (!sel.rangeCount) return
    const range = sel.getRangeAt(0)
    range.deleteContents()
    const el = document.createElement('div')
    el.innerHTML = html
    const frag = document.createDocumentFragment()
    let lastNode
    while (el.firstChild) lastNode = frag.appendChild(el.firstChild)
    range.insertNode(frag)
    if (lastNode) {
      const r = range.cloneRange()
      r.setStartAfter(lastNode)
      r.collapse(true)
      sel.removeAllRanges()
      sel.addRange(r)
    }
    if (editorRef.current) setContent(editorRef.current.innerHTML)
  }

  // Handle cover image file upload → base64
  const handleImageFile = (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be under 5 MB.')
      return
    }
    const reader = new FileReader()
    reader.onload = (ev) => {
      setImage(ev.target.result)
      setImagePreview(ev.target.result)
      setError('')
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)
    const finalContent = editorRef.current ? editorRef.current.innerHTML : content

    // Extract sections from headings/paragraphs for compatibility
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = finalContent
    const h2Elements = tempDiv.querySelectorAll('h2')
    let structuredSections = []

    if (h2Elements.length > 0) {
      h2Elements.forEach((h2, idx) => {
        let bodyText = ''
        let next = h2.nextElementSibling
        while (next && next.tagName !== 'H2') {
          bodyText += ' ' + next.textContent
          next = next.nextElementSibling
        }
        structuredSections.push({
          heading: h2.textContent || `Section ${idx + 1}`,
          body: bodyText.trim() || 'Detailed practice instructions and theory concepts.',
          tip: '',
        })
      })
    } else {
      structuredSections = [
        {
          heading: '1. Masterclass Overview & Practice Routine',
          body: tempDiv.textContent || 'Masterclass guidance and practice steps.',
          tip: '',
        },
      ]
    }

    const payload = {
      title,
      category,
      categoryColor,
      date,
      readTime,
      author,
      authorRole,
      excerpt: summary || title,
      summary: summary || title,
      intro: summary || '',
      image:
        image ||
        'https://images.unsplash.com/photo-1520523839898-507127053c37?w=1200&auto=format&fit=crop&q=80',
      content: finalContent,
      sections: structuredSections,
      slug,
      tag: tags.split(',')[0]?.trim() || category.split(' ')[0],
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      published,
    }

    try {
      if (isEditMode) {
        await api.journals.update(id, payload)
      } else {
        await api.journals.create(payload)
      }
      setSuccess('Article saved successfully!')
      setTimeout(() => navigate('/admin/blogs'), 800)
    } catch (err) {
      setError(err.message || 'Failed to save article.')
    } finally {
      setLoading(false)
    }
  }

  if (fetching) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <svg
            className="animate-spin h-8 w-8 text-cyan-400 mx-auto mb-3"
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
          <p className="text-slate-400 text-sm font-semibold">Loading article...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6 text-left">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .editor-canvas { outline: none; }
        .editor-canvas h2 { font-size: 1.35rem; font-weight: 800; margin: 1.2rem 0 0.5rem; color: #ffffff; }
        .editor-canvas h3 { font-size: 1.15rem; font-weight: 700; margin: 1rem 0 0.4rem; color: #38bdf8; }
        .editor-canvas p { margin-bottom: 0.8rem; line-height: 1.65; color: #cbd5e1; }
        .editor-canvas ul { list-style: disc; padding-left: 1.4rem; margin-bottom: 0.8rem; color: #cbd5e1; }
        .editor-canvas ol { list-style: decimal; padding-left: 1.4rem; margin-bottom: 0.8rem; color: #cbd5e1; }
        .editor-canvas table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; color: #cbd5e1; }
        .editor-canvas th, .editor-canvas td { border: 1px solid rgba(255,255,255,0.15); padding: 0.5rem; }
        .editor-canvas th { background: rgba(255,255,255,0.06); font-weight: bold; }
        .editor-canvas blockquote { border-left: 4px solid #8b5cf6; padding-left: 1rem; font-style: italic; color: #93c5fd; margin: 1.2rem 0; background: rgba(139,92,246,0.08); padding-top: 0.5rem; padding-bottom: 0.5rem; border-radius: 0 0.5rem 0.5rem 0; }
        .editor-canvas a { color: #38bdf8; text-decoration: underline; }
      `,
        }}
      />

      {/* Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-400 uppercase">
          <Link to="/admin/journals" className="hover:text-cyan-400 transition-colors">
            All Articles
          </Link>
          <span>/</span>
          <span className="text-slate-200">
            {isEditMode ? 'Edit Article' : 'Create Article'}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setShowAdvanced((p) => !p)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all font-bold text-[10px] uppercase tracking-wider self-start sm:self-auto"
        >
          <FaCog
            className={`transition-transform duration-300 ${
              showAdvanced ? 'rotate-90 text-cyan-400' : ''
            }`}
          />
          {showAdvanced ? 'Hide Settings' : 'Advanced Settings'}
        </button>
      </div>

      {/* Alerts */}
      {error && (
        <div className="p-3 sm:p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-sm font-semibold flex items-center gap-2">
          <FaTimes className="flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
      {success && (
        <div className="p-3 sm:p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm font-semibold flex items-center gap-2">
          <FaCheck className="flex-shrink-0" />
          <span>{success}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={`flex flex-col ${showAdvanced ? 'xl:flex-row' : ''} gap-5`}>
          {/* ─── MAIN EDITOR ─── */}
          <div
            className={`${
              showAdvanced ? 'xl:flex-1' : 'w-full'
            } bg-[#0a0f24] border border-white/10 rounded-2xl shadow-xl p-4 sm:p-6 space-y-5`}
          >
            {/* Row 1: Title + Slug */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 text-xs font-bold mb-1.5">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Article title..."
                  className="w-full px-3.5 py-2.5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 bg-white/5 text-sm text-white transition-all placeholder-slate-500"
                  required
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-slate-300 text-xs font-bold">Slug</label>
                  <span className="text-[9px] text-slate-400 italic">
                    Auto-generated from title
                  </span>
                </div>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) =>
                    setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))
                  }
                  placeholder="article-slug"
                  className="w-full px-3.5 py-2.5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 bg-white/5 text-sm font-mono text-cyan-300 transition-all"
                />
              </div>
            </div>

            {/* Row 2: Date + Tags + URL */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-slate-300 text-xs font-bold mb-1.5">Date</label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="e.g. Sep 27, 2026"
                  className="w-full px-3.5 py-2.5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 bg-white/5 text-sm text-white transition-all"
                  required
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-slate-300 text-xs font-bold">Tags</label>
                  <span className="text-[9px] text-slate-400 italic">Comma separated</span>
                </div>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Piano, Chords, Theory"
                  className="w-full px-3.5 py-2.5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 bg-white/5 text-sm text-white transition-all"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-xs font-bold mb-1.5">
                  URL Preview
                </label>
                <input
                  type="text"
                  readOnly
                  value={getUrlPreview()}
                  className="w-full px-3.5 py-2.5 border border-white/10 rounded-xl bg-black/40 text-[10px] text-slate-400 font-mono focus:outline-none cursor-not-allowed"
                />
              </div>
            </div>

            {/* Row 3: Published checkbox */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-300 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                  className="w-4 h-4 text-cyan-400 border-white/20 rounded focus:ring-cyan-400 cursor-pointer bg-white/5"
                />
                <span>Published / Live on Website</span>
              </label>
            </div>

            {/* Row 4: Editor */}
            <div className="space-y-1">
              <label className="block text-slate-300 text-xs font-bold">Content</label>
              <div className="border border-white/10 rounded-xl overflow-hidden shadow-sm bg-black/30">
                {/* Toolbar */}
                <div className="flex flex-wrap items-center gap-1 p-1.5 sm:p-2 bg-white/5 border-b border-white/10">
                  {[
                    { cmd: 'bold', icon: <FaBold />, title: 'Bold' },
                    { cmd: 'italic', icon: <FaItalic />, title: 'Italic' },
                    { cmd: 'strikeThrough', icon: <FaStrikethrough />, title: 'Strikethrough' },
                    { cmd: 'removeFormat', icon: <FaEraser />, title: 'Clear Format' },
                  ].map(({ cmd, icon, title }) => (
                    <button
                      key={cmd}
                      type="button"
                      onClick={() => execCmd(cmd)}
                      title={title}
                      className="p-1.5 hover:bg-white/10 rounded text-slate-300 text-xs transition-colors"
                    >
                      {icon}
                    </button>
                  ))}
                  <span className="w-px h-4 bg-white/20 mx-0.5" />
                  <button
                    type="button"
                    onClick={() => execCmd('insertUnorderedList')}
                    title="Bullet List"
                    className="p-1.5 hover:bg-white/10 rounded text-slate-300 text-xs transition-colors"
                  >
                    <FaListUl />
                  </button>
                  <button
                    type="button"
                    onClick={() => execCmd('insertOrderedList')}
                    title="Numbered List"
                    className="p-1.5 hover:bg-white/10 rounded text-slate-300 text-xs transition-colors"
                  >
                    <FaListOl />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      insertHTML(
                        '<blockquote style="border-left:4px solid #8b5cf6;padding-left:1rem;font-style:italic;color:#93c5fd;margin:1rem 0;background:rgba(139,92,246,0.08);padding:0.5rem 1rem;">"Faculty Tip: Practice slowly with metronome discipline."</blockquote>'
                      )
                    }
                    title="Blockquote"
                    className="p-1.5 hover:bg-white/10 rounded text-slate-300 text-xs transition-colors"
                  >
                    <FaQuoteLeft />
                  </button>
                  <span className="w-px h-4 bg-white/20 mx-0.5" />
                  <button
                    type="button"
                    onClick={handleLink}
                    title="Link"
                    className="p-1.5 hover:bg-white/10 rounded text-slate-300 text-xs transition-colors"
                  >
                    <FaLink />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      insertHTML(
                        '<table style="width:100%;border-collapse:collapse;margin:1rem 0;"><thead><tr><th style="border:1px solid rgba(255,255,255,0.15);padding:8px;background:rgba(255,255,255,0.06);">Scale Degree</th><th style="border:1px solid rgba(255,255,255,0.15);padding:8px;background:rgba(255,255,255,0.06);">Chord</th></tr></thead><tbody><tr><td style="border:1px solid rgba(255,255,255,0.15);padding:8px;">I (Tonic)</td><td style="border:1px solid rgba(255,255,255,0.15);padding:8px;">C Major</td></tr></tbody></table>'
                      )
                    }
                    title="Table"
                    className="p-1.5 hover:bg-white/10 rounded text-slate-300 text-xs transition-colors"
                  >
                    <FaTable />
                  </button>
                  <span className="w-px h-4 bg-white/20 mx-0.5" />
                  <button
                    type="button"
                    onClick={() => execCmd('justifyLeft')}
                    className="p-1.5 hover:bg-white/10 rounded text-slate-300 text-xs transition-colors"
                  >
                    <FaAlignLeft />
                  </button>
                  <button
                    type="button"
                    onClick={() => execCmd('justifyCenter')}
                    className="p-1.5 hover:bg-white/10 rounded text-slate-300 text-xs transition-colors"
                  >
                    <FaAlignCenter />
                  </button>
                  <button
                    type="button"
                    onClick={() => execCmd('justifyRight')}
                    className="p-1.5 hover:bg-white/10 rounded text-slate-300 text-xs transition-colors"
                  >
                    <FaAlignRight />
                  </button>
                  <span className="w-px h-4 bg-white/20 mx-0.5" />
                  <select
                    onChange={(e) => {
                      execCmd('formatBlock', e.target.value)
                      e.target.value = ''
                    }}
                    className="bg-black/60 border border-white/20 text-[10px] rounded px-1.5 py-0.5 text-slate-200 focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">Format</option>
                    <option value="p">Paragraph</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                  </select>
                </div>
                {/* Canvas */}
                <div
                  ref={editorRef}
                  contentEditable
                  onInput={(e) => setContent(e.currentTarget.innerHTML)}
                  className="editor-canvas w-full min-h-[280px] sm:min-h-[380px] px-4 py-3 text-slate-200 text-sm overflow-y-auto text-left"
                />
                {/* Status bar */}
                <div className="px-3 py-1 bg-white/5 text-[10px] font-mono text-slate-400 select-none border-t border-white/10">
                  body › masterclass-article
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-3 pt-4 border-t border-white/10">
              <Link
                to="/admin/journals"
                className="text-center px-5 py-2.5 bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase rounded-xl transition-all"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 hover:opacity-95 disabled:opacity-50 text-white text-xs font-bold uppercase rounded-xl shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-1.5"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
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
                    Saving...
                  </>
                ) : (
                  'Save Article'
                )}
              </button>
            </div>
          </div>

          {/* ─── ADVANCED SIDEBAR ─── */}
          {showAdvanced && (
            <div className="xl:w-72 bg-[#0a0f24] border border-white/10 rounded-2xl shadow-xl p-4 sm:p-5 space-y-5 xl:self-start xl:sticky xl:top-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-white flex items-center gap-2">
                <FaCog className="text-cyan-400" /> Advanced Settings
              </h3>

              {/* Cover Image Upload & URL */}
              <div className="space-y-3">
                <label className="block text-slate-300 text-[10px] font-black uppercase tracking-wider">
                  Cover Image
                </label>

                {/* Direct File Input */}
                <div className="space-y-2">
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageFile}
                    className="w-full text-xs text-slate-400 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-cyan-500/20 file:text-cyan-300 hover:file:bg-cyan-500/30 cursor-pointer border border-white/10 rounded-xl p-1.5 bg-white/5"
                  />
                  <p className="text-[9px] text-slate-500">Upload JPG/PNG file (Max 5 MB)</p>
                </div>

                {/* Or Paste Image URL */}
                <div>
                  <input
                    type="text"
                    value={image}
                    onChange={(e) => {
                      setImage(e.target.value)
                      setImagePreview(e.target.value)
                    }}
                    placeholder="Or paste Image URL (https://...)"
                    className="w-full px-3 py-2 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-400 bg-white/5"
                  />
                </div>

                {/* Preview */}
                {imagePreview ? (
                  <div className="mt-2 relative rounded-xl overflow-hidden border border-white/15 bg-black/40 shadow-xs">
                    <img
                      src={imagePreview}
                      alt="Cover preview"
                      className="w-full h-32 object-cover object-center"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImage('')
                        setImagePreview('')
                        if (imageInputRef.current) imageInputRef.current.value = ''
                      }}
                      className="absolute top-2 right-2 w-7 h-7 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs hover:bg-rose-700 transition-all shadow-md"
                      title="Remove image"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ) : (
                  <div className="mt-2 w-full h-24 bg-white/5 border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-slate-400 space-y-1">
                    <FaImage className="w-6 h-6 text-slate-500" />
                    <span className="text-[10px] font-semibold">No cover image selected</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-slate-300 text-[10px] font-black uppercase tracking-wider mb-1.5">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-white/10 rounded-lg text-xs text-white bg-black/60 focus:outline-none focus:border-cyan-400 cursor-pointer"
                >
                  <option value="Piano Technique" className="bg-[#0b0f24] text-white">
                    Piano Technique
                  </option>
                  <option value="Chord Progressions" className="bg-[#0b0f24] text-white">
                    Chord Progressions
                  </option>
                  <option value="Music Theory" className="bg-[#0b0f24] text-white">
                    Music Theory
                  </option>
                  <option value="Rhythm & Timing" className="bg-[#0b0f24] text-white">
                    Rhythm &amp; Timing
                  </option>
                  <option value="Hand Technique" className="bg-[#0b0f24] text-white">
                    Hand Technique
                  </option>
                  <option value="Worship Keyboard" className="bg-[#0b0f24] text-white">
                    Worship Keyboard
                  </option>
                  <option value="Gospel Production" className="bg-[#0b0f24] text-white">
                    Gospel Production
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 text-[10px] font-black uppercase tracking-wider mb-1.5">
                  Read Time
                </label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  placeholder="5 min read"
                  className="w-full px-3 py-2 border border-white/10 rounded-lg text-xs text-white bg-white/5 focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                  Author Details
                </p>
                <div>
                  <label className="block text-slate-300 text-[10px] font-black uppercase tracking-wider mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author name"
                    className="w-full px-3 py-2 border border-white/10 rounded-lg text-xs text-white bg-white/5 focus:outline-none focus:border-cyan-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-[10px] font-black uppercase tracking-wider mb-1.5">
                    Role
                  </label>
                  <input
                    type="text"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    placeholder="Author role"
                    className="w-full px-3 py-2 border border-white/10 rounded-lg text-xs text-white bg-white/5 focus:outline-none focus:border-cyan-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-[10px] font-black uppercase tracking-wider mb-1.5">
                  Summary / Excerpt
                </label>
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Brief article summary for cards..."
                  rows={3}
                  className="w-full px-3 py-2 border border-white/10 rounded-lg text-xs text-white bg-white/5 focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default JournalsEditorDashboard
