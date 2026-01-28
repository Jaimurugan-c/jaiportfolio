import Card from './Card.jsx'
import Reveal from './Reveal.jsx'
import Badge from './Badge.jsx'

export default function SkillsGrouped({ groups = [] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((g, idx) => {
        const Icon = g.icon

        return (
          <Reveal key={g.title} delay={idx * 0.08}>
            <Card className="
              group relative overflow-hidden
              border border-green-100
              bg-white p-6
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
            ">
              {/* Green accent bar */}
              <div className="
                absolute inset-x-0 top-0 h-1
                bg-gradient-to-r from-green-400 to-green-600
              " />

              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg bg-green-100 text-green-600
                  transition group-hover:bg-green-600 group-hover:text-white
                ">
                  <Icon size={20} />
                </div>

                <h3 className="text-base font-semibold text-slate-900">
                  {g.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        )
      })}
    </div>
  )
}
