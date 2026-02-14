/**
 * WhyUsSection — Uses the exact same Variant C layout as GeoOptixShowcaseC.
 * Block 1: Left text + Right glassmorphism card (pain points)
 * Block 2: Left text + Right glassmorphism card (solutions)
 */
import { Link } from '@tanstack/react-router'
import { CardSpotlight } from '../ui/card-spotlight'

/* ── Component ── */
export function WhyUsSection() {
  return (
    <>
      {/* BLOCK 1 — Pain Points */}
      <section className="geooptix-showcase geooptix-showcase--c">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 col-12">
              <p className="gx-label">行业痛点</p>
              <h1 className="gx-title">将AI算法研发</h1>
              <h2 className="gx-title-sub-c">交给我们</h2>
              <p className="gx-tagline">
                传统AI研发面临三大核心挑战，企业亟需更高效的外部技术力量来突破瓶颈。
              </p>
              <div className="gx-actions">
                <Link to="/contact-us" className="sp-btn sp-btn--primary" style={{ textDecoration: 'none' }}>
                  联系我们
                </Link>
                <Link to="/cooperation" className="sp-btn sp-btn--outline" style={{ textDecoration: 'none' }}>
                  技术合作
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12 mt-4 mt-md-0">
              <CardSpotlight className="gx-card-c">
                <div className="gx-card-c__header">
                  <img src="/assets/images/logo--1--1.png" alt="Solpire Logo" className="logo-icon gx-card-c__logo" />
                  <div>
                    <h3 className="gx-card-c__name">行业核心痛点</h3>
                    <p className="gx-card-c__sub">AI R&D Challenges</p>
                  </div>
                </div>
                <p className="gx-card-c__desc">
                  AI技术研发需要大量资金投入，资源难以高效利用。技术试错成本高，传统流程难以满足质量与精度双重需求。
                  从技术开发到落地应用，漫长的周期阻碍企业数字化转型与创新节奏。
                </p>
                <div className="gx-card-c__stats">
                  <div className="gx-card-c__stat">
                    <span className="gx-card-c__stat-num">70%</span>
                    <span className="gx-card-c__stat-label">企业研发预算超支</span>
                  </div>
                  <div className="gx-card-c__stat">
                    <span className="gx-card-c__stat-num">60%</span>
                    <span className="gx-card-c__stat-label">项目延期交付</span>
                  </div>
                  <div className="gx-card-c__stat">
                    <span className="gx-card-c__stat-num">85%</span>
                    <span className="gx-card-c__stat-label">AI试点未达预期</span>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2 — Solutions */}
      <section className="geooptix-showcase geooptix-showcase--c">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 col-12 mb-4 mb-md-0 order-2 order-md-1">
              <CardSpotlight className="gx-card-c">
                <div className="gx-card-c__header">
                  <img src="/assets/images/logo--1--1.png" alt="Solpire Logo" className="logo-icon gx-card-c__logo" />
                  <div>
                    <h3 className="gx-card-c__name">我们的解决方案</h3>
                    <p className="gx-card-c__sub">Solpire AI Solutions</p>
                  </div>
                </div>
                <p className="gx-card-c__desc">
                  无需组建庞大的基础研发团队，无需重复投入底层技术建设。
                  专业团队提供先进模型与部署方案，极大加速项目上线进程。
                  基于成熟、稳定、可控的技术体系，确保项目成功落地，降低试错代价。
                </p>
                <div className="gx-card-c__stats">
                  <div className="gx-card-c__stat">
                    <span className="gx-card-c__stat-num">↓40%</span>
                    <span className="gx-card-c__stat-label">研发成本降低</span>
                  </div>
                  <div className="gx-card-c__stat">
                    <span className="gx-card-c__stat-num">3×</span>
                    <span className="gx-card-c__stat-label">交付速度提升</span>
                  </div>
                  <div className="gx-card-c__stat">
                    <span className="gx-card-c__stat-num">99%</span>
                    <span className="gx-card-c__stat-label">项目成功落地率</span>
                  </div>
                </div>
              </CardSpotlight>
            </div>
            <div className="col-lg-5 col-md-6 col-12 order-1 order-md-2 mb-4 mb-md-0">
              <p className="gx-label">我们的回应</p>
              <h1 className="gx-title">减少您的研发</h1>
              <h2 className="gx-title-sub-c">成本和风险</h2>
              <p className="gx-tagline">
                我们提供全流程技术支持，从算法研发到落地部署，为企业数字化转型保驾护航。
              </p>
              <div className="gx-actions">
                <Link to="/about-us" className="sp-btn sp-btn--primary" style={{ textDecoration: 'none' }}>
                  关于我们
                </Link>
                <Link to="/case-studies" className="sp-btn sp-btn--outline" style={{ textDecoration: 'none' }}>
                  成功案例
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
