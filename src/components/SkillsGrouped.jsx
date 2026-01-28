import Card from './Card.jsx'
import Reveal from './Reveal.jsx'
import Badge from './Badge.jsx'

export default function SkillsGrouped({ groups = [] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((g, idx) => (
        <Reveal key={g.title} delay={idx * 0.06}>
          <Card className="p-5">
            <div className="text-sm font-semibold text-slate-900">{g.title}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
