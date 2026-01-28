import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import Card from '../components/Card.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience & Education"
      subtitle="Roles and responsibilities that reflect my practical development work."
    >
      <div className="grid gap-4">
        {experience.map((e, idx) => (
          <Reveal key={`${e.company}-${e.role}`} delay={idx * 0.06}>
            <Card className="p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <div className="text-base font-semibold text-slate-900">{e.role}</div>
                  <div className="mt-1 text-sm text-slate-600">{e.company}</div>
                </div>
                <div className="text-sm font-medium text-brand-800">{e.period}</div>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
