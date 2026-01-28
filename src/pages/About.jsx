import Reveal from '../components/Reveal.jsx'
import Section from '../components/Section.jsx'
import Card from '../components/Card.jsx'
import { profile } from '../data/content.js'
import Experience from './Experience.jsx'
export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A bit about who I am, what I build, and how I work."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main bio + quick info grid */}
        <div className="lg:col-span-2 space-y-6">
          <Reveal>
            <Card className="p-6 lg:p-8">
              <div className="text-base font-semibold text-slate-900">Hi, I’m {profile.name}</div>
              <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
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

          {/* My Journey */}
          <Reveal delay={0.04}>
            <Card className="p-6 lg:p-8">
              <div className="text-base font-semibold text-slate-900">My Journey</div>
              <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
                I began my web development journey in July 2024 with a focus on frontend technologies, 
                learning to build clean and responsive user interfaces using HTML, CSS, and React. 
                As my interest grew, I expanded into backend development with Node.js, Express, 
                and MongoDB—completing my transition into a MERN stack developer. 
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
                Now, I enjoy creating full-stack applications that are both visually appealing 
                and functionally powerful. Passionate about writing clean, efficient code and 
                delivering high-quality user experiences.
              </p>
            </Card>
          </Reveal>
        </div>

        {/* Sidebar - Quick Info + Stats */}
        <div className="space-y-6">
          <Reveal delay={0.06}>
            <Card className="p-6">
              <div className="text-base font-semibold text-slate-900">Quick Info</div>
              <div className="mt-5 space-y-4 text-sm text-slate-700">
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
                <div>
                  <div className="text-xs text-slate-500">Availability</div>
                  <div className="font-medium">Freelance & Full-time</div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Small stats cards */}
          <div className="grid grid-cols-2 gap-4">
            <Reveal delay={0.08}>
              <Card className="p-5 text-center">
                <div className="text-2xl font-bold text-indigo-600">6+</div>
                <div className="mt-1 text-xs font-medium text-slate-600">Projects Completed</div>
              </Card>
            </Reveal>

            <Reveal delay={0.10}>
              <Card className="p-5 text-center">
                <div className="text-2xl font-bold text-indigo-600">1+</div>
                <div className="mt-1 text-xs font-medium text-slate-600">Year Experience</div>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
      <Experience/>
    </Section>
  )
}