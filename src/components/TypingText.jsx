import { useEffect, useMemo, useState } from 'react'

export default function TypingText({
  phrases = [],
  className = '',
  typeSpeedMs = 70,
  deleteSpeedMs = 35,
  holdMs = 950,
}) {
  const safePhrases = useMemo(
    () => (Array.isArray(phrases) && phrases.length ? phrases : ['MERN Stack Developer']),
    [phrases]
  )

  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [mode, setMode] = useState('typing')

  useEffect(() => {
    const current = safePhrases[phraseIndex % safePhrases.length]

    if (mode === 'typing') {
      if (text.length < current.length) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typeSpeedMs
        )
        return () => clearTimeout(t)
      }
      const hold = setTimeout(() => setMode('holding'), holdMs)
      return () => clearTimeout(hold)
    }

    if (mode === 'holding') {
      const t = setTimeout(() => setMode('deleting'), holdMs)
      return () => clearTimeout(t)
    }

    if (mode === 'deleting') {
      if (text.length > 0) {
        const t = setTimeout(
          () => setText((prev) => prev.slice(0, prev.length - 1)),
          deleteSpeedMs
        )
        return () => clearTimeout(t)
      }
      setPhraseIndex((i) => (i + 1) % safePhrases.length)
      setMode('typing')
    }
  }, [deleteSpeedMs, holdMs, mode, phraseIndex, safePhrases, text, typeSpeedMs])

  return (
    <span className={className}>
      <span>{text}</span>
      <span className="ml-0.5 inline-block h-[1em] w-[0.55ch] animate-caret bg-brand-600 align-[-0.1em]" />
    </span>
  )
}
