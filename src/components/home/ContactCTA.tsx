import { Link } from '@tanstack/react-router'
import { useCalendarModalStore } from '../../stores/calendarModalStore'
import { getAssetPath } from '../../lib/utils'

export function ContactCTA() {
  const openCalendar = useCalendarModalStore((s) => s.open)

  return (
    <section className="sp-contact-cta">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="sp-contact-cta__title">
              准备好开启AI赋能之旅了吗？
            </h2>
            <p className="sp-contact-cta__desc">
              联系我们，了解如何利用AI技术驱动您的业务升级
            </p>
            <div className="sp-contact-cta__actions">
              <Link to="/contact-us" className="sp-btn sp-btn--primary sp-btn--lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>联系我们</span>
              </Link>
              <button type="button" onClick={openCalendar} className="sp-btn sp-btn--outline sp-btn--lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>预约会议</span>
              </button>
            </div>
            <div className="sp-contact-cta__qr">
              <img src={getAssetPath('/assets/images/2026/wechat-bg-transparent.png')} alt="WeChat QR Code" />
            </div>
            <div className="sp-contact-cta__info">
              <div className="sp-contact-cta__item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                solpire@outlook.com
              </div>
              <div className="sp-contact-cta__item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
                18617033109
              </div>
              <div className="sp-contact-cta__item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                微信: rayaesthe
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
