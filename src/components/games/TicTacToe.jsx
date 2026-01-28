import { useMemo, useState } from 'react'
import Button from '../Button.jsx'
import Card from '../Card.jsx'

function winnerOf(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a]
  }
  return null
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const winner = useMemo(() => winnerOf(board), [board])
  const filled = board.every(Boolean)
  const status = winner
    ? `Winner: ${winner}`
    : filled
      ? 'Draw — nice match.'
      : `Next: ${xIsNext ? 'X' : 'O'}`

  const reset = () => {
    setBoard(Array(9).fill(null))
    setXIsNext(true)
  }

  const play = (idx) => {
    if (winner || board[idx]) return
    setBoard((prev) => {
      const next = [...prev]
      next[idx] = xIsNext ? 'X' : 'O'
      return next
    })
    setXIsNext((v) => !v)
  }

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-slate-900">Tic Tac Toe</div>
          <div className="mt-1 text-sm text-slate-600">Lightweight, quick and fun.</div>
        </div>
        <Button onClick={reset} variant="outline" size="sm">
          Reset
        </Button>
      </div>

      <div className="mt-4 text-sm text-slate-700">{status}</div>

      <div className="mt-4 grid w-full max-w-xs grid-cols-3 gap-2">
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => play(idx)}
            className="grid aspect-square place-items-center rounded-2xl border border-brand-200 bg-white text-lg font-semibold text-slate-900 shadow-soft transition hover:border-brand-300 hover:bg-brand-50"
            aria-label={`Cell ${idx + 1}`}
          >
            <span className={cell === 'X' ? 'text-brand-700' : 'text-slate-800'}>
              {cell || ''}
            </span>
          </button>
        ))}
      </div>
    </Card>
  )
}
