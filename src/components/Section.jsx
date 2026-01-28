import Container from './Container.jsx'

export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-14 sm:py-16 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="mb-10">
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
