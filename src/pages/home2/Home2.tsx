import { useState, useEffect, useRef } from "react"
import MeetingModal from "../../components/meeting-modal/MeetingModal"
import { getAssetPath } from "../../lib/utils"
import { useImagesLoaded } from '../../hooks'
import {
  CompanyIntro,
  PainPoints,
  Solutions,
  SectionDivider,
  SectionTitle,
  ServicesSection,
  PortfolioCarousel,
  TeamSection
} from "../../components/home"

export function Home2() {
  const [selectedMeetingDate, setSelectedMeetingDate] = useState("")
  const [isMeetingModalOpen, setMeetingModalOpen] = useState(false)

  const handleDaySelect = (day: number) => {
    const formattedDate = `2025-11-${String(day).padStart(2, '0')}`
    setSelectedMeetingDate(formattedDate)
    setMeetingModalOpen(true)
  }

  const closeMeetingModal = () => {
    setMeetingModalOpen(false)
  }

  useEffect(() => {
    document.body.classList.add("home2-body")
    return () => document.body.classList.remove("home2-body")
  }, [])

  useEffect(() => {
    document.title = "Solpire - 重复检查器";
  }, []);

  const pageRef = useRef<HTMLDivElement>(null)
  const imagesReady = useImagesLoaded(pageRef)

  return (
    <>
      <MeetingModal 
        isOpen={isMeetingModalOpen} 
        selectedDate={selectedMeetingDate}
        onClose={closeMeetingModal}
      />
      <div ref={pageRef}>
        {/* Page-level image preloader */}
        {!imagesReady && (
          <div className="sp-page-loader">
            <div className="sp-page-loader__spinner" />
          </div>
        )}
        <div style={{ opacity: imagesReady ? 1 : 0, transition: 'opacity 0.4s ease' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src={getAssetPath('/assets/images/-------1.png')}
            alt="Background"
            className="hero-bg-image"
          />
        </div>
        <div className="container mt-lg-106">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="hero-content text-center">
                <div className="hero-title-wrap">
                  <h1 className="hero-title">GeoOptix</h1>
                  <img
                    src={getAssetPath('/assets/images/logo--1--1.png')}
                    alt="GeoOptix Logo"
                    className="hero-logo"
                  />
                </div>
                <h2 className="hero-subtitle">AI零件智研软件</h2>
                <p className="hero-tagline">
                  加速推动三维数字化资产管理与智能制造转型
                </p>
                <div className="hero-divider" />
                <div className="d-flex justify-content-center gap-2">
                  <a
                    href="#"
                    id="learnMoreBtn"
                    className="cta-button"
                    style={{ textDecoration: "none", display: "inline-block" }}
                    data-testid="link-learn-more"
                  >
                    <span>进一步了解</span>
                  </a>
                  <a
                    href="#"
                    id="freeTrialBtn"
                    className="cta-button-2"
                    style={{ textDecoration: "none", display: "inline-block" }}
                    data-testid="link-free-trial"
                  >
                    <span>免费线上体验</span>
                  </a>
                </div>
                <span className="hero-version">2.3.6a 版本开发进行中</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Overlay Background */}
      <section className="sol-box-modal">
        <div className="sol-page-overlay">
          {/* Background Images */}
          <div className="sol-bg-images">
            <img
              src={getAssetPath('/assets/images/index-pg/img1.png')}
              alt="Background 1"
              className="sol-bg-img-1"
            />
            <img
              src={getAssetPath('/assets/images/index-pg/img2.png')}
              alt="Background 2"
              className="sol-bg-img-2"
            />
            <img
              src={getAssetPath('/assets/images/index-pg/img3.png')}
              alt="Background 3"
              className="sol-bg-img-3"
            />
          </div>
          {/* Modal Backdrop */}
          <div className="sol-modal-backdrop">
            {/* Modal Box Wrapper */}
            <div className="sol-modal-box">
              {/* Modal Background Layer (Blurred White) */}
              <div className="sol-modal-bg-layer" />
              {/* Modal Content Wrapper */}
              <div className="sol-modal-wrapper">
                {/* Modal Container */}
                <div className="sol-modal-container">
                  {/* Left Side: Main Gear Image */}
                  <div className="sol-main-image-section">
                    <div className="sol-main-image-wrapper">
                      <img
                        src={getAssetPath('/assets/images/index-pg/main-gear.png')}
                        alt="Main Gear"
                        className="sol-main-gear-image"
                      />
                    </div>
                  </div>
                  {/* Right Side: Grid of Small Images */}
                  <div className="sol-grid-section">
                    <div className="sol-image-grid">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((num) => (
                        <div key={num} className="sol-grid-item">
                          <img
                            src={getAssetPath(`/assets/images/index-pg/machine-${num}.png`)}
                            alt={`Machine ${num}`}
                            className="sol-grid-image"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Bottom Text Section */}
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

      <div className="d-flex justify-content-center align-items-center my-25">
        <h1 className="gradient-text">减少重复模型</h1>
      </div>

      <section className="three-d-text-section">
        <div className="d-flex justify-content-center align-items-center mt-0 mb-15 margin-low">
          <h1 className="image-fill-text">3D模型语义快速搜索</h1>
        </div>
      </section>

      <div className="d-flex justify-content-center align-items-center mt-35 mb-25">
        <h1 className="gradient-text">资产结构化管理</h1>
      </div>

      <section className="slph-hero position-relative d-flex align-items-center text-start">
        <div className="container position-relative">
          <div className="row align-items-center">
            {/* LEFT TEXT */}
            <div className="col-lg-6 col-md-7 col-12">
              <p className="slph-subtitle mb-2">DESIGN SMARTER, NOT HARDER</p>
              <h1 className="slph-heading mb-3">
                Discipline will <br />
                take you places <br />
                motivation can't
              </h1>
              <p className="slph-desc mb-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="slph-btn-primary" data-testid="button-schedule-demo">Schedule a Demo</button>
                <button className="slph-btn-outline" data-testid="button-contact-sales">Contact Sales</button>
              </div>
            </div>
            {/* RIGHT IMAGE */}
            <div className="col-lg-6 col-md-5 col-12 text-center mt-4 mt-md-0">
              <img
                src={getAssetPath('/assets/images/index-pg/Macbook.png')}
                alt="Macbook"
                className="img-fluid slph-img"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section className="desktop-banner" />

      {/* Company Introduction */}
      <CompanyIntro />

      {/* Pain Points Section */}
      <PainPoints />

      {/* Solutions Section */}
      <Solutions />

      {/* Divider */}
      <SectionDivider />
      <SectionTitle title="将AI算法研发交给我们" variant="outsource" />

      {/* Services Section */}
      <SectionTitle title="解决方案介绍" variant="solutions" />
      <ServicesSection />

      {/* Portfolio Cards */}
      <PortfolioCarousel />

      {/* Team Section */}
      <SectionTitle title="关于我们" variant="about" />
      <SectionDivider variant="image" imageSrc={getAssetPath('/assets/images/line-2.svg')} imageClassName="divider divider-6" />
      <TeamSection />

      {/* Contact Section */}
      <section id="support">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mt-8">
              <img
                src={getAssetPath('/assets/images/-----1.png')}
                alt="Decorative"
                className="decoration-graph"
                style={{ display: "inline" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="calendar mb-15">
        <div className="calendar-header">
          <h2 className="month-title">有项目想法吗？让我们开个会</h2>
          <p className="month-description">可以安排会议</p>
        </div>
        <ul className="calendar-days">
          {Array.from({ length: 30 }, (_, i) => {
            const day = i + 1
            const isOccupied = [12, 14, 19, 22, 26].includes(day)
            const isNA = day === 16
            let className = "day"
            let text = "可以安排会议"
            if (isOccupied) {
              className = "day already-occupied"
              text = "已占用"
            } else if (isNA) {
              className = "day na"
              text = "不可用"
            }
            return (
              <li 
                key={day} 
                className={className}
                onClick={() => !isOccupied && !isNA && handleDaySelect(day)}
                style={{ cursor: (!isOccupied && !isNA) ? "pointer" : "default" }}
              >
                <time dateTime={`2025-11-${String(day).padStart(2, '0')}`}>{day}</time>
                {text}
              </li>
            )
          })}
        </ul>
      </section>
        </div>{/* end fade wrapper */}
      </div>{/* end pageRef */}
    </>
  )
}
