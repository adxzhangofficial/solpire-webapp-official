import { useEffect } from "react"
import { Link } from "@tanstack/react-router"

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: '高保真数字人',
    desc: '基于AI生成技术创建逼真的数字人形象，支持自定义外观、服装、表情'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    title: '语音交互',
    desc: '支持多语言语音合成与实时对话，打造自然流畅的人机交互体验'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: '情感表达',
    desc: '先进的情感识别与表达系统，数字人可根据对话内容呈现相应的表情与肢体语言'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: '多场景适配',
    desc: '适用于直播带货、客服导购、教育培训、企业展示等多种业务场景'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    title: 'API集成',
    desc: '提供完善的API接口，可快速集成到现有业务系统与应用中'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: '实时渲染',
    desc: '先进的实时渲染引擎，保证数字人动作流畅自然，低延迟高质量'
  }
]

export function SolpireAvatar() {

  useEffect(() => {
    document.title = "Solpire Avatar - AI数字人系统"
  }, [])

  return (
    <div className="sp-product-page sp-product-page--avatar">
      {/* Hero */}
      <section className="sp-product-hero" style={{ '--accent': '#a855f7' } as React.CSSProperties}>
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
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h1 className="sp-product-hero__title">Solpire Avatar</h1>
              <p className="sp-product-hero__subtitle">AI数字人系统 V3.1</p>
              <p className="sp-product-hero__desc">
                新一代AI数字人解决方案，融合大语言模型与先进渲染技术，
                支持高保真数字人生成、实时语音交互、多场景应用，
                为企业提供智能化数字形象服务。
              </p>
              <div className="sp-product-hero__actions">
                <a href="mailto:solpire@outlook.com" className="sp-btn sp-btn--primary">
                  申请演示
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
              <h2 className="sp-section__title">核心能力</h2>
              <p className="sp-section__desc">全方位数字人技术能力，满足多元化业务需求</p>
            </div>
          </div>
          <div className="row g-4">
            {features.map((feature) => (
              <div key={feature.title} className="col-12 col-md-6 col-lg-4">
                <div className="sp-feature-card">
                  <div className="sp-feature-card__icon" style={{ color: '#a855f7' }}>
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
              { title: '智能客服', desc: '7x24小时数字人客服，提升服务体验' },
              { title: '直播带货', desc: '数字人主播，降本增效' },
              { title: '企业展示', desc: '数字代言人，塑造品牌形象' },
              { title: '教育培训', desc: '数字教师，个性化教学' },
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
              <h2>体验 Solpire Avatar</h2>
              <p>联系我们获取演示与合作机会</p>
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
