import { useMemo, useState } from 'react'
import Button from '../Button.jsx'
import Card from '../Card.jsx'

const messages = [
  'Small steps daily lead to big wins.',
  'Keep going. You are building momentum.',
  'Consistency beats intensity.',
  'Progress, not perfection.',
  'One more push — you’ve got this.',
  'Ship it. Learn fast. Improve.',
]

export default function RollTheDice() {
  const [value, setValue] = useState(1)
  const [message, setMessage] = useState(messages[0])

  const dots = useMemo(() => {
    const positions = {
      1: [[2, 2]],
      2: [
        [1, 1],
        [3, 3],
      ],
      3: [
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      4: [
        [1, 1],
        [1, 3],
        [3, 1],
        [3, 3],
      ],
      5: [
        [1, 1],
        [1, 3],
        [2, 2],
        [3, 1],
        [3, 3],
      ],
      6: [
        [1, 1],
        [2, 1],
        [3, 1],
        [1, 3],
        [2, 3],
        [3, 3],
      ],
    }

    return positions[value] || positions[1]
  }, [value])

  const roll = () => {
    const next = Math.floor(Math.random() * 6) + 1
    setValue(next)
    setMessage(messages[Math.floor(Math.random() * messages.length)])
  }

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-slate-900">Roll the Dice</div>
          <div className="mt-1 text-sm text-slate-600">
            Quick break with a motivational boost.
          </div>
        </div>
        <Button onClick={roll} size="sm">
          Roll
        </Button>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <div className="grid h-20 w-20 grid-cols-3 grid-rows-3 rounded-2xl border border-brand-200 bg-white p-3 shadow-soft">
          {Array.from({ length: 9 }).map((_, i) => {
            const r = Math.floor(i / 3) + 1
            const c = (i % 3) + 1
            const on = dots.some(([rr, cc]) => rr === r && cc === c)
            return (
              <div key={i} className="grid place-items-center">
                <div
                  className={
                    on
                      ? 'h-2.5 w-2.5 rounded-full bg-brand-600'
                      : 'h-2.5 w-2.5 rounded-full bg-transparent'
                  }
                />
              </div>
            )
          })}
        </div>
        <div className="text-sm text-slate-700">{message}</div>
      </div>
    </Card>
  )
}
