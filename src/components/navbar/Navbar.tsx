import { useThemeStore } from '../../stores/themeStore'
import { Link } from '@tanstack/react-router'
import { getAssetPath } from '../../lib/utils'

export const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore()

  return (
  <>
    {/* Navigation Bar */}
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            src={getAssetPath('/assets/images/---2.png')}
            alt="Logo Icon"
            className="logo-icon"
          />
          <p className="nav-company-title">S O L P I R E</p>
        </Link>
        <ul className="nav-menu d-none d-lg-flex">
          <li className="nav-item has-dropdown" id="productsNavItem">
            <div className="nav-link">
              产品
            </div>
            <div className="products-dropdown" id="productsDropdown">
              <div className="products-dropdown-content">
                <div className="products-menu">
                  {/* Column 1 */}
                  <div className="products-column">
                    <div className="products-category">
                      <a href="/products/geooptix-3d" className="products-category-title">
                        GeoOptix 3D 模型查重
                      </a>
                      <div className="products-subitems">
                        <a href="/products/geooptix-3d" className="products-subitem">
                          三维模型智能查重
                        </a>
                        <a href="/products/geooptix-3d" className="products-subitem">
                          数字资产管理
                        </a>
                      </div>
                    </div>
                    <div className="products-category">
                      <Link to="/solpire-canvas" className="products-category-title">
                        Solpire Canvas 网页生成
                      </Link>
                      <div className="products-subitems">
                        <Link to="/solpire-canvas" className="products-subitem">
                          AI智能建站
                        </Link>
                      </div>
                    </div>
                    <div className="products-category">
                      <Link to="/solpire-avatar" className="products-category-title">
                        Solpire Avatar 数字人
                      </Link>
                      <div className="products-subitems">
                        <Link to="/solpire-avatar" className="products-subitem">
                          AI数字人系统
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Column 2 */}
                  <div className="products-column">
                    <div className="products-category">
                      <a href="/products/ai-3dgs-fitness" className="products-category-title">
                        AI+3DGS MR健身
                      </a>
                      <div className="products-subitems">
                        <a href="/products/ai-3dgs-fitness" className="products-subitem">
                          MR健身场景构建
                        </a>
                      </div>
                    </div>
                    <div className="products-category">
                      <a href="/products/pv-power-prediction" className="products-category-title">
                        光伏出力预测
                      </a>
                      <div className="products-subitems">
                        <a href="/products/pv-power-prediction" className="products-subitem">
                          Transformer智能预测
                        </a>
                      </div>
                    </div>
                    <div className="products-category">
                      <a href="/products/dormitory-power-monitor" className="products-category-title">
                        宿舍用电预警
                      </a>
                      <div className="products-subitems">
                        <a href="/products/dormitory-power-monitor" className="products-subitem">
                          AI NILM智能识别
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Column 3 */}
                  <div className="products-column">
                    <div className="products-category">
                      <a href="/products/industrial-aoi" className="products-category-title">
                        工业AOI视觉检测
                      </a>
                      <div className="products-subitems">
                        <a href="/products/industrial-aoi" className="products-subitem">
                          深度学习质检
                        </a>
                      </div>
                    </div>
                    <div className="products-category">
                      <a href="/products/neuplc" className="products-category-title">
                        NeuPLC 灵枢
                      </a>
                      <div className="products-subitems">
                        <a href="/products/neuplc" className="products-subitem">
                          AI工业自动化编程
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item has-dropdown" id="aboutNavItem">
            <div className="nav-link">
              关于我们
            </div>
            <div className="about-dropdown" id="aboutDropdown">
              <div className="about-dropdown-content">
                <div className="about-menu">
                  <div className="about-category">
                    <Link to="/" hash="about" className="about-category-title">
                      公司介绍
                    </Link>
                  </div>
                  <div className="about-category">
                    <Link to="/" hash="team" className="about-category-title">
                      团队成员
                    </Link>
                  </div>
                  <div className="about-category">
                    <Link to="/" hash="cases" className="about-category-title">
                      项目案例
                    </Link>
                  </div>
                  <div className="about-category">
                    <Link to="/contact-us" className="about-category-title">
                      联系方式
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item has-dropdown" id="cooperationNavItem">
            <div className="nav-link">
              技术合作
            </div>
            <div className="cooperation-dropdown" id="cooperationDropdown">
              <div className="cooperation-dropdown-content">
                <div className="cooperation-menu">
                  {/* Column 1 */}
                  <div className="cooperation-column">
                    <div className="cooperation-category">
                      <a href="#ai-ml" className="cooperation-category-title">
                        AI与机器学习
                      </a>
                      <div className="cooperation-subitems">
                        <a href="#large-model" className="cooperation-subitem">
                          大模型宇宙
                        </a>
                        <a href="#computer-vision" className="cooperation-subitem">
                          计算机视觉
                        </a>
                      </div>
                    </div>
                    <div className="cooperation-category">
                      <a href="#engineering-simulation" className="cooperation-category-title">
                        工程与仿真
                      </a>
                      <div className="cooperation-subitems">
                        <a href="#3d-structure" className="cooperation-subitem">
                          3D结构编码解析
                        </a>
                        <a href="#cfd-fem" className="cooperation-subitem">
                          CFD/有限元仿真
                        </a>
                        <a href="#structure-optimization" className="cooperation-subitem">
                          结构优化
                        </a>
                      </div>
                    </div>
                    <div className="cooperation-category">
                      <a href="#robotics-positioning" className="cooperation-category-title">
                        机器人与定位
                      </a>
                      <div className="cooperation-subitems">
                        <a href="#slam" className="cooperation-subitem">
                          SLAM导航定位系统
                        </a>
                        <a href="#sensor-fusion" className="cooperation-subitem">
                          传感器融合
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Column 2 */}
                  <div className="cooperation-column">
                    <div className="cooperation-category">
                      <a href="#edge-tools" className="cooperation-category-title">
                        边缘计算与工具
                      </a>
                      <div className="cooperation-subitems">
                        <a href="#edge-computing" className="cooperation-subitem">
                          边缘计算架构
                        </a>
                        <a href="#industry-tools" className="cooperation-subitem">
                          行业赋能工具
                        </a>
                        <a href="#automation-test" className="cooperation-subitem">
                          自动化测试平台
                        </a>
                      </div>
                    </div>
                    <div className="cooperation-category">
                      <a href="#solution-cases" className="cooperation-category-title">
                        解决方案实例
                      </a>
                      <div className="cooperation-subitems">
                        <a href="#structure-management" className="cooperation-subitem">
                          结构件管理软件
                        </a>
                        <a href="#ai-monitoring" className="cooperation-subitem">
                          AI设备监控预研
                        </a>
                        <a href="#industry-llm" className="cooperation-subitem">
                          行业大模型应用
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Column 3 */}
                  <div className="cooperation-column">
                    <div className="cooperation-category">
                      <a href="#cooperation-process" className="cooperation-category-title">
                        合作流程
                      </a>
                      <div className="cooperation-subitems">
                        <a href="#requirement" className="cooperation-subitem">
                          需求对齐
                        </a>
                        <a href="#solution-design" className="cooperation-subitem">
                          方案设计
                        </a>
                        <a href="#implementation" className="cooperation-subitem">
                          实施交付
                        </a>
                        <a href="#operation" className="cooperation-subitem">
                          运维服务
                        </a>
                      </div>
                    </div>
                    <div className="cooperation-category">
                      <a href="#data-security" className="cooperation-category-title">
                        数据安全承诺
                      </a>
                      <div className="cooperation-subitems">
                        <a href="#infrastructure" className="cooperation-subitem">
                          基础设施安全
                        </a>
                        <a href="#data-governance" className="cooperation-subitem">
                          数据治理
                        </a>
                        <a href="#audit" className="cooperation-subitem">
                          透明审计
                        </a>
                      </div>
                    </div>
                    <div className="cooperation-category">
                      <a href="#contact-cooperation" className="cooperation-category-title">
                        联系技术合作
                      </a>
                      <div className="cooperation-subitems">
                        <a href="#registration" className="cooperation-subitem">
                          需求登记
                        </a>
                        <a href="#meeting" className="cooperation-subitem">
                          会议预定
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item has-dropdown" id="supportNavItem">
            <div className="nav-link">
              技术支持
            </div>
            <div className="support-dropdown" id="supportDropdown">
              <div className="support-dropdown-content">
                <div className="support-menu">
                  <div className="support-category">
                    <Link to="/support-community" className="support-category-title">
                      社区
                    </Link>
                  </div>
                  <div className="support-category">
                    <Link to="/" className="support-category-title">
                      激活状况
                    </Link>
                  </div>
                  <div className="support-category">
                    <Link to="/technical-support" className="support-category-title">
                      Q&amp;A 问答
                    </Link>
                  </div>
                  <div className="support-category">
                    <Link
                      to="/"
                      className="support-category-title"
                    >
                      Troubleshooting 问题自查
                    </Link>
                  </div>
                  <div className="support-category">
                    <Link to="/" className="support-category-title">
                      技术资源文档
                    </Link>
                  </div>
                  <div className="support-category">
                    <Link
                      to="/"
                      className="support-category-title"
                    >
                      联系技术支持
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="nav-icons d-flex align-items-center">
          <button className="icon-btn" id="searchBtn" aria-label="Search">
            <svg
              width={29}
              height={29}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx={11} cy={11} r={8} />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? (
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={12} r={5} />
                <line x1={12} y1={1} x2={12} y2={3} />
                <line x1={12} y1={21} x2={12} y2={23} />
                <line x1={4.22} y1={4.22} x2={5.64} y2={5.64} />
                <line x1={18.36} y1={18.36} x2={19.78} y2={19.78} />
                <line x1={1} y1={12} x2={3} y2={12} />
                <line x1={21} y1={12} x2={23} y2={12} />
                <line x1={4.22} y1={19.78} x2={5.64} y2={18.36} />
                <line x1={18.36} y1={5.64} x2={19.78} y2={4.22} />
              </svg>
            )}
          </button>
          <button className="icon-btn" id="languageBtn" aria-label="Language">
            <svg
              width={25}
              height={25}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx={12} cy={12} r={10} />
              <line x1={2} y1={12} x2={22} y2={12} />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>
          <button className="icon-btn" id="userBtn" aria-label="Users">
            <svg
              width={23}
              height={23}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </button>
          <div className="user-dropdown" id="userDropdown">
            <div className="user-dropdown-content">
              <div className="user-menu">
                <div className="user-category">
                  <Link to="/registration" className="user-category-title">
                    注册
                  </Link>
                </div>
                <div className="user-category">
                  <Link to="/signin" className="user-category-title">
                    登录
                  </Link>
                </div>
                <div className="user-category">
                  <Link
                    to="/"
                    className="user-category-title"
                  >
                    账号信息
                  </Link>
                </div>
                <div className="user-category">
                  <Link
                    to="/"
                    className="user-category-title"
                  >
                    激活状况
                  </Link>
                </div>
                <div className="user-category">
                  <a href="#logout" className="user-category-title">
                    登出
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="mobile-menu-toggle d-lg-none"
            id="mobileMenuToggle"
            aria-label="Menu"
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <line x1={3} y1={12} x2={21} y2={12} />
              <line x1={3} y1={6} x2={21} y2={6} />
              <line x1={3} y1={18} x2={21} y2={18} />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    {/* Mobile Navigation Menu */}
    <div className="mobile-nav-panel" id="mobileNavPanel">
      <div className="mobile-nav-header">
        <span className="mobile-nav-title">菜单</span>
        <button className="mobile-nav-close" id="mobileNavClose">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </button>
      </div>
      <div className="mobile-nav-content">
        {/* Products Section */}
        <div className="mobile-nav-section">
          <button className="mobile-nav-item" data-toggle="products">
            <span>产品</span>
            <svg
              className="mobile-nav-arrow"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="mobile-nav-dropdown" id="mobile-products">
            <a href="/products/geooptix-3d" className="mobile-nav-link">
              GeoOptix 3D 模型查重
            </a>
            <Link to="/solpire-canvas" className="mobile-nav-link">
              Solpire Canvas 网页生成
            </Link>
            <Link to="/solpire-avatar" className="mobile-nav-link">
              Solpire Avatar 数字人
            </Link>
            <a href="/products/ai-3dgs-fitness" className="mobile-nav-link">
              AI+3DGS MR健身
            </a>
            <a href="/products/pv-power-prediction" className="mobile-nav-link">
              光伏出力预测
            </a>
            <a href="/products/dormitory-power-monitor" className="mobile-nav-link">
              宿舍用电预警
            </a>
            <a href="/products/industrial-aoi" className="mobile-nav-link">
              工业AOI视觉检测
            </a>
            <a href="/products/neuplc" className="mobile-nav-link">
              NeuPLC 灵枢
            </a>
          </div>
        </div>
        {/* About Us Section */}
        <div className="mobile-nav-section">
          <button className="mobile-nav-item" data-toggle="about">
            <span>关于我们</span>
            <svg
              className="mobile-nav-arrow"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="mobile-nav-dropdown" id="mobile-about">
            <Link to="/" hash="about" className="mobile-nav-link">
              公司介绍
            </Link>
            <Link to="/" hash="team" className="mobile-nav-link">
              团队成员
            </Link>
            <Link to="/" hash="cases" className="mobile-nav-link">
              项目案例
            </Link>
            <Link to="/contact-us" className="mobile-nav-link">
              联系方式
            </Link>
          </div>
        </div>
        {/* Cooperation Section */}
        <div className="mobile-nav-section">
          <button className="mobile-nav-item" data-toggle="cooperation">
            <span>技术合作</span>
            <svg
              className="mobile-nav-arrow"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="mobile-nav-dropdown" id="mobile-cooperation">
            <div className="mobile-nav-group">
              <span className="mobile-nav-group-title">人工智能集群技术栈</span>
              <a href="#large-model" className="mobile-nav-sublink">
                大模型宇宙
              </a>
              <a href="#computer-vision" className="mobile-nav-sublink">
                计算机视觉
              </a>
              <a href="#3d-structure" className="mobile-nav-sublink">
                3D结构编码解析
              </a>
              <a href="#cfd-fem" className="mobile-nav-sublink">
                CFD/有限元仿真
              </a>
              <a href="#structure-optimization" className="mobile-nav-sublink">
                结构优化
              </a>
              <a href="#slam" className="mobile-nav-sublink">
                SLAM导航定位系统
              </a>
              <a href="#sensor-fusion" className="mobile-nav-sublink">
                传感器融合
              </a>
              <a href="#edge-computing" className="mobile-nav-sublink">
                边缘计算架构
              </a>
              <a href="#industry-tools" className="mobile-nav-sublink">
                行业赋能工具
              </a>
              <a href="#automation-test" className="mobile-nav-sublink">
                自动化测试平台
              </a>
            </div>
            <div className="mobile-nav-group">
              <span className="mobile-nav-group-title">解决方案实例</span>
              <a href="#structure-management" className="mobile-nav-sublink">
                结构件管理软件
              </a>
              <a href="#ai-monitoring" className="mobile-nav-sublink">
                AI设备监控预研
              </a>
              <a href="#industry-llm" className="mobile-nav-sublink">
                行业大模型应用
              </a>
            </div>
            <div className="mobile-nav-group">
              <span className="mobile-nav-group-title">合作流程</span>
              <a href="#requirement" className="mobile-nav-sublink">
                需求对齐
              </a>
              <a href="#solution-design" className="mobile-nav-sublink">
                方案设计
              </a>
              <a href="#implementation" className="mobile-nav-sublink">
                实施交付
              </a>
              <a href="#operation" className="mobile-nav-sublink">
                运维服务
              </a>
            </div>
            <div className="mobile-nav-group">
              <span className="mobile-nav-group-title">数据安全承诺</span>
              <a href="#infrastructure" className="mobile-nav-sublink">
                基础设施安全
              </a>
              <a href="#data-governance" className="mobile-nav-sublink">
                数据治理
              </a>
              <a href="#audit" className="mobile-nav-sublink">
                透明审计
              </a>
            </div>
            <div className="mobile-nav-group">
              <span className="mobile-nav-group-title">联系技术合作</span>
              <a href="#registration" className="mobile-nav-sublink">
                需求登记
              </a>
              <a href="#meeting" className="mobile-nav-sublink">
                会议预定
              </a>
            </div>
          </div>
        </div>
        {/* Support Section */}
        <div className="mobile-nav-section">
          <button className="mobile-nav-item" data-toggle="support">
            <span>技术支持</span>
            <svg
              className="mobile-nav-arrow"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="mobile-nav-dropdown" id="mobile-support">
            <Link to="/support-community" className="mobile-nav-link">
              社区
            </Link>
            <Link to="/" className="mobile-nav-link">
              激活状况
            </Link>
            <Link to="/technical-support" className="mobile-nav-link">
              Q&amp;A 问答
            </Link>
            <Link to="/" className="mobile-nav-link">
              Troubleshooting 问题自查
            </Link>
            <Link to="/" className="mobile-nav-link">
              技术资源文档
            </Link>
            <Link to="/" className="mobile-nav-link">
              联系技术支持
            </Link>
          </div>
        </div>
        {/* User Section */}
        <div className="mobile-nav-section">
          <button className="mobile-nav-item" data-toggle="user">
            <span>用户</span>
            <svg
              className="mobile-nav-arrow"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="mobile-nav-dropdown" id="mobile-user">
            <Link to="/registration" className="mobile-nav-link">
              注册
            </Link>
            <Link to="/signin" className="mobile-nav-link">
              登录
            </Link>
            <Link to="/" className="mobile-nav-link">
              账号信息
            </Link>
            <Link
              to="/"
              className="mobile-nav-link"
            >
              激活状况
            </Link>
            <a href="#logout" className="mobile-nav-link">
              登出
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Mobile Nav Backdrop */}
    <div className="mobile-nav-backdrop" id="mobileNavBackdrop" />
  </>
  )
}
