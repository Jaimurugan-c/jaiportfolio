import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience & Education"
      subtitle="My professional journey, internships, and academic background."
    >
      <div className="relative mx-auto max-w-5xl px-4">
        {/* Center line */}
        <div className="absolute left-5 top-0 h-full w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12 md:space-y-16">
          {experience.map((exp, idx) => {
            const isLeft = idx % 2 === 0
            const isEducation = exp.type === 'education'

            return (
              <Reveal
                key={`${exp.role}-${idx}`}
                delay={idx * 0.08}
                className={`relative flex md:items-center ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-5 z-10 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <span
                    className={`h-4 w-4 rounded-full border-4 ${
                      isEducation
                        ? 'border-emerald-500 bg-emerald-100'
                        : 'border-green-600 bg-green-100'
                    }`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`ml-12 w-full md:ml-0 md:w-[46%] rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    isLeft ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="p-6 md:p-7">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-green-700">
                          {exp.company}
                        </p>
                      </div>

                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                        {exp.period}
                      </span>
                    </div>

                    {/* Points */}
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
