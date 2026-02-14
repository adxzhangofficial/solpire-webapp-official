import { useEffect } from "react"


export function ForgetPassword() {
 useEffect(() => {
    document.body.classList.add("forgetpassword-body")
    return () => document.body.classList.remove("forgetpassword-body")
  }, [])

      useEffect(() => {
      document.title = "Solpire - 忘记密码";
    }, []);

  return (
<>
  {/* Background Image */}
  <div className="fp-page-bg" />
  <div className="rg-page-bg" />
  <div className="page-container">
    <div className="header-section">
      <h1>忘记密码</h1>
    </div>
    <div className="content-wrapper">
      <div className="form-wrapper">
        <div className="registration-container">
          <div className="main-avatar-section">
            <div className="fp-avatar-section" />
          </div>
          <form id="registrationForm">
            <div className="signin-wrapper">
              {/* 邮箱/电话 */}
              <div className="row-box bg-pink-blue">
                <div className="row-label">邮箱/电话</div>
                <input
                  type="text"
                  className="row-input"
                  placeholder="请输入邮箱或电话号码"
                />
                <div className="right-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={28}
                    height={28}
                    fill="none"
                    stroke="#555"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
              </div>
              <div className="button-container">
                <button
                  type="submit"
                  className="register-button"
                  form="registrationForm"
                >
                  发送重置链接
                </button>
              </div>
            </div>
          </form>
          <div className="signin-link">
            记起密码了？<a href="signin.html">返回登录</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}
