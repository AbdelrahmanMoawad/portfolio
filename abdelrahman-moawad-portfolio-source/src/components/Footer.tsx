import { Localized } from './Localization';

export default function Footer() {
  return (
    <Localized><footer className="site-footer">
      <a className="wordmark footer-wordmark" href="#home" aria-label="Abdelrahman Moawad, back to top"><span className="wordmark-mark">AM</span><span>ABDELRAHMAN <b>MOAWAD</b></span></a>
      <span className="footer-role">GAME DEVELOPER <i /> EGYPT</span>
      <a className="footer-top" href="#home">BACK TO TOP <span aria-hidden="true">↑</span></a>
      <span className="footer-copy">© {new Date().getFullYear()} ABDELRAHMAN MOAWAD</span>
    </footer></Localized>
  );
}
