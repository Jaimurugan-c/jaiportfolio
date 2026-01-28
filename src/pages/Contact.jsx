import { Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import Reveal from '../components/Reveal.jsx'
import Section from '../components/Section.jsx'
import { profile } from '../data/content.js'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! Your message is ready to send via email.')

    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')

    const subject = encodeURIComponent(`Portfolio Contact: ${name}`)
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Want to collaborate or hire? Send a message — I’ll get back quickly."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal>
          <Card className="p-6 lg:col-span-2">
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span className="font-medium text-slate-900">Name</span>
                  <input
                    name="name"
                    required
                    className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="font-medium text-slate-900">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm">
                <span className="font-medium text-slate-900">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-500/20"
                  placeholder="Tell me about your project or role…"
                />
              </label>

              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit">
                  <Send className="h-4 w-4" /> Send
                </Button>
                {status ? <div className="text-sm text-slate-600">{status}</div> : null}
              </div>
            </form>
          </Card>
        </Reveal>

        <Reveal delay={0.06}>
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">Direct</div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 transition hover:border-brand-200 hover:bg-brand-50"
              >
                <Mail className="h-4 w-4 text-brand-700" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 transition hover:border-brand-200 hover:bg-brand-50"
              >
                <Phone className="h-4 w-4 text-brand-700" /> {profile.phone}
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              Prefer WhatsApp/LinkedIn? Update the links in{' '}
              <span className="font-mono text-xs">src/data/content.js</span>.
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
