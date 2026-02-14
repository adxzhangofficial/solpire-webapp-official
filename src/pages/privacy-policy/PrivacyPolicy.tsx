import { useEffect } from "react"

export function PrivacyPolicy() {
    useEffect(() => {
      document.body.classList.add("privacy-policy-body")
      return () => document.body.classList.remove("privacy-policy-body")
    }, [])

      useEffect(() => {
      document.title = "Solpire - 隐私政策";
    }, []);

  return (
<>
  <div className="back-home">
    <a href="/" className="back-btn">
      <svg
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      返回首页
    </a>
  </div>
  <section className="privacy-hero">
    <div className="container">
      <div className="last-updated">最后更新：2025年10月2日</div>
      <h1>隐私政策 | Privacy Policy</h1>
      <p className="subtitle">溯湃科技用户隐私保护政策</p>
    </div>
  </section>
  <div className="privacy-container">
    <div className="privacy-content">
      <div className="privacy-section">
        <h2>
          <span className="section-number">1</span>
          引言
        </h2>
        <div className="divider" />
        <p>
          深圳溯湃科技有限公司（以下简称"我们"或"溯湃科技"）深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。
        </p>
        <p>
          本隐私政策适用于溯湃科技提供的所有产品和服务，包括但不限于GeoOptix
          AI零件智研软件、人工智能解决方案、技术咨询服务等。
        </p>
        <div className="highlight-box">
          <p>
            <strong>重要提示：</strong>
            在使用我们的服务之前，请您务必仔细阅读并充分理解本政策，特别是以粗体标识的条款。如果您不同意本政策的任何内容，您应立即停止使用我们的服务。
          </p>
        </div>
      </div>
      <div className="privacy-section">
        <h2>
          <span className="section-number">2</span>
          我们如何收集信息
        </h2>
        <div className="divider" />
        <h3>2.1 您主动提供的信息</h3>
        <p>在使用我们的服务时，您可能会向我们提供以下信息：</p>
        <ul>
          <li>
            <strong>账户信息：</strong>
            注册账户时提供的用户名、电子邮箱、手机号码、密码等
          </li>
          <li>
            <strong>身份信息：</strong>
            真实姓名、身份证号码、营业执照等（仅在需要实名认证时）
          </li>
          <li>
            <strong>联系信息：</strong>联系地址、电话号码、电子邮件等
          </li>
          <li>
            <strong>支付信息：</strong>
            银行卡信息、支付宝/微信支付账号等（由第三方支付平台处理）
          </li>
          <li>
            <strong>业务数据：</strong>
            您上传、创建或存储的3D模型文件、项目数据、设计图纸等
          </li>
          <li>
            <strong>反馈信息：</strong>您通过客服、意见反馈等渠道提供的信息
          </li>
        </ul>
        <h3>2.2 我们自动收集的信息</h3>
        <p>在您使用我们的服务过程中，我们会自动收集以下技术信息：</p>
        <ul>
          <li>
            <strong>设备信息：</strong>
            设备型号、操作系统版本、设备标识符、屏幕分辨率等
          </li>
          <li>
            <strong>日志信息：</strong>
            IP地址、浏览器类型、访问时间、访问页面、点击记录等
          </li>
          <li>
            <strong>位置信息：</strong>
            基于IP地址的大致地理位置（在您授权的情况下）
          </li>
          <li>
            <strong>Cookie和类似技术：</strong>
            用于识别您的身份、记住您的偏好设置
          </li>
          <li>
            <strong>使用数据：</strong>功能使用情况、操作记录、性能数据等
          </li>
        </ul>
        <h3>2.3 从第三方获取的信息</h3>
        <p>在您授权同意的前提下，我们可能从第三方获取您的相关信息：</p>
        <ul>
          <li>第三方登录平台（如微信、QQ）获取的用户名、头像等公开信息</li>
          <li>关联公司或合作伙伴提供的用于完成服务所必需的信息</li>
          <li>依法获得的公开信息</li>
        </ul>
      </div>
      <div className="privacy-section">
        <h2>
          <span className="section-number">3</span>
          我们如何使用信息
        </h2>
        <div className="divider" />
        <p>我们会将收集到的信息用于以下目的：</p>
        <h3>3.1 提供和改进服务</h3>
        <ul>
          <li>
            为您提供产品和服务，包括身份验证、客户服务、安全防范、存档和备份
          </li>
          <li>处理您的订单和交易，提供售后支持</li>
          <li>分析使用趋势，优化产品功能和用户体验</li>
          <li>开发新产品和服务</li>
        </ul>
        <h3>3.2 沟通和通知</h3>
        <ul>
          <li>向您发送服务相关的通知和更新</li>
          <li>回复您的咨询和请求</li>
          <li>在您同意的情况下，发送营销信息和推广活动</li>
        </ul>
        <h3>3.3 安全和合规</h3>
        <ul>
          <li>保护我们的服务和用户免受欺诈、滥用和非法活动</li>
          <li>遵守适用的法律法规和监管要求</li>
          <li>响应法律程序和政府请求</li>
        </ul>
        <h3>3.4 数据分析</h3>
        <ul>
          <li>进行内部研究和统计分析</li>
          <li>评估和改进我们的广告和营销活动</li>
          <li>了解用户行为模式，提供个性化服务</li>
        </ul>
        <div className="highlight-box">
          <p>
            <strong>您的控制权：</strong>
            我们承诺不会将您的个人信息用于本政策未载明的其他目的。如需将您的个人信息用于其他目的，我们会再次征求您的同意。
          </p>
        </div>
      </div>
      <div className="privacy-section">
        <h2>
          <span className="section-number">4</span>
          信息共享与披露
        </h2>
        <div className="divider" />
        <p>
          我们承诺对您的信息保密，除以下情形外，不会与第三方共享您的个人信息：
        </p>
        <h3>4.1 经您同意的共享</h3>
        <p>在获得您的明确同意后，我们会与第三方共享您的个人信息。</p>
        <h3>4.2 服务提供商</h3>
        <p>我们可能会与为我们提供服务的第三方共享信息，包括：</p>
        <ul>
          <li>云计算和数据存储服务提供商</li>
          <li>支付处理服务提供商</li>
          <li>客户服务和技术支持服务提供商</li>
          <li>数据分析和营销服务提供商</li>
        </ul>
        <p>这些服务提供商仅被授权将您的信息用于向我们提供服务的目的。</p>
        <h3>4.3 法律要求</h3>
        <p>在以下情况下，我们可能会披露您的个人信息：</p>
        <ul>
          <li>遵守适用的法律法规</li>
          <li>响应法院命令、传票或其他法律程序</li>
          <li>配合政府机关或监管机构的调查</li>
          <li>保护我们、用户或公众的权利、财产或安全</li>
        </ul>
        <h3>4.4 业务转让</h3>
        <p>
          在合并、收购或资产出售的情况下，您的个人信息可能会被转让。我们会在转让发生前通知您，并确保您的信息在转让后继续受到保护。
        </p>
        <div className="highlight-box">
          <p>
            <strong>安全保障：</strong>
            我们要求所有接收个人信息的第三方按照本政策和适用的数据保护法律保护您的信息。
          </p>
        </div>
      </div>
      <div className="privacy-section">
        <h2>
          <span className="section-number">5</span>
          信息安全
        </h2>
        <div className="divider" />
        <p>我们采用行业标准的安全措施保护您的个人信息：</p>
        <h3>5.1 技术措施</h3>
        <ul>
          <li>
            <strong>数据加密：</strong>使用SSL/TLS协议加密传输，AES-256加密存储
          </li>
          <li>
            <strong>访问控制：</strong>严格的权限管理和身份验证机制
          </li>
          <li>
            <strong>安全审计：</strong>定期进行安全评估和渗透测试
          </li>
          <li>
            <strong>防火墙和入侵检测：</strong>部署多层安全防护系统
          </li>
          <li>
            <strong>数据备份：</strong>定期备份，确保数据可恢复性
          </li>
        </ul>
        <h3>5.2 管理措施</h3>
        <ul>
          <li>建立数据安全管理体系和规章制度</li>
          <li>对员工进行数据安全培训</li>
          <li>签署保密协议，限制数据访问权限</li>
          <li>制定应急响应预案，及时处理安全事件</li>
        </ul>
        <h3>5.3 认证和合规</h3>
        <ul>
          <li>ISO 27001 信息安全管理体系认证</li>
          <li>SOC 2 Type II 合规</li>
          <li>等保三级认证</li>
        </ul>
        <div className="highlight-box">
          <p>
            <strong>安全事件通知：</strong>
            尽管采取了上述安全措施，但请您理解，在互联网行业，没有绝对的安全。一旦发生信息安全事件，我们会按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议等。
          </p>
        </div>
      </div>
      <div className="privacy-section">
        <h2>
          <span className="section-number">6</span>
          您的权利
        </h2>
        <div className="divider" />
        <p>根据适用的数据保护法律，您对您的个人信息享有以下权利：</p>
        <h3>6.1 访问和获取</h3>
        <p>您有权访问您的个人信息，并获取我们持有的关于您的个人信息副本。</p>
        <h3>6.2 更正</h3>
        <p>
          如果您发现我们持有的关于您的个人信息不准确或不完整，您有权要求我们更正。
        </p>
        <h3>6.3 删除</h3>
        <p>在以下情况下，您有权要求我们删除您的个人信息：</p>
        <ul>
          <li>我们违反法律法规或与您的约定收集、使用个人信息</li>
          <li>我们违反法律法规或与您的约定共享、转让个人信息</li>
          <li>处理目的已实现、无法实现或为实现处理目的不再必要</li>
          <li>我们停止提供产品或服务，或保存期限已届满</li>
          <li>您撤回同意</li>
          <li>您认为我们的处理违反法律法规或违反与您的约定</li>
        </ul>
        <h3>6.4 撤回同意</h3>
        <p>
          对于基于同意处理的个人信息，您有权随时撤回您的同意。撤回同意不影响撤回前基于您同意的处理的合法性。
        </p>
        <h3>6.5 限制处理</h3>
        <p>在某些情况下，您有权要求我们限制对您个人信息的处理。</p>
        <h3>6.6 数据可携带</h3>
        <p>
          您有权以结构化、常用和机器可读的格式获取您的个人信息，并有权将这些信息传输给另一个数据控制者。
        </p>
        <h3>6.7 反对处理</h3>
        <p>
          您有权反对我们出于特定目的处理您的个人信息，包括直接营销、分析和研究目的。
        </p>
        <div className="contact-info">
          <p>
            <strong>如何行使您的权利：</strong>
          </p>
          <p>您可以通过以下方式行使上述权利：</p>
          <ul>
            <li>登录您的账户，在设置中管理您的信息</li>
            <li>发送邮件至：privacy@solphire.com</li>
            <li>拨打客服电话：18617033109</li>
            <li>联系微信客服：rayaesthe</li>
          </ul>
          <p>我们会在收到您的请求后15个工作日内予以回复。</p>
        </div>
      </div>
      <div className="privacy-section">
        <h2>
          <span className="section-number">7</span>
          未成年人保护
        </h2>
        <div className="divider" />
        <p>
          我们的服务主要面向成年人。如果您是未满18周岁的未成年人，在使用我们的服务前，请确保已经取得您的监护人的同意。
        </p>
        <p>
          如果我们发现在未获得可证实的监护人同意的情况下收集了未成年人的个人信息，我们会尽快删除相关信息。
        </p>
        <p>
          监护人可以通过本政策"联系我们"部分所列的方式联系我们，要求我们停止处理未成年人的个人信息。
        </p>
      </div>
      <div className="privacy-section">
        <h2>
          <span className="section-number">8</span>
          跨境数据传输
        </h2>
        <div className="divider" />
        <p>
          我们的服务器主要位于中国境内。如果您从中国境外访问我们的服务，您的个人信息可能会被传输到中国境内或其他司法管辖区。
        </p>
        <p>当我们需要将您的个人信息传输到中国境外时，我们会：</p>
        <ul>
          <li>评估数据出境的安全性</li>
          <li>采取适当的安全措施，如数据加密、签署数据处理协议等</li>
          <li>遵守中国关于数据出境的相关法律法规</li>
          <li>征得您的明确同意（在需要的情况下）</li>
        </ul>
      </div>
      <div className="privacy-section">
        <h2>
          <span className="section-number">9</span>
          隐私政策的更新
        </h2>
        <div className="divider" />
        <p>
          我们可能会不时更新本隐私政策。当我们对本政策做出重大变更时，我们会通过以下方式通知您：
        </p>
        <ul>
          <li>在网站或应用程序上发布显著通知</li>
          <li>向您发送电子邮件或站内消息</li>
          <li>其他适当的方式</li>
        </ul>
        <p>
          更新后的隐私政策将在发布后立即生效。如果您不同意更新后的隐私政策，您应停止使用我们的服务。继续使用我们的服务将被视为您接受更新后的隐私政策。
        </p>
      </div>
      <div className="privacy-section">
        <h2>
          <span className="section-number">10</span>
          联系我们
        </h2>
        <div className="divider" />
        <p>
          如果您对本隐私政策有任何疑问、意见或建议，或需要行使您的权利，请通过以下方式联系我们：
        </p>
        <div className="contact-info">
          <p>
            <strong>深圳溯湃科技有限公司</strong>
          </p>
          <p>
            <strong>数据保护官：</strong>李先生
          </p>
          <p>
            <strong>邮箱：</strong>privacy@solphire.com
          </p>
          <p>
            <strong>电话：</strong>18617033109
          </p>
          <p>
            <strong>微信：</strong>rayaesthe
          </p>
          <p>
            <strong>地址：</strong>广东省深圳市南山区科技园
          </p>
          <p>
            <strong>邮编：</strong>518000
          </p>
        </div>
        <p>我们会在收到您的反馈后尽快回复，一般不超过15个工作日。</p>
        <div className="highlight-box">
          <p>
            <strong>投诉渠道：</strong>
            如果您对我们的回复不满意，特别是您认为我们的个人信息处理行为损害了您的合法权益，您还可以向网信、电信、公安及工商等监管部门进行投诉或举报，或通过向被告住所地有管辖权的法院提起诉讼来寻求解决方案。
          </p>
        </div>
      </div>
    </div>
  </div>
</>

  )
}
