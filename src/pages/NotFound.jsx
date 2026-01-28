import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'

export default function NotFound() {
  return (
    <Container className="py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="text-sm font-semibold text-slate-900">Page not found</div>
        <div className="mt-2 text-sm text-slate-600">
          The page you’re looking for doesn’t exist.
        </div>
        <div className="mt-6">
          <Button as={Link} to="/" variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    </Container>
  )
}
