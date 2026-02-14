import { useEffect } from "react"

export function Terms() {
      useEffect(() => {
        document.body.classList.add("terms-body")
        return () => document.body.classList.remove("terms-body")
      }, [])

            useEffect(() => {
      document.title = "Solpire - 服务条款";
    }, []);


  return (


    <>


  <section className="terms-hero">
    <div className="container">
      <div className="last-updated">最后更新：2025年10月2日</div>
      <h1>服务条款 | Terms of Service</h1>
      <p className="subtitle">溯湃科技用户服务协议</p>
    </div>
  </section>
  <div className="terms-container">
    <div className="terms-content">
      <div className="terms-section">
        <h2>
          <span className="section-number">1</span>
          使用协议
          <span className="english-title">User Agreement</span>
        </h2>
        <div className="divider" />
        <p>
          欢迎使用溯湃科技（以下简称"我们"或"本公司"）提供的产品和服务。在使用我们的服务之前，请您仔细阅读并充分理解本协议的全部内容，特别是免除或限制责任的条款、法律适用和争议解决条款。
        </p>
        <h3>1.1 协议接受</h3>
        <p>
          当您注册成为溯湃科技用户或使用我们的任何服务时，即表示您已阅读、理解并同意接受本服务条款的所有内容。如果您不同意本协议的任何内容，请立即停止使用我们的服务。
        </p>
        <h3>1.2 协议变更</h3>
        <p>
          我们保留随时修改本协议的权利。修改后的协议将在网站上公布，并自公布之日起生效。您继续使用我们的服务即视为接受修改后的协议。建议您定期查看本协议以了解最新变更。
        </p>
        <h3>1.3 服务范围</h3>
        <p>本协议适用于溯湃科技提供的所有产品和服务，包括但不限于：</p>
        <ul>
          <li>GeoOptix AI零件智研软件及相关功能</li>
          <li>人工智能解决方案与技术咨询服务</li>
          <li>多模态大模型、机器学习、机器视觉等AI技术服务</li>
          <li>三维数字化资产管理与智能制造转型解决方案</li>
          <li>其他我们提供的相关产品和服务</li>
        </ul>
      </div>
      <div className="terms-section">
        <h2>
          <span className="section-number">2</span>
          知识产权
          <span className="english-title">Intellectual Property</span>
        </h2>
        <div className="divider" />
        <h3>2.1 所有权声明</h3>
        <p>
          溯湃科技提供的所有服务、软件、技术、文档、图形、界面设计、版面设计等的知识产权均归溯湃科技或其关联公司所有。未经我们书面许可，任何人不得擅自使用、修改、复制、公开传播、改变、散布、发行或公开发表本网站程序或内容。
        </p>
        <h3>2.2 商标权利</h3>
        <p>
          "溯湃科技"、"SOLPHIRE"、"GeoOptix"及相关标识均为溯湃科技的注册商标或商标。未经我们事先书面同意，您不得以任何方式使用我们的商标、服务标记、商号、域名或其他显著品牌特征。
        </p>
        <h3>2.3 用户内容</h3>
        <p>
          您在使用我们服务时上传、提交或传输的内容（包括但不限于文本、图片、数据等）的知识产权归您所有。但您授予我们在提供服务所必需的范围内使用该内容的非排他性、全球性、免费许可。
        </p>
        <div className="highlight-box">
          <p>
            <strong>重要提示：</strong>
            我们尊重知识产权，如果您发现有任何侵犯您知识产权的行为，请立即通过本协议末尾的联系方式通知我们，我们将及时处理。
          </p>
        </div>
        <h3>2.4 技术保护</h3>
        <p>
          我们的软件和服务受著作权法、商标法、专利法及其他知识产权法律的保护。您不得对我们的软件进行反向工程、反编译、反汇编或以其他方式试图获取源代码。
        </p>
      </div>
      <div className="terms-section">
        <h2>
          <span className="section-number">3</span>
          用户责任
          <span className="english-title">User Responsibilities</span>
        </h2>
        <div className="divider" />
        <h3>3.1 账号管理</h3>
        <p>
          您有责任维护您的账号和密码的安全性。您应对使用您的账号进行的所有活动负责。如发现任何未经授权的使用，请立即通知我们。
        </p>
        <h3>3.2 合法使用</h3>
        <p>您同意在使用我们的服务时遵守所有适用的法律法规，不得：</p>
        <ul>
          <li>发布、传输或分享任何非法、有害、威胁、辱骂、骚扰、侵权的内容</li>
          <li>干扰或破坏服务器或网络，或违反网络使用规定</li>
          <li>侵犯他人的知识产权或其他合法权益</li>
          <li>冒充他人或虚假陈述与他人的关系</li>
          <li>收集或存储他人的个人信息</li>
          <li>将服务用于任何商业用途，除非获得我们的明确书面同意</li>
        </ul>
        <h3>3.3 数据准确性</h3>
        <p>
          您应确保向我们提供的所有信息和数据的真实性、准确性和完整性。您对因提供虚假、不准确或不完整信息而导致的任何后果承担全部责任。
        </p>
        <h3>3.4 禁止行为</h3>
        <div className="highlight-box">
          <p>
            <strong>严格禁止以下行为：</strong>
          </p>
          <ul>
            <li>使用任何自动化工具或手段访问、抓取或收集我们的服务内容</li>
            <li>对我们的系统进行任何形式的渗透测试或安全攻击</li>
            <li>传播病毒、木马或其他恶意代码</li>
            <li>绕过或破解我们的安全措施或技术保护措施</li>
          </ul>
        </div>
      </div>
      <div className="terms-section">
        <h2>
          <span className="section-number">4</span>
          隐私保护
          <span className="english-title">Privacy Protection</span>
        </h2>
        <div className="divider" />
        <h3>4.1 隐私政策</h3>
        <p>
          我们重视您的隐私保护。我们如何收集、使用、存储和保护您的个人信息详见我们的《隐私政策》。使用我们的服务即表示您同意我们按照《隐私政策》处理您的个人信息。
        </p>
        <h3>4.2 信息收集</h3>
        <p>为了提供更好的服务，我们可能会收集以下信息：</p>
        <ul>
          <li>账户信息：用户名、电子邮件地址、联系方式等</li>
          <li>使用数据：登录记录、功能使用情况、交互行为等</li>
          <li>技术信息：IP地址、浏览器类型、设备信息等</li>
          <li>业务数据：您在使用服务过程中上传或生成的数据</li>
        </ul>
        <h3>4.3 信息使用</h3>
        <p>我们收集的信息将用于：</p>
        <ul>
          <li>提供、维护和改进我们的服务</li>
          <li>开发新的功能和服务</li>
          <li>与您沟通，包括发送服务通知和更新</li>
          <li>保护我们的服务和用户的安全</li>
          <li>遵守法律义务</li>
        </ul>
        <h3>4.4 数据安全</h3>
        <p>
          我们采用行业标准的安全措施保护您的数据，包括加密传输、访问控制、定期安全审计等。但请注意，没有任何互联网传输或电子存储方法是100%安全的。
        </p>
        <div className="highlight-box">
          <p>
            <strong>您的权利：</strong>
            您有权访问、更正、删除或限制我们处理您的个人信息。如需行使这些权利，请通过本协议末尾的联系方式与我们联系。
          </p>
        </div>
      </div>
      <div className="terms-section">
        <h2>
          <span className="section-number">5</span>
          服务变更
          <span className="english-title">Service Changes</span>
        </h2>
        <div className="divider" />
        <h3>5.1 服务修改权</h3>
        <p>
          我们保留随时修改、暂停或终止部分或全部服务的权利，无论是否通知。我们将尽力提前通知重大变更，但不承担因服务变更而产生的任何责任。
        </p>
        <h3>5.2 功能更新</h3>
        <p>
          我们可能会定期更新我们的产品和服务，以改进性能、增加新功能或修复错误。这些更新可能会改变现有功能的工作方式或外观。
        </p>
        <h3>5.3 服务终止</h3>
        <p>在以下情况下，我们有权终止向您提供服务：</p>
        <ul>
          <li>您违反本协议的任何条款</li>
          <li>您的行为给我们或其他用户造成损害或法律风险</li>
          <li>根据法律要求或政府命令</li>
          <li>您要求终止服务</li>
          <li>出于商业原因决定停止提供某项服务</li>
        </ul>
        <h3>5.4 数据导出</h3>
        <p>
          在服务终止前，我们将提供合理的时间让您导出您的数据。服务终止后，我们可能会删除您的账户和数据，除非法律要求我们保留。
        </p>
      </div>
      <div className="terms-section">
        <h2>
          <span className="section-number">6</span>
          免责声明
          <span className="english-title">Disclaimer</span>
        </h2>
        <div className="divider" />
        <h3>6.1 服务现状</h3>
        <p>
          我们的服务按"现状"和"可用"基础提供。在法律允许的最大范围内，我们不对服务做任何明示或暗示的保证，包括但不限于适销性、特定用途适用性、不侵权的保证。
        </p>
        <h3>6.2 责任限制</h3>
        <div className="highlight-box">
          <p>
            <strong>重要限制：</strong>
            在任何情况下，溯湃科技及其关联公司、董事、员工、代理人不对以下情况承担责任：
          </p>
          <ul>
            <li>任何间接、偶然、特殊、惩罚性或后果性损害</li>
            <li>利润、收入、数据或业务机会的损失</li>
            <li>因使用或无法使用服务而造成的损害</li>
            <li>第三方的行为或内容</li>
            <li>未经授权访问或修改您的传输或数据</li>
          </ul>
        </div>
        <h3>6.3 不可抗力</h3>
        <p>
          对于因不可抗力（包括但不限于自然灾害、战争、罢工、政府行为、网络攻击、系统故障等）导致的服务中断或延迟，我们不承担任何责任。
        </p>
        <h3>6.4 第三方链接</h3>
        <p>
          我们的服务可能包含指向第三方网站或服务的链接。我们不控制这些第三方网站或服务，也不对其内容、隐私政策或做法负责。
        </p>
        <h3>6.5 技术限制</h3>
        <p>
          虽然我们努力提供高质量的服务，但AI技术本身存在一定的不确定性和局限性。我们不保证服务结果的绝对准确性或完整性，建议您在关键决策时结合专业人士的意见。
        </p>
      </div>
      <div className="terms-section">
        <h2>
          <span className="section-number">7</span>
          争议解决
          <span className="english-title">Dispute Resolution</span>
        </h2>
        <div className="divider" />
        <h3>7.1 适用法律</h3>
        <p>
          本协议的解释、执行和争议解决均适用中华人民共和国法律（不包括其冲突法规则）。
        </p>
        <h3>7.2 友好协商</h3>
        <p>
          因本协议引起的或与本协议有关的任何争议，双方应首先通过友好协商解决。协商期限为30天，自一方向另一方发出书面协商请求之日起计算。
        </p>
        <h3>7.3 仲裁</h3>
        <p>
          如果争议在协商期限内无法解决，任何一方均可将争议提交至中国国际经济贸易仲裁委员会深圳分会，按照其届时有效的仲裁规则进行仲裁。仲裁裁决是终局的，对双方均有约束力。
        </p>
        <h3>7.4 管辖权</h3>
        <p>
          如因任何原因仲裁条款无效或不适用，双方同意将争议提交至深圳市南山区人民法院诉讼解决。
        </p>
        <h3>7.5 诉讼费用</h3>
        <p>
          除仲裁裁决或法院判决另有规定外，败诉方应承担仲裁费、律师费及其他合理的争议解决费用。
        </p>
      </div>
      <div className="terms-section">
        <h2>
          <span className="section-number">8</span>
          其他条款
          <span className="english-title">Miscellaneous</span>
        </h2>
        <div className="divider" />
        <h3>8.1 完整协议</h3>
        <p>
          本协议构成您与溯湃科技之间关于使用我们服务的完整协议，并取代之前的所有口头或书面协议。
        </p>
        <h3>8.2 可分割性</h3>
        <p>
          如果本协议的任何条款被认定为无效或不可执行，该条款应在最大可能范围内被解释为有效，其余条款继续完全有效。
        </p>
        <h3>8.3 不弃权</h3>
        <p>
          我们未行使或延迟行使本协议项下的任何权利或救济不应被视为对该权利或救济的放弃。
        </p>
        <h3>8.4 转让</h3>
        <p>
          未经我们事先书面同意，您不得转让本协议项下的权利或义务。我们可以自由转让本协议项下的权利和义务给任何关联公司或继承我们业务的实体。
        </p>
        <h3>8.5 语言</h3>
        <p>本协议以中文编写。如有其他语言版本，以中文版本为准。</p>
      </div>
      <div className="terms-section">
        <h2>
          <span className="section-number">9</span>
          联系我们
          <span className="english-title">Contact Us</span>
        </h2>
        <div className="divider" />
        <p>
          如果您对本服务条款有任何疑问、意见或建议，或需要行使您的权利，请通过以下方式与我们联系：
        </p>
        <div className="contact-info">
          <p>
            <strong>公司名称：</strong>深圳溯湃科技有限公司
          </p>
          <p>
            <strong>公司地址：</strong>深圳市南山区科技园
          </p>
          <p>
            <strong>电子邮箱：</strong>solpire@outlook.com
          </p>
          <p>
            <strong>客服时间：</strong>工作日 9:00-18:00（法定节假日除外）
          </p>
        </div>
        <div className="highlight-box" style={{ marginTop: 30 }}>
          <p>
            <strong>感谢您选择溯湃科技！</strong>
          </p>
          <p style={{ marginBottom: 0 }}>
            我们致力于为您提供优质的AI解决方案和服务。您的信任是我们前进的动力，我们将持续创新，不断提升服务质量，助力您的数字化转型之旅。
          </p>
        </div>
      </div>
    </div>
  </div>
</>



  )
}
