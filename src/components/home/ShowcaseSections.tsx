import { Link } from '@tanstack/react-router'
import { SolpireDevice } from './SolpireDevice'
import { CardSpotlight } from '../ui/card-spotlight'

/**
 * Showcase sections with background images — restored from original design.
 * Includes: Machine Showcase, 3D Text Search, SLPH Hero with Macbook, Desktop Banner.
 */

/* ─── GeoOptix Showcase — 3 design variants (pick one, delete the other two) ─── */

/** VARIANT A — Side-by-side: text left, logo+visual right (same layout as SLPH Hero) */
export function GeoOptixShowcaseA() {
  return (
    <section className="geooptix-showcase geooptix-showcase--a">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-7 col-12">
            <p className="gx-label">GEOOPTIX SOFTWARE</p>
            <h1 className="gx-title">
              GeoOptix<br />
              <span className="gx-title-sub">AI零件智研软件</span>
            </h1>
            <p className="gx-tagline">加速推动三维数字化资产管理与智能制造转型</p>
            <p className="gx-desc">
              GeoOptix 是一款面向工业领域的智能3D几何查重软件，通过自研AI算法实现大规模三维模型的高效查重与标准化管理。
              支持百万级工业零部件的秒级查重，识别精度达99%以上。
            </p>
            <span className="gx-version">2.3.6a 版本开发进行中</span>
            <div className="gx-actions">
              <Link to="/duplicate-checker" className="sp-btn sp-btn--primary" style={{ textDecoration: 'none' }}>
                进一步了解
              </Link>
              <Link to="/contact-us" className="sp-btn sp-btn--outline" style={{ textDecoration: 'none' }}>
                预约演示
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-12 text-center mt-4 mt-md-0">
            <div className="gx-visual-a">
              <img src="/assets/images/logo--1--1.png" alt="GeoOptix Logo" className="gx-logo-a" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** VARIANT B — Centered hero layout (inspired by the backup Home.tsx hero) */
export function GeoOptixShowcaseB() {
  return (
    <section className="geooptix-showcase geooptix-showcase--b showcase-b-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="gx-center-wrap">
              <div className="gx-title-row">
                <h1 className="gx-hero-title">GeoOptix</h1>
                <img src="/assets/images/logo--1--1.png" alt="GeoOptix Logo" className="gx-hero-logo" />
              </div>
              <h2 className="gx-hero-subtitle">AI零件智研软件</h2>
              <p className="gx-hero-tagline">加速推动三维数字化资产管理与智能制造转型</p>
              <p className="gx-hero-desc">
                面向工业领域的智能3D几何查重软件，通过自研AI算法实现大规模三维模型的高效查重与标准化管理。
                支持百万级工业零部件的秒级查重，识别精度达99%以上。
              </p>
              <div className="gx-hero-divider" />
              <span className="gx-hero-version">2.3.6a 版本开发进行中</span>
              <div className="gx-hero-actions">
                <Link to="/duplicate-checker" className="sp-btn sp-btn--primary" style={{ textDecoration: 'none' }}>
                  进一步了解
                </Link>
                <Link to="/contact-us" className="sp-btn sp-btn--outline" style={{ textDecoration: 'none' }}>
                  预约演示
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** VARIANT C — Left text + right product mockup card */
export function GeoOptixShowcaseC() {
  return (
    <section className="geooptix-showcase geooptix-showcase--c">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6 col-12">
            <p className="gx-label">GEOOPTIX SOFTWARE</p>
            <h1 className="gx-title">GeoOptix</h1>
            <h2 className="gx-title-sub-c">AI零件智研软件</h2>
            <p className="gx-tagline">加速推动三维数字化资产管理与智能制造转型</p>
            <span className="gx-version">2.3.6a 版本开发进行中</span>
            <div className="gx-actions">
              <Link to="/duplicate-checker" className="sp-btn sp-btn--primary" style={{ textDecoration: 'none' }}>
                进一步了解
              </Link>
              <Link to="/contact-us" className="sp-btn sp-btn--outline" style={{ textDecoration: 'none' }}>
                预约演示
              </Link>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-12 mt-4 mt-md-0">
            <CardSpotlight className="gx-card-c">
              <div className="gx-card-c__header">
                <img src="/assets/images/logo--1--1.png" alt="GeoOptix Logo" className="logo-icon gx-card-c__logo" />
                <div>
                  <h3 className="gx-card-c__name">GeoOptix</h3>
                  <p className="gx-card-c__sub">AI零件智研软件</p>
                </div>
              </div>
              <p className="gx-card-c__desc">
                面向工业领域的智能3D几何查重软件，通过自研AI算法实现大规模三维模型的高效查重与标准化管理。
                支持百万级工业零部件的秒级查重，识别精度达99%以上，可检测0.1mm级几何差异。
                兼容主流CAD格式（SolidWorks / Creo / NX等）。
              </p>
              <div className="gx-card-c__stats">
                <div className="gx-card-c__stat">
                  <span className="gx-card-c__stat-num">99%+</span>
                  <span className="gx-card-c__stat-label">识别精度</span>
                </div>
                <div className="gx-card-c__stat">
                  <span className="gx-card-c__stat-num">0.1mm</span>
                  <span className="gx-card-c__stat-label">几何差异</span>
                </div>
                <div className="gx-card-c__stat">
                  <span className="gx-card-c__stat-num">百万级</span>
                  <span className="gx-card-c__stat-label">秒级查重</span>
                </div>
              </div>
            </CardSpotlight>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Machine gear showcase with index-bg.png background overlay */
export function MachineShowcase() {
  return (
    <section className="sol-box-modal">
      <div className="sol-page-overlay">
        {/* Background Images */}
        <div className="sol-bg-images">
          <img
            src="/assets/images/index-pg/img1.png"
            alt="Background 1"
            className="sol-bg-img-1"
          />
          <img
            src="/assets/images/index-pg/img2.png"
            alt="Background 2"
            className="sol-bg-img-2"
          />
          <img
            src="/assets/images/index-pg/img3.png"
            alt="Background 3"
            className="sol-bg-img-3"
          />
        </div>
        {/* Modal Backdrop */}
        <div className="sol-modal-backdrop">
          <div className="sol-modal-box">
            <div className="sol-modal-bg-layer" />
            <div className="sol-modal-wrapper">
              <div className="sol-modal-container">
                {/* Left: Main Gear */}
                <div className="sol-main-image-section">
                  <div className="sol-main-image-wrapper">
                    <img
                      src="/assets/images/index-pg/main-gear.png"
                      alt="Main Gear"
                      className="sol-main-gear-image"
                    />
                  </div>
                </div>
                {/* Right: Grid of Machine Parts */}
                <div className="sol-grid-section">
                  <div className="sol-image-grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((num) => (
                      <div key={num} className="sol-grid-item">
                        <img
                          src={`/assets/images/index-pg/machine-${num}.png`}
                          alt={`Machine ${num}`}
                          className="sol-grid-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Bottom Text */}
              <div className="sol-description-text">
                <span className="sol-text-highlight">共性文件</span>
                <span className="sol-text-normal">管理</span>
                <span className="sol-text-normal">检索</span>
                <span className="sol-text-normal">识别</span>
                <span className="sol-text-muted">助力资产收集和高效利用</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Gradient text heading */
export function GradientHeading({ text }: { text: string }) {
  return (
    <div className="d-flex justify-content-center align-items-center my-25">
      <h1 className="gradient-text">{text}</h1>
    </div>
  )
}

/** "3D模型语义快速搜索" section with background image text fill */
export function ThreeDTextSection() {
  return (
    <section className="three-d-text-section">
      <div className="d-flex justify-content-center align-items-center mt-0 mb-15 margin-low">
        <h1 className="image-fill-text">3D模型语义快速搜索</h1>
      </div>
    </section>
  )
}

/** SLPH Hero with Solpire Device */
export function SlphHero() {
  return (
    <>
      <div className="slph-section-heading">
        <h1 className="gradient-text">SOLPIRE 在研项目</h1>
      </div>
      <section className="slph-hero position-relative d-flex flex-column align-items-center text-start">
        <div className="container position-relative">
        <div className="row align-items-center">
          {/* Left Text */}
          <div className="col-lg-6 col-md-7 col-12">
            <p className="slph-subtitle mb-2">SOLPIRE AI HARDWARE</p>
            <h1 className="slph-heading mb-3">
              AI驱动的 <br />
              智能终端设备
            </h1>
            <p className="slph-desc mb-4">
              Solpire 智能终端集成语音交互、实时AI推理与紧急响应于一体，
              为工业场景提供边缘智能解决方案。支持本地化部署，实现毫秒级响应，
              让AI真正落地到每一个生产现场。
            </p>
            <div className="sp-hero__actions" style={{ justifyContent: 'flex-start' }}>
              <Link to="/contact-us" className="sp-btn sp-btn--primary" style={{ textDecoration: 'none' }}>
                预约演示
              </Link>
              <Link to="/contact-us" className="sp-btn sp-btn--outline" style={{ textDecoration: 'none' }}>
                联系我们
              </Link>
            </div>
          </div>
          {/* Right — Solpire Device Demo */}
          <div className="col-lg-6 col-md-5 col-12 text-center mt-4 mt-md-0">
            <SolpireDevice />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

/** GeoOptix info boxes (glass-morphism cards sitting on the slph-hero bg) */
export function GeoOptixBoxes() {
  return (
    <section className="geooptix-section container-fluid py-5 position-relative">
      <div className="geo-wrapper mx-auto position-relative">
        {/* Box 1 */}
        <div className="geo-box geo-box-1 p-4">
          <h4 className="fw-bold text-white mb-3">GeOoptix是什么？</h4>
          <p className="mb-1 text-shadow">
            GeOoptix是一款面向工业领域的智能3D几何查重软件，通过自研的AI算法实现大规模三维模型的高效查重与标准化管理。
          </p>
          <p className="mb-1 text-shadow">
            核心能力：
            <br />
            支持百万级工业零部件的秒级查重
            <br />
            识别精度达99%以上，可检测0.1mm级几何差异
            <br />
            兼容主流CAD格式（SolidWorks/Creo/NX等）
          </p>
        </div>
        {/* Box 2 */}
        <div className="geo-box geo-box-2 p-4 position-absolute">
          <h4 className="fw-bold text-white mb-3">解决了哪些工业痛点？</h4>
          <p className="mb-1 text-shadow">
            重复设计导致物料激增，某家电客户年新增5-6万个零件，生命周期成本超25亿。
          </p>
          <p className="mb-1 text-shadow">
            工程师查找相似件平均耗时15分钟/次，PLM系统查重效率低下，无法解决一物多码的问题。
          </p>
          <p className="text-shadow">模具/工装重复开发，试模失败率高达30%。</p>
        </div>
        {/* Box 3 */}
        <div className="geo-box geo-box-3 p-4 position-absolute">
          <h4 className="fw-bold text-white mb-3">GeOoptix的解决方案：</h4>
          <p className="mb-1 text-shadow">
            重复件智能拦截：设计阶段自动推送相似件，减少30%以上新物料申请。
          </p>
          <p className="mb-1 text-shadow">
            跨部门数据重用：工艺/模具/采购环节复用历史数据，缩短50%开发周期。
          </p>
          <p className="text-shadow">
            全生命周期管理：实现物料增长量年降低10%-20%。
          </p>
        </div>
      </div>
    </section>
  )
}

/** Full-viewport desktop banner with parallax */
export function DesktopBanner() {
  return <section className="desktop-banner" />
}
