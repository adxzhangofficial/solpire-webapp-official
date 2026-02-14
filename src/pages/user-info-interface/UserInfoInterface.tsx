import { useEffect } from "react"
import { getAssetPath } from "../../lib/utils"

export function UserInfoInterface() {
      useEffect(() => {
        document.body.classList.add("user-info-interface-body")
        return () => document.body.classList.remove("user-info-interface-body")
      }, [])


            useEffect(() => {
      document.title = "Solpire - 用户信息";
    }, []);


  return (

    <div className="page-container">
  <div className="content-wrapper">
    <div className="main-form-wrapper">
      <div className="ui-avatar-section mb-4 mb-lg-0" />
      <div className="form-wrapper w-100">
        <div className="account-container first_box mx-auto">
          <h2 className="account-title">账户设置</h2>
          <div className="form-divider" />
          <form id="accountForm">
            <div className="form-group">
              <label className="form-label">
                用户名<span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                required
              />
            </div>
            <div className="form-divider-light" />
            <div className="form-group">
              <label className="form-label">
                密码<span className="required">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder=""
                required
              />
            </div>
            <div className="form-divider-light" />
            <div className="form-group">
              <label className="form-label">
                电话<span className="required">*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                placeholder=""
                required
              />
            </div>
            <div className="form-divider-light" />
            <div className="form-group">
              <label className="form-label">
                注销账号<span className="required">*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                placeholder=""
                required
              />
            </div>
            <div className="form-divider-light" />
          </form>
        </div>
        <div className="account-container second_box mx-auto">
          <h2 className="account-title">激活管理</h2>
          <div className="form-divider" />
          <form id="accountForm">
            <div className="container-fluid px-0">
              {/* Card 1 */}
              <div className="sol-card d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-start align-items-md-center">
                <div className="sol-left d-flex align-items-center">
                  <div className="sol-logo-wrapper flex-shrink-0">
                    <img src={getAssetPath('/assets/images/logo(2).png')} alt="GeoOptix Logo" />
                  </div>
                  <div>
                    <div>
                      <span className="sol-title">GeoOptix</span>
                      <span className="sol-premium">Premium</span>
                    </div>
                    <div className="sol-version">v1.3.2</div>
                  </div>
                </div>
                <div className="sol-right">
                  <div className="sol-row d-flex justify-content-between align-items-center">
                    <span className="sol-label">激活日期：</span>
                    <span className="sol-value">2024 .06 .23</span>
                  </div>
                  <div className="sol-row d-flex justify-content-between align-items-center">
                    <span className="sol-label">套餐剩余：</span>
                    <span className="sol-value">670 Days</span>
                  </div>
                </div>
                <div className="sol-details d-flex align-items-center">
                  <span>查看详情</span>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                    alt="edit icon"
                  />
                </div>
              </div>
              {/* Card 2 */}
              <div className="sol-card d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-start align-items-md-center">
                <div className="sol-left d-flex align-items-center">
                  <div className="sol-logo-wrapper flex-shrink-0">
                    <img src={getAssetPath('/assets/images/logo(2).png')} alt="GeoOptix Logo" />
                  </div>
                  <div>
                    <div>
                      <span className="sol-title">GeoOptix</span>
                      <span className="sol-premium">Premium</span>
                    </div>
                    <div className="sol-version">v1.3.2</div>
                  </div>
                </div>
                <div className="sol-right">
                  <div className="sol-row d-flex justify-content-between align-items-center">
                    <span className="sol-label">激活日期：</span>
                    <span className="sol-value">2024 .06 .23</span>
                  </div>
                  <div className="sol-row d-flex justify-content-between align-items-center">
                    <span className="sol-label">套餐剩余：</span>
                    <span className="sol-value">670 Days</span>
                  </div>
                </div>
                <div className="sol-details d-flex align-items-center">
                  <span>查看详情</span>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                    alt="edit icon"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>



  )
}
