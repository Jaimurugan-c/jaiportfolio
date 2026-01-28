import {
  Mail,
  Phone,
  Send,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import { useState } from 'react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import Reveal from '../components/Reveal.jsx'
import Section from '../components/Section.jsx'
import { profile } from '../data/content.js'

export default function Contact() {
  const [status, setStatus] = useState(null) // null | 'loading' | 'success'
  const [error, setError] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setError(null)

    const form = new FormData(e.currentTarget)
    const name = form.get('name')?.toString().trim()
    const email = form.get('email')?.toString().trim()
    const message = form.get('message')?.toString().trim()

    if (!name || !email || !message) {
      setError('Please fill in all fields')
      setStatus(null)
      return
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )

    // Small delay to show loading state nicely
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('success')
      setTimeout(() => setStatus(null), 4000)
    }, 600)
  }

  return (
    <Section
      id="contact"
      title="Let's Start a Conversation"
      subtitle="I'm currently open to new opportunities, interesting projects and good conversations."
      className="bg-gradient-to-b from-white to-slate-50/70"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* ===================== FORM ===================== */}
          <Reveal className="lg:col-span-3">
            <Card className="overflow-hidden border border-slate-200/70 bg-white/70 backdrop-blur-sm shadow-xl shadow-slate-200/30 transition-all hover:shadow-2xl hover:shadow-slate-300/40">
              <div className="p-6 sm:p-8 lg:p-10">
                <h3 className="mb-6 text-2xl font-semibold tracking-tight text-slate-800">
                  Send me a message
                </h3>

                <form onSubmit={onSubmit} className="grid gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FloatingLabelInput
                      label="Your Name"
                      name="name"
                      required
                      autoComplete="name"
                    />

                    <FloatingLabelInput
                      label="Email Address"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                  </div>

                  <FloatingLabelInput
                    label="Your Message"
                    name="message"
                    as="textarea"
                    rows={5}
                    required
                  />

                  <div className="flex flex-wrap items-center gap-4">
                    <Button
                      type="submit"
                      disabled={status === 'loading'}
                      className="min-w-[160px] gap-2"
                    >
                      {status === 'loading' ? (
                        <>Sending…</>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {status === 'success' && (
                      <div className="flex items-center gap-2 text-sm font-medium text-green-700">
                        <CheckCircle2 className="h-5 w-5" />
                        Opening your mail app…
                      </div>
                    )}

                    {error && (
                      <div className="flex items-center gap-2 text-sm font-medium text-red-700">
                        <AlertCircle className="h-5 w-5" />
                        {error}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </Card>
          </Reveal>

          {/* ===================== INFO + SOCIALS ===================== */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <Card className="h-full border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white p-6 shadow-xl shadow-slate-200/20 backdrop-blur-sm transition-all hover:shadow-2xl lg:p-8">
              <div className="space-y-8">
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-slate-800">
                    Get in Touch
                  </h4>

                  <div className="space-y-3">
                    <ContactLink
                      icon={<Mail className="h-5 w-5" />}
                      href={`mailto:${profile.email}`}
                      label={profile.email}
                      color="brand"
                    />

                    <ContactLink
                      icon={<Phone className="h-5 w-5" />}
                      href={`tel:${profile.phone.replace(/\s/g, '')}`}
                      label={profile.phone}
                      color="emerald"
                    />

                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-slate-700">
                      <MapPin className="h-5 w-5 text-rose-600" />
                      {profile.location}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-lg font-semibold text-slate-800">
                    Find me online
                  </h4>

                  <div className="grid grid-cols-2 gap-4">
                    <SocialLink
                      href={profile.socials.linkedin}
                      icon={<Linkedin className="h-5 w-5" />}
                      label="LinkedIn"
                      color="blue"
                    />

                    <SocialLink
                      href={profile.socials.github}
                      icon={<Github className="h-5 w-5" />}
                      label="GitHub"
                      color="slate"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

// ────────────────────────────────────────────────
// Reusable sub-components
// ────────────────────────────────────────────────

function FloatingLabelInput({ label, name, type = 'text', as = 'input', ...props }) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const handleChange = (e) => setHasValue(!!e.target.value.trim())

  return (
    <div className="relative">
      {as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          className={`
            peer w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-sm
            outline-none transition-all duration-200 placeholder-transparent
            focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20
            ${focused || hasValue ? 'pt-6 pb-2' : 'py-3'}
          `}
          placeholder={label}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false)
            setHasValue(!!e.target.value.trim())
          }}
          onChange={handleChange}
          {...props}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          className={`
            peer w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-sm
            outline-none transition-all duration-200 placeholder-transparent
            focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20
            ${focused || hasValue ? 'pt-6 pb-2' : 'py-3'}
          `}
          placeholder={label}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false)
            setHasValue(!!e.target.value.trim())
          }}
          onChange={handleChange}
          {...props}
        />
      )}

      <label
        htmlFor={name}
        className={`
          pointer-events-none absolute left-4 origin-left text-sm font-medium text-slate-500
          transition-all duration-200
          ${focused || hasValue
            ? '-translate-y-2 scale-90 text-brand-600'
            : 'translate-y-3.5 scale-100 text-slate-400'}
        `}
      >
        {label}
      </label>
    </div>
  )
}

function ContactLink({ icon, href, label, color = 'brand' }) {
  const colors = {
    brand: 'hover:border-brand-300 hover:bg-brand-50/70 text-brand-700',
    emerald: 'hover:border-emerald-300 hover:bg-emerald-50/70 text-emerald-700',
  }

  return (
    <a
      href={href}
      className={`
        group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/60 px-4 py-3
        text-sm transition-all ${colors[color] || colors.brand}
      `}
    >
      <span className="text-slate-500 transition-colors group-hover:text-current">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </a>
  )
}

function SocialLink({ href, icon, label, color = 'slate' }) {
  const colors = {
    blue: 'hover:border-blue-400/50 hover:bg-blue-50/60 text-blue-700',
    slate: 'hover:border-slate-400/50 hover:bg-slate-100/60 text-slate-700',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`
        flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white/60
        px-5 py-3.5 text-sm font-medium transition-all ${colors[color] || colors.slate}
      `}
    >
      {icon}
      {label}
    </a>
  )
}