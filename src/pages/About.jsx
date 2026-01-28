import Reveal from '../components/Reveal.jsx'
import Section from '../components/Section.jsx'
import Card from '../components/Card.jsx'
import { profile } from '../data/content.js'

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A bit about who I am, what I build, and how I work."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal>
          <Card className="p-6 lg:col-span-2">
            <div className="text-sm font-semibold text-slate-900">Hi, I’m {profile.name}</div>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              I’m a MERN Stack Developer passionate about building responsive web
              applications with clean code and a polished user experience. I enjoy turning
              ideas into real products and continuously improving through feedback and
              iteration.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              My focus is on React.js frontends, Node.js/Express APIs, and MongoDB data
              modeling. I care about performance, accessibility, and maintainability.
            </p>
          </Card>
        </Reveal>

        <Reveal delay={0.06}>
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">Quick Info</div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div>
                <div className="text-xs text-slate-500">Role</div>
                <div className="font-medium">{profile.role}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Location</div>
                <div className="font-medium">{profile.location}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Email</div>
                <div className="font-medium">{profile.email}</div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
