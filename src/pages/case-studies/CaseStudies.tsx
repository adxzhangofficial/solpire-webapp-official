import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { caseStudies, categories } from '../../data/caseStudies'
const caseStudyCover = '/assets/images/2026/case-study.png'
import './CaseStudies.css'

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    document.title = '项目案例 - Solpire 溯湃科技'
    window.scrollTo(0, 0)
  }, [])

  const filteredCases =
    activeCategory === 'all'
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeCategory)

  return (
    <div className="sp-cases-page">
      {/* Hero */}
      <section className="sp-cases-page__hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link to="/" className="sp-cases-page__back">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                返回首页
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <span className="sp-section__label">Case Studies</span>
              <h1 className="sp-cases-page__title">项目案例</h1>
              <p className="sp-cases-page__subtitle">
                深耕工业与能源、数字孪生、数字工具三大领域，为客户提供可落地的 AI 解决方案
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="sp-cases-page__content">
        <div className="container">
          {/* Category Filter */}
          <div className="row justify-content-center mb-5">
            <div className="col-12">
              <div className="sp-cases__filters">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    className={`sp-cases__filter ${activeCategory === cat.key ? 'sp-cases__filter--active' : ''}`}
                    onClick={() => setActiveCategory(cat.key)}
                  >
                    {cat.label}
                    {cat.key === 'all' && (
                      <span className="sp-cases__filter-count">{caseStudies.length}</span>
                    )}
                    {cat.key !== 'all' && (
                      <span className="sp-cases__filter-count">
                        {caseStudies.filter((c) => c.category === cat.key).length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Case Cards Grid */}
          <div className="row g-4">
            {filteredCases.map((cs) => (
              <div key={cs.id} className="col-12 col-md-6 col-lg-4">
                <Link to="/case-studies/$id" params={{ id: cs.id }} className="sp-case-card__link">
                  <div className="sp-case-card sp-case-card--listing">
                    <div className="sp-case-card__cover">
                      <img src={caseStudyCover} alt={cs.title} loading="lazy" />
                      <div className="sp-case-card__cover-overlay" />
                    </div>
                    <div className="sp-case-card__body">
                      <div className="sp-case-card__header">
                        <span className="sp-case-card__category">
                          {cs.categoryLabel}
                        </span>
                      </div>
                      <h3 className="sp-case-card__title">{cs.title}</h3>
                      <p className="sp-case-card__title-en">{cs.titleEn}</p>
                      <p className="sp-case-card__desc">{cs.description}</p>
                      <div className="sp-case-card__highlights">
                        {cs.highlights.map((h) => (
                          <span key={h} className="sp-case-card__highlight">
                            {h}
                          </span>
                        ))}
                      </div>
                      <span className="sp-case-card__arrow">
                        查看详情 →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="row justify-content-center py-5">
              <div className="col-12 text-center">
                <p className="sp-cases-page__empty">该分类暂无案例</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
