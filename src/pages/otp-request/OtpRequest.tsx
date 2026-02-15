import { useEffect } from "react"
import { Link } from '@tanstack/react-router'

export function OtpRequest() {
       useEffect(() => {
      document.body.classList.add("requestotp-body")
      return () => document.body.classList.remove("requestotp-body")
    }, [])

      useEffect(() => {
      document.title = "Solpire - 验证码";
    }, []);
    
  return (
<>
  {/* Background Image */}
  <div className="ro-page-bg" />
  <div className="rg-page-bg" />
  <div className="page-container">
    <div className="header-section">
      <h1>验证码</h1>
    </div>
    <div className="content-wrapper">
      <div className="form-wrapper">
        <div className="registration-container">
          <div className="main-avatar-section">
            <div className="ro-avatar-section" />
          </div>
          <form id="registrationForm">
            <div className="signin-wrapper">
              {/* 电话 */}
              <div className="row-box bg-pink-blue">
                <div className="row-label">电话</div>
                <input
                  type="text"
                  className="row-input"
                  placeholder="请输入手机号码"
                />
                <div className="right-rect">发送验证码</div>
              </div>
              {/* 验证码 */}
              <div className="row-box bg-green-gray">
                <div className="row-label">验证码</div>
                <input
                  type="text"
                  className="row-input"
                  placeholder="请输入6位验证码"
                  maxLength={6}
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
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
              <div className="button-container">
                <button
                  type="submit"
                  className="register-button"
                  form="registrationForm"
                >
                  验证
                </button>
              </div>
            </div>
          </form>
          <div className="signin-link">
            已有账号？<Link to="/signin">返回登录</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}
