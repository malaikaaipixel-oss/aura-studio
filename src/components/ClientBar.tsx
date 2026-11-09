import { brandClients } from '../data'

export default function ClientBar() {
  const doubled = [...brandClients, ...brandClients]

  return (
    <div
      className="py-6 relative overflow-hidden"
      style={{
        background: '#0d0d0d',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
      aria-label="Trusted by brands"
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0d0d0d, transparent)' }}
        aria-hidden
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0d0d0d, transparent)' }}
        aria-hidden
      />

      <div className="flex animate-marquee whitespace-nowrap" aria-hidden>
        {doubled.map((client, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 mx-8 text-xs tracking-widest uppercase text-[#3a3a3a] font-medium"
          >
            <span
              className="inline-block w-1 h-1 rounded-full bg-[#c8a96e] opacity-40"
              aria-hidden
            />
            {client}
          </span>
        ))}
      </div>
    </div>
  )
}
