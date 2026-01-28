import { useMemo, useState } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import Reveal from '../components/Reveal.jsx'
import Section from '../components/Section.jsx'
import { projects } from '../data/content.js'

function TabButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? 'rounded-xl border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800'
          : 'rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800'
      }
    >
      {children}
    </button>
  )
}

function ProjectCard({ p, onOpen }) {
  return (
    <Card className="group overflow-hidden">
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-base font-semibold text-slate-900">{p.title}</div>
            <div className="mt-1 text-sm text-slate-600">{p.subtitle}</div>
          </div>
          {onOpen && (
            <Button onClick={onOpen} size="sm" variant="outline">
              View
            </Button>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.slice(0, 5).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
      {p.screenshots?.[0] && (
        <div className="border-t border-slate-200 bg-brand-50/50">
          <img
            src={p.screenshots[0]}
            alt={`${p.title} screenshot`}
            className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      )}
    </Card>
  )
}

function WebCard({ p }) {
  return (
    <Card className="p-5">
      <div className="text-base font-semibold text-slate-900">{p.title}</div>
      <div className="mt-1 text-sm text-slate-600">{p.subtitle}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button as="a" href={p.liveDemo} target="_blank" rel="noreferrer" size="sm">
          <ExternalLink className="h-4 w-4" /> Live Demo
        </Button>
        <Button
          as="a"
          href={p.github}
          target="_blank"
          rel="noreferrer"
          size="sm"
          variant="outline"
        >
          <Github className="h-4 w-4" /> GitHub
        </Button>
      </div>
    </Card>
  )
}

function ProjectModal({ open, onClose, project }) {
  if (!open || !project) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-slate-900/35"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 top-10 mx-auto w-full max-w-4xl px-4 sm:top-14">
        <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft2">
          <div className="flex items-center justify-between border-b border-slate-200 p-4 sm:p-5">
            <div>
              <div className="text-sm font-semibold text-slate-900">{project.title}</div>
              <div className="mt-1 text-sm text-slate-600">{project.subtitle}</div>
            </div>
            <button
              onClick={onClose}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-[calc(100%-72px)] overflow-y-auto p-4 sm:p-6">
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="space-y-3">
                {project.screenshots?.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${project.title} screenshot`}
                    className="w-full rounded-2xl border border-slate-200 bg-white"
                    loading="lazy"
                  />
                ))}
              </div>

              <div>
                <div className="text-sm font-semibold text-slate-900">Description</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {project.description}
                </p>

                <div className="mt-5 text-sm font-semibold text-slate-900">Tech stack</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                {project.highlights?.length ? (
                  <>
                    <div className="mt-5 text-sm font-semibold text-slate-900">Highlights</div>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                      {project.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-3">
                
                  <Button
                    as="a"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [tab, setTab] = useState('mern')
  const [openSlug, setOpenSlug] = useState(null)

  const currentMern = useMemo(
    () => projects.mern.find((p) => p.slug === openSlug) || null,
    [openSlug]
  )

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work across MERN stack builds and web design projects."
    >
      <div className="flex flex-wrap items-center gap-2">
        <TabButton active={tab === 'mern'} onClick={() => setTab('mern')}>
          MERN Stack
        </TabButton>
        <TabButton active={tab === 'web'} onClick={() => setTab('web')}>
          Web Design
        </TabButton>
      </div>

      <div className="mt-6">
        {tab === 'mern' ? (
          <div className="grid gap-4 md:grid-cols-2">
            {projects.mern.map((p, idx) => (
              <Reveal key={p.slug} delay={idx * 0.06}>
                <ProjectCard p={p} onOpen={() => setOpenSlug(p.slug)} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {projects.web.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 0.06}>
                <WebCard p={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <ProjectModal
        open={Boolean(openSlug)}
        project={currentMern}
        onClose={() => setOpenSlug(null)}
      />
    </Section>
  )
}
