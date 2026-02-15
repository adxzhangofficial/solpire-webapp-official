import { Link } from '@tanstack/react-router'

interface Product {
  id: string
  name: string
  nameCn: string
  description: string
  descriptionCn: string
  icon: React.ReactNode
  color: string
  link: string
  tags: string[]
}

const products: Product[] = [
  {
    id: 'geooptix',
    name: 'GeoOptix 3D',
    nameCn: '三维模型查重与资产管理',
    description: 'AI-powered 3D geometry deduplication & digital asset management',
    descriptionCn: '基于AI的3D几何特征融合查重系统，加速推动三维数字化资产管理与智能制造转型。支持语义快速搜索、资产结构化管理、重复模型智能识别。',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    color: '#6366f1',
    link: '/products/geooptix-3d',
    tags: ['3D模型', '查重', '资产管理', '智能制造']
  },
  {
    id: 'canvas',
    name: 'Solpire Canvas',
    nameCn: '智能网页生成平台',
    description: 'AI-driven web page generation & design platform',
    descriptionCn: '基于AI的智能网页生成工具，通过自然语言描述即可快速创建专业级网页设计，大幅降低开发成本与周期。',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    color: '#8b5cf6',
    link: '/solpire-canvas',
    tags: ['网页生成', 'AI设计', '低代码', '自动化']
  },
  {
    id: 'avatar',
    name: 'Solpire Avatar',
    nameCn: 'AI数字人系统',
    description: 'AI-powered digital human creation & interaction system',
    descriptionCn: '新一代AI数字人解决方案，支持高保真数字人生成、实时交互、多场景应用，为企业提供智能化数字形象服务。',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    color: '#a855f7',
    link: '/solpire-avatar',
    tags: ['数字人', 'AI生成', '实时交互', '智能客服']
  }
]

export function ProductsSection() {
  return (
    <section id="products" className="sp-products">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <span className="sp-section__label">Our Products</span>
            <h2 className="sp-section__title">核心产品</h2>
            <p className="sp-section__desc">
              三大核心产品覆盖3D数字资产、智能网页生成、AI数字人，为企业提供全方位AI赋能
            </p>
          </div>
        </div>
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-4">
              <Link to={product.link} className="sp-product-card" style={{ textDecoration: 'none' }}>
                <div className="sp-product-card__glow" />
                  <div className="sp-product-card__icon">

                  {product.icon}
                </div>
                <h3 className="sp-product-card__name">{product.name}</h3>
                <p className="sp-product-card__name-cn">{product.nameCn}</p>
                <p className="sp-product-card__desc">{product.descriptionCn}</p>
                <div className="sp-product-card__tags">
                  {product.tags.map((tag) => (
                    <span key={tag} className="sp-product-card__tag" >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="sp-product-card__arrow">
                  <span>了解更多</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 text-center">
            <Link to="/products" className="sp-cases__view-all">
              查看全部产品
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
