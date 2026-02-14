import { useEffect } from "react"

export function TechnicalSupport() {
         useEffect(() => {
        document.body.classList.add("technicalsupport-body")
        return () => document.body.classList.remove("technicalsupport-body")
      }, [])


            useEffect(() => {
      document.title = "Solpire - 技术支持";
    }, []);


  return (

    <>
  {/* Q&A Content */}
  <div className="qa-container">
    {/* Vertical Line */}
    <div className="vertical-line" />
    {/* Q&A Content */}
    <div className="qa-content">
      {/* Q1 */}
      <div className="qa-item">
        <div className="qa-question">Q1: GeoOptix是什么？</div>
        <div className="qa-answer">
          <p>
            GeoOptix是一款面向工业领域的智能3D几何查重软件，通过自主研发的AI算法实现大规模三维模型的高效查重与标准化管理。
          </p>
          <p>
            核心能力：
            <br />
            支持百万级工业零部件库的秒级查重
            <br />
            识别精度达99%以上，可检测0.1mm级几何差异
            <br />
            兼容主流CAD格式（SolidWorks/Creo/NX等）
          </p>
        </div>
      </div>
      {/* Q2 */}
      <div className="qa-item">
        <div className="qa-question">Q2: 解决了哪些工业痛点？</div>
        <div className="qa-answer-label">问题场景：</div>
        <div className="qa-answer">
          <p>
            重复设计导致物料激增，某家电客户年新增5-6万冗余零件，生命周期成本超25亿
            <br />
            工程师查找相似件平均耗时15分钟/次，PLM系统检索效率低下，无法解决一物多码的问题
            <br />
            模具/工装重复开发，试模失败率高达30%
          </p>
        </div>
        <div className="qa-answer-label">GeoOptix的解决方案：</div>
        <div className="qa-answer">
          <p>
            重复件智能拦截：设计阶段自动推送相似件，减少30%以上新物料申请
            <br />
            跨部门数据重用：工艺/模具/采购环节复用历史数据，缩短50%开发周期
            <br />
            全生命周期管理：实现物料增长量年降低10%-20%
          </p>
        </div>
      </div>
      {/* Q3 */}
      <div className="qa-item">
        <div className="qa-question">Q3: 核心技术优势是什么？</div>
        <div className="qa-answer-label">AI驱动的多重特征匹配技术：</div>
        <div className="qa-answer">
          <p>
            <strong>多模态特征解析系统</strong>
            <br />
            基于transformer框架，实现三维模型拓扑结构、隐式曲面曲率、局部流形特征的全维度解析（支持500+动态特征维度）
            <br />
            工业级特征识别模块：钣金折弯应力场建模、注塑件薄壁拓扑优化等专业场景专项适配
          </p>
          <p>
            <strong>进化式认知计算引擎</strong>
            <br />
            采用自监督权重优化机制，通过持续流式数据训练实现模型匹配精度指数级进化（行业实测年均精度提升23.6%）
            <br />
            动态特征蒸馏技术：自动识别高频误判样本构建对抗训练集，驱动系统认知边界持续扩展
          </p>
          <p>
            <strong>超融合计算架构</strong>
            <br />
            基于图神经网络与量子化索引的混合加速框架，百万级模型库检索延迟压缩至8.3秒（较传统架构提升67倍）
            <br />
            支持工业制造、生物医疗等场景的实时三维数据流处理（延迟敏感型任务响应＜200ms）
          </p>
        </div>
      </div>
      {/* Q4 */}
      <div className="qa-item">
        <div className="qa-question">Q4: 为企业带来哪些收益？</div>
        <div className="qa-answer-label">量化价值：</div>
        <div className="qa-answer-label" style={{ marginTop: 8 }}>
          指标提升效果
        </div>
        <div className="qa-answer">
          <p>
            设计效率零部件检索时间缩短90%
            <br />
            物料重用率优选件调用频次增加200%
            <br />
            开模成本模具复用降低30%试模费用
            <br />
            标准化管理重复件数量减少15%-30%
          </p>
        </div>
        <div className="qa-answer-label">隐性价值：</div>
        <div className="qa-answer">
          <p>
            新工程师培训周期从3年缩短至6个月
            <br />
            工艺文件编制效率提升70%
          </p>
        </div>
      </div>
      {/* Q5 */}
      <div className="qa-item">
        <div className="qa-question">Q5: 支持哪些行业？</div>
        <div className="qa-answer-label">当前重点行业：</div>
        <div className="qa-answer">
          <p>
            装备制造
            <br />
            消费电子
            <br />
            医疗器械
          </p>
        </div>
        <div className="qa-answer-label">拓展中行业：</div>
        <div className="qa-answer">
          <p>
            游戏3D模型设计和数字资产管理
            <br />
            新能源电池结构件
            <br />
            建筑BMI
            <br />
            产品设计结构模型复用
          </p>
        </div>
      </div>
      {/* Q6 */}
      <div className="qa-item">
        <div className="qa-question">Q6: 如何保障数据安全？</div>
        <div className="qa-answer">
          <p>
            本地化处理：特征提取与匹配计算均在客户内网完成[3][6]
            <br />
            权限隔离：支持PLM系统集成，继承原有数据权限体系[7][25]
            <br />
            审计追踪：全操作日志记录，符合ISO/TS 16949标准[25]
          </p>
        </div>
      </div>
      {/* Q7 */}
      <div className="qa-item">
        <div className="qa-question">Q7: 是否有成功案例？</div>
        <div className="qa-answer-label">典型客户成果：</div>
        <div className="qa-answer">
          <p>
            三一集团：物料库减少10%，设计效率提升5-10倍[25]
            <br />
            中兴通讯：异地协同效率提升80%，重用率提高40%[25]
            <br />
            长城金融：钣金件设计错误率下降65%[26]
          </p>
        </div>
      </div>
    </div>
  </div>
</>



  )
}
