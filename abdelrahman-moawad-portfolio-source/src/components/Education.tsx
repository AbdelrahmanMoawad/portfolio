import { education, training } from '../data/profile';
import { Localized } from './Localization';

export default function Education() {
  return (
    <Localized><section className="education-section" id="education" data-reveal aria-labelledby="education-title">
      <div className="education-container">
        <div className="section-heading-row">
          <div><span className="section-kicker"><i /> EDUCATION / TRAINING</span><h2 id="education-title">EDUCATION<span>.</span></h2></div>
          <p className="section-intro">Academic study and game development training.</p>
        </div>
        <div className="education-grid">
          <article className="education-card">
            <div className="education-card-head"><span>01 / ACADEMIC</span><span className="education-symbol" aria-hidden="true">A</span></div>
            <h3>{education.institution}</h3><p className="education-institution">{education.university}</p>
            <dl className="education-details"><div><dt>SPECIALIZATION</dt><dd>{education.specialization}</dd></div><div><dt>STUDY YEAR</dt><dd>{education.year}</dd></div><div><dt>EXPECTED GRADUATION</dt><dd>{education.graduation}</dd></div></dl>
          </article>
          <article className="education-card training-card">
            <div className="education-card-head"><span>02 / TRAINING</span><span className="training-status"><i /> {training.status}</span></div>
            <h3>{training.program}</h3><p className="education-institution">GAME DEVELOPMENT TRACK</p>
            <div className="training-details"><span className="data-label">TRACK</span><b>{training.track}</b></div>
            <div className="training-card-foot"><span>DEVELOPMENT TRAINING</span><span>IN PROGRESS</span></div>
          </article>
        </div>
        <div className="education-foot"><span><i /> LEARNING / GAME DEVELOPMENT</span><span>ACADEMIC + TRAINING</span></div>
      </div>
    </section></Localized>
  );
}
