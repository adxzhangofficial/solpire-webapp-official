import { useEffect, useState } from "react"
import { Link } from '@tanstack/react-router'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const signinSchema = z.object({
  username: z.string().min(3, "用户名至少需要3个字符").max(50, "用户名不能超过50个字符"),
  password: z.string().min(6, "密码至少需要6个字符").max(100, "密码不能超过100个字符"),
  phone: z.string().regex(/^1[3-9]\d{9}$/, "请输入有效的手机号码"),
})

type SigninFormData = z.infer<typeof signinSchema>

export const Signin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      username: "",
      password: "",
      phone: "",
    },
  })

  useEffect(() => {
    document.body.classList.add("signin-body")
    return () => document.body.classList.remove("signin-body")
  }, [])

  useEffect(() => {
    document.title = "Solpire - 登录"
  }, [])

  const onSubmit = async (data: SigninFormData) => {
    setIsSubmitting(true)
    try {
      console.log("Form data ready for API:", data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert("登录成功！(API连接后将实现真正的登录)")
    } catch (error) {
      console.error("Login error:", error)
      alert("登录失败，请重试")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Background Image */}
      <div className="si-page-bg" />
      <div className="page-container">
        <div className="header-section">
          <h1>欢迎</h1>
        </div>
        <div className="content-wrapper">
          <div className="form-wrapper">
            <div className="registration-container">
              <div className="main-avatar-section">
                <div className="avatar-section" />
              </div>
              <form id="SigninForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="signin-wrapper">
                  {/* 用户名 */}
                  <div className={`row-box bg-pink-blue ${errors.username ? "has-error" : ""}`}>
                    <div className="row-label">用户名</div>
                    <input
                      type="text"
                      className="row-input padding-right"
                      placeholder="请输入用户名"
                      data-testid="input-username"
                      {...register("username")}
                    />
                    <div className="right-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={28}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </div>
                  </div>
                  {errors.username && (
                    <span className="error-message" data-testid="error-username">
                      {errors.username.message}
                    </span>
                  )}

                  {/* 密码 */}
                  <div className={`row-box bg-pink-blue ${errors.password ? "has-error" : ""}`}>
                    <div className="row-label">密码</div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="row-input padding-right"
                      placeholder="请输入密码"
                      data-testid="input-password"
                      {...register("password")}
                    />
                    <div
                      className="right-circle"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                      data-testid="button-toggle-password"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={28}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        {showPassword ? (
                          <>
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                            <line x1={1} y1={1} x2={23} y2={23} />
                          </>
                        ) : (
                          <>
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                            <circle cx={12} cy={12} r={3} />
                          </>
                        )}
                      </svg>
                    </div>
                  </div>
                  {errors.password && (
                    <span className="error-message" data-testid="error-password">
                      {errors.password.message}
                    </span>
                  )}

                  {/* 电话 */}
                  <div className={`row-box bg-green-gray ${errors.phone ? "has-error" : ""}`}>
                    <div className="row-label">电话</div>
                    <input
                      type="text"
                      className="row-input padding-right"
                      placeholder="请输入手机号码"
                      data-testid="input-phone"
                      {...register("phone")}
                    />
                    <div className="right-rect" data-testid="button-verify-phone">验证</div>
                  </div>
                  {errors.phone && (
                    <span className="error-message" data-testid="error-phone">
                      {errors.phone.message}
                    </span>
                  )}

                  <div className="button-container">
                    <button
                      type="submit"
                      className="register-button"
                      disabled={isSubmitting}
                      data-testid="button-signin-submit"
                    >
                      {isSubmitting ? "登录中..." : "登录"}
                    </button>
                  </div>
                </div>
              </form>
              <div className="signin-link">
                没有账号？<Link to="/registration" data-testid="link-register">注册</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
