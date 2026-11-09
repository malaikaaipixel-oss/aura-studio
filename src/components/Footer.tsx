import { ArrowUpRight } from 'lucide-react'

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Web Design & Development',
  'Branding & Identity',
  'UI/UX Design',
  'Digital Marketing',
  'Social Media Management',
]

const socialLinks = [
  { label: 'Instagram', href: '#demo-instagram' },
  { label: 'LinkedIn', href: '#demo-linkedin' },
  { label: 'Dribbble', href: '#demo-dribbble' },
  { label: 'Behance', href: '#demo-behance' },
  { label: 'Twitter / X', href: '#demo-twitter' },
]

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-8 overflow-hidden"
      style={{
        background: '#060606',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
      aria-label="Site footer"
    >
      {/* Large background A */}
      <div
        className="absolute right-0 bottom-0 font-display font-bold select-none pointer-events-none"
        style={{
          fontSize: 'clamp(200px, 30vw, 400px)',
          lineHeight: 1,
          color: 'rgba(200,169,110,0.025)',
          transform: 'translate(15%, 10%)',
        }}
        aria-hidden
      >
        A
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative">
        {/* Top row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-3 mb-6 group"
              aria-label="AURA Studio — Go to top"
            >
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <path d="M16 3L5 27h5.2l2.6-6.2h6.4L21.8 27H27L16 3zm0 7.5l2.4 7.1h-4.8L16 10.5z" fill="#c8a96e" />
              </svg>
              <span className="text-base font-semibold tracking-widest uppercase" style={{ letterSpacing: '0.18em' }}>
                AURA
              </span>
            </button>
            <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6 max-w-xs">
              A premium creative digital agency crafting experiences that elevate brands and drive meaningful growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  onClick={(e) => { e.preventDefault() }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#6b6b6b] hover:text-[#c8a96e] transition-colors duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span className="text-[9px] font-bold">
                    {link.label.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#6b6b6b] mb-6">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-[#9a9a9a] hover:text-[#fafaf9] transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#6b6b6b] mb-6">Services</h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-sm text-[#9a9a9a] hover:text-[#fafaf9] transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#6b6b6b] mb-6">Ready to start?</h3>
            <p className="text-sm text-[#6b6b6b] leading-relaxed mb-6">
              We're currently accepting new project inquiries for Q1 2025.
            </p>
            <button
              onClick={() => scrollTo('#contact')}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium tracking-wide bg-[#c8a96e] text-[#0a0a0a] hover:bg-[#dfc28e] transition-all duration-300"
            >
              Start a Project
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="text-[11px] text-[#6b6b6b] mb-1">hello@aura-studio.co</div>
              <div className="text-[11px] text-[#6b6b6b]">New York · London · Remote</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#3a3a3a]">
            © 2025 AURA Studio. All rights reserved. Fictional demo website — not a real agency.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <button
                key={item}
                onClick={(e) => e.preventDefault()}
                className="text-[11px] text-[#3a3a3a] hover:text-[#6b6b6b] transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
