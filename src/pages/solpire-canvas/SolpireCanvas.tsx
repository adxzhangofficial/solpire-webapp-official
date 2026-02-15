import { useEffect } from "react"
import { Link } from "@tanstack/react-router"

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: '自然语言建站',
    desc: '通过简单的文字描述即可自动生成专业级网页，无需编程经验'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: '实时编辑调整',
    desc: '所见即所得的编辑体验，支持实时预览与拖拽式调整'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: '代码导出',
    desc: '一键导出标准HTML/CSS/JS代码，可直接部署上线或二次开发'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: '多端适配',
    desc: '自动生成响应式设计，完美适配PC、平板、手机等多种设备'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: '品牌定制',
    desc: '支持品牌色彩、Logo、字体等全方位定制，打造专属企业形象'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: '极速生成',
    desc: '秒级网页生成速度，大幅缩短项目交付周期'
  },
]

export function SolpireCanvas() {

  useEffect(() => {
    document.title = "Solpire Canvas - 智能网页生成平台"
  }, [])

  return (
    <div className="sp-product-page sp-product-page--canvas">
      {/* Hero */}
      <section className="sp-product-hero" style={{ '--accent': '#8b5cf6' } as React.CSSProperties}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link
                to="/"
                className="sp-cases-page__back"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                返回首页
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <div className="sp-product-hero__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <h1 className="sp-product-hero__title">Solpire Canvas</h1>
              <p className="sp-product-hero__subtitle">智能网页生成平台</p>
              <p className="sp-product-hero__desc">
                基于AI的智能网页生成工具，通过自然语言描述即可快速创建专业级网页设计。
                大幅降低开发成本与周期，让创意不再受限于技术门槛。
              </p>
              <div className="sp-product-hero__actions">
                <a href="mailto:solpire@outlook.com" className="sp-btn sp-btn--primary">
                  申请试用
                </a>
                <Link to="/contact-us" className="sp-btn sp-btn--outline">
                  联系销售
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="sp-product-features">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-8 text-center">
              <h2 className="sp-section__title">产品特性</h2>
              <p className="sp-section__desc">AI驱动的全流程网页生成解决方案</p>
            </div>
          </div>
          <div className="row g-4">
            {features.map((feature) => (
              <div key={feature.title} className="col-12 col-md-6 col-lg-4">
                <div className="sp-feature-card">
                  <div className="sp-feature-card__icon" style={{ color: '#8b5cf6' }}>
                    {feature.icon}
                  </div>
                  <h3 className="sp-feature-card__title">{feature.title}</h3>
                  <p className="sp-feature-card__desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="sp-product-usecases">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-8 text-center">
              <h2 className="sp-section__title">应用场景</h2>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { title: '企业官网', desc: '快速构建专业企业形象网站' },
              { title: '产品落地页', desc: '高转化率产品推广页面' },
              { title: '活动页面', desc: '展会、发布会等活动宣传页' },
              { title: '内部系统', desc: '企业内部管理系统界面' },
            ].map((uc) => (
              <div key={uc.title} className="col-6 col-md-3">
                <div className="sp-usecase-card">
                  <h4>{uc.title}</h4>
                  <p>{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-product-cta">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 text-center">
              <h2>开始使用 Solpire Canvas</h2>
              <p>联系我们获取演示与试用机会</p>
              <a href="mailto:solpire@outlook.com" className="sp-btn sp-btn--primary sp-btn--lg">
                立即咨询
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
