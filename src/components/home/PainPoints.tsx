import { getAssetPath } from '../../lib/utils'

interface PainPoint {
  heading: string
  description: string
}

interface PainPointsProps {
  items?: PainPoint[]
  dividerImage?: string
  showDivider?: boolean
}

const defaultItems: PainPoint[] = [
  {
    heading: "高成本",
    description: "AI技术研发需要大量资金投入，资源难以高效利用。"
  },
  {
    heading: "高风险",
    description: "AI技术试错成本高，传统流程难以满足质量与精度双重需求。"
  },
  {
    heading: "长周期",
    description: "从技术开发到落地应用，漫长的周期阻碍企业数字化转型与创新节奏"
  }
]

export function PainPoints({
  items = defaultItems,
  dividerImage = getAssetPath('/assets/images/line-3.svg'),
  showDivider = true
}: PainPointsProps) {
  return (
    <>
      {showDivider && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <img
                src={dividerImage}
                alt="Divider"
                className="divider divider-2"
              />
            </div>
          </div>
        </div>
      )}
      <section className="pain-points" data-testid="section-pain-points">
        <div className="container">
          <div className="row justify-content-center g-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
              >
                <div className="pain-point" data-testid={`card-pain-point-${index}`}>
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
