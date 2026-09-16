import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Multiple methods to ensure scrolling works
    const scrollToTop = () => {
      // Method 1
      window.scrollTo(0, 0)
      
      // Method 2
      document.documentElement.scrollTop = 0
      
      // Method 3
      document.body.scrollTop = 0
      
      // Method 4 - Using requestAnimationFrame for smoothness
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: 'auto'
        })
      })
    }
    
    // Execute immediately
    scrollToTop()
    
    // Execute again after a tiny delay to ensure any async content is loaded
    const timeoutId = setTimeout(scrollToTop, 10)
    
    return () => clearTimeout(timeoutId)
  }, [pathname])

  return null
}

export default ScrollToTop