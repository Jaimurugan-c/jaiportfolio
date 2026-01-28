import { ArrowRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import Reveal from '../components/Reveal.jsx'
import TypingText from '../components/TypingText.jsx'
import OrbitHero from '../components/OrbitHero.jsx'
import SkillsGrouped from '../components/SkillsGrouped.jsx'
import Section from '../components/Section.jsx'
import RollTheDice from '../components/games/RollTheDice.jsx'
import TicTacToe from '../components/games/TicTacToe.jsx'
import { profile, skillsGrouped } from '../data/content.js'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <Container className="relative py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-medium text-brand-800 shadow-soft">
                  MERN Stack Developer • React • Node • MongoDB
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  <span className="text-slate-900">{profile.hero.headlinePrefix}</span>{' '}
                  <span className="text-brand-700">{profile.hero.headlineName}</span>
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-3 text-base leading-7 text-slate-700 sm:text-lg">
                  <TypingText
                    phrases={profile.hero.typing}
                    className="font-semibold text-brand-700"
                  />
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                  I build fast, responsive, and maintainable web applications using the MERN
                  stack — with a strong focus on clean UI/UX and production-ready code.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button as="a" href={profile.cvUrl} download size="lg">
                    <Download className="h-5 w-5" />
                    Download CV
                  </Button>
                  <Button as={Link} to="/projects" variant="outline" size="lg">
                    View Projects <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                    <div className="text-sm font-semibold text-slate-900">Recruiter-ready</div>
                    <div className="mt-1 text-sm text-slate-600">
                      Clear sections, clean typography, and measurable impact.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                    <div className="text-sm font-semibold text-slate-900">Premium motion</div>
                    <div className="mt-1 text-sm text-slate-600">
                      Smooth reveal animations and micro-interactions.
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <OrbitHero />
            </Reveal>
          </div>
        </Container>
      </section>

      <Section
        id="skills"
        title="Skills"
        subtitle="A quick overview of my core technical stack and strengths."
      >
        <SkillsGrouped groups={skillsGrouped} />
      </Section>

      <Section
        id="mini-games"
        title="Mini Games"
        subtitle="Lightweight interactive widgets to make the portfolio more memorable."
        className="bg-white"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <RollTheDice />
          </Reveal>
          <Reveal delay={0.06}>
            <TicTacToe />
          </Reveal>
        </div>
      </Section>
    </div>
  )
}
