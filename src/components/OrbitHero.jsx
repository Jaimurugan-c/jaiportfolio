import { useMemo } from 'react'
import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layout,
  Monitor,
  Server,
} from 'lucide-react'
import { profile } from '../data/content.js'

function IconChip({ children, label }) {
  return (
    <div
      className="group grid h-12 w-12 place-items-center rounded-2xl border border-brand-200 bg-white shadow-soft transition hover:-translate-y-0.5 hover:border-brand-300"
      title={label}
      aria-label={label}
      role="img"
    >
      <div className="text-brand-700 transition group-hover:text-brand-800">
        {children}
      </div>
    </div>
  )
}

export default function OrbitHero() {
  const orbitItems = useMemo(
    () => [
      { label: 'React', icon: <Layout className="h-5 w-5" /> },
      { label: 'JavaScript', icon: <Code2 className="h-5 w-5" /> },
      { label: 'Node.js', icon: <Server className="h-5 w-5" /> },
      { label: 'Express', icon: <Braces className="h-5 w-5" /> },
      { label: 'MongoDB', icon: <Database className="h-5 w-5" /> },
      { label: 'Git', icon: <GitBranch className="h-5 w-5" /> },
      { label: 'Web', icon: <Globe className="h-5 w-5" /> },
      { label: 'UI', icon: <Monitor className="h-5 w-5" /> },
    ],
    []
  )

  const size = 320
  const center = size / 2
  const radius = 120

  return (
    <div className="relative mx-auto grid max-w-full place-items-center overflow-hidden">
      <div
        className="relative scale-[0.86] sm:scale-100"
        style={{ width: size, height: size, ['--orbit-duration']: '20s' }}
      >
        <div className="absolute inset-0 rounded-full border border-brand-100 bg-brand-50/40" />
        <div className="absolute inset-6 rounded-full border border-brand-100 bg-white" />
        <div className="absolute inset-0 orbit">
          {orbitItems.map((item, idx) => {
            const angle = (idx / orbitItems.length) * Math.PI * 2
            const x = center + radius * Math.cos(angle)
            const y = center + radius * Math.sin(angle)

            return (
              <div
                key={item.label}
                className="absolute orbit-item"
                style={{ left: x - 24, top: y - 24 }}
              >
                <IconChip label={item.label}>{item.icon}</IconChip>
              </div>
            )
          })}
        </div>

        <div className="absolute inset-0 grid place-items-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-brand-500/10" />
            <img
              src="/profile.svg"
              alt={profile.name}
              className="relative h-32 w-32 rounded-full border-2 border-brand-200 bg-white object-cover shadow-soft sm:h-36 sm:w-36"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
