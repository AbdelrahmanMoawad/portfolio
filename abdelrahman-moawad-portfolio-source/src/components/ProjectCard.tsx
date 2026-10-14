import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import type { PortfolioProject } from '../data/projects';
import { Localized } from './Localization';

type ProjectCardProps = { project: PortfolioProject };
type DetailIconName = 'overview' | 'stack' | 'mechanics' | 'challenge' | 'actions';

function DetailIcon({ name }: { name: DetailIconName }) {
  const paths: Record<DetailIconName, string> = {
    overview: 'M5 4.5h14v15H5z M8 8h8 M8 11.5h8 M8 15h5',
    stack: 'M12 3 20 7l-8 4-8-4 8-4Z M4 12l8 4 8-4 M4 17l8 4 8-4',
    mechanics: 'M13.5 2 5 13h6l-.5 9L19 11h-6l.5-9Z',
    challenge: 'M12 3 21 20H3L12 3Z M12 9v5 M12 17h.01',
    actions: 'M7 17 17 7 M7 7h10v10',
  };
  return <svg className="project-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}

function DetailSection({ icon, title, children }: { icon: DetailIconName; title: string; children: ReactNode }) {
  return <section className="project-detail-section"><div className="project-detail-heading"><span className="project-detail-icon-wrap"><DetailIcon name={icon} /></span><h3>{title}</h3></div>{children}</section>;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogTitleId = `project-details-title-${project.number}`;

  useEffect(() => {
    if (!detailsOpen) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDetailsOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not(:disabled)'));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [detailsOpen]);

  return <>
    <Localized>
      <article className="project-card">
        <div className="project-card-head">
          <span className="project-number">PROJECT {project.number}</span>
          <span className={`project-status${project.status === 'IN DEVELOPMENT' ? ' project-status--active' : ''}`}><i />{project.status}</span>
        </div>
        <div className="project-artwork">
          <img className="project-artwork-image" src={project.image} alt={project.imageAlt} loading="lazy" />
          <span className="project-artwork-index">PROJECT / {project.number}</span>
        </div>
        <div className="project-card-content">
          <div className="project-title-row">
            <div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div>
            <span className="project-card-mark" aria-hidden="true">{project.number}</span>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="project-card-footer">
            <div className="project-meta-group">
              <div className="project-meta"><span className="data-label">ENGINE</span><b>{project.engine}</b></div>
              <div className="project-meta"><span className="data-label">PLATFORMS</span><b>{project.platforms}</b></div>
            </div>
            <button className="project-cta" type="button" onClick={() => setDetailsOpen(true)}>VIEW DETAILS <span aria-hidden="true">↗</span></button>
          </div>
        </div>
        <span className="project-card-edge" aria-hidden="true" />

      </article>
    </Localized>
    {detailsOpen && createPortal(<Localized><div className="project-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setDetailsOpen(false); }}>
          <div ref={dialogRef} className="project-modal" role="dialog" aria-modal="true" aria-labelledby={dialogTitleId} tabIndex={-1}>
            <div className="project-modal-top"><span className="section-kicker"><i /> PROJECT FILE / {project.number}</span><button ref={closeButtonRef} className="project-modal-close" type="button" aria-label="Close project details" onClick={() => setDetailsOpen(false)}>×</button></div>
            <div className="project-modal-title"><div><span className="project-category">{project.category}</span><h2 id={dialogTitleId}>{project.title}</h2></div><span className={`project-status${project.status === 'IN DEVELOPMENT' ? ' project-status--active' : ''}`}><i />{project.status}</span></div>
            <div className="project-modal-body">
              <DetailSection icon="overview" title="Overview"><p>{project.overview}</p></DetailSection>
              <DetailSection icon="stack" title="Tech Stack"><ul className="project-detail-list">{project.techStack.map((item) => <li key={item}>{item}</li>)}</ul></DetailSection>
              <DetailSection icon="mechanics" title="Key Mechanics"><ul className="project-detail-list">{project.mechanics.map((item) => <li key={item}>{item}</li>)}</ul></DetailSection>
              <DetailSection icon="challenge" title="Challenges & Learnings"><p>{project.challenges}</p></DetailSection>
              {project.actions.length > 0 && <DetailSection icon="actions" title="Action Buttons"><div className="project-modal-actions">{project.actions.map((action) => action.href
                ? <a className="project-action-button" key={action.label} href={action.href} target="_blank" rel="noopener noreferrer">{action.label}{action.icon === 'play' ? <svg className="project-action-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4.25 2.9a.75.75 0 0 1 1.13-.65l8.1 4.7a.75.75 0 0 1 0 1.3l-8.1 4.7a.75.75 0 0 1-1.13-.65V2.9Z" /></svg> : <span aria-hidden="true">↗</span>}</a>
                : <button className="project-action-button is-unavailable" key={action.label} type="button" disabled title="Link not provided yet">{action.label}<span aria-hidden="true">↗</span></button>)}
              </div></DetailSection>}
            </div>
          </div>
        </div></Localized>, document.body)}
  </>;
}
