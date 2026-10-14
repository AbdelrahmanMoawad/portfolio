import { contact } from '../data/profile';
import { Localized } from './Localization';

export default function Contact() {
  return (
    <Localized><section className="contact-section" id="contact" data-reveal aria-labelledby="contact-title">
      <div className="contact-container">
        <div className="contact-heading">
          <div>
            <span className="section-kicker"><i /> CONTACT / OPEN CHANNEL</span>
            <h2 id="contact-title">For game development opportunities and project inquiries, reach out through any of these channels.</h2>
          </div>
        </div>
        <div className="contact-grid">
          <a className="contact-card contact-email" href={`mailto:${contact.email}`}>
            <span className="contact-card-index">01 / EMAIL</span>
            <span className="contact-card-icon" aria-hidden="true">↗</span>
            <strong>{contact.email}</strong>
            <span className="contact-card-action">SEND AN EMAIL <b aria-hidden="true">↗</b></span>
          </a>
          <a className="contact-card" href="tel:+201095069793">
            <span className="contact-card-index">02 / PHONE</span>
            <span className="contact-card-icon" aria-hidden="true">⌕</span>
            <strong>{contact.phone}</strong>
            <span className="contact-card-action">CALL <b aria-hidden="true">↗</b></span>
          </a>
          <a className="contact-card" href={contact.github} target="_blank" rel="noreferrer">
            <span className="contact-card-index">03 / CODE</span>
            <span className="contact-card-icon" aria-hidden="true">⌘</span>
            <strong>GITHUB</strong>
            <span className="contact-card-action">VIEW PROFILE <b aria-hidden="true">↗</b></span>
          </a>
          <a className="contact-card" href={contact.linkedin} target="_blank" rel="noreferrer">
            <span className="contact-card-index">04 / NETWORK</span>
            <span className="contact-card-icon" aria-hidden="true">in</span>
            <strong>LINKEDIN</strong>
            <span className="contact-card-action">VIEW PROFILE <b aria-hidden="true">↗</b></span>
          </a>
        </div>
        <a className="contact-cv" href={contact.cv} download="Abdelrahman_Moawad_CV_Final.pdf">DOWNLOAD CV <span aria-hidden="true">↓</span></a>
      </div>
    </section></Localized>
  );
}

