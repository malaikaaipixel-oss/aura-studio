import { Layers, Monitor, Palette, Share2, TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { services } from '../data'
import { useInView } from '../hooks/useInView'

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={22} />,
  Palette: <Palette size={22} />,
  Layers: <Layers size={22} />,
  TrendingUp: <TrendingUp size={22} />,
  Share2: <Share2 size={22} />,
}

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="services" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 opacity-30"
        style={{ background: 'linear-gradient(to bottom, #c8a96e, transparent)' }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="mb-20"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c8a96e] opacity-60" />
            <span className="text-[11px] tracking-widest uppercase text-[#c8a96e]">What We Do</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#fafaf9] leading-tight max-w-xl text-balance">
              Services built for <em className="not-italic gradient-text">ambitious</em> brands
            </h2>
            <p className="text-[#6b6b6b] max-w-xs text-sm leading-relaxed">
              Every service we offer is designed to create measurable impact — not just beautiful deliverables.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative bg-[#0f0f0f] p-8 transition-colors duration-300 hover:bg-[#131313] overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms, background-color 0.3s ease`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(200,169,110,0.04), transparent 70%)',
        }}
        aria-hidden
      />

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#c8a96e] transition-all duration-300 group-hover:scale-110"
        style={{
          background: 'rgba(200,169,110,0.08)',
          border: '1px solid rgba(200,169,110,0.15)',
        }}
      >
        {iconMap[service.icon]}
      </div>

      <h3 className="text-[#fafaf9] font-semibold text-lg mb-3 group-hover:text-[#c8a96e] transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      <ul className="flex flex-wrap gap-2">
        {service.features.map((f) => (
          <li
            key={f}
            className="text-[11px] px-3 py-1 rounded-full text-[#9a9a9a]"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {f}
          </li>
        ))}
      </ul>

      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: 'linear-gradient(to right, #c8a96e, transparent)' }}
        aria-hidden
      />
    </div>
  )
}
