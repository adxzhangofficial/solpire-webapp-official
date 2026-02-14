/**
 * OurServicesSection — Alternating text + canvas blocks.
 * Block 3: Left text (services) + Right canvas (flowing data streams)
 * Block 4: Right text (workflow) + Left canvas (orbital rings)
 */
import { useRef, useEffect } from 'react'

/* ── Canvas 3: Data flow streams — represents tech pipeline ── */
function DataFlowCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cvs = ref.current
    if (!cvs) return
    const ctx = cvs.getContext('2d')!
    let raf = 0
    let W = 0, H = 0

    interface Stream { x: number; y: number; speed: number; len: number; hue: number; o: number }
    const streams: Stream[] = []

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const rect = cvs!.getBoundingClientRect()
      W = rect.width; H = rect.height
      cvs!.width = W * dpr; cvs!.height = H * dpr
      ctx.scale(dpr, dpr)
    }

    function init() {
      resize()
      streams.length = 0
      const count = Math.floor(W / 12)
      for (let i = 0; i < count; i++) {
        streams.push({
          x: Math.random() * W,
          y: Math.random() * H,
          speed: Math.random() * 2 + 0.5,
          len: Math.random() * 80 + 40,
          hue: Math.random() > 0.5 ? 240 : 270, // indigo or purple
          o: Math.random() * 0.4 + 0.1,
        })
      }
    }

    function draw() {
      ctx.fillStyle = 'rgba(0,0,0,0)' // transparent bg
      ctx.clearRect(0, 0, W, H)

      for (const s of streams) {
        s.y += s.speed
        if (s.y > H + s.len) {
          s.y = -s.len
          s.x = Math.random() * W
        }

        const grad = ctx.createLinearGradient(s.x, s.y - s.len, s.x, s.y)
        grad.addColorStop(0, `hsla(${s.hue}, 70%, 60%, 0)`)
        grad.addColorStop(0.5, `hsla(${s.hue}, 70%, 60%, ${s.o})`)
        grad.addColorStop(1, `hsla(${s.hue}, 70%, 60%, 0)`)
        ctx.beginPath()
        ctx.moveTo(s.x, s.y - s.len)
        ctx.lineTo(s.x, s.y)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.stroke()

        // bright head dot
        ctx.beginPath()
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${s.hue}, 80%, 70%, ${s.o + 0.2})`
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    init()
    draw()
    window.addEventListener('resize', init)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', init) }
  }, [])

  return <canvas ref={ref} className="l3-canvas" />
}

/* ── Component ── */
export function OurServicesSection() {
  return (
    <section className="l3-alt">
      {/* BLOCK 3 — Services: text LEFT, data flow canvas RIGHT */}
      <div className="l3-alt__row">
        <div className="l3-alt__text">
          <div className="l3-preheader">
            <div className="l3-preheader__icon" />
            <span className="l3-preheader__text">解决方案</span>
          </div>
          <h2 className="l3-section-title">解决方案介绍</h2>
          <p className="l3-section-subtitle">
            灵活的交付⽅式：API 接⼊、私有化部署、⾏业模型精调
          </p>

          <div className="l3-alt__items">
            <div className="l3-alt__item">
              <h4 className="l3-alt__item-title">高性能算法融合</h4>
              <p className="l3-alt__item-desc">
                应用 文本生成与理解(Large Language Models)、视觉感知与处理(Visual Language Models)，以及跨模态数据处理(Multi-modal Models)先进技术，深度挖掘行业特定数据价值。
              </p>
            </div>
            <div className="l3-alt__item">
              <h4 className="l3-alt__item-title">定制化智能方案</h4>
              <p className="l3-alt__item-desc">
                针对复杂业务需求，定制专属学习路径与优化算法，提升模型在真实工业场景中的适配性与推理效率
              </p>
            </div>
            <div className="l3-alt__item">
              <h4 className="l3-alt__item-title">端到端闭环落地能⼒</h4>
              <p className="l3-alt__item-desc">
                从数据标注、模型训练到算法优化与硬件系统部署。
              </p>
            </div>
            <div className="l3-alt__item">
              <h4 className="l3-alt__item-title">核⼼保障</h4>
              <p className="l3-alt__item-desc">
                系统强调安全、⾼效、可控。
              </p>
            </div>
          </div>
        </div>

        <div className="l3-alt__canvas-wrap">
          <DataFlowCanvas />
        </div>
      </div>

      {/* BLOCK 4 — Workflow (hidden) */}
      <div className="l3-alt__row" style={{ display: 'none' }}>
        <div className="l3-alt__text" style={{ maxWidth: '100%', flex: '1 1 100%' }}>
          <div className="l3-preheader">
            <div className="l3-preheader__icon" />
            <span className="l3-preheader__text">工作流程</span>
          </div>
          <h2 className="l3-section-title">
            完善成熟严谨的工作流程与服务
          </h2>

          <div className="l3-alt__steps">
            {(['启动', '规划', '执行', '监控', '收尾'] as const).map((step, i) => (
              <div key={step} className="l3-alt__step">
                <div className="l3-alt__step-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="l3-alt__step-label">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
