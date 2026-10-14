import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Localized, useLanguage } from './components/Localization';
import { useEffect, useRef, useState } from 'react';

const sections = ['Home', 'About', 'Projects', 'Skills', 'Education', 'Services', 'Contact'];

export default function App() {
  const { language, toggle, theme, toggleTheme } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const revealInitialized = useRef(false);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    document.body.classList.add('motion-ready');
    let revealObserver: IntersectionObserver | undefined;
    if (revealInitialized.current || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
      revealObserver = observer;
      targets.forEach((target) => observer.observe(target));
    }
    revealInitialized.current = true;
    const updateActiveSection = () => {
      setIsScrolled(window.scrollY > 32);
      const marker = window.innerHeight * 0.34;
      const candidates = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))
        .filter((section) => section.getBoundingClientRect().top <= marker)
      const current = candidates[candidates.length - 1]?.id ?? 'home';
      setActiveSection(current);
    };
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => {
      revealObserver?.disconnect();
      document.body.classList.remove('motion-ready');
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, [language, theme]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <Localized>
    <div className="site-shell">
      <header className={`topbar${isScrolled ? ' is-scrolled' : ''}`}>
        <a className="wordmark" href="#home" aria-label="Abdelrahman Moawad home"><span className="wordmark-mark">AM</span><span>ABDELRAHMAN <b>MOAWAD</b></span></a>
        <nav id="primary-navigation" className={menuOpen ? 'is-open' : ''} aria-label="Main navigation">
          {sections.map((section) => <a key={section} className={activeSection === section.toLowerCase() ? 'nav-link is-active' : 'nav-link'} aria-current={activeSection === section.toLowerCase() ? 'location' : undefined} href={`#${section.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{section}</a>)}
        </nav>
        <div className="topbar-tools"><span className="status"><i /> GAME DEVELOPER / EGYPT</span><button className="icon-button" aria-label="Switch language" onClick={toggle}>{language === 'en' ? 'EN' : 'AR'} <span>⌄</span></button><button className="icon-button theme-button" aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} onClick={toggleTheme}>{theme === 'dark' ? '☼' : '◐'}</button><button className="menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? '×' : '☰'}</button></div>
      </header>
      <main>
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <div className="hero-grid" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> PLAYER PROFILE <span className="eyebrow-code">// 001 — EGYPT</span></div>
              <h1 id="hero-title">ABDELRAHMAN<br /><span>MOAWAD</span></h1>
              <p className="hero-role"><span className="role-marker" /> GAME DEVELOPER</p>
              <p className="hero-quote">“I am on a higher plane, Chale. Literally.”</p>
              <p className="hero-description">I build interactive gameplay experiences with Unity, C# and C++, with a focus on gameplay programming and game development.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">VIEW MY WORK <span aria-hidden="true">↗</span></a>
                <a className="button button-secondary" href="/assets/cv/Abdelrahman_Moawad_CV_Final.pdf" download="Abdelrahman_Moawad_CV_Final.pdf">DOWNLOAD CV <span aria-hidden="true">↓</span></a>
                <a className="button button-text" href="#contact">CONTACT ME <span aria-hidden="true">↗</span></a>
              </div>
              <div className="hero-rule"><span>GAMEPLAY / SYSTEMS / FEEL</span><span>01 — 08</span></div>
            </div>
            <aside className="player-card" aria-label="Player profile">
              <div className="player-card-top"><span><i /> PLAYER DOSSIER</span><span>AM / 001</span></div>
              <div className="portrait-stage"><img className="portrait-image" src="/assets/profile/profile.png" alt="Portrait of Abdelrahman Moawad" /><div className="portrait-frame"><span className="frame-corner frame-tl" /><span className="frame-corner frame-tr" /><span className="frame-corner frame-bl" /><span className="frame-corner frame-br" /></div><span className="portrait-coordinate">30°02′N / 31°14′E</span></div>
              <div className="player-identity"><div><span className="data-label">PLAYER</span><h2>ABDELRAHMAN MOAWAD</h2></div><span className="player-emblem">AM</span></div>
              <div className="player-data"><div><span className="data-label">ROLE</span><b>GAME DEVELOPER</b></div><div><span className="data-label">ENGINE</span><b>UNITY</b></div><div><span className="data-label">SPECIALIZATION</span><b>GAMEPLAY</b></div><div><span className="data-label">COUNTRY</span><b>EGYPT</b></div></div>
              <div className="player-card-foot"><span>PLAYER DATA / 001</span><span><i /> PROFILE / AM</span></div>
            </aside>
          </div>
          <div className="hero-coordinates">EGYPT</div><div className="hero-vertical">INTERACTIVE EXPERIENCES / PLAYER 001</div>
        </section>
        <section className="foundation-strip" data-reveal aria-label="Design system markers"><span><i /> SYSTEM STATUS: INITIALIZED</span><span>UNITY <b>+</b> GAMEPLAY <b>+</b> PLAYER FIRST</span><span>SCROLL TO EXPLORE <b>↓</b></span></section>
        <About />
        <Projects />
        <Skills />
        <Education />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
    </Localized>
  );
}








