import { useEffect } from "react"
import { TeamSection } from "../../components/home"
import { getAssetPath } from "../../lib/utils"

export function AboutUs() {
  useEffect(() => {
    document.body.classList.add("aboutus-body")
    return () => document.body.classList.remove("aboutus-body")
  }, [])
  useEffect(() => {
    document.title = "关于我们";
  }, []);
  return (
<>
  {/* Team Introduction Section */}
  <section className="team-intro-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="section-header-1 section-header">团队介绍</h2>
          <p className="section-content">
            团队由QS全球排名前20大学的人工智能机器人，计算机科学，航天航空，生物医学工程，计算神经科学方向的多名硕士博士组成。
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Founders Section */}
  <section className="founders-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="section-header">创始人</h2>
<TeamSection withContainer={false} />
        </div>
      </div>
    </div>
  </section>
  {/* Company Introduction Section */}
  <section className="company-intro-section mb-15">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Company Introduction Content */}
          <div className="company-intro-content d-flex justify-content-between align-items-center flex-wrap">
            <h2 className="section-hea mb-3 mb-md-0">公司介绍</h2>
            <div className="company-logo-container">
              <img
                src={getAssetPath('/assets/images/-----20250704155956-40-1.png')}
                alt="SOLPHIRE Logo"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="company-content">
            <div className="company-text company-text-wd-zero">
              {/* Subsection 1 */}
              <div className="subsection">
                <h3 className="subsection-title">科技引领，智造无界</h3>
                <p className="subsection-text">
                  溯湃科技秉承以工业人工智能革新为核心的科技企业，由5位AI领域深度涉猎者联合创立。我们专注于开发高效、可落地的工业AI解决方案，以多模态大模型、工业机器视觉、高精度3D重建及工业级硬件方面技术领跑，致力于打造能配合行业的智能化生产与管理引擎——推动"智造"管控，优化流程、压缩成本、驱动全面数字化升级。
                </p>
              </div>
              {/* Subsection 2 */}
              <div className="subsection">
                <h3 className="subsection-title">AI赋能，降本增效</h3>
                <p className="subsection-text">
                  直面工业转型痛点，我们围绕高精度降本模型X能力展示"转化"可交付成果，通过模型微调、系统集成、私有化部署AI解决方案，我们持续引领AI解耦多领域方案（文本、图像、3D结构）。构建往复循环即交互链接的精准化定制与产品优化开发。
                </p>
              </div>
              {/* Subsection 3 */}
              <div className="subsection">
                <h3 className="subsection-title">核心理念</h3>
                <p className="subsection-text">
                  秉持"以赋能服务，以效赋能"的初心，我们坚信尖端技术应转化为实地优势和产业链新的价值动能。溯湃科技倡守"能力向阳当导向择略"，成为工业主流程之选，成为工业数智化与数字孪生的标杆。中枢管理效与承载者的支撑，用AI技术优化创新模式精准化，助力效率跃升，赋能客户可持续成长。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
