import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { caseStudies, categories } from '../../data/caseStudies'

const HOMEPAGE_LIMIT = 6

export function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredCases = activeCategory === 'all'
    ? caseStudies.slice(0, HOMEPAGE_LIMIT)
    : caseStudies.filter(c => c.category === activeCategory).slice(0, HOMEPAGE_LIMIT)

  return (
    <section id="cases" className="sp-cases">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-lg-8 text-center">
            <span className="sp-section__label">Case Studies</span>
            <h2 className="sp-section__title">项目案例</h2>
            <p className="sp-section__desc">
              深耕工业与能源、数字孪生、数字工具三大领域，为客户提供可落地的AI解决方案
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="row justify-content-center mb-4">
          <div className="col-12">
            <div className="sp-cases__filters">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`sp-cases__filter ${activeCategory === cat.key ? 'sp-cases__filter--active' : ''}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {cat.label}
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
                <div className="sp-case-card">
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
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 text-center">
            <Link to="/case-studies" className="sp-cases__view-all">
              查看全部案例
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
