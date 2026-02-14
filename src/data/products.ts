// ============================================================
// PRODUCTS DATA — Central data for listing + detail pages
// ============================================================

export interface FeatureItem {
  iconKey: string
  title: string
  desc: string
}

export interface UseCaseItem {
  title: string
  desc: string
}

export interface MetricItem {
  value: string
  label: string
}

export interface TimelinePhase {
  name: string
  duration: string
  tasks: string[]
}

export interface TechCategory {
  name: string
  items: string[]
}

export interface ArchLayer {
  name: string
  desc: string
}

export interface TextSection {
  type: 'text-block'
  title: string
  subtitle?: string
  paragraphs: string[]
}

export interface FeaturesSection {
  type: 'features'
  title: string
  subtitle?: string
  items: FeatureItem[]
}

export interface MetricsSection {
  type: 'metrics'
  title: string
  subtitle?: string
  items: MetricItem[]
}

export interface UseCasesSection {
  type: 'use-cases'
  title: string
  subtitle?: string
  items: UseCaseItem[]
}

export interface TimelineSection {
  type: 'timeline'
  title: string
  subtitle?: string
  phases: TimelinePhase[]
}

export interface TechStackSection {
  type: 'tech-stack'
  title: string
  subtitle?: string
  categories: TechCategory[]
}

export interface ArchitectureSection {
  type: 'architecture'
  title: string
  subtitle?: string
  layers: ArchLayer[]
}

export interface HighlightsSection {
  type: 'highlights'
  title: string
  subtitle?: string
  items: { label: string; value: string }[]
}

export interface WorkflowSection {
  type: 'workflow'
  title: string
  subtitle?: string
  steps: { name: string; desc: string }[]
}

export type ProductSection =
  | TextSection
  | FeaturesSection
  | MetricsSection
  | UseCasesSection
  | TimelineSection
  | TechStackSection
  | ArchitectureSection
  | HighlightsSection
  | WorkflowSection

export interface ProductData {
  // Listing
  id: string
  slug: string
  name: string
  nameCn: string
  shortDesc: string
  shortDescCn: string
  iconKey: string
  color: string
  tags: string[]
  externalLink?: string

  // Detail
  subtitle: string
  heroDesc: string
  sections: ProductSection[]
}

// ============================================================
// ALL PRODUCTS
// ============================================================

export const allProducts: ProductData[] = [
  // ──────────────────────────────────────────────────────────
  // 1. GeoOptix 3D (detailed product page)
  // ──────────────────────────────────────────────────────────
  {
    id: 'geooptix',
    slug: 'geooptix-3d',
    name: 'GeoOptix 3D',
    nameCn: '三维模型查重与资产管理',
    shortDesc: 'AI-powered 3D geometry deduplication & digital asset management',
    shortDescCn: '基于AI的3D几何特征融合查重系统，加速推动三维数字化资产管理与智能制造转型。支持语义快速搜索、资产结构化管理、重复模型智能识别。',
    iconKey: 'cube',
    color: '#6366f1',
    tags: ['3D模型', '查重', '资产管理', '智能制造'],
    subtitle: 'AI零件智研软件 — 跨行业三维模型资产中枢',
    heroDesc: '面向工业领域的智能3D几何查重软件，通过自研AI算法实现大规模三维模型的高效查重与标准化管理。支持百万级工业零部件的秒级查重，识别精度达99%以上，可检测0.1mm级几何差异。兼容主流CAD格式（SolidWorks / Creo / NX等）。',
    sections: [
      {
        type: 'metrics',
        title: '核心性能指标',
        subtitle: '已在三一集团、中兴通讯等企业验证的工业级性能',
        items: [
          { value: '99%+', label: '识别精度' },
          { value: '0.1mm', label: '几何差异检测' },
          { value: '8.3s', label: '百万级模型库检索' },
          { value: '500+', label: '动态特征维度' },
          { value: '<200ms', label: '实时任务响应' },
          { value: '67x', label: '较传统架构提速' },
        ],
      },
      {
        type: 'text-block',
        title: 'GeoOptix 是什么？',
        subtitle: '让"每一次建模都有迹可循、每一个优秀设计都能被看见和复用"',
        paragraphs: [
          'GeoOptix 基于三维几何/拓扑特征编码与大规模特征索引引擎，把多年散落在各个项目、各个工程师个人文件夹里的 CAD 模型"变成资产"，让共性零件可以被自动识别、归类和秒级查找，从源头减少重复建模、重复出图。',
          '通过几何 + 拓扑特征编码和高性能索引，支持形状相似检索和语义检索，工程师在建模前一键查询是否已有可复用模型，大幅减少重复劳动。能力直接嵌入现有 CAD/PLM 流程中，无需工程师切换系统，让"先查再建"变成日常习惯。',
          '致力于成为工业、建筑、游戏等多行业共享的「三维数字资产中枢」，用长期的数据积累拉开在效率、质量与创意产出的差距。',
        ],
      },
      {
        type: 'features',
        title: '核心价值',
        subtitle: '从"防重复建模工具"到覆盖整厂的三维数据中台',
        items: [
          {
            iconKey: 'database',
            title: '模型资产化沉淀',
            desc: '将历史项目中的三维模型集中入库，自动去重、归档，同一个零件不再出现"一物多码"，逐步形成企业级标准零件库和知识库。',
          },
          {
            iconKey: 'search',
            title: '快速检索与复用',
            desc: '通过几何 + 拓扑特征编码和高性能索引，支持形状相似检索和简单语义检索，工程师建模前一键查询是否已有可复用模型。',
          },
          {
            iconKey: 'zap',
            title: '无感融入现有流程',
            desc: '能力直接嵌入现有 CAD/PLM 流程中，无需工程师切换系统、重新学习一整套新平台，让"先查再建"变成日常习惯。',
          },
          {
            iconKey: 'bar-chart',
            title: '数据驱动标准化',
            desc: '通过模型使用频次、复用率等数据沉淀，帮助企业发现高价值标准件和典型方案，反向推动设计规范与标准库迭代。',
          },
          {
            iconKey: 'shield',
            title: '重复件智能拦截',
            desc: '设计阶段自动推送相似件，减少30%以上新物料申请；跨部门数据重用，缩短50%开发周期。',
          },
          {
            iconKey: 'layers',
            title: '全生命周期管理',
            desc: '实现物料增长量年降低10%-20%，串联非标自动化、模具、工装夹具、总装设备等多类业务线，支撑供应链协同开发。',
          },
        ],
      },
      {
        type: 'highlights',
        title: '解决了哪些工业痛点？',
        subtitle: '传统模式下的重复设计造成巨大资源浪费',
        items: [
          { label: '某家电客户年新增零件', value: '5-6万个，生命周期成本超25亿' },
          { label: '工程师查找相似件', value: '平均耗时15分钟/次，PLM系统无法解决一物多码' },
          { label: '模具/工装重复开发', value: '试模失败率高达30%' },
          { label: '设计效率提升', value: '零部件检索时间缩短90%' },
          { label: '物料重用率', value: '优选件调用频次增加200%' },
          { label: '开模成本节省', value: '模具复用降低30%试模费用' },
          { label: '标准化管理', value: '重复件数量减少15%-30%' },
          { label: '新工程师培训周期', value: '从3年缩短至6个月' },
        ],
      },
      {
        type: 'architecture',
        title: '核心技术架构',
        subtitle: '基于Transformer框架的多模态特征解析与超融合计算',
        layers: [
          {
            name: '多模态特征解析系统',
            desc: '基于Transformer框架，实现三维模型拓扑结构、隐式曲面曲率、局部流形特征的全维度解析（支持500+动态特征维度）。工业级特征识别模块：钣金折弯应力场建模、注塑件薄壁拓扑优化等专业场景专项适配。',
          },
          {
            name: '进化式认知计算引擎',
            desc: '采用自监督权重优化机制，通过持续流式数据训练实现模型匹配精度指数级进化（行业实测年均精度提升23.6%）。动态特征蒸馏技术：自动识别高频误判样本构建对抗训练集，驱动系统认知边界持续扩展。',
          },
          {
            name: '超融合计算架构',
            desc: '基于图神经网络与量子化索引的混合加速框架，百万级模型库检索延迟压缩至8.3秒（较传统架构提升67倍）。支持工业制造、生物医疗等场景的实时三维数据流处理（延迟敏感型任务响应＜200ms）。',
          },
          {
            name: '数据安全体系',
            desc: '本地化处理：特征提取与匹配计算均在客户内网完成。权限隔离：支持PLM系统集成，继承原有数据权限体系。审计追踪：全操作日志记录，符合ISO/TS 16949标准。',
          },
        ],
      },
      {
        type: 'use-cases',
        title: '行业应用场景',
        subtitle: '从工业制造到建筑BIM、游戏与数字孪生的跨行业覆盖',
        items: [
          {
            title: '装备制造 / 消费电子 / 医疗器械',
            desc: '当前重点行业 — 从某一个设计部门的防重复建模工具，扩展为覆盖整厂多事业部的三维数据中台，串起非标自动化、模具、工装夹具、总装设备等多类业务。',
          },
          {
            title: '建筑 / BIM行业',
            desc: '支撑设计院、地产和施工单位构建门窗、幕墙、栏杆、机电构件等标准构件库。建筑师可按尺寸、形态、用途快速检索既有构件与典型单体，像"搭积木"一样做方案。',
          },
          {
            title: '游戏与数字孪生',
            desc: '为游戏美术和关卡团队提供跨项目的三维资产库，将角色、道具、场景模块统一入库管理，通过形状相似检索和语义检索（如"科幻门""破损墙体"）快速找到可复用资产。',
          },
          {
            title: '新能源电池结构件',
            desc: '拓展中行业 — 电池结构件的标准化管理与快速检索复用，减少重复设计，加速产品迭代。',
          },
        ],
      },
      {
        type: 'tech-stack',
        title: '产品功能矩阵',
        subtitle: '个人基础版 & 企业专业版完整功能覆盖',
        categories: [
          {
            name: '核心查重能力',
            items: ['3D模型查重', '搜索与语义查询', '相似性推荐'],
          },
          {
            name: '数据管理',
            items: ['模型库管理', '统计数据查看', '可视化查看', '数据同步'],
          },
          {
            name: '协作与安全',
            items: ['用户协作', '审计日志', '安全与支持'],
          },
          {
            name: '扩展集成',
            items: ['API/插件支持', 'SDK支持', '自定义开发'],
          },
          {
            name: '支持格式',
            items: ['.SLDPRT', '.CAD', '.STL', 'SolidWorks', 'Creo', 'NX'],
          },
        ],
      },
      {
        type: 'workflow',
        title: '客户成功案例',
        subtitle: '已在多家头部企业验证的工业级解决方案',
        steps: [
          {
            name: '三一集团',
            desc: '物料库减少10%，设计效率提升5-10倍',
          },
          {
            name: '中兴通讯',
            desc: '异地协同效率提升80%，重用率提高40%',
          },
          {
            name: '长城金融',
            desc: '钣金件设计错误率下降65%',
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 2. Solpire Canvas (existing — links to /solpire-canvas)
  // ──────────────────────────────────────────────────────────
  {
    id: 'canvas',
    slug: 'canvas',
    name: 'Solpire Canvas',
    nameCn: '智能网页生成平台',
    shortDesc: 'AI-driven web page generation & design platform',
    shortDescCn: '基于AI的智能网页生成工具，通过自然语言描述即可快速创建专业级网页设计，大幅降低开发成本与周期。',
    iconKey: 'layout',
    color: '#8b5cf6',
    tags: ['网页生成', 'AI设计', '低代码', '自动化'],
    externalLink: '/solpire-canvas',
    subtitle: '智能网页生成平台',
    heroDesc: '',
    sections: [],
  },

  // ──────────────────────────────────────────────────────────
  // 3. Solpire Avatar (existing — links to /solpire-avatar)
  // ──────────────────────────────────────────────────────────
  {
    id: 'avatar',
    slug: 'avatar',
    name: 'Solpire Avatar',
    nameCn: 'AI智能数字人与Agent平台',
    shortDesc: 'Intelligent digital human & AI agent platform with self-learning',
    shortDescCn: '新一代AI数字人与智能Agent平台，将对话意图转化为可控跨系统执行，支持自学习优化的闭环自动化。从"能说话"升级到"能执行、会进化的通用Agent"。',
    iconKey: 'user',
    color: '#a855f7',
    tags: ['数字人', 'AI Agent', '自学习', '自动化'],
    externalLink: '/solpire-avatar',
    subtitle: 'AI数字人系统 V3.1',
    heroDesc: '',
    sections: [],
  },

  // ──────────────────────────────────────────────────────────
  // 4. AI + 3DGS MR Fitness (NEW)
  // ──────────────────────────────────────────────────────────
  {
    id: 'ai-3dgs-fitness',
    slug: 'ai-3dgs-fitness',
    name: 'AI + 3DGS MR Fitness',
    nameCn: 'AI结合3DGS MR健身场景构建',
    shortDesc: 'Low-cost 2D/3D fitness scene construction combining AI generation with 3D Gaussian Splatting',
    shortDescCn: 'AI结合3D Gaussian Splatting技术，面向MR健身游戏的二维及三维场景低成本构建方案。多链路架构覆盖纯虚拟、现实融合、2D节奏游戏。',
    iconKey: 'gamepad',
    color: '#ec4899',
    tags: ['3DGS', 'MR健身', 'AI生成', '游戏引擎'],
    subtitle: 'AI + 3DGS 低成本MR健身场景构建',
    heroDesc: '结合生成式AI与3D Gaussian Splatting技术，面向MR健身游戏场景的低成本、高沉浸感二维及三维场景自动化构建方案。多链路架构覆盖纯虚拟玩法、真实场景融合和2D交互节奏游戏，让真实环境即时变身游戏化健身空间。',
    sections: [
      {
        type: 'metrics',
        title: '市场背景与预期效果',
        subtitle: '全球健身市场超4000亿美元，中国健身用户突破1亿',
        items: [
          { value: '30-50%↑', label: '用户平均参与时长提升' },
          { value: '90-95%', label: '动作识别准确率' },
          { value: '1.5-2x', label: '每周训练频次增长' },
          { value: '20-30%↑', label: '单用户客单价(ARPU)' },
          { value: '1-2周', label: '新主题上线周期' },
          { value: '60%+', label: '传统健身4周流失率(痛点)' },
        ],
      },
      {
        type: 'text-block',
        title: '市场痛点',
        paragraphs: [
          '沉浸感不足：传统健身内容单调，缺少视觉刺激与交互乐趣。',
          '场景限制：大部分只能在固定虚拟环境中锻炼，现有MR产品多为纯虚拟场景，与现实割裂。',
          '社交体验弱：缺少多人互动或真实空间联动玩法。',
          '正反馈不足导致用户留存率低：健身过程缺少即时奖励与可视化进步反馈，用户3~4周后大量流失。',
          '开发周期长且成本高：传统高质量3D场景搭建需要大量人工建模和渲染，中小团队难以长期迭代新玩法。',
        ],
      },
      {
        type: 'architecture',
        title: '多链路架构',
        subtitle: '三条并行技术链路，覆盖虚拟与现实全场景',
        layers: [
          {
            name: '纯虚拟场景链路',
            desc: 'AI通过Prompt生成健身主题场景图像/视频 → 3DGS或深度估计转换为可交互三维世界 → 添加物理碰撞体 → 游戏引擎加载并实现健身任务逻辑',
          },
          {
            name: '现实场景融合链路',
            desc: 'SLAM实时采集真实空间 → 3DGS重建高保真真实场景 → AI生成虚拟元素锚定至真实空间坐标 → 游戏引擎融合渲染输出MR体验',
          },
          {
            name: '2D交互节奏游戏链路',
            desc: '参考Beat Saber等头部音游，AI生成图片(Stable Diffusion/MidJourney) + AI生成音乐(Suno AI) → 人工编辑节奏匹配 → 导入游戏引擎接入动作识别 → 完成节奏任务计分与奖励',
          },
        ],
      },
      {
        type: 'features',
        title: '核心技术',
        subtitle: '从AI生成到游戏引擎的全链路技术能力',
        items: [
          {
            iconKey: 'sparkles',
            title: 'AI虚拟元素生成',
            desc: '基于Stable Diffusion、Midjourney、Sora、Veo等模型，通过Prompt Engineering精准控制场景风格、细节与一致性，生成健身主题场景图像、视频及3D模型',
          },
          {
            iconKey: 'scan',
            title: '现实场景采集 (SLAM)',
            desc: 'RGB/深度摄像头多视角采集，实时定位与地图构建，数据预处理(去噪、曝光一致化、畸变校正)，为3DGS提供稠密准确的空间信息',
          },
          {
            iconKey: 'box',
            title: '3DGS重建技术',
            desc: '输入位姿+图像序列，输出高保真可渲染3D场景(几十秒即可加载)。渲染速度快(GPU加速)，兼容游戏引擎。工具：gsplat、graphdeco-inria',
          },
          {
            iconKey: 'merge',
            title: 'SLAM + AI-3DGS融合',
            desc: '使用SLAM世界坐标系统一虚实空间基准，虚拟元素通过Anchor绑定至真实场景，Gaussian Splatting融合渲染，支持实时渲染与遮挡透明度调节',
          },
          {
            iconKey: 'activity',
            title: '动作识别与互动',
            desc: 'MediaPipe/MoveNet/OpenPose关键点检测 + LSTM时序分析，识别结果映射到虚拟场景动作触发。高精度骨骼识别，轻量化模型支持移动端低延迟',
          },
          {
            iconKey: 'gamepad2',
            title: '游戏引擎集成',
            desc: 'Unity/Unreal/WebGL游戏引擎加载3D场景与虚拟元素，配置灯光阴影、物理交互(刚体/碰撞/布料)，实现积分系统、关卡递进、奖励解锁机制',
          },
        ],
      },
      {
        type: 'use-cases',
        title: '交互方案与游戏玩法',
        subtitle: '多元化交互设计，结合游戏心理学最大化参与感',
        items: [
          { title: '任务化训练', desc: '完成深蹲、挥拳、伸展等指定动作获得虚拟奖励，形成"成就地图"' },
          { title: '节奏模式', desc: '配合音乐节拍挑战，全身动作识别，类似Beat Saber体验' },
          { title: '多人互动', desc: '与好友或AI NPC同场景对战/协作，多人合作完成大型虚拟任务' },
          { title: '个性化场景', desc: '真实空间扫描+AI，为每个用户生成独立专属训练环境' },
          { title: '社交传播', desc: '一键生成训练成果短视频，提升用户分享与品牌曝光率' },
          { title: '跨领域拓展', desc: '可快速延伸至舞蹈、康复、运动电竞等新兴细分市场' },
        ],
      },
      {
        type: 'tech-stack',
        title: '技术栈',
        categories: [
          { name: '图像生成', items: ['Stable Diffusion', 'Midjourney', 'NanoBanana', 'DALL·E'] },
          { name: '视频生成', items: ['Sora', 'Veo', 'Runway Gen-2', 'Pika Labs'] },
          { name: '音频生成', items: ['Suno AI'] },
          { name: '3D重建', items: ['3DGS (gsplat)', 'Meshy', '混元3D', 'Tripo3D', 'Stable-DreamFusion', 'Luma'] },
          { name: '空间感知', items: ['SLAM', 'AR Foundation', 'ARSession'] },
          { name: '动作识别', items: ['MediaPipe', 'MoveNet', 'OpenPose', 'LSTM'] },
          { name: '游戏引擎', items: ['Unity (HDRP)', 'Unreal (Nanite)', 'WebGL', 'Godot'] },
        ],
      },
      {
        type: 'timeline',
        title: '实施计划',
        subtitle: '总周期约6-8个月',
        phases: [
          {
            name: '原型阶段',
            duration: '3周',
            tasks: ['核心功能验证', '场景导入', '基础交互', '简单渲染'],
          },
          {
            name: '场景库构建',
            duration: '3个月',
            tasks: ['收集&重建多类型真实点云场景(室内、户外)', '场景素材分类、优化、存储系统化'],
          },
          {
            name: '完整玩法研发',
            duration: '4-5个月',
            tasks: ['健身任务系统', '积分关卡奖励机制', '高精度物理交互与多场景切换', '视觉与性能优化', '测试与迭代'],
          },
        ],
      },
      {
        type: 'highlights',
        title: '核心优势',
        items: [
          { label: '多链路架构', value: '覆盖纯虚拟/现实融合/2D节奏三种模式，灵活支持VR/MR/AR' },
          { label: '低成本快速迭代', value: '基于成熟SLAM、GPU渲染、AI识别技术，模块化组件可复用' },
          { label: '新颖有趣', value: '将健身动作与音乐节奏融合，节奏与关卡动态生成' },
          { label: '市场前景', value: '健康+娱乐+数字交互是全球资本重点布局领域，MR头显成本逐年下降' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 5. PV Power Prediction (NEW)
  // ──────────────────────────────────────────────────────────
  {
    id: 'pv-power-prediction',
    slug: 'pv-power-prediction',
    name: 'Solar PV Prediction',
    nameCn: '光伏出力预测系统',
    shortDesc: 'Transformer-based photovoltaic power output prediction with multi-source data fusion',
    shortDescCn: '基于Transformer架构的光伏出力预测系统，融合气象数据、卫星遥感与历史发电数据，实现高精度太阳能发电功率预测。',
    iconKey: 'sun',
    color: '#f59e0b',
    tags: ['光伏预测', 'Transformer', '新能源', '智能电网'],
    subtitle: '基于Transformer的光伏出力智能预测',
    heroDesc: '光伏出力预测是电网稳定运行的关键环节。太阳辐照随天气、季节、时间变化，需要实时平衡发用电。本系统基于Transformer自注意力机制，融合多源异构数据（NWP气象预报、卫星遥感、SCADA监控），实现高精度时空耦合预测，为电网调度、储能管理、电站优化和电力交易提供智能决策支持。',
    sections: [
      {
        type: 'metrics',
        title: '核心性能指标',
        subtitle: '基于学术前沿研究验证',
        items: [
          { value: '8.2%', label: 'MAPE (平均绝对百分比误差)' },
          { value: '15%↑', label: '相比LSTM精度提升 (PVTransNet)' },
          { value: '70%+', label: '新站点迁移学习节省时间/算力' },
          { value: '1min-1hr', label: '支持多时间分辨率' },
        ],
      },
      {
        type: 'text-block',
        title: '应用价值',
        paragraphs: [
          '电网调度：精准预测发电功率，优化电网运行计划，平衡发用电。',
          '储能管理：根据预测结果优化储能系统充放电策略，提高储能利用率。',
          '电站优化：为光伏电站运维提供决策支持，提升发电效率。',
          '交易分析：在电力市场中预测产量支撑定价与交易策略。',
        ],
      },
      {
        type: 'features',
        title: '技术特性',
        subtitle: 'Transformer架构的核心优势与创新',
        items: [
          {
            iconKey: 'brain',
            title: '自注意力长距离依赖',
            desc: 'Transformer的Self-Attention机制捕获长时间范围依赖关系，精准建模日周期、季节变化等时序特征',
          },
          {
            iconKey: 'layers',
            title: '多模态数据融合',
            desc: '支持NWP气象预报、卫星遥感CNN特征、气象变量等多源异构数据融合输入，全面感知发电环境',
          },
          {
            iconKey: 'repeat',
            title: '迁移学习能力',
            desc: '强大的迁移/泛化能力，新站点部署可节省70%+时间和算力，快速适应不同地理位置和气候条件',
          },
          {
            iconKey: 'eye',
            title: '可解释性',
            desc: '通过注意力权重热力图可视化模型关注的时间段和气象变量，辅助运维人员理解预测逻辑',
          },
          {
            iconKey: 'clock',
            title: '灵活时间分辨率',
            desc: '通过位置编码实现灵活的时间分辨率，支持从分钟级到小时级的多尺度预测',
          },
          {
            iconKey: 'shield',
            title: '极端天气鲁棒性',
            desc: '对云层遮挡、温度骤变、极端天气等异常情况具备较强鲁棒性',
          },
        ],
      },
      {
        type: 'architecture',
        title: '系统架构',
        subtitle: '从数据采集到预测输出的完整链路',
        layers: [
          {
            name: '数据采集层',
            desc: '光伏组件、逆变器、并网柜、气象站(GHI/DNI传感器、温度、风速、湿度)、SCADA系统、卫星遥感、NWP数值天气预报服务器(ECMWF/NOAA)',
          },
          {
            name: '数据类型',
            desc: '历史发电数据(kW/kWh时间序列，1min-1hr分辨率)、实时监测(辐照度、温度、风)、天气预报、天文/地理信息',
          },
          {
            name: '模型层',
            desc: 'Transformer编码器(位置编码+多头自注意力+前馈网络+残差连接)，支持CNN-Transformer混合架构(处理卫星图像特征)和Physics-informed约束',
          },
          {
            name: '输出层',
            desc: '多时间尺度功率预测 + 注意力热力图可解释性分析 + 置信区间估计',
          },
        ],
      },
      {
        type: 'tech-stack',
        title: '技术栈与数据源',
        categories: [
          { name: '核心模型', items: ['Transformer', 'PVTransNet', 'CNN-Transformer Hybrid', 'Physics-informed Transformer'] },
          { name: '数据源', items: ['SCADA实时监控', 'ECMWF/NOAA NWP', '卫星遥感图像', '地面气象站'] },
          { name: '传感器', items: ['GHI/DNI辐照传感器', '温度传感器', '风速风向仪', '湿度传感器'] },
          { name: '挑战与对策', items: ['多源异构数据实时融合', '时空非线性特征建模', '气象主导因素(辐照/云/温度)', '电力市场精度敏感性'] },
        ],
      },
      {
        type: 'highlights',
        title: '学术研究支撑',
        subtitle: '基于国际前沿学术成果',
        items: [
          { label: 'PVTransNet (Kim et al., 2024)', value: 'MAPE 8.2%，比LSTM提升15%' },
          { label: '时空Transformer (Zhang & Wang, 2023)', value: '注意力门控机制面向区域光伏电站群 (Energy Conversion and Management)' },
          { label: 'Physics-informed Transformer (Piantadosi et al., 2023)', value: '物理约束增强太阳辐照预测 (arXiv)' },
          { label: 'CNN-Transformer混合 (Liu et al., 2024)', value: '结合天空图像的小时内光伏预测 (Renewable Energy)' },
        ],
      },
      {
        type: 'use-cases',
        title: '展望方向',
        items: [
          { title: '深度时空建模', desc: '更深层次的时空耦合特征提取与建模' },
          { title: '多时间尺度协调', desc: '分钟级/小时级/日级多尺度预测协同' },
          { title: '可迁移低样本框架', desc: '少量数据快速适配新站点的迁移学习框架' },
          { title: '电力市场集成', desc: '与电力交易和储能调度系统深度整合' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 6. Dormitory Power Monitoring (NEW)
  // ──────────────────────────────────────────────────────────
  {
    id: 'dormitory-power-monitor',
    slug: 'dormitory-power-monitor',
    name: 'Smart Power Guard',
    nameCn: '宿舍恶意用电AI预警系统',
    shortDesc: 'AI-based Non-Intrusive Load Monitoring for dormitory malicious electricity detection and real-time warning',
    shortDescCn: '基于AI非侵入式负荷监测(NILM)的宿舍恶意用电智能识别与实时预警系统，边缘端5-8秒内精准识别违规大功率电器。',
    iconKey: 'zap',
    color: '#ef4444',
    tags: ['用电安全', 'NILM', '边缘计算', '智能预警'],
    subtitle: '基于AI NILM的宿舍用电安全智能预警',
    heroDesc: '针对宿舍用电安全管理痛点，开发基于非侵入式负荷监测(NILM)的AI智能识别系统。通过智能电表/插座采集电流电压参数，在边缘网关上5-10秒内识别违规大功率电器(电暖器、电磁炉)，无需云端依赖即可实时预警。结合双引擎识别(规则引擎+神经网络)、自学习模块和云端管理平台，实现96.1%+识别准确率和≤13.6%误报率。',
    sections: [
      {
        type: 'metrics',
        title: '核心性能',
        items: [
          { value: '≥96.1%', label: '综合识别准确率' },
          { value: '≤13.6%', label: '误报率' },
          { value: '5-8秒', label: '违规设备响应时间' },
          { value: '<1秒', label: '规则引擎响应速度' },
          { value: '6 TOPS', label: '边缘NPU算力 (RK3588)' },
          { value: '1-5000Hz', label: '数据采集频率范围' },
        ],
      },
      {
        type: 'text-block',
        title: '项目背景与目标',
        paragraphs: [
          '传统宿舍用电管理存在三大痛点：人工巡查滞后、预警响应延迟、缺少设备级精准识别',
          '目标一：开发非侵入式智能识别模型，实现电器级别的分类识别',
          '目标二：构建宿舍级实时预警系统，边缘端快速处理无需云依赖',
          '目标三：建立用电行为画像与可视化管理平台',
        ],
      },
      {
        type: 'workflow',
        title: '数据处理流水线',
        subtitle: '从采集到识别的完整数据链路',
        steps: [
          { name: '数据采集', desc: '1-5000Hz采样，Modbus RTU/TCP、MQTT、RS485、LoRa多协议支持' },
          { name: '数据预处理', desc: '滤波、归一化、异常值校正、缺失值插补' },
          { name: '特征提取', desc: '时域(RMS/峰值/功率因数/波形因子) + 频域(FFT 3/5/7次谐波、THD) + 事件检测(改进双边CUSUM滑窗)' },
          { name: '双引擎识别', desc: '规则引擎(功率指纹匹配<1秒) + 神经网络引擎(BiLSTM/GRU+Boosting)' },
          { name: '告警上报', desc: '通过MQTT/HTTP上报事件(时间、电表ID、宿舍ID)至管理系统' },
        ],
      },
      {
        type: 'features',
        title: '核心技术模块',
        subtitle: '双引擎+自学习的智能识别架构',
        items: [
          {
            iconKey: 'zap',
            title: '规则引擎 (快速)',
            desc: '功率指纹库匹配典型大功率违规电器，响应时间<1秒，覆盖电暖器、电磁炉、热得快等常见违规设备',
          },
          {
            iconKey: 'brain',
            title: '神经网络引擎 (精准)',
            desc: 'BiLSTM双向学习长期依赖 + GRU高效门控机制(边缘可部署) + Boosting集成学习，处理复杂/混合负载场景',
          },
          {
            iconKey: 'refresh',
            title: '自学习模块',
            desc: '自动发现未匹配用电模式，提取特征并聚类为新指纹，用户确认后加入特征库。支持OTA模型更新适应变化',
          },
          {
            iconKey: 'monitor',
            title: '云端管理平台',
            desc: '实时仪表盘、告警中心(高/中/低分级)、一键处置、策略/阈值管理、模型OTA版本管理、数据分析、合规审计',
          },
          {
            iconKey: 'cpu',
            title: '边缘硬件部署',
            desc: 'RK3588 (6 TOPS NPU)、2GB RAM、8GB eMMC、Debian/Linux、RKNN Toolkit 2模型部署(INT8/FP16量化)',
          },
          {
            iconKey: 'shield',
            title: '合规与安全',
            desc: '告警分级处置，完整审计链，支持策略白名单/黑名单管理，数据加密传输',
          },
        ],
      },
      {
        type: 'tech-stack',
        title: '技术栈',
        categories: [
          { name: 'AI模型', items: ['BiLSTM', 'GRU', 'XGBoost/Boosting', 'CNN-BiLSTM-Attention', 'GAN+BiLSTM'] },
          { name: '信号处理', items: ['FFT频域分析', '3/5/7次谐波', 'THD', '双边CUSUM', 'RMS/峰值检测'] },
          { name: '通信协议', items: ['MQTT', 'HTTP', 'Modbus RTU/TCP', 'RS485', 'LoRa'] },
          { name: '边缘硬件', items: ['RK3588 (6 TOPS NPU)', 'RKNN Toolkit 2', 'INT8/FP16量化', 'Debian/Linux'] },
          { name: '云平台', items: ['实时仪表盘', '告警中心', 'OTA模型管理', '数据分析引擎'] },
        ],
      },
      {
        type: 'use-cases',
        title: '未来拓展方向',
        items: [
          { title: '用电统计与可视化', desc: '宿舍/楼栋/校区多级用电数据统计与趋势分析' },
          { title: '智能分析', desc: '空置检测、熄灯监控、碳排追踪' },
          { title: '仿真环境', desc: '构建仿真测试环境，加速算法迭代验证' },
          { title: '云平台集成', desc: '与校园综合管理系统深度整合' },
        ],
      },
      {
        type: 'highlights',
        title: '学术与专利支撑',
        items: [
          { label: 'CN 115116210 B', value: '宿舍用电监控相关专利' },
          { label: 'BP神经网络', value: '宿舍用电监控研究' },
          { label: 'LSTM物联网', value: '异常用电检测方案' },
          { label: 'CNN-BiLSTM-Attention + XGBoost', value: '堆叠集成学习' },
          { label: '改进XGBoost', value: '低误报窃电检测' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 7. Industrial AOI (NEW)
  // ──────────────────────────────────────────────────────────
  {
    id: 'industrial-aoi',
    slug: 'industrial-aoi',
    name: 'Industrial AOI',
    nameCn: '工业AOI深度学习视觉检测',
    shortDesc: 'Deep learning-powered Automated Optical Inspection for industrial quality control',
    shortDescCn: '基于深度学习的工业自动光学检测(AOI)综合技术方案，覆盖OCR文字识别、目标定位、像素级缺陷分割，评估前沿视觉基础模型与零样本/少样本学习能力。',
    iconKey: 'eye',
    color: '#10b981',
    tags: ['AOI', '缺陷检测', '深度学习', '工业质检'],
    subtitle: '基于深度学习的工业自动光学检测',
    heroDesc: '全面的工业AOI深度学习技术调研与评估方案。涵盖OCR文字识别、目标定位(有无检测/堆叠识别/位置校正)、像素级分割(损伤/脏污/色差/划痕/斑点缺陷检测)三大任务类型。系统评估Grounding DINO、SAM、YOLO-World等前沿视觉基础模型，探索零样本/少样本学习在工业场景的应用前景。',
    sections: [
      {
        type: 'features',
        title: 'AOI三大任务类型',
        subtitle: '覆盖工业视觉检测全场景',
        items: [
          {
            iconKey: 'type',
            title: 'OCR文字识别',
            desc: '识别产品标签、条码、序列号等文字信息，支持多种字体和方向',
          },
          {
            iconKey: 'target',
            title: '目标定位',
            desc: '有无检测、堆叠识别、位置校正——判断部件是否存在、是否堆叠、位置是否正确',
          },
          {
            iconKey: 'grid',
            title: '像素级分割',
            desc: '缺陷检测——损伤、脏污、色差、划痕、斑点等微观缺陷的精确像素级定位与分类',
          },
          {
            iconKey: 'chart',
            title: '量化评估体系',
            desc: 'Accuracy/Precision/F1/Recall + 混淆矩阵 + mAP + ROC/PR曲线 + IoU + MSE/MAE/R²',
          },
          {
            iconKey: 'layers',
            title: '迁移与少样本学习',
            desc: '迁移学习、预训练微调(FFT/PEFT/LoRA/Adapter/Freeze)、元学习(MAML)、知识蒸馏、提示工程',
          },
          {
            iconKey: 'sparkles',
            title: '零样本/上下文学习',
            desc: '零样本(Zero-shot)、单样本(One-shot)、少样本(Few-shot)上下文学习能力评估',
          },
        ],
      },
      {
        type: 'workflow',
        title: '研究与评估流程',
        steps: [
          { name: '数据集收集', desc: '收集PCB缺陷、铝材表面缺陷、物体计数等工业数据集' },
          { name: '模型收集', desc: '收集前沿视觉基础模型(Grounding DINO、SAM、YOLO-World等)' },
          { name: '预训练模型测试', desc: '直接使用预训练权重在工业数据集上测试零样本/少样本能力' },
          { name: '训练/微调', desc: '针对特定工业场景进行模型微调与适配' },
          { name: '对比评估', desc: '定性+定量评估：精度、速度、成本、可部署性全面对比' },
        ],
      },
      {
        type: 'architecture',
        title: '评估的前沿模型',
        subtitle: '涵盖检测、分割、基础模型',
        layers: [
          {
            name: 'Grounding DINO',
            desc: 'Transformer零样本检测器(662MB)，支持文本提示检测。可检测DM码但置信度较低，CPU推理30-40秒',
          },
          {
            name: 'SAM (Segment Anything)',
            desc: '零样本分割模型(357MB)，GPU推理4-6秒(3060)。支持点/框/文本提示分割',
          },
          {
            name: 'YOLO-World',
            desc: '基于YOLOv8的文本提示检测器，GPU推理60-80ms / CPU 3.5秒。速度快但本地仅限COCO 80类',
          },
          {
            name: 'EdgeSAM',
            desc: 'SAM的CNN蒸馏版(37MB)，轻量但不推荐用于segment-everything任务',
          },
          {
            name: 'T-Rex',
            desc: '基于DETR+CLIP的视觉/文本提示检测器，仅API调用方式',
          },
          {
            name: 'GLEE',
            desc: '视觉任务基础模型，统一检测/分割/跟踪多任务能力',
          },
        ],
      },
      {
        type: 'text-block',
        title: '深度学习基础体系',
        subtitle: '完整的神经网络理论覆盖',
        paragraphs: [
          '神经元线性/非线性部分与激活函数 → 损失函数(最小二乘/最大似然/信息熵) → 梯度下降(BGD/MBGD/SGD/RMSprop/Adam)',
          'CNN架构(卷积/池化/全连接/Softmax/感受野) → RNN/LSTM/GRU序列建模 → Encoder-Decoder → Transformer(自注意力/多头注意力/位置编码/残差连接)',
          '数据归一化、正则化(L1/L2/Dropout)、过拟合与欠拟合诊断与解决',
          '前向传播与反向传播(BPTT)完整训练流程',
        ],
      },
      {
        type: 'tech-stack',
        title: '工具与框架',
        categories: [
          { name: '标注工具', items: ['T-Rex Label', 'ISAT with SAM', 'Label Studio', 'X-AnyLabeling'] },
          { name: '训练框架', items: ['OpenMMLab (300+算法/2400+预训练模型)', 'Detectron2', 'PaddlePaddle/PaddleDetection'] },
          { name: '数据集', items: ['PCB缺陷数据集', '铝材表面缺陷', '物体计数数据集'] },
          { name: '训练方法', items: ['迁移学习', 'LoRA/Adapter微调', '元学习(MAML)', '知识蒸馏', 'Prompt Engineering'] },
        ],
      },
      {
        type: 'highlights',
        title: '结论与展望',
        items: [
          { label: '零样本现状', value: '开源零样本视觉模型尚未达到工业生产速度/成本要求' },
          { label: '最有潜力', value: 'Grounding DINO和YOLO-World经微调后表现最佳' },
          { label: '传统路线', value: '仍需大量数据采集和标注投入' },
          { label: '商业方案', value: '市场商业产品(如NB-AI 6万许可)质量参差不齐' },
          { label: '下一步', value: '继续评估YOLO新版本、few-shot模型，微调开源模型，知识蒸馏轻量化' },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 8. NeuPLC (NEW)
  // ──────────────────────────────────────────────────────────
  {
    id: 'neuplc',
    slug: 'neuplc',
    name: 'NeuPLC 灵枢',
    nameCn: 'AI驱动工业自动化编程平台',
    shortDesc: 'AI-driven PLC programming platform combining generative AI with deterministic industrial rule engines',
    shortDescCn: '灵枢NeuPLC是AI驱动的工业自动化PLC编程与逻辑生成平台。结合生成式AI(Agent工作流)与确定性工业规则引擎，将Excel工艺文档转换为PLC控制代码(IEC 61131-3 ST)，七层安全框架验证后导出。',
    iconKey: 'cpu',
    color: '#0ea5e9',
    tags: ['PLC编程', '工业自动化', 'AI Agent', 'IEC 61131-3'],
    subtitle: 'AI驱动工业自动化PLC编程平台 V2.0',
    heroDesc: '灵枢NeuPLC是面向离散制造(非标自动化)的AI辅助编程与逻辑生成平台。结合生成式AI(类Claude Code的Agent工作流)与确定性工业规则引擎，将标准化Excel工艺文档一键转换为PLC控制代码(IEC 61131-3 ST)，经过七层安全框架验证后导出。核心价值：解耦业务逻辑与底层代码——"懂工艺就能改程序，无需编码"。',
    sections: [
      {
        type: 'metrics',
        title: '商业价值',
        subtitle: '量化投入产出',
        items: [
          { value: '~4万/项目', label: '单项目节省成本' },
          { value: '5个项目', label: '客户回本周期' },
          { value: '~18.8万', label: '单套软件授权价格' },
          { value: '10套', label: '年销售覆盖研发成本' },
          { value: '100-120万', label: '首年研发预算(RMB)' },
          { value: '7层', label: '安全验证框架' },
        ],
      },
      {
        type: 'use-cases',
        title: '角色价值主张',
        subtitle: '不同角色的核心痛点解决',
        items: [
          { title: '老板/管理层', desc: '缩短交付周期，降低关键人依赖风险，减少安全事故风险' },
          { title: '电气工程师(EE)', desc: '消除重复IO/GVL/告警编码，从"码农"升级为"架构师"' },
          { title: '工艺/机械工程师', desc: 'Excel成为唯一真实来源(SSOT)，减少"口头传达→理解偏差→返工"' },
          { title: 'FAE/售后', desc: '现场改动通过流程图看板完成，减少高级工程师出差' },
        ],
      },
      {
        type: 'architecture',
        title: '产品演进路径',
        subtitle: '从MVP到企业版的三阶段演进',
        layers: [
          {
            name: 'Form 1 — NeuPLC Excel Toolchain (MVP)',
            desc: 'Excel工作台(模板/自动填充/版本管理) + Preflight输入校验(确定性规则+AI辅助补全) + AI辅助PLC编程(GVL/DUT生成、IO映射、状态机脚手架、工站握手、Linter静态分析) → ST代码包 + 验证报告',
          },
          {
            name: 'Form 2 — NeuPLC Studio',
            desc: '三栏IDE(流程图/代码/静态分析面板)，双向同步编辑，虚拟调试环境',
          },
          {
            name: 'Form 3 — NeuPLC Enterprise',
            desc: '私有知识库(RAG)，多用户协作，多品牌PLC适配(三菱/西门子/汇川/基恩士)',
          },
        ],
      },
      {
        type: 'features',
        title: '核心技术能力',
        subtitle: '确定性工业规则 + 生成式AI的深度融合',
        items: [
          {
            iconKey: 'file-spreadsheet',
            title: 'Excel → 代码转换',
            desc: '四层数据模型(全局配置/资源定义/业务逻辑/安全异常) + 七大核心输入要素 → 自动生成IEC 61131-3 ST代码',
          },
          {
            iconKey: 'shield',
            title: '七层安全框架',
            desc: '急停/物理互锁/行程边界/上电初始化/动作超时/信号滤波/模式隔离——任何层违规直接阻止代码导出',
          },
          {
            iconKey: 'brain',
            title: 'AI Agent系统',
            desc: 'Planner/Coder/Reviewer三角色Agent工作流,任务分解→代码生成→静态分析→迭代优化',
          },
          {
            iconKey: 'code',
            title: 'Linter静态分析',
            desc: '中间表示(IR) + 抽象语法树(AST)两级检查，确定性锚定阻止AI不安全输出',
          },
          {
            iconKey: 'database',
            title: '上下文链接',
            desc: '中间件Schema/JSON索引防止跨15+工站时的"逻辑遗忘"问题',
          },
          {
            iconKey: 'settings',
            title: '物理先验知识',
            desc: '组件库内置超时/滤波去抖默认值等AI未学习的物理先验，确保工业安全',
          },
        ],
      },
      {
        type: 'workflow',
        title: '四层数据模型',
        subtitle: '从全局配置到安全异常的结构化输入',
        steps: [
          { name: '全局配置', desc: 'PLC型号、网络参数、急停逻辑' },
          { name: '资源定义', desc: 'IO映射、变量定义、组件属性' },
          { name: '业务逻辑', desc: '工站/工步描述、握手协议、手动/自动流程' },
          { name: '安全/异常', desc: '互锁矩阵、告警/复位策略' },
        ],
      },
      {
        type: 'tech-stack',
        title: '技术栈',
        categories: [
          { name: '前端', items: ['React', 'Electron', '三栏IDE', '流程图编辑器'] },
          { name: '解析引擎', items: ['Python', 'Pandas', 'Excel解析'] },
          { name: 'AI系统', items: ['AI Agents (Planner/Coder/Reviewer)', 'Claude API', 'RAG检索增强生成'] },
          { name: '安全验证', items: ['Linter (IR+AST)', '七层安全框架', 'Preflight校验'] },
          { name: '存储', items: ['PostgreSQL', '向量数据库 (RAG)', '组件库'] },
          { name: '目标PLC', items: ['三菱', '西门子', '汇川', '基恩士 (供应商Profile适配层)'] },
        ],
      },
      {
        type: 'timeline',
        title: '实施计划',
        phases: [
          {
            name: 'Phase 0 — 概念验证',
            duration: '第1-30天',
            tasks: ['"金蟾"机组单工站逻辑原型验证'],
          },
          {
            name: 'Phase 1 — MVP交付',
            duration: '第2-4月',
            tasks: ['Excel工具箱', 'Preflight校验', 'AI辅助编程', 'ST代码生成'],
          },
          {
            name: 'Phase 2 — 现场验证',
            duration: '第5-6月',
            tasks: ['非关键项目现场验证', '迭代优化'],
          },
          {
            name: 'Phase 3 — 商业化',
            duration: '第7月+',
            tasks: ['NeuPLC Studio发布', '多品牌PLC适配', '市场推广'],
          },
        ],
      },
      {
        type: 'highlights',
        title: '竞争优势 vs 通用AI',
        subtitle: '相比ChatGPT/Claude直接生成代码的三大差异化',
        items: [
          { label: '确定性锚定', value: 'Linter阻止AI不安全输出，七层安全框架硬约束' },
          { label: '上下文链接', value: '中间件Schema/JSON索引，15+工站不会"逻辑遗忘"' },
          { label: '物理先验', value: '组件库内置超时/滤波去抖等AI未学习的工业安全默认值' },
          { label: '市场策略', value: '滩头=中型非标自动化集成商(3C/锂电)，扩展至大型OEM(光伏/半导体)' },
        ],
      },
    ],
  },
]

// Helper: Get product by slug
export function getProductBySlug(slug: string): ProductData | undefined {
  return allProducts.find((p) => p.slug === slug)
}

// Helper: Get all internal products (those using generic detail page)
export function getInternalProducts(): ProductData[] {
  return allProducts.filter((p) => !p.externalLink)
}
