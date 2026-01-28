import Section from '../components/Section.jsx'
import SkillsGrouped from '../components/SkillsGrouped.jsx'
import { skillsGrouped } from '../data/content.js'

export default function Skills() {
  return (
    <Section
      id="skills-page"
      title="Skills"
      subtitle="I've developed a diverse set of skills throughout my career. Here's what I bring to the table."
    >
      <SkillsGrouped groups={skillsGrouped} />
    </Section>
  )
}
