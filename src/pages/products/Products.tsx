import React, { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { allProducts } from '../../data/products'
import './Products.css'

/* ─── Icon Map (40px for listing cards) ─── */
const iconMap: Record<string, React.ReactNode> = {
  cube: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  layout: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  user: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  gamepad: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" />
      <circle cx="16" cy="10" r="0.5" fill="currentColor" /><circle cx="18" cy="12" r="0.5" fill="currentColor" />
    </svg>
  ),
  sun: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  zap: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  eye: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  cpu: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
}

function getIcon(key: string) {
  return iconMap[key] || iconMap['cube']
}

export default function Products() {
  useEffect(() => {
    document.title = '核心产品与项目 - Solpire 溯湃科技'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="sp-products-page">
      {/* Hero */}
      <section className="sp-products-page__hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link to="/" className="sp-products-page__back">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                返回首页
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <span className="sp-section__label">Our Products & Projects</span>
              <h1 className="sp-products-page__title">核心产品与项目</h1>
              <p className="sp-products-page__subtitle">
                {allProducts.length}大核心产品与AI项目，覆盖3D数字资产、智能网页生成、AI数字人、MR健身、光伏预测、用电安全、工业视觉检测、工业自动化编程，为企业提供全方位AI赋能
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="sp-products-page__content">
        <div className="container">
          <div className="row g-4">
            {allProducts.map((product) => {
              const linkTarget = product.externalLink || `/products/${product.slug}`
              return (
                <div key={product.id} className="col-12 col-md-6 col-lg-4">
                  <a href={linkTarget} className="sp-product-card sp-product-card--page" style={{ textDecoration: 'none' }}>
                    <div className="sp-product-card__glow" />
                    <div className="sp-product-card__icon" style={{ color: product.color }}>
                      {getIcon(product.iconKey)}
                    </div>
                    <h3 className="sp-product-card__name">{product.name}</h3>
                    <p className="sp-product-card__name-cn">{product.nameCn}</p>
                    <p className="sp-product-card__desc">{product.shortDescCn}</p>
                    <div className="sp-product-card__tags">
                      {product.tags.map((tag) => (
                        <span key={tag} className="sp-product-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="sp-product-card__arrow">
                      <span>了解更多</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
