import { cn } from '../lib/cn.js'

export default function Card({ children, className }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:shadow-soft2',
        className
      )}
    >
      {children}
    </div>
  )
}
