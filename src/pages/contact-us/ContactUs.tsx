import { useState, useEffect } from "react"
import Swal from "sweetalert2"


export function ContactUs() {
  const [view, setView] = useState<'form' | 'thanks'>('form')
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', company: '',
    subject: '', type: '', message: '',
  })

  useEffect(() => {
    document.body.classList.add("contactus-body")
    return () => document.body.classList.remove("contactus-body")
  }, [])

  useEffect(() => {
    document.title = "Solpire - 联系我们";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await Swal.fire({
      icon: 'success',
      title: '提交成功！',
      text: '感谢您的留言，我们将在 24 小时内与您联系。',
      confirmButtonText: '好的',
      confirmButtonColor: '#6366f1',
      showClass: { popup: 'animate__animated animate__fadeInDown' },
      hideClass: { popup: 'animate__animated animate__fadeOutUp' },
    })
    setView('thanks')
  }

  return (
<>
  <div className="contact-us-container">
    <h1 className="get-in-touch-title">
      Get in Touch
      <br />
      联系我们
    </h1>

    <div className="contact-form-container">
      {view === 'form' ? (
      <form onSubmit={handleSubmit}>
        {/* Row 1: Name + Phone */}
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label htmlFor="contact-name">姓名 *</label>
            <input
              type="text"
              id="contact-name"
              required
              placeholder="请输入您的姓名"
              value={formData.name}
              onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="contact-phone">手机号码 *</label>
            <input
              type="tel"
              id="contact-phone"
              required
              placeholder="请输入手机号码"
              value={formData.phone}
              onChange={e => setFormData(d => ({ ...d, phone: e.target.value }))}
            />
          </div>
        </div>

        {/* Row 2: Email + Company */}
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label htmlFor="contact-email">邮箱 *</label>
            <input
              type="email"
              id="contact-email"
              required
              placeholder="请输入您的邮箱"
              value={formData.email}
              onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="contact-company">公司名称</label>
            <input
              type="text"
              id="contact-company"
              placeholder="请输入公司名称（选填）"
              value={formData.company}
              onChange={e => setFormData(d => ({ ...d, company: e.target.value }))}
            />
          </div>
        </div>

        {/* Row 3: Subject + Type */}
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label htmlFor="subject">主题 *</label>
            <input
              type="text"
              id="subject"
              required
              placeholder="请输入主题"
              value={formData.subject}
              onChange={e => setFormData(d => ({ ...d, subject: e.target.value }))}
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="type">类型</label>
            <select
              id="type"
              value={formData.type}
              onChange={e => setFormData(d => ({ ...d, type: e.target.value }))}
            >
              <option value="">请选择类型</option>
              <option value="consultation">咨询</option>
              <option value="cooperation">合作</option>
              <option value="support">技术支持</option>
              <option value="other">其他</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="contact-form-group">
          <label htmlFor="message">详细信息</label>
          <textarea
            id="message"
            placeholder="请输入详细信息..."
            value={formData.message}
            onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
          />
        </div>

        <button type="submit" className="contact-submit-btn">
          提交
        </button>
      </form>
      ) : (
        <div className="contact-thanks">
          <div className="contact-thanks__icon">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="contact-thanks__title">感谢您的留言！</h3>
          <p className="contact-thanks__desc">
            我们已收到您的信息，团队成员将在 24 小时内通过邮件或电话与您联系。
          </p>
          <button
            type="button"
            className="contact-submit-btn"
            onClick={() => {
              setFormData({ name: '', phone: '', email: '', company: '', subject: '', type: '', message: '' })
              setView('form')
            }}
          >
            再次留言
          </button>
        </div>
      )}
    </div>
  </div>
</>
  )
}
