import { useEffect, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from './Container.jsx'
import Button from './Button.jsx'
import { profile } from '../data/content.js'
import { cn } from '../lib/cn.js'

const linkBase =
  'rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-brand-50 hover:text-brand-800'

export default function Navbar() {
  const links = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About Me' },
      { to: '/skills', label: 'Skills' },
      { to: '/projects', label: 'Projects' },
      { to: '/contact', label: 'Contact' },
    ],
    []
  )

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <NavLink
            to="/"
            className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-brand-50"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-sm font-semibold text-white">
              J
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">{profile.name}</div>
              <div className="text-xs text-slate-600">{profile.role}</div>
            </div>
          </NavLink>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  linkBase,
                  isActive
                    ? 'bg-brand-50 text-brand-800'
                    : 'text-slate-700'
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button
            as="a"
            href={profile.cvUrl}
            download
            variant="outline"
            size="sm"
            className="ml-2"
          >
            Download CV
          </Button>
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="py-3">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-3 py-2 text-sm font-medium transition',
                      isActive
                        ? 'bg-brand-50 text-brand-800'
                        : 'text-slate-700 hover:bg-brand-50 hover:text-brand-800'
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Button
                as="a"
                href={profile.cvUrl}
                download
                variant="outline"
                className="mt-2"
                onClick={() => setOpen(false)}
              >
                Download CV
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
