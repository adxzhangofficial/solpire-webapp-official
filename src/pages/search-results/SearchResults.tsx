import { useEffect } from "react"

export function SearchResults() {
       useEffect(() => {
      document.body.classList.add("searchresults-body")
      return () => document.body.classList.remove("searchresults-body")
    }, [])

          useEffect(() => {
      document.title = "Solpire - 搜索结果";
    }, []);

  return (

<>
  <section className="search-hero">
    <div className="search-box-wrapper">
      <div className="search-box-container">
        <svg
          className="search-icon"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx={11} cy={11} r={8} />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          className="search-input"
          id="mainSearchInput"
          placeholder="搜索产品、服务、技术解决方案..."
        />
      </div>
      <div className="search-filters">
        <button className="filter-btn active" data-filter="all">
          全部
        </button>
        <button className="filter-btn" data-filter="products">
          产品
        </button>
        <button className="filter-btn" data-filter="services">
          服务
        </button>
        <button className="filter-btn" data-filter="tech">
          技术
        </button>
        <button className="filter-btn" data-filter="docs">
          文档
        </button>
      </div>
    </div>
  </section>
  <div className="search-results-container">
    <div className="results-header">
      <p className="results-count">
        找到 <strong id="resultCount">8</strong> 条相关结果
      </p>
    </div>
    <div id="resultsContainer">
      <div className="result-item" data-category="products">
        <span className="result-category">产品</span>
        <a href="/duplicate-checker" className="result-title">
          GeoOptix AI零件智研软件
        </a>
        <p className="result-description">
          基于人工智能的三维数字化资产管理平台，支持STEP、IGES、STL等30+种主流3D格式，提供AI智能识别、高精度3D建模、质量管控等核心功能，助力企业实现"零缺陷"生产目标。
        </p>
        <div className="result-meta">
          <span>📅 更新于 2025-10-01</span>
          <span>👁️ 浏览 1.2k</span>
        </div>
      </div>
      <div className="result-item" data-category="services">
        <span className="result-category">服务</span>
        <a href="index.html#cooperation" className="result-title">
          AI算法研发与技术合作
        </a>
        <p className="result-description">
          提供灵活的交付方式：API接入、私有化部署、行业模型精调。融合文本生成、视觉感知与跨模态数据处理先进技术，深度挖掘行业特定数据价值，提供端到端闭环落地能力。
        </p>
        <div className="result-meta">
          <span>📅 更新于 2025-09-28</span>
          <span>👁️ 浏览 856</span>
        </div>
      </div>
      <div className="result-item" data-category="tech">
        <span className="result-category">技术</span>
        <a href="#" className="result-title">
          多模态大模型技术
        </a>
        <p className="result-description">
          应用文本生成与理解(Large Language Models)、视觉感知与处理(Visual
          Language Models)，以及跨模态数据处理(Multi-modal
          Models)先进技术，为工业场景提供定制化AI解决方案。
        </p>
        <div className="result-meta">
          <span>📅 更新于 2025-09-25</span>
          <span>👁️ 浏览 643</span>
        </div>
      </div>
      <div className="result-item" data-category="tech">
        <span className="result-category">技术</span>
        <a href="#" className="result-title">
          机器视觉与3D感知技术
        </a>
        <p className="result-description">
          基于3D激光雷达的工业AGV/AMR开发技术，高精度3D感知及数据预测分析，毫米级精度的三维空间建模技术，完美还原实物细节。
        </p>
        <div className="result-meta">
          <span>📅 更新于 2025-09-22</span>
          <span>👁️ 浏览 532</span>
        </div>
      </div>
      <div className="result-item" data-category="services">
        <span className="result-category">服务</span>
        <a href="index.html#support" className="result-title">
          技术支持与咨询服务
        </a>
        <p className="result-description">
          提供全方位的技术支持服务，包括在线文档、视频教程、邮件支持和企业级专属技术顾问。专业团队7×24小时为您的AI项目保驾护航。
        </p>
        <div className="result-meta">
          <span>📅 更新于 2025-09-20</span>
          <span>👁️ 浏览 421</span>
        </div>
      </div>
      <div className="result-item" data-category="products">
        <span className="result-category">产品</span>
        <a href="#" className="result-title">
          智能制造数字化转型方案
        </a>
        <p className="result-description">
          为制造业企业提供完整的数字化转型解决方案，从数据标注、模型训练到算法优化与硬件系统部署，实现工业4.0智能制造转型升级。
        </p>
        <div className="result-meta">
          <span>📅 更新于 2025-09-18</span>
          <span>👁️ 浏览 389</span>
        </div>
      </div>
      <div className="result-item" data-category="docs">
        <span className="result-category">文档</span>
        <a href="terms.html" className="result-title">
          服务条款
        </a>
        <p className="result-description">
          溯湃科技用户服务协议，包括使用协议、知识产权、用户责任、隐私保护等重要条款，请在使用我们的服务前仔细阅读。
        </p>
        <div className="result-meta">
          <span>📅 更新于 2025-10-05</span>
          <span>👁️ 浏览 267</span>
        </div>
      </div>
      <div className="result-item" data-category="docs">
        <span className="result-category">文档</span>
        <a href="privacy-policy.html" className="result-title">
          隐私政策
        </a>
        <p className="result-description">
          溯湃科技用户隐私保护政策，详细说明我们如何收集、使用、共享和保护您的个人信息，以及您享有的权利。
        </p>
        <div className="result-meta">
          <span>📅 更新于 2025-10-05</span>
          <span>👁️ 浏览 245</span>
        </div>
      </div>
    </div>
    <div id="noResults" className="no-results" style={{ display: "none" }}>
      <div className="no-results-icon">🔍</div>
      <h2>未找到相关结果</h2>
      <p>
        抱歉，我们没有找到与您的搜索相关的内容。请尝试使用不同的关键词或浏览以下推荐内容。
      </p>
      <div className="suggestions">
        <h3>推荐内容</h3>
        <ul>
          <li>
            <a href="/duplicate-checker">📦 GeoOptix AI零件智研软件</a>
          </li>
          <li>
            <a href="index.html#cooperation">🤝 技术合作方案</a>
          </li>
          <li>
            <a href="index.html#about">ℹ️ 关于我们</a>
          </li>
          <li>
            <a href="index.html#support">💡 技术支持</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</>



  )
}
