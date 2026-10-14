import { contact } from '../data/profile';
import { Localized } from './Localization';

export default function Contact() {
  return (
    <Localized><section className="contact-section" id="contact" data-reveal aria-labelledby="contact-title">
      <div className="contact-container">
        <div className="contact-heading">
          <div>
            <span className="section-kicker"><i /> CONTACT / OPEN CHANNEL</span>
            <h2 id="contact-title">Have a great <span>game idea</span>? Let&apos;s bring it to life.</h2>
          </div>
        </div>
        <div className="contact-grid">
          <a className="contact-card contact-email" href={`mailto:${contact.email}`}>
            <span className="contact-card-index">01 / EMAIL</span>
            <span className="contact-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></svg></span>
            <strong>{contact.email}</strong>
            <span className="contact-card-action">SEND AN EMAIL <b aria-hidden="true">↗</b></span>
          </a>
          <a className="contact-card" href="tel:+201095069793">
            <span className="contact-card-index">02 / PHONE</span>
            <span className="contact-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h4l2 5-2.5 1.5a14 14 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2C10 20.5 3.5 14 3 5a2 2 0 0 1 2-2Z" /></svg></span>
            <strong>{contact.phone}</strong>
            <span className="contact-card-action">CALL <b aria-hidden="true">↗</b></span>
          </a>
          <a className="contact-card" href={contact.github} target="_blank" rel="noreferrer">
            <span className="contact-card-index">03 / CODE</span>
            <span className="contact-card-icon" aria-hidden="true"><svg className="contact-github-icon" viewBox="0 0 24 24" role="img" aria-label="GitHub Octocat"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" /></svg></span>
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
