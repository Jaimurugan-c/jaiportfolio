import Section from '../components/Section.jsx'
import SkillsGrouped from '../components/SkillsGrouped.jsx'
import { skillsGrouped } from '../data/content.js'

export default function Skills() {
  return (
    <Section
      id="skills-page"
      title="Skills"
      subtitle="Grouped overview of the skills I use to ship production-ready projects."
    >
      <SkillsGrouped groups={skillsGrouped} />
    </Section>
  )
}
