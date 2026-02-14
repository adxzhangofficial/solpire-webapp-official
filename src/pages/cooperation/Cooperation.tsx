import { useEffect } from "react"


export function Cooperation() {
  useEffect(() => {
    document.body.classList.add("cooperation-body")
    return () => document.body.classList.remove("cooperation-body")
  }, [])

    useEffect(() => {
    document.title = "Solpire - 合作";
  }, []);
  return (

    <>
    
    <div className="cooperation-container mb-15">
  <aside className="solpire-sidebar">
    <div className="solpire-sidebar-section">
      <h3 className="solpire-sidebar-title">人工智能集群技术栈</h3>
      <ul className="solpire-sidebar-list">
        <li>大模型定制</li>
        <li>计算机视觉</li>
        <li>3D结构编码解析</li>
        <li>CFD/有限元仿真</li>
        <li>结构优化</li>
        <li>SLAM导航定位系统</li>
        <li>传感器融合</li>
        <li>边缘计算架构</li>
        <li>行业赋能工具</li>
        <li>自动化测试平台</li>
      </ul>
    </div>
    <div className="solpire-sidebar-section">
      <h3 className="solpire-sidebar-title">解决方案实例</h3>
      <ul className="solpire-sidebar-list">
        <li>结构件管理软件</li>
        <li>AI设备监控预研</li>
        <li>行业大模型应用</li>
      </ul>
    </div>
    <div className="solpire-sidebar-section">
      <h3 className="solpire-sidebar-title">合作流程</h3>
      <ul className="solpire-sidebar-list">
        <li>需求对齐</li>
        <li>方案设计</li>
        <li>实施交付</li>
        <li>运维服务</li>
      </ul>
    </div>
    <div className="solpire-sidebar-section">
      <h3 className="solpire-sidebar-title">数据安全承诺</h3>
      <ul className="solpire-sidebar-list">
        <li>基础设施安全</li>
        <li>数据治理</li>
        <li>透明审计</li>
      </ul>
    </div>
    <div className="solpire-sidebar-section">
      <h3 className="solpire-sidebar-title">联系技术合作</h3>
      <ul className="solpire-sidebar-list">
        <li>需求登记</li>
        <li>会议预定</li>
      </ul>
    </div>
  </aside>
  <main className="main-content">
    <div className="content-header">
      <h1 className="content-title">人工智能集群技术栈</h1>
      <p className="content-subtitle">· 大模型定制</p>
    </div>
    <p className="content-text">
      面向垂直场景的私有化模型训练，支持知识蒸馏与轻量化部署
    </p>
    <h2 className="section-heading">· 计算机视觉</h2>
    <p className="content-text">
      工业质检/行为识别/高精度图像分析的全链条开发能力
    </p>
    <h2 className="section-heading">· 3D结构编码解析</h2>
    <p className="content-text">复杂机械结构的拓扑特征提取与语义化建模技术栈</p>
    <h2 className="section-heading">· CFD/有限元仿真集成</h2>
    <p className="content-text">物理场分析与AI预测的耦合计算框架</p>
    <h2 className="section-heading">· 结构优化引擎</h2>
    <p className="content-text">基于生成式设计的轻量化与强度平衡方案</p>
    <h2 className="section-heading">· SLAM导航定位系统</h2>
    <p className="content-text">多传感器融合的动态场景实时建图与定位</p>
    <h2 className="section-heading">· 边缘计算架构</h2>
    <p className="content-text">端-边-云协同的推理框架，支持低延时工业控制</p>
    <h2 className="section-heading">· 行业赋能工具链</h2>
    <p className="content-text">可视化AI工作流引擎，兼容主流工业数据接口</p>
    <h2 className="section-heading">· 自动化测试平台</h2>
    <p className="content-text">模型鲁棒性验证与持续集成环境</p>
    <h2 className="section-heading">解决方案实例</h2>
    <h2 className="section-heading">▌结构件智能管理软件</h2>
    <p className="content-text">基于3D特征编码的零部件自动归类与版本追溯系统</p>
    <h2 className="section-heading">▌AI设备健康监控系统</h2>
    <p className="content-text">多源传感数据融合的故障预诊与维护决策支持</p>
    <h2 className="section-heading">▌行业大模型应用</h2>
    <p className="content-text">
      领域知识增强的文档解析、智能巡检报告生成等场景方案
    </p>
    <p className="content-text">
      需求对齐：场景深度调研与可行性验证
      <br />
      方案设计：技术路线图与数据架构规划
      <br />
      实施交付：模块化开发与系统集成
      <br />
      运维服务：持续优化与知识转移
    </p>
    <div className="image-container">
      <img
        src="/assets/images/截屏2025-06-19 16.45.41.png.png"
        alt="合作流程图示"
      />
    </div>
    <div className="image-container">
      <img
        src="/assets/images/截屏2025-06-19 16.51.03.png.png"
        alt="数据安全承诺"
      />
      <p className="image-caption">
        联系技术合作
        <br />
        · 需求登记：【链接按钮】提交场景简述与技术诉求
        <br />· 会议预定：【链接按钮】预约30分钟技术方案沟通
      </p>
    </div>
  </main>
</div>

    
    </>


  )
}
