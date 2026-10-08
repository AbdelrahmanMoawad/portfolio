import { skillGroups } from '../data/capabilities';
import { Localized } from './Localization';

export default function Skills() {
  let itemNumber = 0;
  return (
    <Localized><section className="skills-section" id="skills" data-reveal aria-labelledby="skills-title">
      <div className="skills-container">
        <div className="section-heading-row">
          <div><span className="section-kicker"><i /> TECHNICAL LOADOUT / 12 SKILLS</span><h2 id="skills-title">SKILLS<span>.</span></h2></div>
          <p className="section-intro">A focused toolkit for building and implementing gameplay experiences.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <section className="skill-group" key={group.label} aria-label={group.label}>
              <div className="skill-group-label"><span>{group.label}</span><i /></div>
              <ul className="skill-list">
                {group.skills.map((skill) => {
                  itemNumber += 1;
                  return <li className="skill-item" key={skill}><span className="skill-index">{String(itemNumber).padStart(2, '0')}</span><span className="skill-name">{skill}</span><span className="skill-lock" aria-hidden="true">+</span></li>;
                })}
              </ul>
            </section>
          ))}
        </div>
        <div className="skills-foot"><span><i /> SKILL INDEX / 12</span><span>NO RANKINGS / NO PROFICIENCY CLAIMS</span></div>
      </div>
    </section></Localized>
  );
}
