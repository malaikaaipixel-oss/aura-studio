import { stats } from '../data'
import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-32 relative overflow-hidden" style={{ background: '#0d0d0d' }}>
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fafaf9 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — visual */}
          <div
            className="relative"
            ref={ref as React.RefObject<HTMLDivElement>}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <AboutVisual />
          </div>

          {/* Right — content */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c8a96e] opacity-60" />
              <span className="text-[11px] tracking-widest uppercase text-[#c8a96e]">About AURA</span>
            </div>

            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#fafaf9] leading-tight mb-8 text-balance">
              We don't just deliver work —{' '}
              <em className="not-italic gradient-text">we build legacies</em>
            </h2>

            <div className="space-y-5 text-[#6b6b6b] leading-relaxed mb-10">
              <p>
                Founded in 2016, AURA Studio has grown from a two-person design studio into a full-service creative agency trusted by brands across Europe and North America. We specialize in premium digital experiences that combine strategic thinking with obsessive craft.
              </p>
              <p>
                Our philosophy is simple: every project deserves the same rigor, creativity, and commercial intelligence we'd bring to our own brand. We don't take on work we can't do brilliantly — which is why our client list is selective, and our results are consistent.
              </p>
              <p>
                We are designers, strategists, developers, and marketers — but above all, we are problem-solvers who happen to love beautiful work.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <StatItem key={stat.label} stat={stat} delay={i * 100} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatItem({
  stat,
  delay,
  inView,
}: {
  stat: { value: string; label: string }
  delay: number
  inView: boolean
}) {
  return (
    <div
      className="group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${400 + delay}ms, transform 0.6s ease ${400 + delay}ms`,
      }}
    >
      <div
        className="p-6 rounded-xl transition-all duration-300 group-hover:border-[#c8a96e]/30"
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="font-display text-4xl gradient-text font-semibold mb-2">
          {stat.value}
        </div>
        <div className="text-sm text-[#6b6b6b]">{stat.label}</div>
      </div>
    </div>
  )
}

function AboutVisual() {
  return (
    <div className="relative">
      {/* Main image placeholder */}
      <div
        className="relative rounded-2xl overflow-hidden aspect-[4/5]"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" fill="none" aria-hidden>
          {/* Abstract team/studio illustration */}
          <rect x="60" y="60" width="280" height="200" rx="12" fill="rgba(200,169,110,0.05)" stroke="rgba(200,169,110,0.1)" />
          <circle cx="130" cy="155" r="40" fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.2)" />
          <circle cx="130" cy="135" r="20" fill="rgba(200,169,110,0.15)" />
          <path d="M90 195 Q130 175 170 195 L170 200 Q130 185 90 200Z" fill="rgba(200,169,110,0.1)" />
          <circle cx="240" cy="155" r="40" fill="rgba(61,122,120,0.08)" stroke="rgba(61,122,120,0.2)" />
          <circle cx="240" cy="135" r="20" fill="rgba(61,122,120,0.15)" />
          <path d="M200 195 Q240 175 280 195 L280 200 Q240 185 200 200Z" fill="rgba(61,122,120,0.1)" />

          <rect x="60" y="300" width="280" height="1" fill="rgba(255,255,255,0.05)" />

          {/* Design tools illustration */}
          <rect x="80" y="320" width="100" height="70" rx="8" fill="rgba(200,169,110,0.05)" stroke="rgba(200,169,110,0.1)" />
          <path d="M100 340 L120 370 L140 340" stroke="rgba(200,169,110,0.4)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
          <circle cx="130" cy="355" r="3" fill="rgba(200,169,110,0.5)" />

          <rect x="200" y="320" width="140" height="70" rx="8" fill="rgba(61,122,120,0.05)" stroke="rgba(61,122,120,0.1)" />
          <line x1="215" y1="340" x2="325" y2="340" stroke="rgba(61,122,120,0.3)" strokeWidth="1.5" />
          <line x1="215" y1="353" x2="295" y2="353" stroke="rgba(61,122,120,0.2)" strokeWidth="1" />
          <line x1="215" y1="366" x2="280" y2="366" stroke="rgba(61,122,120,0.15)" strokeWidth="1" />

          <text x="200" y="440" textAnchor="middle" fill="rgba(200,169,110,0.3)" fontSize="12" fontFamily="serif" letterSpacing="6">AURA STUDIO</text>
          <text x="200" y="460" textAnchor="middle" fill="rgba(200,169,110,0.15)" fontSize="9" letterSpacing="3">EST. 2016</text>
        </svg>
      </div>

      {/* Floating accent card */}
      <div
        className="absolute right-0 bottom-0 lg:-right-6 lg:-bottom-6 rounded-xl p-5 shadow-2xl"
        style={{
          background: 'rgba(10,10,10,0.95)',
          border: '1px solid rgba(200,169,110,0.2)',
          backdropFilter: 'blur(20px)',
          minWidth: 180,
        }}
      >
        <div className="text-[10px] tracking-widest uppercase text-[#6b6b6b] mb-2">Global Reach</div>
        <div className="flex items-end gap-1 mb-1">
          <span className="font-display text-3xl text-[#c8a96e]">28</span>
          <span className="text-sm text-[#6b6b6b] pb-1">countries</span>
        </div>
        <div className="text-[11px] text-[#6b6b6b]">clients served worldwide</div>
      </div>

      {/* Floating accent — top left */}
      <div
        className="absolute left-0 lg:-left-4 top-16 rounded-xl p-4"
        style={{
          background: 'rgba(10,10,10,0.9)',
          border: '1px solid rgba(61,122,120,0.25)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="text-[10px] tracking-widest uppercase text-[#6b6b6b] mb-1">Awards</div>
        <div className="font-semibold text-[#fafaf9] text-sm">Awwwards × CSS Design</div>
      </div>
    </div>
  )
}
