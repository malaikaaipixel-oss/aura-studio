import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-40 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-400 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        background: 'rgba(10,10,10,0.9)',
        border: '1px solid rgba(200,169,110,0.3)',
        backdropFilter: 'blur(12px)',
        color: '#c8a96e',
      }}
    >
      <ArrowUp size={16} />
    </button>
  )
}
