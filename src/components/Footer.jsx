import Container from './Container.jsx'
import { profile } from '../data/content.js'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <div className="text-sm font-semibold text-slate-900">{profile.name}</div>
          <div className="mt-1 text-sm text-slate-600">{profile.role}</div>
          <div className="mt-3 text-xs text-slate-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
