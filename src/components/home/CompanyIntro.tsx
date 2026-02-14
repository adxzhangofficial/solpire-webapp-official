import { useThemeStore } from '../../stores/themeStore'

const logoLight = '/assets/images/2026/solpire-white-theme.jpg'
const logoDark = '/assets/images/2026/solpire-dark-theme.jpg'
const buildingImg = '/assets/images/2026/building.png'

interface CompanyIntroProps {
  id?: string
}

const capabilities = [
  {
    icon: '/assets/images/2026/icons8-globe-80.png',
    title: '多模态大模型',
    desc: 'LLMs、VLMs、多模态融合'
  },
  {
    icon: '/assets/images/2026/icons8-3d-80.png',
    title: '高精度3D感知',
    desc: '三维建模与数字资产管理'
  },
  {
    icon: '/assets/images/2026/icons8-vision-80.png',
    title: '机器视觉',
    desc: '工业缺陷检测与视觉AI'
  },
  {
    icon: '/assets/images/2026/icons8-analysis-80.png',
    title: '数据预测分析',
    desc: '机器学习驱动决策优化'
  },
]

export function CompanyIntro({ id = "about" }: CompanyIntroProps) {
  const { theme } = useThemeStore()
  const logo = theme === 'dark' ? logoDark : logoLight

  return (
    <section id={id} className="sp-company" data-testid="section-company-intro">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <span className="sp-section__label">About Us</span>
            <h2 className="sp-section__title">关于溯湃科技</h2>
          </div>
        </div>

        {/* Hero: Logo + Building visual */}
        <div className="sp-company__hero">
          <div className="sp-company__hero-logo">
            <img src={logo} alt="Solpire Logo" className="sp-company__logo-img" />
          </div>
          <div className="sp-company__hero-building">
            <div className="sp-company__building-frame">
              <img src={buildingImg} alt="Solpire Office - 深圳南山科技园" className="sp-company__building-img" />
              <div className="sp-company__building-overlay">
                <div className="sp-company__building-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>深圳市南山区科技园</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Description Card */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-12">
            <div className="sp-company__intro-card">
              <p className="sp-company__text" data-testid="text-company-description">
                深圳溯湃科技是以人工智能革新为核心的初创科技企业，位于深圳南山科技园中心，由5位AI领域资深研究者联合创立。我们专注于开发高价值、可落地的企业级AI解决方案，以多模态大模型、机器学习数据预测分析、机器视觉、高精度3D感知等AI核心技术为根基，致力于打造赋能千行百业的智能化生产与管理引擎——助力企业实现产品管理"零缺陷"管控、优化生产开发流程、压缩成本，驱动全面数智化升级。
              </p>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="row g-4 mb-5">
          {capabilities.map((cap) => (
            <div key={cap.title} className="col-6 col-md-3">
              <div className="sp-company__cap">
              <div className="sp-company__cap-icon">
                  <img src={cap.icon} alt={cap.title} className="sp-company__cap-icon-img" />
                </div>
                <h4 className="sp-company__cap-title">{cap.title}</h4>
                <p className="sp-company__cap-desc">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Modes */}
        {/* <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="sp-company__delivery">
              <h4 className="sp-company__delivery-title">灵活交付方式</h4>
              <div className="sp-company__delivery-modes">
                {deliveryModes.map((mode) => (
                  <div key={mode.label} className="sp-company__delivery-mode">
                    <span className="sp-company__delivery-label">{mode.label}</span>
                    <span className="sp-company__delivery-desc">{mode.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
