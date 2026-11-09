import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { services } from '../data'
import { useInView } from '../hooks/useInView'

type FormData = {
  name: string
  email: string
  service: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState<FormData>({ name: '', email: '', service: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!form.email.trim()) {
      errs.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!form.service) errs.service = 'Please select a service.'
    if (!form.message.trim()) errs.message = 'Please describe your project.'
    else if (form.message.trim().length < 20) errs.message = 'Please write at least 20 characters.'
    return errs
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background gradient blob */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c8a96e 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
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
            <span className="text-[11px] tracking-widest uppercase text-[#c8a96e]">Let's Collaborate</span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#fafaf9] leading-tight max-w-2xl text-balance">
            Ready to start something <em className="not-italic gradient-text">remarkable?</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left: Info */}
          <div
            className="lg:col-span-2 flex flex-col gap-8"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            <p className="text-[#6b6b6b] leading-relaxed">
              Whether you're launching something new, refreshing an existing brand, or scaling your digital presence — we'd love to hear about it. Fill out the form and we'll be in touch within one business day.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: <Mail size={16} />, label: 'Email', value: 'hello@aura-studio.co' },
                { icon: <Phone size={16} />, label: 'Phone', value: '+1 (555) 012-3456' },
                { icon: <MapPin size={16} />, label: 'Location', value: 'New York · London · Remote' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-[#c8a96e] flex-shrink-0"
                    style={{ background: 'rgba(200,169,110,0.08)', border: '1px solid rgba(200,169,110,0.15)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] tracking-widest uppercase text-[#6b6b6b] mb-0.5">{item.label}</div>
                    <div className="text-sm text-[#fafaf9]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability notice */}
            <div
              className="rounded-xl p-5"
              style={{
                background: 'rgba(61,122,120,0.07)',
                border: '1px solid rgba(61,122,120,0.2)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#3d7a78] animate-pulse-soft" />
                <span className="text-xs font-medium text-[#3d7a78]">Currently accepting new projects</span>
              </div>
              <p className="text-[11px] text-[#6b6b6b] leading-relaxed">
                Our next available project slot opens Q1 2025. Reach out early to secure your place.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(20px)',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
            }}
          >
            {submitted ? (
              <SuccessMessage />
            ) : (
              <ContactForm
                form={form}
                errors={errors}
                submitting={submitting}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactForm({
  form,
  errors,
  submitting,
  onChange,
  onSubmit,
}: {
  form: FormData
  errors: FormErrors
  submitting: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) {
  const inputClass = (field: keyof FormData) =>
    `w-full bg-[#111111] border rounded-xl px-5 py-4 text-sm text-[#fafaf9] placeholder-[#3a3a3a] outline-none transition-all duration-200 focus:bg-[#141414] ${
      errors[field]
        ? 'border-[#c45c5c]/60 focus:border-[#c45c5c]'
        : 'border-white/8 focus:border-[#c8a96e]/50'
    }`

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs tracking-wide text-[#6b6b6b] mb-2">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Alex Johnson"
            value={form.name}
            onChange={onChange}
            className={inputClass('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-[#c45c5c]">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-xs tracking-wide text-[#6b6b6b] mb-2">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="alex@company.com"
            value={form.email}
            onChange={onChange}
            className={inputClass('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-[#c45c5c]">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs tracking-wide text-[#6b6b6b] mb-2">
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={onChange}
          className={`${inputClass('service')} cursor-pointer`}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? 'service-error' : undefined}
        >
          <option value="" disabled>Select a service...</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>{s.title}</option>
          ))}
          <option value="other">Something else entirely</option>
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1.5 text-xs text-[#c45c5c]">{errors.service}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-wide text-[#6b6b6b] mb-2">
          Tell Us About Your Project *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Describe your project, goals, and anything you think we should know..."
          value={form.message}
          onChange={onChange}
          className={`${inputClass('message')} resize-none`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-[#c45c5c]">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 rounded-xl text-sm font-semibold tracking-wide bg-[#c8a96e] text-[#0a0a0a] hover:bg-[#dfc28e] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
      >
        {submitting ? (
          <span className="flex items-center justify-center gap-3">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message →'
        )}
      </button>

      <p className="text-[11px] text-[#3a3a3a] text-center leading-relaxed">
        By submitting, you agree to our privacy policy. We typically respond within 24 business hours.
      </p>
    </form>
  )
}

function SuccessMessage() {
  return (
    <div
      className="rounded-2xl p-10 flex flex-col items-center text-center"
      style={{
        background: 'rgba(61,122,120,0.06)',
        border: '1px solid rgba(61,122,120,0.2)',
      }}
      role="alert"
      aria-live="polite"
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
        style={{ background: 'rgba(61,122,120,0.12)', border: '1px solid rgba(61,122,120,0.3)' }}
      >
        <CheckCircle size={28} className="text-[#3d7a78]" />
      </div>
      <h3 className="font-display text-2xl text-[#fafaf9] mb-4">Message received!</h3>
      <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6 max-w-sm">
        Thank you for reaching out. We've received your details and will be in touch within one business day.
      </p>
      <div
        className="w-full rounded-xl p-4 text-xs text-[#6b6b6b] leading-relaxed"
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
      >
        <strong className="text-[#9a9a9a]">Demonstration Notice:</strong> This is a frontend-only demo form. No message has been sent, and no data has been transmitted or stored. This form is for demonstration purposes only.
      </div>
    </div>
  )
}
