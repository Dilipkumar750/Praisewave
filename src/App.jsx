import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa6'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Popup from './Components/Popup'
import ScrollToTop from './Components/ScrollToTop'
import Home from './Pages/Home/Home'
import Courses from './Pages/Courses/Courses'
import Blogs from './Pages/Blogs/Blogs'
import BlogDetail from './Pages/Blogs/BlogDetail'
import Contact from './Pages/Contact/Contact'
import GospelProduction from './Pages/GospelProduction/GospelProduction'
import Testimonials from './Pages/Testimonials/Testimonials'
import Terms from './Pages/Terms/Terms'
import Login from './Pages/Auth/Login'
import AdminLayout from './Pages/Admin/AdminLayout'
import JournalsDashboard from './Pages/Admin/JournalsDashboard'
import JournalsEditorDashboard from './Pages/Admin/JournalsEditorDashboard'

/* ── Floating WhatsApp Button ─── */
const WhatsAppFloat = () => (
  <a
    id="whatsapp-float-btn"
    href="https://wa.me/919361492530?text=Hi%20PraiseWave!%20I%20want%20to%20know%20more."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="whatsapp-float"
  >
    <FaWhatsapp className="w-7 h-7 text-white relative z-10" />
  </a>
)

/* ── Public site with Header/Footer ─── */
const PublicSite = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route index                     element={<Home />}             />
        <Route path="courses"            element={<Courses />}          />
        <Route path="testimonials"       element={<Testimonials />}     />
        <Route path="blogs"              element={<Blogs />}            />
        <Route path="blogs/:id"          element={<BlogDetail />}       />
        <Route path="contact"            element={<Contact />}          />
        <Route path="gospel-production"  element={<GospelProduction />} />
        <Route path="terms"              element={<Terms />}            />
      </Routes>
    </main>
    <Footer />
    <Popup />
    <WhatsAppFloat />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Standalone login — no header/footer */}
        <Route path="/login" element={<Login />} />

        {/* Admin section — AdminLayout renders Outlet for children */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/blogs" replace />} />
          <Route path="blogs"          element={<JournalsDashboard />}       />
          <Route path="blogs/new"      element={<JournalsEditorDashboard />} />
          <Route path="blogs/edit/:id" element={<JournalsEditorDashboard />} />
        </Route>

        {/* Public site — all other paths go through Header/Footer shell */}
        <Route path="/*" element={<PublicSite />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

