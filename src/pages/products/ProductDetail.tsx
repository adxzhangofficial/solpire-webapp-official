import React, { useEffect } from 'react'
import { Link, useParams } from '@tanstack/react-router'
import {
  getProductBySlug,
  type ProductSection,
  type FeaturesSection,
  type MetricsSection,
  type UseCasesSection,
  type TimelineSection,
  type TechStackSection,
  type ArchitectureSection,
  type HighlightsSection,
  type WorkflowSection,
  type TextSection,
} from '../../data/products'
import './ProductDetail.css'

/* ─────────────────────────────────────────────────────────────
   Icon Map — maps iconKey strings to inline SVGs
   ───────────────────────────────────────────────────────────── */
const iconMap: Record<string, React.ReactNode> = {
  cube: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  layout: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  user: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  gamepad: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" />
      <circle cx="16" cy="10" r="0.5" fill="currentColor" /><circle cx="18" cy="12" r="0.5" fill="currentColor" />
    </svg>
  ),
  gamepad2: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 12h4M8 10v4" /><circle cx="15" cy="11" r="1" /><circle cx="18" cy="13" r="1" />
    </svg>
  ),
  sun: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  zap: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  eye: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  cpu: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  brain: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a6 6 0 0 0-6 6c0 1.66.68 3.16 1.76 4.24L12 16l4.24-3.76A6 6 0 0 0 12 2z" />
      <path d="M12 16v6" /><path d="M8 22h8" />
      <circle cx="9" cy="8" r="1" fill="currentColor" /><circle cx="15" cy="8" r="1" fill="currentColor" />
    </svg>
  ),
  sparkles: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75L19 15z" />
    </svg>
  ),
  scan: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <line x1="7" y1="12" x2="17" y2="12" />
    </svg>
  ),
  box: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  ),
  merge: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </svg>
  ),
  activity: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  layers: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  repeat: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  ),
  clock: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  refresh: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  ),
  monitor: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  type: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  ),
  target: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  grid: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  chart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  'file-spreadsheet': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  ),
  code: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  database: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  settings: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
}

function getIcon(key: string) {
  return iconMap[key] || iconMap['cube']
}

/* ─────────────────────────────────────────────────────────────
   Section Renderers
   ───────────────────────────────────────────────────────────── */

function RenderFeatures({ section, color }: { section: FeaturesSection; color: string }) {
  return (
    <section className="sp-product-features sp-pd-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="sp-section__title">{section.title}</h2>
            {section.subtitle && <p className="sp-section__desc">{section.subtitle}</p>}
          </div>
        </div>
        <div className="row g-4">
          {section.items.map((f) => (
            <div key={f.title} className="col-12 col-md-6 col-lg-4">
              <div className="sp-feature-card">
                <div className="sp-feature-card__icon" style={{ color }}>
                  {getIcon(f.iconKey)}
                </div>
                <h3 className="sp-feature-card__title">{f.title}</h3>
                <p className="sp-feature-card__desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RenderMetrics({ section, color }: { section: MetricsSection; color: string }) {
  return (
    <section className="sp-pd-section sp-pd-metrics">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="sp-section__title">{section.title}</h2>
            {section.subtitle && <p className="sp-section__desc">{section.subtitle}</p>}
          </div>
        </div>
        <div className="row g-3 justify-content-center">
          {section.items.map((m) => (
            <div key={m.label} className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="sp-pd-metric-card">
                <span className="sp-pd-metric-card__value" style={{ color }}>{m.value}</span>
                <span className="sp-pd-metric-card__label">{m.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RenderUseCases({ section }: { section: UseCasesSection }) {
  return (
    <section className="sp-product-usecases sp-pd-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="sp-section__title">{section.title}</h2>
            {section.subtitle && <p className="sp-section__desc">{section.subtitle}</p>}
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {section.items.map((uc) => (
            <div key={uc.title} className="col-6 col-md-4 col-lg-3">
              <div className="sp-usecase-card">
                <h4>{uc.title}</h4>
                <p>{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RenderTimeline({ section, color }: { section: TimelineSection; color: string }) {
  return (
    <section className="sp-pd-section sp-pd-timeline">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="sp-section__title">{section.title}</h2>
            {section.subtitle && <p className="sp-section__desc">{section.subtitle}</p>}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="sp-pd-timeline__track">
              {section.phases.map((phase, i) => (
                <div key={phase.name} className="sp-pd-timeline__item">
                  <div className="sp-pd-timeline__marker" style={{ background: color }}>
                    {i + 1}
                  </div>
                  <div className="sp-pd-timeline__content">
                    <div className="sp-pd-timeline__header">
                      <h4 className="sp-pd-timeline__name">{phase.name}</h4>
                      <span className="sp-pd-timeline__duration" style={{ color }}>{phase.duration}</span>
                    </div>
                    <ul className="sp-pd-timeline__tasks">
                      {phase.tasks.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RenderTechStack({ section, color }: { section: TechStackSection; color: string }) {
  return (
    <section className="sp-pd-section sp-pd-techstack">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="sp-section__title">{section.title}</h2>
            {section.subtitle && <p className="sp-section__desc">{section.subtitle}</p>}
          </div>
        </div>
        <div className="row g-4">
          {section.categories.map((cat) => (
            <div key={cat.name} className="col-12 col-md-6 col-lg-4">
              <div className="sp-pd-techstack__card">
                <h4 className="sp-pd-techstack__cat" style={{ color }}>{cat.name}</h4>
                <div className="sp-pd-techstack__items">
                  {cat.items.map((item) => (
                    <span key={item} className="sp-pd-techstack__tag">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RenderArchitecture({ section, color }: { section: ArchitectureSection; color: string }) {
  return (
    <section className="sp-pd-section sp-pd-architecture">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="sp-section__title">{section.title}</h2>
            {section.subtitle && <p className="sp-section__desc">{section.subtitle}</p>}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="sp-pd-arch__stack">
              {section.layers.map((layer, i) => (
                <div key={layer.name} className="sp-pd-arch__layer">
                  <div className="sp-pd-arch__layer-num" style={{ background: color }}>{i + 1}</div>
                  <div className="sp-pd-arch__layer-body">
                    <h4 className="sp-pd-arch__layer-name">{layer.name}</h4>
                    <p className="sp-pd-arch__layer-desc">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RenderHighlights({ section, color }: { section: HighlightsSection; color: string }) {
  return (
    <section className="sp-pd-section sp-pd-highlights">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="sp-section__title">{section.title}</h2>
            {section.subtitle && <p className="sp-section__desc">{section.subtitle}</p>}
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {section.items.map((h) => (
            <div key={h.label} className="col-12 col-md-6">
              <div className="sp-pd-highlight-card">
                <div className="sp-pd-highlight-card__marker" style={{ background: color }} />
                <div>
                  <h4 className="sp-pd-highlight-card__label">{h.label}</h4>
                  <p className="sp-pd-highlight-card__value">{h.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RenderWorkflow({ section, color }: { section: WorkflowSection; color: string }) {
  return (
    <section className="sp-pd-section sp-pd-workflow">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="sp-section__title">{section.title}</h2>
            {section.subtitle && <p className="sp-section__desc">{section.subtitle}</p>}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="sp-pd-workflow__steps">
              {section.steps.map((step, i) => (
                <div key={step.name} className="sp-pd-workflow__step">
                  <div className="sp-pd-workflow__step-number" style={{ background: color }}>{i + 1}</div>
                  <div className="sp-pd-workflow__step-body">
                    <h4>{step.name}</h4>
                    <p>{step.desc}</p>
                  </div>
                  {i < section.steps.length - 1 && (
                    <div className="sp-pd-workflow__arrow" style={{ color }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RenderTextBlock({ section }: { section: TextSection }) {
  return (
    <section className="sp-pd-section sp-pd-textblock">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <h2 className="sp-section__title text-center">{section.title}</h2>
            {section.subtitle && <p className="sp-section__desc text-center">{section.subtitle}</p>}
            <div className="sp-pd-textblock__body">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="sp-pd-textblock__p">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   Section Dispatcher
   ───────────────────────────────────────────────────────────── */
function RenderSection({ section, color }: { section: ProductSection; color: string }) {
  switch (section.type) {
    case 'features':
      return <RenderFeatures section={section} color={color} />
    case 'metrics':
      return <RenderMetrics section={section} color={color} />
    case 'use-cases':
      return <RenderUseCases section={section} />
    case 'timeline':
      return <RenderTimeline section={section} color={color} />
    case 'tech-stack':
      return <RenderTechStack section={section} color={color} />
    case 'architecture':
      return <RenderArchitecture section={section} color={color} />
    case 'highlights':
      return <RenderHighlights section={section} color={color} />
    case 'workflow':
      return <RenderWorkflow section={section} color={color} />
    case 'text-block':
      return <RenderTextBlock section={section} />
    default:
      return null
  }
}

/* ─────────────────────────────────────────────────────────────
   Main ProductDetail Page
   ───────────────────────────────────────────────────────────── */
export default function ProductDetail() {
  const { slug } = useParams({ strict: false }) as { slug: string }
  const product = getProductBySlug(slug)

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - ${product.nameCn} | Solpire 溯湃科技`
    }
    window.scrollTo(0, 0)
  }, [product])

  if (!product) {
    return (
      <div className="sp-product-page" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center">
          <h2 style={{ color: 'var(--sp-text-heading)' }}>项目未找到</h2>
          <p style={{ color: 'var(--sp-text-muted)' }}>Project not found</p>
          <Link to="/products" className="sp-btn sp-btn--primary" style={{ marginTop: '1rem' }}>
            返回产品列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`sp-product-page sp-product-detail-page sp-product-page--${product.slug}`}>
      {/* Hero */}
      <section className="sp-product-hero" style={{ '--accent': product.color } as React.CSSProperties}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link to="/products" className="sp-cases-page__back">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                返回产品列表
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <div className="sp-product-hero__icon">
                {getIcon(product.iconKey)}
              </div>
              <h1 className="sp-product-hero__title">{product.name}</h1>
              <p className="sp-product-hero__subtitle">{product.subtitle}</p>
              <p className="sp-product-hero__desc">{product.heroDesc}</p>
              <div className="sp-product-hero__actions">
                <a href="mailto:solpire@outlook.com" className="sp-btn sp-btn--primary">
                  联系咨询
                </a>
                <Link to="/contact-us" className="sp-btn sp-btn--outline">
                  了解更多
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {product.sections.map((section, i) => (
        <RenderSection key={`${section.type}-${i}`} section={section} color={product.color} />
      ))}

      {/* CTA */}
      <section className="sp-product-cta">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 text-center">
              <h2>了解 {product.name}</h2>
              <p>联系我们获取演示、方案详情与合作机会</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:solpire@outlook.com" className="sp-btn sp-btn--primary sp-btn--lg">
                  立即咨询
                </a>
                <a href="tel:18617033109" className="sp-btn sp-btn--outline sp-btn--lg">
                  电话联系
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
