import { cn } from '../lib/cn.js'

export default function Button({
  as: Comp = 'button',
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary:
      'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-soft',
    outline:
      'border border-brand-200 text-brand-800 hover:border-brand-300 hover:bg-brand-50',
    ghost: 'text-brand-800 hover:bg-brand-50',
  }

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-4 text-sm',
    lg: 'h-12 px-5 text-base',
  }

  return (
    <Comp
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}
