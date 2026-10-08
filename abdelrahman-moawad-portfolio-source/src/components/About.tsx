import { about } from '../data/profile';
import { Localized } from './Localization';

export default function About() {
  return (
    <Localized><section className="about-section" id="about" data-reveal aria-labelledby="about-title">
      <div className="about-container">
        <div className="about-main">
          <div className="about-heading"><span className="section-kicker"><i /> DEVELOPER PROFILE / 01</span><h2 id="about-title">ABOUT <span>ME.</span></h2></div>
          <div className="about-copy">{about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
        <div className="about-readout" aria-label="Game development profile details">
          <div className="about-readout-head"><span>FIELD NOTES</span><span>AM / PROFILE</span></div>
          <div className="about-fact"><span>PRIMARY FOCUS</span><b>{about.focus}</b></div>
          <div className="about-fact"><span>EXPERIENCE</span><b>{about.experience}</b></div>
          <div className="about-fact"><span>CAREER DIRECTION</span><b>{about.direction}</b></div>
          <div className="about-readout-foot"><i /> GAME DEVELOPMENT / CONTINUOUS LEARNING</div>
        </div>
      </div>
      <div className="about-section-mark">01 <span>—</span> PROFILE</div>
    </section></Localized>
  );
}
