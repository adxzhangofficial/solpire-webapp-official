import { useEffect, useRef } from 'react'
import { Link, useParams } from '@tanstack/react-router'
import { getCaseStudyById } from '../../data/caseStudies'
import { getAssetPath } from '../../lib/utils'
import { useImagesLoaded } from '../../hooks'
const caseStudyBg = getAssetPath('/assets/images/2026/c.png')
const caseStudyBgMobile = getAssetPath('/assets/images/2026/case-study-bg-1.png')
import '../case-studies/CaseStudies.css'

export default function CaseStudyDetail() {
  const { id } = useParams({ from: '/case-studies/$id' })
  const cs = getCaseStudyById(id)
  const pageRef = useRef<HTMLDivElement>(null)
  const imagesReady = useImagesLoaded(pageRef, id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (cs) document.title = `${cs.title} - Solpire 溯湃科技`
  }, [cs])

  if (!cs) {
    return (
      <div className="sp-detail" style={{ paddingTop: 160, textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--sp-text-heading)', marginBottom: '1rem' }}>案例未找到</h2>
          <p style={{ color: 'var(--sp-text-muted)', marginBottom: '2rem' }}>
            该案例 ID 「{id}」不存在。
          </p>
          <Link to="/case-studies" className="sp-detail__nav-link">
            ← 返回全部案例
          </Link>
        </div>
      </div>
    )
  }

  const hasSections = cs.sections && cs.sections.length > 0
  const hasMetrics = cs.keyMetrics && cs.keyMetrics.length > 0
  const hasTechStack = cs.techStack && cs.techStack.length > 0
  const hasDeliverables = cs.deliverables && cs.deliverables.length > 0

  /** Render markdown-like bold (**text**) inside plain content */
  function renderContent(raw: string) {
    const parts = raw.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>
      }
      return <span key={i}>{part}</span>
    })
  }

  return (
    <div className="sp-detail" ref={pageRef}>
      {/* Page-level image preloader */}
      {!imagesReady && (
        <div className="sp-page-loader">
          <div className="sp-page-loader__spinner" />
        </div>
      )}

      {/* ── Hero ── */}
      <section className="sp-detail__hero">
        <div className="sp-detail__hero-bg">
          <img src={caseStudyBg} alt="" aria-hidden className="sp-detail__hero-bg-desktop" style={{ opacity: imagesReady ? 1 : 0, transition: 'opacity 0.4s ease' }} />
          <img src={caseStudyBgMobile} alt="" aria-hidden className="sp-detail__hero-bg-mobile" style={{ opacity: imagesReady ? 1 : 0, transition: 'opacity 0.4s ease' }} />
        </div>
        <div className="container sp-detail__hero-inner">
          {/* Breadcrumb */}
          <nav className="sp-detail__breadcrumb">
            <Link to="/">首页</Link>
            <span className="sp-detail__breadcrumb-sep">/</span>
            <Link to="/case-studies">项目案例</Link>
            <span className="sp-detail__breadcrumb-sep">/</span>
            <span className="sp-detail__breadcrumb-current">{cs.title}</span>
          </nav>

          <span
            className="sp-detail__category"
            style={{ color: cs.color, backgroundColor: cs.color + '20' }}
          >
            {cs.categoryLabel}
          </span>
          <h1 className="sp-detail__title">{cs.title}</h1>
          <p className="sp-detail__title-en">{cs.titleEn}</p>
          {cs.overview && <p className="sp-detail__overview">{cs.overview}</p>}

          {/* Meta cards */}
          <div className="sp-detail__meta">
            {cs.client && (
              <div className="sp-detail__meta-card">
                <span className="sp-detail__meta-label">客户</span>
                <span className="sp-detail__meta-value">{cs.client}</span>
              </div>
            )}
            {cs.duration && (
              <div className="sp-detail__meta-card">
                <span className="sp-detail__meta-label">周期</span>
                <span className="sp-detail__meta-value">{cs.duration}</span>
              </div>
            )}
            <div className="sp-detail__meta-card">
              <span className="sp-detail__meta-label">领域</span>
              <span className="sp-detail__meta-value">{cs.categoryLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Metrics ── */}
      {hasMetrics && (
        <section className="sp-detail__metrics">
          <div className="container">
            <div className="sp-detail__metrics-grid">
              {cs.keyMetrics!.map((m) => (
                <div key={m.label} className="sp-detail__metric">
                  <span className="sp-detail__metric-value">
                    {m.value}
                  </span>
                  <span className="sp-detail__metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Content Sections ── */}
      {hasSections && (
        <section className="sp-detail__sections">
          <div className="container">
            {cs.sections!.map((sec, idx) => (
              <div key={idx} className="sp-detail__section">
                <div className="row align-items-center g-5">
                  {/* Text column */}
                  <div className={`col-12 ${sec.image ? 'col-lg-6' : 'col-lg-10 mx-auto'}`}>
                    <p className="sp-detail__section-num" style={{ color: cs.color }}>
                      {String(idx + 1).padStart(2, '0')}
                    </p>
                    <h3 className="sp-detail__section-title">{sec.title}</h3>
                    <div className="sp-detail__section-content">
                      {renderContent(sec.content)}
                    </div>
                  </div>
                  {/* Image column */}
                  {sec.image && (
                    <div className={`col-12 col-lg-6 ${idx % 2 === 0 ? 'order-lg-last' : 'order-lg-first'}`}>
                      <div className="sp-detail__section-image">
                        <img src={getAssetPath(sec.image)} alt={sec.imageAlt || sec.title} loading="lazy" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Fallback for cases without sections ── */}
      {!hasSections && cs.overview && (
        <section className="sp-detail__sections">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <h3 className="sp-detail__section-title">项目概述</h3>
                <div className="sp-detail__section-content">{cs.overview}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Tech Stack ── */}
      {hasTechStack && (
        <section className="sp-detail__tech">
          <div className="container">
            <h3 className="sp-detail__tech-title">技术栈</h3>
            <div className="sp-detail__tech-tags">
              {cs.techStack!.map((t) => (
                <span key={t} className="sp-detail__tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Deliverables ── */}
      {hasDeliverables && (
        <section className="sp-detail__deliverables">
          <div className="container">
            <h3 className="sp-detail__deliverables-title">交付成果</h3>
            <ul className="sp-detail__deliverables-list">
              {cs.deliverables!.map((d, i) => (
                <li key={i} style={{ '--dot-color': cs.color } as React.CSSProperties}>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Navigation ── */}
      <section className="sp-detail__nav">
        <div className="container text-center">
          <Link to="/case-studies" className="sp-detail__nav-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            返回全部案例
          </Link>
        </div>
      </section>
    </div>
  )
}
