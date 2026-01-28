import { useMemo, useState, useEffect } from 'react'
import Button from '../Button.jsx'
import Card from '../Card.jsx'

function winnerOf(board, lines) {
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export default function TicTacToe() {
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

  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true) // true = human (X), false = bot (O)
  const [difficulty, setDifficulty] = useState('minimax')

  const winner = useMemo(() => winnerOf(board, lines), [board, lines])
  const filled = board.every(cell => cell !== null)
  const gameOver = winner || filled

  const botDesc = {
    random: 'Random',
    weak: 'Weak',
    minimax: 'Unbeatable'
  }[difficulty]

  const status = winner
    ? `${winner === 'X' ? '🎉 You win!' : '🤖 Bot wins!'}`.toUpperCase()
    : gameOver
      ? 'Draw — nice match.'
      : `Next: ${xIsNext ? 'X (you)' : 'O (bot)'}`

  const reset = () => {
    setBoard(Array(9).fill(null))
    setXIsNext(true)
  }

  // Human move
  const play = (idx) => {
    if (gameOver || board[idx] || !xIsNext) return

    setBoard(prev => {
      const next = [...prev]
      next[idx] = 'X'
      return next
    })
    setXIsNext(false)
  }

  // AI Functions
  function minimax(boardCopy, isMaximizing, lines) {
    const w = winnerOf(boardCopy, lines)
    if (w === 'O') return 10
    if (w === 'X') return -10
    if (boardCopy.every(cell => cell !== null)) return 0

    if (isMaximizing) {
      let bestScore = -Infinity
      for (let i = 0; i < 9; i++) {
        if (boardCopy[i] === null) {
          boardCopy[i] = 'O'
          const score = minimax(boardCopy, false, lines)
          boardCopy[i] = null
          bestScore = Math.max(score, bestScore)
        }
      }
      return bestScore
    } else {
      let bestScore = Infinity
      for (let i = 0; i < 9; i++) {
        if (boardCopy[i] === null) {
          boardCopy[i] = 'X'
          const score = minimax(boardCopy, true, lines)
          boardCopy[i] = null
          bestScore = Math.min(score, bestScore)
        }
      }
      return bestScore
    }
  }

  function findBestMove(boardCopy, lines) {
    let bestScore = -Infinity
    let bestMove = -1
    for (let i = 0; i < 9; i++) {
      if (boardCopy[i] === null) {
        boardCopy[i] = 'O'
        const score = minimax(boardCopy, false, lines)
        boardCopy[i] = null
        if (score > bestScore) {
          bestScore = score
          bestMove = i
        }
      }
    }
    return bestMove
  }

  function findWeakMove(boardCopy, lines) {
    // Win for O
    for (const [a, b, c] of lines) {
      const cells = [boardCopy[a], boardCopy[b], boardCopy[c]]
      const empties = [a, b, c].filter(i => boardCopy[i] === null)
      if (cells.filter(cell => cell === 'O').length === 2 && empties.length === 1) {
        return empties[0]
      }
    }

    // Block X
    for (const [a, b, c] of lines) {
      const cells = [boardCopy[a], boardCopy[b], boardCopy[c]]
      const empties = [a, b, c].filter(i => boardCopy[i] === null)
      if (cells.filter(cell => cell === 'X').length === 2 && empties.length === 1) {
        return empties[0]
      }
    }

    // Center
    if (boardCopy[4] === null) return 4

    // Corners
    const corners = [0, 2, 6, 8]
    for (const corner of corners) {
      if (boardCopy[corner] === null) return corner
    }

    // Any empty
    for (let i = 0; i < 9; i++) {
      if (boardCopy[i] === null) return i
    }
    return -1
  }

  function findRandomMove(boardCopy) {
    const empties = []
    for (let i = 0; i < 9; i++) {
      if (boardCopy[i] === null) empties.push(i)
    }
    return empties.length ? empties[Math.floor(Math.random() * empties.length)] : -1
  }

  // Bot move
  useEffect(() => {
    if (!xIsNext && !gameOver) {
      const delays = { random: 200, weak: 500, minimax: 800 }
      const delay = delays[difficulty]

      const timer = setTimeout(() => {
        const boardCopy = [...board]
        let move = -1

        switch (difficulty) {
          case 'random':
            move = findRandomMove(boardCopy)
            break
          case 'weak':
            move = findWeakMove(boardCopy, lines)
            break
          case 'minimax':
            move = findBestMove(boardCopy, lines)
            break
        }

        if (move !== -1) {
          setBoard(prev => {
            const next = [...prev]
            next[move] = 'O'
            return next
          })
          setXIsNext(true)
        }
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [xIsNext, board, gameOver, difficulty, lines])

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-slate-900">Tic Tac Toe</div>
          <div className="mt-1 text-sm text-slate-600">
            You (X) vs Bot ({botDesc})
          </div>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value)
              reset()
            }}
            className="px-2.5 py-1.5 text-xs border border-slate-200 rounded-xl bg-white font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent shadow-sm"
          >
            <option value="random">Random</option>
            <option value="weak">Weak</option>
            <option value="minimax">Minimax</option>
          </select>
          <Button onClick={reset} variant="outline" size="sm">
            Reset
          </Button>
        </div>
      </div>

      <div className="mt-6 text-sm text-slate-700 font-semibold text-center">{status}</div>

      <div className="mt-8 grid w-full max-w-xs grid-cols-3 gap-2.5 mx-auto">
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => play(idx)}
            disabled={gameOver || !!cell || !xIsNext}
            className={`
              grid aspect-square place-items-center rounded-2xl border-2 text-3xl font-black shadow-md transition-all duration-200
              ${
                cell
                  ? cell === 'X'
                    ? 'border-brand-500 bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 shadow-brand'
                    : 'border-slate-400 bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 shadow-slate'
                  : xIsNext && !gameOver
                    ? 'border-brand-300 bg-brand-50 hover:border-brand-500 hover:bg-brand-100 hover:shadow-brand cursor-pointer shadow-soft active:scale-95'
                    : 'border-slate-200 bg-slate-50 cursor-not-allowed opacity-60 shadow-sm'
              }
            `}
            aria-label={`Cell ${idx + 1}${cell ? ` (${cell})` : ''}`}
          >
            {cell || ''}
          </button>
        ))}
      </div>

      {gameOver && (
        <div className="mt-8 text-center">
          <Button onClick={reset} variant="primary" size="md" className="px-8">
            Play Again
          </Button>
        </div>
      )}
    </Card>
  )
}