import { services, type Service } from '../data/capabilities';
import { Localized } from './Localization';

function ServiceIcon({ type }: { type: Service['icon'] }) {
  const shared = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'square' as const, strokeLinejoin: 'miter' as const };
  switch (type) {
    case 'unity': return <svg viewBox="0 0 32 32" aria-hidden="true" {...shared}><path d="m16 3 11 6v13l-11 7-11-7V9z"/><path d="m5 9 11 7 11-7M16 16v13M10 6l11 13m1-13L10 19"/></svg>;
    case 'gameplay': return <svg viewBox="0 0 32 32" aria-hidden="true" {...shared}><path d="M9 9h14a5 5 0 0 1 4.8 3.6l2 7.2a3 3 0 0 1-4.9 3l-4.2-3.3h-5.4l-4.2 3.3a3 3 0 0 1-4.9-3l2-7.2A5 5 0 0 1 9 9Z"/><path d="M11 13v6m-3-3h6m8-1h.1m3 3h.1"/></svg>;
    case 'script': return <svg viewBox="0 0 32 32" aria-hidden="true" {...shared}><path d="m12 8-8 8 8 8m8-16 8 8-8 8m-2-21-4 26"/></svg>;
    case 'mechanics': return <svg viewBox="0 0 32 32" aria-hidden="true" {...shared}><circle cx="16" cy="16" r="11"/><circle cx="16" cy="16" r="5"/><path d="M16 1v5m0 20v5M1 16h5m20 0h5M5.4 5.4l3.5 3.5m14.2 14.2 3.5 3.5m0-21.2-3.5 3.5M8.9 23.1l-3.5 3.5"/></svg>;
    case 'formats': return <svg viewBox="0 0 32 32" aria-hidden="true" {...shared}><path d="m16 3 12 7-12 7L4 10zM4 16l12 7 12-7M4 22l12 7 12-7"/></svg>;
    case 'prototype': return <svg viewBox="0 0 32 32" aria-hidden="true" {...shared}><path d="m16 3 12 7v12l-12 7-12-7V10z"/><path d="M11 12h10v8H11zM16 3v9m12-2-7 2m7 12-7-4M4 10l7 2m-7 10 7-2m5 9v-9"/></svg>;
    case 'ui': return <svg viewBox="0 0 32 32" aria-hidden="true" {...shared}><rect x="4" y="5" width="24" height="22"/><path d="M4 11h24M10 11v16m4-11h11m-11 5h7m-7 5h9"/></svg>;
  }
}

export default function Services() {
  return (
    <Localized><section className="services-section" id="services" data-reveal aria-labelledby="services-title">
      <div className="services-container">
        <div className="section-heading-row">
          <div><span className="section-kicker"><i /> DEVELOPMENT SERVICES / 07 AREAS</span><h2 id="services-title">SERVICES<span>.</span></h2></div>
          <p className="section-intro">Practical game development support, from a playable prototype to gameplay and interface implementation.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => <article className="service-card" key={service.number}><div className="service-card-top"><span>{service.number} / SERVICE</span><span className="service-icon"><ServiceIcon type={service.icon} /></span></div><h3>{service.title}</h3><p>{service.description}</p><span className="service-card-mark" aria-hidden="true">+</span></article>)}
        </div>
        <div className="services-foot"><span><i /> GAME DEVELOPMENT / UNITY</span><span>IMPLEMENTATION FOCUSED</span></div>
      </div>
    </section></Localized>
  );
}
