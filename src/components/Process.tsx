import { process } from '../data'
import { useInView } from '../hooks/useInView'

export default function Process() {
  const { ref, inView } = useInView()

  return (
    <section id="process" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-10"
          style={{ background: 'linear-gradient(to right, transparent, #c8a96e, transparent)' }}
        />
      </div>

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
            <span className="text-[11px] tracking-widest uppercase text-[#c8a96e]">How We Work</span>
            <div className="w-8 h-px bg-[#c8a96e] opacity-60" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#fafaf9] leading-tight mb-6 text-balance">
            Our process, <em className="not-italic gradient-text">refined</em>
          </h2>
          <p className="text-[#6b6b6b] max-w-md mx-auto text-sm leading-relaxed">
            Eight years of iteration have distilled our workflow into four clear phases — each one designed to eliminate guesswork and maximize the quality of your outcome.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-16 left-0 right-0 h-px hidden lg:block opacity-20"
            style={{ background: 'linear-gradient(to right, transparent 5%, #c8a96e 30%, #c8a96e 70%, transparent 95%)' }}
            aria-hidden
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {process.map((step, i) => (
              <ProcessStep key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index }: { step: typeof process[0]; index: number }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="group relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
      }}
    >
      {/* Step number */}
      <div className="relative mb-8">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-mono font-semibold text-[#c8a96e] relative z-10 group-hover:scale-110 transition-transform duration-300"
          style={{
            background: 'rgba(200,169,110,0.08)',
            border: '1px solid rgba(200,169,110,0.3)',
          }}
        >
          {step.step}
        </div>
        {/* Pulse ring */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"
          style={{ background: 'rgba(200,169,110,0.05)' }}
          aria-hidden
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-[#fafaf9] mb-4 group-hover:text-[#c8a96e] transition-colors duration-300">
        {step.title}
      </h3>
      <p className="text-[#6b6b6b] text-sm leading-relaxed">
        {step.description}
      </p>

      {/* Arrow indicator (except last) */}
      {index < 3 && (
        <div
          className="absolute top-4 -right-3 text-[#c8a96e] opacity-20 hidden lg:block"
          aria-hidden
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  )
}
