import type { ReactNode } from "react"

interface ServicesSectionProps {
  id?: string
  children?: ReactNode
}

const defaultContent = (
  <p>
    我们可提供
    <br />
    <br />
    灵活的交付⽅式： API 接⼊、私有化部署、⾏业模型精调。
    <br />
    <br />
    高性能算法融合
    <br />
    应用 文本生成与理解(Large Language Models)、视觉感知与处理(Visual
    Language Models)，以及跨模态数据处理(Multi-modal
    Models)先进技术，深度挖掘行业特定数据价值。
    <br />
    <br />
    针对复杂业务需求，定制专属学习路径与优化算法，提升模型在真实工业场景中的适配性与推理效率
    <br />
    <br />
    端到端闭环落地能⼒：
    从数据标注、模型训练到算法优化与硬件系统部署。
    <br />
    <br />
    核⼼保障： 系统强调安全、⾼效、可控。
    <br />
    <br />
    减少您的研发成本和风险
    <br />
    <br />
    完善成熟严谨的工作流程与服务：启动、规划、执行、监控、收尾
  </p>
)

export function ServicesSection({ id = "cooperation", children }: ServicesSectionProps) {
  return (
    <section id={id} className="services-content" data-testid="section-services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12">
            {children || defaultContent}
          </div>
        </div>
      </div>
    </section>
  )
}
