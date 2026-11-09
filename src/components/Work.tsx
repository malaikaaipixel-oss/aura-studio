import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { type ProjectCategory, projects } from '../data'
import { useInView } from '../hooks/useInView'

const categories: ProjectCategory[] = ['All', 'Branding', 'Web', 'UI/UX', 'Marketing']

const projectVisuals: Record<string, React.ReactNode> = {
  coffee: <CoffeeVisual />,
  finance: <FinanceVisual />,
  skincare: <SkincareVisual />,
  architecture: <ArchitectureVisual />,
  health: <HealthVisual />,
  spirits: <SpiritsVisual />,
}

export default function Work() {
  const [active, setActive] = useState<ProjectCategory>('All')
  const { ref, inView } = useInView()

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="work" className="py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c8a96e] opacity-60" />
            <span className="text-[11px] tracking-widest uppercase text-[#c8a96e]">Selected Work</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#fafaf9] leading-tight text-balance">
              Projects we're <em className="not-italic gradient-text">proud of</em>
            </h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active === cat
                      ? 'bg-[#c8a96e] text-[#0a0a0a]'
                      : 'border border-white/10 text-[#6b6b6b] hover:border-white/30 hover:text-[#fafaf9]'
                  }`}
                  aria-pressed={active === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-16 text-center">
          <button
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-[#9a9a9a] text-sm font-medium hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all duration-300"
            aria-label="View all case studies (demonstration)"
          >
            View All Case Studies
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView()

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
        aspectRatio: index % 3 === 1 ? '4/5' : '4/3',
        background: project.color,
      }}
      aria-label={`${project.title} — ${project.tags.join(', ')}`}
    >
      {/* Visual fill */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        {projectVisuals[project.image]}
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: 'rgba(10,10,10,0.5)', backdropFilter: 'blur(2px)' }}
        aria-hidden
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2.5 py-1 rounded-full font-medium tracking-wide"
                style={{
                  background: 'rgba(10,10,10,0.6)',
                  color: project.accent,
                  border: `1px solid ${project.accent}30`,
                  backdropFilter: 'blur(8px)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[11px] text-[#6b6b6b] font-mono">{project.year}</span>
        </div>

        {/* Bottom */}
        <div
          className="translate-y-2 group-hover:translate-y-0 transition-transform duration-400"
        >
          <div
            className="rounded-xl p-4 mb-0"
            style={{
              background: 'rgba(10,10,10,0.8)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[#fafaf9] font-semibold mb-1">{project.title}</h3>
                <p
                  className="text-xs leading-relaxed text-[#6b6b6b] opacity-0 group-hover:opacity-100 transition-opacity duration-400 max-h-0 group-hover:max-h-20 overflow-hidden"
                  style={{ transition: 'opacity 0.4s ease 0.1s, max-height 0.4s ease' }}
                >
                  {project.description}
                </p>
              </div>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: project.accent, color: '#0a0a0a' }}
                aria-hidden
              >
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

// ——— Project visual components ———

function CoffeeVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2a1f14 0%, #1a130d 100%)' }}>
      <svg viewBox="0 0 300 300" className="w-3/4 h-3/4 opacity-70" fill="none">
        <circle cx="150" cy="150" r="100" stroke="#c8a96e" strokeWidth="1" opacity="0.3" />
        <circle cx="150" cy="150" r="60" fill="#1a1008" stroke="#c8a96e" strokeWidth="1.5" />
        <path d="M130 130 Q150 110 170 130 Q180 150 170 160 Q150 170 130 160 Q120 150 130 130Z" fill="#c8a96e" opacity="0.8" />
        <path d="M135 140 Q150 130 165 140 Q170 150 165 158 Q150 163 135 158 Q130 150 135 140Z" fill="#2a1f14" />
        <path d="M150 100 Q155 85 160 80 Q165 75 170 80" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M140 95 Q145 80 150 75 Q155 70 160 75" stroke="#c8a96e" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <text x="150" y="220" textAnchor="middle" fill="#c8a96e" fontSize="11" opacity="0.5" fontFamily="serif">NOMAD</text>
      </svg>
    </div>
  )
}

function FinanceVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0d1f2d 0%, #081420 100%)' }}>
      <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
        <rect x="40" y="180" width="30" height="80" fill="#3d7a78" opacity="0.6" rx="3" />
        <rect x="85" y="150" width="30" height="110" fill="#3d7a78" opacity="0.7" rx="3" />
        <rect x="130" y="110" width="30" height="150" fill="#3d7a78" opacity="0.8" rx="3" />
        <rect x="175" y="80" width="30" height="180" fill="#3d7a78" rx="3" />
        <rect x="220" y="50" width="30" height="210" fill="#3d7a78" rx="3" />
        <path d="M55 175 L100 145 L145 105 L190 75 L235 45" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" />
        <circle cx="235" cy="45" r="5" fill="#c8a96e" />
        <line x1="30" y1="260" x2="270" y2="260" stroke="#3d7a78" strokeWidth="1" opacity="0.4" />
        <text x="150" y="295" textAnchor="middle" fill="#3d7a78" fontSize="10" opacity="0.6">MERIDIAN</text>
      </svg>
    </div>
  )
}

function SkincareVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2a1a1a 0%, #1a0f0f 100%)' }}>
      <svg viewBox="0 0 300 300" className="w-3/4 h-3/4 opacity-80" fill="none">
        <ellipse cx="150" cy="150" rx="70" ry="90" stroke="#c45c5c" strokeWidth="1" opacity="0.4" />
        <ellipse cx="150" cy="150" rx="50" ry="70" fill="#1f0e0e" stroke="#c45c5c" strokeWidth="1.5" />
        <rect x="130" y="210" width="40" height="8" rx="4" fill="#c45c5c" opacity="0.7" />
        <rect x="140" y="218" width="20" height="30" rx="2" fill="#c45c5c" opacity="0.4" />
        <circle cx="150" cy="130" r="18" fill="#c45c5c" opacity="0.15" />
        <path d="M140 125 Q150 115 160 125 Q165 135 160 142 Q150 147 140 142 Q135 135 140 125Z" fill="#c45c5c" opacity="0.4" />
        <text x="150" y="80" textAnchor="middle" fill="#c45c5c" fontSize="11" opacity="0.5" fontFamily="serif">SOLEIL</text>
      </svg>
    </div>
  )
}

function ArchitectureVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #141414 0%, #0a0a0a 100%)' }}>
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-80" fill="none">
        <rect x="80" y="180" width="60" height="80" stroke="#9a9a9a" strokeWidth="1" />
        <rect x="160" y="140" width="60" height="120" stroke="#9a9a9a" strokeWidth="1" />
        <rect x="100" y="100" width="40" height="80" stroke="#9a9a9a" strokeWidth="1" />
        <line x1="80" y1="180" x2="100" y2="100" stroke="#9a9a9a" strokeWidth="1" opacity="0.5" />
        <rect x="170" y="155" width="8" height="12" fill="#9a9a9a" opacity="0.3" />
        <rect x="190" y="155" width="8" height="12" fill="#9a9a9a" opacity="0.3" />
        <rect x="170" y="185" width="8" height="12" fill="#9a9a9a" opacity="0.3" />
        <line x1="40" y1="260" x2="260" y2="260" stroke="#2a2a2a" strokeWidth="2" />
        <path d="M110 180 L110 110 L140 80 L140 180Z" fill="#1a1a1a" stroke="#9a9a9a" strokeWidth="0.5" />
      </svg>
    </div>
  )
}

function HealthVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0d1a1a 0%, #07100f 100%)' }}>
      <svg viewBox="0 0 300 300" className="w-3/4 h-3/4 opacity-80" fill="none">
        <rect x="50" y="80" width="200" height="160" rx="20" fill="#0f2020" stroke="#3d7a78" strokeWidth="1" />
        <text x="150" y="115" textAnchor="middle" fill="#3d7a78" fontSize="10" opacity="0.7" letterSpacing="3">PULSE</text>
        <path d="M70 155 L100 155 L115 130 L130 175 L145 120 L160 165 L175 145 L190 155 L220 155" stroke="#3d7a78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="220" cy="155" r="4" fill="#3d7a78" />
        <rect x="80" y="195" width="50" height="6" rx="3" fill="#3d7a78" opacity="0.3" />
        <rect x="80" y="207" width="35" height="6" rx="3" fill="#3d7a78" opacity="0.2" />
        <circle cx="210" cy="200" r="20" stroke="#3d7a78" strokeWidth="1.5" opacity="0.4" />
        <text x="210" y="205" textAnchor="middle" fill="#3d7a78" fontSize="14" fontWeight="bold">72</text>
      </svg>
    </div>
  )
}

function SpiritsVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a0f1a 0%, #100810 100%)' }}>
      <svg viewBox="0 0 300 300" className="w-3/4 h-3/4 opacity-80" fill="none">
        <path d="M130 60 L170 60 L175 90 L190 130 L195 250 L105 250 L110 130 L125 90 Z" fill="#1a0f1a" stroke="#a8893e" strokeWidth="1.5" />
        <path d="M138 60 L162 60 L162 75 L138 75 Z" fill="#a8893e" opacity="0.4" />
        <path d="M150 50 L150 60" stroke="#a8893e" strokeWidth="2" strokeLinecap="round" />
        <path d="M115 150 L185 150" stroke="#a8893e" strokeWidth="0.5" opacity="0.4" />
        <path d="M112 170 L188 170" stroke="#a8893e" strokeWidth="0.5" opacity="0.3" />
        <ellipse cx="150" cy="200" rx="35" ry="8" fill="#a8893e" opacity="0.1" />
        <text x="150" y="215" textAnchor="middle" fill="#a8893e" fontSize="10" opacity="0.6" letterSpacing="2">ALCHEMY</text>
        <circle cx="150" cy="115" r="15" fill="#a8893e" opacity="0.1" stroke="#a8893e" strokeWidth="0.5" />
        <path d="M143 112 Q150 106 157 112 Q160 118 157 122 Q150 125 143 122 Q140 118 143 112Z" fill="#a8893e" opacity="0.3" />
      </svg>
    </div>
  )
}
