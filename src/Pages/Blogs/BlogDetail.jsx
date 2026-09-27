import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { apiGetBlogById, apiGetBlogs, authStorage } from '../../services/api'
import { calix } from '../../assets/images'
import { FaWhatsapp, FaArrowLeft, FaCalendarDays, FaClock, FaShareNodes, FaBookOpen, FaPenToSquare } from 'react-icons/fa6'
import { HiSparkles, HiArrowRight, HiOutlineLightBulb } from 'react-icons/hi2'
import { FiCheck, FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const BlogDetail = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [allBlogs, setAllBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const isAuthenticated = authStorage.isAuthenticated()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    loadArticleAndRelated()
  }, [id])

  const loadArticleAndRelated = async () => {
    try {
      setLoading(true)
      const [fetchedArticle, blogsList] = await Promise.all([
        apiGetBlogById(id),
        apiGetBlogs(),
      ])
      setArticle(fetchedArticle)
      setAllBlogs(blogsList)
    } catch (err) {
      console.error('Error loading article:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-12 border border-white/10 shadow-2xl">
          <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-300 text-sm">Loading conservatory article...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-10 border border-white/10 shadow-2xl">
          <span className="text-4xl mb-4 block">📖</span>
          <h1 className="font-heading font-black text-2xl sm:text-3xl text-white mb-3">
            Article Not Found
          </h1>
          <p className="text-slate-300 text-sm mb-6">
            The article you are looking for might have been moved or does not exist.
          </p>
          <Link
            to="/blogs"
            className="btn-primary inline-flex items-center gap-2 !text-xs !py-3 !px-6"
          >
            <FaArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>
    )
  }

  // Helper: prefer slug, fallback to id
  const getKey = (b) => b.slug || b.numericId || b.id || b._id

  // Find prev and next articles
  const currentKey = getKey(article)
  const currentIndex = allBlogs.findIndex((b) => getKey(b) === currentKey)
  const prevArticle = currentIndex > 0 ? allBlogs[currentIndex - 1] : null
  const nextArticle =
    currentIndex >= 0 && currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null
  const relatedArticles = allBlogs
    .filter((b) => getKey(b) !== currentKey)
    .slice(0, 3)

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
        .catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Article link copied to clipboard!')
    }
  }

  return (
    <article className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* ─── Breadcrumbs & Navigation ─────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blogs" className="hover:text-cyan-400 transition-colors">Conservatory Journal</Link>
          <span>/</span>
          <span className="text-slate-200 truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated && (
            <Link
              to={`/admin/blogs/edit/${currentKey}`}
              className="inline-flex items-center gap-1.5 text-purple-300 hover:text-purple-200 font-semibold transition-colors"
            >
              <FaPenToSquare className="w-3.5 h-3.5" />
              <span>Edit in Admin</span>
            </Link>
          )}

          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group"
          >
            <FiArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>All Articles</span>
          </Link>
        </div>
      </div>

      {/* ─── Article Header ────────────────────────── */}
      <header className="mb-10 text-left">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/25">
            {article.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <FaCalendarDays className="w-3.5 h-3.5 text-slate-400" />
            {article.date}
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <FaClock className="w-3.5 h-3.5 text-slate-400" />
            {article.readTime}
          </span>
        </div>

        <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
          {article.title}
        </h1>

        {/* Author Details Card */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-400/40 shadow-md">
              <img src={calix} alt={article.author} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>{article.author}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  Mentor
                </span>
              </div>
              <div className="text-xs text-slate-400">{article.authorRole}</div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleShare}
            className="glass-pill px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
            title="Share Article"
          >
            <FaShareNodes className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </header>

      {/* ─── Featured Image Banner ─────────────────── */}
      <div className="relative h-64 sm:h-96 rounded-3xl overflow-hidden border border-white/15 shadow-2xl mb-12 group">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04080f] via-transparent to-black/20" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-cyan-300 border border-cyan-400/30">
            {article.tag || article.category} Masterclass
          </span>
          <span className="text-xs text-slate-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full font-medium">
            PraiseWave Conservatory
          </span>
        </div>
      </div>

      {/* ─── Article Body ──────────────────────────── */}
      <div className="space-y-8 mb-14 text-slate-200 text-sm sm:text-base leading-relaxed">
        {/* Intro Callout */}
        {article.intro && (
          <div className="p-6 sm:p-7 rounded-2xl bg-purple-950/20 border-l-4 border-purple-500 text-slate-200 font-medium leading-relaxed glass-card">
            {article.intro}
          </div>
        )}

        {/* Content Sections */}
        {article.sections && article.sections.map((section, idx) => (
          <section key={idx} className="space-y-4 pt-2">
            <h2 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight flex items-start gap-2.5">
              <span className="text-cyan-400 font-mono text-lg">{idx + 1}.</span>
              <span>{section.heading.replace(/^\d+\.\s*/, '')}</span>
            </h2>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {section.body}
            </p>

            {/* Optional Table/Chart */}
            {section.chart && (
              <div className="overflow-x-auto my-4 rounded-2xl border border-white/10 glass-card">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-white/5 border-b border-white/10 text-cyan-300 uppercase tracking-wider font-bold">
                    <tr>
                      <th className="p-3 sm:p-4">Scale Degree</th>
                      <th className="p-3 sm:p-4">Chord Type (in C)</th>
                      <th className="p-3 sm:p-4">Musical &amp; Worship Function</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {section.chart.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                        <td className="p-3 sm:p-4 font-mono font-bold text-amber-300">{row.number}</td>
                        <td className="p-3 sm:p-4 font-bold text-white">{row.chord}</td>
                        <td className="p-3 sm:p-4 text-slate-300">{row.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Optional Pro Tip Box */}
            {section.tip && (
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3 text-xs sm:text-sm text-amber-200">
                <HiOutlineLightBulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 block font-bold mb-0.5">Faculty Pro-Tip:</strong>
                  {section.tip}
                </div>
              </div>
            )}
          </section>
        ))}

        {/* Key Takeaways Summary Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="mt-10 p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-slate-900/60 to-purple-950/20">
            <h3 className="font-heading font-black text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
              <HiSparkles className="w-5 h-5 text-cyan-400" />
              <span>Key Takeaways &amp; Practice Checklist</span>
            </h3>
            <ul className="space-y-3">
              {article.keyTakeaways.map((item, kIdx) => (
                <li key={kIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ─── Faculty Consultation CTA Banner ────────── */}
      <div className="rounded-3xl p-6 sm:p-10 border border-purple-500/30 bg-gradient-to-br from-purple-950/40 via-slate-900/80 to-cyan-950/40 backdrop-blur-xl text-center mb-14">
        <h3 className="font-heading font-black text-xl sm:text-2xl text-white mb-2">
          Want Personal Mentorship on This Topic?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
          Learn keyboard with Calix Joshua in live 1-on-1 online sessions. Book your free 30-minute trial class today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/919361492530?text=Hi%20Calix!%20I%20just%20read%20your%20article%20%22${encodeURIComponent(article.title)}%22%20and%20would%20like%20to%20join%20the%201-on-1%20online%20keyboard%20classes.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !text-xs !py-3 !px-6 inline-flex items-center gap-2 shadow-xl"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Chat with Calix on WhatsApp (+91 93614 92530)</span>
          </a>

          <Link
            to="/contact"
            className="btn-secondary !text-xs !py-3 !px-6 inline-flex items-center gap-2"
          >
            <span>Book Free Online Trial</span>
            <HiArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ─── Next / Prev Navigation ─────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/10 mb-16">
        {prevArticle ? (
          <Link
            to={`/blogs/${getKey(prevArticle)}`}
            className="glass-card p-5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all flex flex-col group text-left"
          >
            <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider mb-1 flex items-center gap-1">
              <FiArrowLeft className="w-3 dot-3 group-hover:-translate-x-1 transition-transform" />
              Previous Article
            </span>
            <span className="text-xs sm:text-sm font-bold text-white line-clamp-2 group-hover:text-purple-300 transition-colors">
              {prevArticle.title}
            </span>
          </Link>
        ) : <div />}

        {nextArticle && (
          <Link
            to={`/blogs/${getKey(nextArticle)}`}
            className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col items-end group text-right"
          >
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1">
              Next Article
              <FiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="text-xs sm:text-sm font-bold text-white line-clamp-2 group-hover:text-cyan-300 transition-colors">
              {nextArticle.title}
            </span>
          </Link>
        )}
      </div>

      {/* ─── Related Articles Grid ──────────────────── */}
      <div>
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-white flex items-center gap-2">
            <FaBookOpen className="w-4 h-4 text-purple-400" />
            <span>More Articles from Conservatory Journal</span>
          </h3>
          <Link to="/blogs" className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedArticles.map((rel) => {
            const relKey = getKey(rel)
            return (
              <Link
                key={relKey}
                to={`/blogs/${relKey}`}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all group flex flex-col"
              >
                <div className="h-32 overflow-hidden relative">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b20] via-transparent to-black/20" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-black/70 backdrop-blur-md text-cyan-300">
                    {rel.category}
                  </span>
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <h4 className="text-xs font-bold text-white line-clamp-2 group-hover:text-purple-300 transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <div className="text-[10px] text-slate-400 flex items-center justify-between pt-2 border-t border-white/5">
                    <span>{rel.readTime}</span>
                    <span className="text-cyan-400 font-bold group-hover:underline">Read →</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default BlogDetail
