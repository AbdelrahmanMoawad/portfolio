import { achievement } from '../data/profile';
import { Localized } from './Localization';

export default function Achievement() {
  return (
    <Localized><section className="achievement-section" id="achievement" data-reveal aria-labelledby="achievement-title">
      <div className="achievement-container">
        <div className="achievement-heading"><div><span className="section-kicker"><i /> PARTICIPATION RECORD / 01</span><h2 id="achievement-title">ACHIEVEMENT<span>.</span></h2></div><p className="achievement-note">A participation entry, with no placement or award claimed.</p></div>
        <article className="achievement-card">
          <div className="achievement-number">01</div>
          <div className="achievement-event"><span className="data-label">GAME EVENT</span><h3>{achievement.name}</h3><p>{achievement.location}</p></div>
          <div className="achievement-year"><span className="data-label">YEAR</span><b>{achievement.year}</b></div>
          <div className="achievement-participation"><span className="data-label">PARTICIPATION</span><b>{achievement.participation}</b></div>
          <span className="achievement-corner" aria-hidden="true" />
        </article>
      </div>
    </section></Localized>
  );
}
