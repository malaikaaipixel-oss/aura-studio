import { ArrowDownRight, ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a]"
      aria-label="Hero"
    >
      {/* Background geometric composition */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden>
        {/* Large ambient circle */}
        <div
          className="absolute rounded-full"
          style={{
            width: '80vw',
            height: '80vw',
            maxWidth: 900,
            maxHeight: 900,
            top: '-30%',
            right: '-20%',
            background: 'radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#fafaf9 1px, transparent 1px), linear-gradient(90deg, #fafaf9 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Rotating ring */}
        <div
          className="absolute animate-spin-slow opacity-30"
          style={{
            width: 520,
            height: 520,
            top: '50%',
            right: '-5%',
            transform: 'translateY(-50%)',
            border: '1px solid rgba(200,169,110,0.4)',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute animate-spin-slow opacity-20"
          style={{
            width: 700,
            height: 700,
            top: '50%',
            right: '-15%',
            transform: 'translateY(-50%)',
            border: '1px dashed rgba(200,169,110,0.3)',
            borderRadius: '50%',
            animationDuration: '35s',
          }}
        />
        {/* Accent line */}
        <div
          className="absolute left-0 bottom-1/3 w-px h-40 opacity-30"
          style={{ background: 'linear-gradient(to bottom, transparent, #c8a96e, transparent)', marginLeft: '5%' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a96e]/30 text-xs text-[#c8a96e] tracking-widest uppercase mb-8 transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <Sparkles size={12} />
              Creative Digital Agency
            </div>

            {/* Headline */}
            <h1
              className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[1.02] text-[#fafaf9] mb-8 transition-all duration-700 text-balance"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '120ms',
              }}
            >
              We craft{' '}
              <em className="not-italic gradient-text">digital</em>
              {' '}experiences that{' '}
              <span className="relative inline-block">
                elevate
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2 10 Q100 2 198 10"
                    stroke="#c8a96e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </span>
              {' '}brands.
            </h1>

            {/* Description */}
            <p
              className="text-[#9a9a9a] text-lg leading-relaxed max-w-xl mb-12 transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '220ms',
              }}
            >
              AURA Studio is a premium creative agency. We partner with ambitious brands to design websites, build identities, and run marketing strategies that drive real growth.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-16 transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '320ms',
              }}
            >
              <button
                onClick={() => scrollTo('#contact')}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#c8a96e] text-[#0a0a0a] font-medium text-sm tracking-wide hover:bg-[#dfc28e] transition-all duration-300"
              >
                Start a Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollTo('#work')}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full border border-white/15 text-[#fafaf9] text-sm font-medium tracking-wide hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                Explore Our Work
                <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200" />
              </button>
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap items-center gap-8 transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transitionDelay: '450ms',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['CL', 'TV', 'PS', 'MR'].map((initials, i) => (
                    <div
                      key={initials}
                      className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center text-[9px] font-semibold text-[#0a0a0a]"
                      style={{ background: ['#c8a96e','#3d7a78','#c45c5c','#9a9a9a'][i], zIndex: 4 - i }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs text-[#fafaf9] font-medium">120+ Projects</div>
                  <div className="text-[10px] text-[#6b6b6b]">Delivered globally</div>
                </div>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div>
                <div className="text-xs text-[#fafaf9] font-medium">94% Retention Rate</div>
                <div className="text-[10px] text-[#6b6b6b]">Clients come back</div>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div>
                <div className="text-xs text-[#fafaf9] font-medium">8+ Years</div>
                <div className="text-[10px] text-[#6b6b6b]">Of excellence</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div
            className="lg:col-span-5 relative transition-all duration-1000"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '300ms',
            }}
          >
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700"
        style={{ opacity: loaded ? 0.5 : 0, transitionDelay: '700ms' }}
        aria-hidden
      >
        <div className="text-[10px] tracking-widest uppercase text-[#6b6b6b]">Scroll</div>
        <div className="w-px h-12 bg-gradient-to-b from-[#6b6b6b] to-transparent" />
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none">
      {/* Main card */}
      <div
        className="absolute inset-8 rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #111111 100%)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Abstract design pattern inside card */}
        <div className="absolute inset-0" aria-hidden>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full opacity-25"
            style={{ background: 'radial-gradient(circle, #c8a96e 0%, transparent 70%)' }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="120" stroke="#c8a96e" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="80" stroke="#c8a96e" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="160" stroke="#c8a96e" strokeWidth="0.5" strokeDasharray="4 8" />
            <line x1="40" y1="200" x2="360" y2="200" stroke="#c8a96e" strokeWidth="0.5" opacity="0.5" />
            <line x1="200" y1="40" x2="200" y2="360" stroke="#c8a96e" strokeWidth="0.5" opacity="0.5" />
            <line x1="85" y1="85" x2="315" y2="315" stroke="#c8a96e" strokeWidth="0.5" opacity="0.3" />
            <line x1="315" y1="85" x2="85" y2="315" stroke="#c8a96e" strokeWidth="0.5" opacity="0.3" />
          </svg>
          {/* Letter A */}
          <div
            className="absolute inset-0 flex items-center justify-center font-display text-[160px] font-bold opacity-[0.06] text-[#c8a96e] select-none"
            style={{ lineHeight: 1 }}
          >
            A
          </div>
        </div>

        {/* Floating metric cards */}
        <div
          className="absolute bottom-6 left-6 right-6 rounded-xl p-4"
          style={{
            background: 'rgba(10,10,10,0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] tracking-widest uppercase text-[#6b6b6b]">Project Performance</span>
            <span className="text-[10px] text-[#3d7a78] font-medium">↑ 240% YoY</span>
          </div>
          <div className="flex gap-1 h-10 items-end">
            {[40, 55, 35, 65, 50, 80, 70, 90, 75, 95, 85, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: i >= 9
                    ? 'linear-gradient(to top, #c8a96e, #dfc28e)'
                    : 'rgba(200,169,110,0.2)',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge top-left */}
      <div
        className="absolute top-4 left-0 rounded-xl px-4 py-3 shadow-2xl"
        style={{
          background: 'rgba(20,20,20,0.95)',
          border: '1px solid rgba(200,169,110,0.3)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="text-[10px] text-[#6b6b6b] uppercase tracking-widest mb-1">Trusted by</div>
        <div className="text-sm font-medium text-[#fafaf9]">120+ Brands</div>
      </div>

      {/* Floating badge bottom-right */}
      <div
        className="absolute bottom-2 right-0 rounded-xl px-4 py-3 shadow-2xl"
        style={{
          background: 'rgba(20,20,20,0.95)',
          border: '1px solid rgba(61,122,120,0.3)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#3d7a78] animate-pulse-soft" />
          <div className="text-[10px] text-[#3d7a78] font-medium">Available for projects</div>
        </div>
      </div>
    </div>
  )
}
