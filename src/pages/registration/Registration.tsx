import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { getAssetPath } from "../../lib/utils"
const editIcon = getAssetPath('/assets/images/registration/edit-icon.svg')

const registrationSchema = z.object({
  username: z.string().min(3, "用户名至少需要3个字符").max(50, "用户名不能超过50个字符"),
  password: z.string().min(6, "密码至少需要6个字符").max(100, "密码不能超过100个字符"),
  phone: z.string().regex(/^1[3-9]\d{9}$/, "请输入有效的手机号码"),
  email: z.string().email("请输入有效的邮箱地址").optional().or(z.literal("")),
  interests: z.array(z.string()).min(1, "请至少选择一个兴趣"),
  otherInterest: z.string().optional(),
  nickname: z.string().min(2, "昵称至少需要2个字符").max(30, "昵称不能超过30个字符"),
})

type RegistrationFormData = z.infer<typeof registrationSchema>

export const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showOtherInput, setShowOtherInput] = useState(false)

  const interests = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
  ]

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      username: "",
      password: "",
      phone: "",
      email: "",
      interests: [],
      otherInterest: "",
      nickname: "",
    },
  })

  const selectedInterests = watch("interests")

  useEffect(() => {
    document.body.classList.add("registration-body")
    return () => document.body.classList.remove("registration-body")
  }, [])

  useEffect(() => {
    document.title = "Solpire - 注册"
  }, [])

  const handleInterestChange = (interest: string, checked: boolean) => {
    const currentInterests = selectedInterests || []
    if (checked) {
      setValue("interests", [...currentInterests, interest])
    } else {
      setValue("interests", currentInterests.filter(i => i !== interest))
    }
  }

  const handleOtherInterestToggle = (checked: boolean) => {
    setShowOtherInput(checked)
    if (checked) {
      const currentInterests = selectedInterests || []
      if (!currentInterests.includes("other")) {
        setValue("interests", [...currentInterests, "other"])
      }
    } else {
      const currentInterests = selectedInterests || []
      setValue("interests", currentInterests.filter(i => i !== "other"))
      setValue("otherInterest", "")
    }
  }

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true)
    try {
      console.log("Registration data ready for API:", data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert("注册成功！(API连接后将实现真正的注册)")
    } catch (error) {
      console.error("Registration error:", error)
      alert("注册失败，请重试")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Background Image */}
      <div className="rg-page-bg" />
      <div className="page-container">
        <div className="header-section">
          <h1>Hello</h1>
          <h1>感谢注册</h1>
        </div>

        <div className="content-wrapper">
          <div className="main-form-wrapper">
            <div className="avatar-section" />
            <div className="form-wrapper">
              <div className="registration-container">
                <h2 className="registration-title">账户注册</h2>
                <div className="form-divider" />

                <form id="registrationForm" onSubmit={handleSubmit(onSubmit)}>
                  {/* Username */}
                  <div className="form-group">
                    <label className="form-label">
                      用户名<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.username ? "input-error" : ""}`}
                      placeholder="请输入用户名"
                      data-testid="input-username"
                      {...register("username")}
                    />
                    {errors.username && (
                      <span className="error-message" data-testid="error-username">
                        {errors.username.message}
                      </span>
                    )}
                  </div>
                  <div className="form-divider-light" />

                  {/* Password */}
                  <div className="form-group">
                    <label className="form-label">
                      密码<span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? "input-error" : ""}`}
                      placeholder="请输入密码"
                      data-testid="input-password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <span className="error-message" data-testid="error-password">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="form-divider-light" />

                  {/* Phone */}
                  <div className="form-group">
                    <label className="form-label">
                      电话<span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? "input-error" : ""}`}
                      placeholder="请输入手机号码"
                      data-testid="input-phone"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <span className="error-message" data-testid="error-phone">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                  <div className="form-divider-light" />

                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label">邮箱</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "input-error" : ""}`}
                      placeholder="请输入邮箱地址（可选）"
                      data-testid="input-email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="error-message" data-testid="error-email">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="form-divider-light" />

                  {/* Interests */}
                  <div className="interests-section">
                    <label className="form-label">
                      您喜欢什么兴趣吧<span className="required">*</span>
                    </label>
                    {errors.interests && (
                      <span className="error-message" data-testid="error-interests">
                        {errors.interests.message}
                      </span>
                    )}
                    <Controller
                      name="interests"
                      control={control}
                      render={() => (
                        <div className="checkbox-grid">
                          {interests.map((interest, index) => (
                            <div className="checkbox-item" key={index}>
                              <div className="custom-checkbox">
                                <input
                                  type="checkbox"
                                  id={`interest${index + 1}`}
                                  checked={selectedInterests?.includes(interest) || false}
                                  onChange={(e) => handleInterestChange(interest, e.target.checked)}
                                  data-testid={`checkbox-interest-${index}`}
                                />
                                <span className="checkmark" />
                              </div>
                              <label
                                className="checkbox-label"
                                htmlFor={`interest${index + 1}`}
                              >
                                {interest}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                    />

                    {/* Other interest */}
                    <div className="other-section">
                      <div className="checkbox-item">
                        <div className="custom-checkbox">
                          <input
                            type="checkbox"
                            id="interestOther"
                            checked={showOtherInput}
                            onChange={(e) => handleOtherInterestToggle(e.target.checked)}
                            data-testid="checkbox-interest-other"
                          />
                          <span className="checkmark" />
                        </div>
                        <label
                          className="checkbox-label"
                          htmlFor="interestOther"
                        >
                          其他
                        </label>
                      </div>
                      {showOtherInput && (
                        <div className="other-textarea-wrapper">
                          <textarea
                            className="other-textarea"
                            placeholder="请输入其他兴趣"
                            data-testid="textarea-other-interest"
                            {...register("otherInterest")}
                          />
                          <img
                            src={editIcon}
                            alt="Edit"
                            className="textarea-edit-icon"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-divider-light" />

                  {/* Nickname */}
                  <div className="form-group">
                    <label className="form-label">
                      您的昵称<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.nickname ? "input-error" : ""}`}
                      placeholder="请输入昵称"
                      data-testid="input-nickname"
                      {...register("nickname")}
                    />
                    {errors.nickname && (
                      <span className="error-message" data-testid="error-nickname">
                        {errors.nickname.message}
                      </span>
                    )}
                  </div>
                </form>
              </div>

              {/* Submit Button */}
              <div className="button-container">
                <button
                  type="submit"
                  className="register-button"
                  form="registrationForm"
                  disabled={isSubmitting}
                  data-testid="button-register-submit"
                >
                  {isSubmitting ? "注册中..." : "注册"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
