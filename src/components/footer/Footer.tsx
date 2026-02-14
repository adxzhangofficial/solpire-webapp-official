
import { Link } from '@tanstack/react-router'

export const Footer = () => (
  <>
    {/* Footer */}
    <footer className="site-footer">
      <div className="container-fluid">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <Link to="/" className="footer-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src="/assets/images/---2.png" alt="Solpire Logo" className="footer-logo-icon" />
              <span className="footer-company-name">S O L P I R E</span>
            </Link>
            <p className="footer-brand-desc">
              溯湃科技 — 以工业人工智能革新为核心，专注于高效、可落地的工业AI解决方案，赋能智能制造与数字化转型。
            </p>
          </div>
          <div className="footer-section">
            <h4>产品</h4>
            <ul>
              <li>
                <Link to="/duplicate-checker">GeoOptix 3D 模型查重</Link>
              </li>
              <li>
                <Link to="/solpire-canvas">Solpire Canvas 网页生成</Link>
              </li>
              <li>
                <Link to="/solpire-avatar">Solpire Avatar 数字人</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>关于我们</h4>
            <ul>
              <li>
                <Link to="/about-us">公司介绍</Link>
              </li>
              <li>
                <Link to="/about-us">团队成员</Link>
              </li>
              <li>
                <Link to="/case-studies">项目案例</Link>
              </li>
              <li>
                <Link to="/contact-us">联系方式</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>技术合作</h4>
            <ul>
              <li>
                <Link to="/cooperation" hash="ai-ml">AI与机器学习</Link>
              </li>
              <li>
                <Link to="/cooperation" hash="engineering-simulation">工程与仿真</Link>
              </li>
              <li>
                <Link to="/cooperation" hash="robotics-positioning">机器人与定位</Link>
              </li>
              <li>
                <Link to="/cooperation" hash="edge-tools">边缘计算与工具</Link>
              </li>
              <li>
                <Link to="/cooperation" hash="solution-cases">解决方案实例</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>技术支持</h4>
            <ul>
              <li>
                <Link to="/support-community">社区</Link>
              </li>
              <li>
                <Link to="/user-info-interface">激活状况</Link>
              </li>
              <li>
                <Link to="/technical-support">Q&amp;A 问答</Link>
              </li>
              <li>
                <Link to="/technical-support">Troubleshooting 问题自查</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="qr-block">
            <div className="qr-row">
              <div className="qr">
                <img src="/assets/images/2026/wechat-bg-transparent.png" alt="WeChat QR Code" />
              </div>
              <div className="qr-details">
                <p>微信：rayaesthe</p>
                <p>电话：18617033109</p>
                <p>邮箱：solpire@outlook.com</p>
              </div>
              <div className="social-media" aria-label="social links">
                <a href="#" aria-label="WeChat">
                  <img src="/assets/images/wechat.png" alt="WeChat Icon" />
                </a>
                <a href="#" aria-label="Weibo">
                  <img src="/assets/images/weibo.png" alt="Weibo Icon" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <img src="/assets/images/linkedin.png" alt="LinkedIn Icon" />
                </a>
                <a href="#" aria-label="Facebook">
                  <img src="/assets/images/facebook.png" alt="Facebook Icon" />
                </a>
              </div>
            </div>
            <div className="copyright">
              <p>
                ©2026 深圳溯湃人工智能科技有限公司 | <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>粤ICP备2025473288号-1</a> |
                统一社会信用代码 91440300MAEJY6A218
              </p>
              <p>
                <Link to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>隐私政策</Link> | <Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>服务条款</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
)
