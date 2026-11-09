import { Quote } from 'lucide-react'
import { testimonials } from '../data'
import { useInView } from '../hooks/useInView'

export default function Testimonials() {
  const { ref, inView } = useInView()

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden" style={{ background: '#0d0d0d' }}>
      {/* Decorative accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{ background: 'linear-gradient(to right, transparent, #c8a96e 40%, #c8a96e 60%, transparent)' }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="mb-20 text-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c8a96e] opacity-60" />
            <span className="text-[11px] tracking-widest uppercase text-[#c8a96e]">Client Stories</span>
            <div className="w-8 h-px bg-[#c8a96e] opacity-60" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#fafaf9] leading-tight text-balance">
            Words from the <em className="not-italic gradient-text">brands we've built</em>
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const { ref, inView } = useInView()

  return (
    <figure
      ref={ref as React.RefObject<HTMLElement>}
      className="group relative rounded-2xl p-8 flex flex-col transition-all duration-400 hover:-translate-y-1"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms, box-shadow 0.3s ease`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          boxShadow: `0 0 40px ${testimonial.accent}15`,
          border: `1px solid ${testimonial.accent}20`,
        }}
        aria-hidden
      />

      {/* Quote icon */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
        style={{
          background: `${testimonial.accent}12`,
          color: testimonial.accent,
        }}
      >
        <Quote size={18} />
      </div>

      {/* Quote text */}
      <blockquote className="text-[#9a9a9a] text-sm leading-relaxed flex-1 mb-8">
        "{testimonial.quote}"
      </blockquote>

      {/* Attribution */}
      <figcaption className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
          style={{
            background: `${testimonial.accent}20`,
            color: testimonial.accent,
            border: `1px solid ${testimonial.accent}30`,
          }}
          aria-hidden
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="text-[#fafaf9] text-sm font-semibold">{testimonial.name}</div>
          <div className="text-[11px] text-[#6b6b6b]">
            {testimonial.role} · {testimonial.company}
          </div>
        </div>
      </figcaption>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(to right, ${testimonial.accent}, transparent)` }}
        aria-hidden
      />
    </figure>
  )
}
