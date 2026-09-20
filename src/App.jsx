import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa6'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Popup from './Components/Popup'
import ScrollToTop from './Components/ScrollToTop'
import Home from './Pages/Home/Home'
import Courses from './Pages/Courses/Courses'
import Blogs from './Pages/Blogs/Blogs'
import Contact from './Pages/Contact/Contact'
import GospelProduction from './Pages/GospelProduction/GospelProduction'
import Testimonials from './Pages/Testimonials/Testimonials'

/* WhatsApp floating button */
const WhatsAppFloat = () => (
  <a
    id="whatsapp-float-btn"
    href="https://wa.me/919500603579?text=Hi%20PraiseWave!%20I%20want%20to%20know%20more."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="whatsapp-float w-10 h-10"
  >
    <FaWhatsapp className="w-5 h-5 text-white relative z-10" />
  </a>
)

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/"                 element={<Home />}             />
          <Route path="/courses"          element={<Courses />}          />
          <Route path="/testimonials"     element={<Testimonials />}     />
          <Route path="/blogs"            element={<Blogs />}            />
          <Route path="/contact"          element={<Contact />}          />
          <Route path="/gospel-production" element={<GospelProduction />} />
        </Routes>
      </main>
      <Footer />
      <Popup />
      <WhatsAppFloat />
    </BrowserRouter>
  )
}

export default App
