import type { PortfolioProject } from '../data/projects';
import { Localized } from './Localization';

type ProjectCardProps = { project: PortfolioProject };

function KitchenArtwork() {
  return (
    <Localized><svg className="project-artwork-svg" viewBox="0 0 800 360" role="img" aria-label="Stylized kitchen environment illustration" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="kitchen-wall" x2="0" y2="1"><stop stopColor="#303236" /><stop offset="1" stopColor="#17191b" /></linearGradient>
        <linearGradient id="kitchen-light" x2="1" y2="1"><stop stopColor="#c3a679" stopOpacity=".28" /><stop offset="1" stopColor="#c3a679" stopOpacity="0" /></linearGradient>
        <pattern id="kitchen-tiles" width="54" height="54" patternUnits="userSpaceOnUse"><path d="M0 0H54V54H0Z" fill="none" stroke="#f0eee8" strokeOpacity=".08" /></pattern>
      </defs>
      <rect width="800" height="360" fill="url(#kitchen-wall)" /><rect width="800" height="246" fill="url(#kitchen-tiles)" />
      <path d="M0 0H335L452 240H0Z" fill="url(#kitchen-light)" />
      <path d="M0 235H800V360H0Z" fill="#25272a" /><path d="M0 242H800V254H0Z" fill="#a69377" />
      <path d="M44 254H310V360H44Z" fill="#353333" /><path d="M58 269H177V344H58Z" fill="#2b2c2e" stroke="#55504b" /><path d="M185 269H298V344H185Z" fill="#2b2c2e" stroke="#55504b" />
      <path d="M352 254H711V360H352Z" fill="#302e2c" /><path d="M366 269H520V344H366Z" fill="#242527" stroke="#56514b" /><path d="M532 269H697V344H532Z" fill="#242527" stroke="#56514b" />
      <path d="M115 0V83Q115 110 143 110H178" fill="none" stroke="#8b8b86" strokeWidth="5" /><path d="M145 108V141Q145 151 157 151H166" fill="none" stroke="#b3a17e" strokeWidth="4" />
      <path d="M604 146C604 128 620 113 638 113S672 128 672 146" fill="none" stroke="#a9a39a" strokeWidth="5" /><path d="M638 112V61" stroke="#a9a39a" strokeWidth="5" /><ellipse cx="638" cy="159" rx="55" ry="9" fill="#0e0f10" opacity=".48" />
      <path d="M234 205H317L304 231H247Z" fill="#9a755b" /><path d="M246 205Q257 176 276 190Q287 168 306 205Z" fill="#6d7d5a" /><circle cx="288" cy="202" r="8" fill="#bd9a69" />
      <path d="M0 0H800V360H0Z" fill="none" stroke="#fff" strokeOpacity=".06" />
    </svg></Localized>
  );
}

function FinalMinuteArtwork() {
  return (
    <Localized><svg className="project-artwork-svg" viewBox="0 0 800 360" role="img" aria-label="Abstract corridor and countdown illustration for The Final Minute" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="minute-glow" cx="50%" cy="50%" r="58%"><stop stopColor="#9e3135" stopOpacity=".58" /><stop offset="1" stopColor="#9e3135" stopOpacity="0" /></radialGradient>
        <linearGradient id="minute-dark" x2="0" y2="1"><stop stopColor="#1d1a1c" /><stop offset="1" stopColor="#08090a" /></linearGradient>
      </defs>
      <rect width="800" height="360" fill="url(#minute-dark)" /><rect width="800" height="360" fill="url(#minute-glow)" />
      <path d="M0 0H800L505 233H295Z" fill="#ffffff" opacity=".025" /><path d="M0 0L295 233V360H0ZM800 0L505 233V360H800Z" fill="#090a0b" opacity=".7" />
      <path d="M0 360L295 233H505L800 360" fill="#252023" /><path d="M0 360L344 245M800 360L456 245M198 360L365 245M602 360L435 245" stroke="#8b3a3e" strokeOpacity=".24" />
      <path d="M295 0V233M505 0V233" stroke="#777173" strokeOpacity=".22" /><path d="M295 0L360 106H440L505 0" fill="#131416" stroke="#8a797b" strokeOpacity=".3" />
      <circle cx="400" cy="129" r="53" fill="#111214" stroke="#ac3a40" strokeWidth="2" strokeOpacity=".8" /><circle cx="400" cy="129" r="43" fill="none" stroke="#b8a7a6" strokeOpacity=".22" />
      <path d="M400 129V96M400 129L420 139" stroke="#e5d8d5" strokeWidth="3" strokeLinecap="round" /><circle cx="400" cy="129" r="4" fill="#ed3838" />
      <text x="400" y="198" fill="#d0c3c0" fontFamily="monospace" fontSize="14" letterSpacing="5" textAnchor="middle">12:00</text>
      <path d="M384 246H416L428 360H372Z" fill="#090a0c" /><path d="M393 248L400 218L407 248" fill="#b84045" opacity=".36" />
      <rect width="800" height="360" fill="none" stroke="#fff" strokeOpacity=".06" />
    </svg></Localized>
  );
}

function ProjectArtwork({ visual }: { visual: PortfolioProject['visual'] }) {
  return (
    <Localized><div className={`project-artwork project-artwork--${visual}`}>
      {visual === 'kitchen' ? <KitchenArtwork /> : <FinalMinuteArtwork />}
      <span className="project-artwork-index">FIELD / {visual === 'kitchen' ? '01' : '02'}</span>
      <span className="project-artwork-reticle" aria-hidden="true">+</span>
      <span className="project-artwork-grain" aria-hidden="true" />
    </div></Localized>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Localized><article className="project-card">
      <div className="project-card-head">
        <span className="project-number">PROJECT {project.number}</span>
        <span className={`project-status${project.status === 'IN DEVELOPMENT' ? ' project-status--active' : ''}`}><i />{project.status}</span>
      </div>
      <ProjectArtwork visual={project.visual} />
      <div className="project-card-content">
        <div className="project-title-row"><div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div><span className="project-card-mark" aria-hidden="true">{project.number}</span></div>
        <p className="project-description">{project.description}</p>
        <div className="project-card-footer">
          <div className="project-meta"><span className="data-label">{project.detailLabel}</span><b>{project.detail}</b></div>
          <a className="project-cta" href={`mailto:abdelrahmanmoawad5@gmail.com?subject=Project%20Inquiry%3A%20${project.inquirySubject}`}>ASK ABOUT PROJECT <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <span className="project-card-edge" aria-hidden="true" />
    </article></Localized>
  );
}
