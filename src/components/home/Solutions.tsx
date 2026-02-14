interface Solution {
  heading: string
  description: string
}

interface SolutionsProps {
  items?: Solution[]
  dividerImage?: string
  showDivider?: boolean
  id?: string
}

const defaultItems: Solution[] = [
  {
    heading: "技术赋能降成本",
    description: "无需组建庞大的基础研发团队，无需重复投入底层技术建设。"
  },
  {
    heading: "缩短周期",
    description: "专业团队，提供先进模型与部署方案，极大加速项目上线进程。"
  },
  {
    heading: "规避风险",
    description: "基于成熟、稳定、可控的技术体系，确保项目成功落地，降低试错代价"
  }
]

export function Solutions({
  items = defaultItems,
  dividerImage = "/assets/images/line-3.svg",
  showDivider = true,
  id = "products"
}: SolutionsProps) {
  return (
    <>
      {showDivider && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <img
                src={dividerImage}
                alt="Divider"
                className="divider divider-3"
              />
            </div>
          </div>
        </div>
      )}
      <section id={id} className="solutions" data-testid="section-solutions">
        <div className="container">
          <div className="row justify-content-center g-4">
            {items.map((item, index) => (
              <div key={index} className="col-12 col-lg-10">
                <div className="solution" data-testid={`card-solution-${index}`}>
                  <h3>{item.heading}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
