import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Localized } from './Localization';

export default function Projects() {
  return (
    <Localized><section className="projects-section" id="projects" data-reveal aria-labelledby="projects-title">
      <div className="projects-grid-bg" aria-hidden="true" />
      <div className="projects-container">
        <div className="section-heading-row">
          <div><span className="section-kicker"><i /> SELECTED WORK / 02 ENTRIES</span><h2 id="projects-title">PROJECTS<span>.</span></h2></div>
          <p className="section-intro">Learning builds and a game in development, presented with clear project status and context.</p>
        </div>
        <div className="projects-list">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
        <div className="projects-section-foot"><span><i /> PROJECT ARCHIVE / 02</span><span>GAMEPLAY BUILDS <b>—</b> UNITY</span></div>
      </div>
    </section></Localized>
  );
}
