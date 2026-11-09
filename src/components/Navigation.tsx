import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-3 group"
            aria-label="AURA Studio — Go to top"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                <path d="M16 3L5 27h5.2l2.6-6.2h6.4L21.8 27H27L16 3zm0 7.5l2.4 7.1h-4.8L16 10.5z" fill="#c8a96e"/>
              </svg>
            </div>
            <span
              className="text-lg font-semibold tracking-widest uppercase"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.18em' }}
            >
              AURA
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm text-[#9a9a9a] hover:text-[#fafaf9] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('#contact')}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wide rounded-full border border-[#c8a96e]/60 text-[#c8a96e] hover:bg-[#c8a96e] hover:text-[#0a0a0a] transition-all duration-300"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#fafaf9]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex-1 flex flex-col justify-center px-8">
          <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-3xl font-display text-[#fafaf9] hover:text-[#c8a96e] transition-colors duration-200"
                style={{
                  transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: mobileOpen ? 1 : 0,
                  transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms, color 0.2s ease`,
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="mt-12">
            <button
              onClick={() => handleNav('#contact')}
              className="px-8 py-4 text-base font-medium tracking-wide rounded-full bg-[#c8a96e] text-[#0a0a0a] hover:bg-[#dfc28e] transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>
        </div>
        <div className="px-8 pb-12 text-[#6b6b6b] text-sm">
          © 2025 AURA Studio
        </div>
      </div>
    </>
  )
}
