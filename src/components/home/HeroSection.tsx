import { getAssetPath } from '../../lib/utils'

export function HeroSection() {
  return (
    <section className="sp-hero">
      <div className="sp-hero__bg">
        <img
          src={getAssetPath('/assets/images/-------1.png')}
          alt=""
          className="sp-hero__bg-image"
        />
        <div className="sp-hero__gradient" />
        <div className="sp-hero__particles" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 text-center">
            <div className="sp-hero__content">
              <div className="sp-hero__badge">
                <span className="sp-hero__badge-dot" />
                AI-Driven Innovation
              </div>
              <h1 className="sp-hero__title">
                <span className="sp-hero__title-main">SOLPIRE</span>
                <span className="sp-hero__title-cn">深圳溯湃科技</span>
              </h1>
              <p className="sp-hero__subtitle">
                以人工智能革新为核心，赋能千行百业的智能化生产与管理引擎
              </p>
              <p className="sp-hero__tagline">
                Empowering industries with cutting-edge AI solutions
              </p>
              <div className="sp-hero__actions">
                <a href="#products" className="sp-btn sp-btn--primary">
                  <span>探索产品</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#cases" className="sp-btn sp-btn--outline">
                  <span>查看案例</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="sp-hero__stats">
                <div className="sp-hero__stat">
                  <span className="sp-hero__stat-number">高成本</span>
                  <span className="sp-hero__stat-label">AI技术研发需要大量资金投入，资源难以高效利用。</span>
                </div>
                <div className="sp-hero__stat-divider" />
                <div className="sp-hero__stat">
                  <span className="sp-hero__stat-number">高风险</span>
                  <span className="sp-hero__stat-label">AI技术试错成本高，传统流程难以满足质量与精度双重需求。</span>
                </div>
                <div className="sp-hero__stat-divider" />
                <div className="sp-hero__stat">
                  <span className="sp-hero__stat-number">长周期</span>
                  <span className="sp-hero__stat-label">从技术开发到落地应用，漫长的周期阻碍企业数字化转型与创新节奏</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
