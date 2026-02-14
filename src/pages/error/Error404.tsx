import { useEffect } from "react"

export function Error404() {
  useEffect(() => {
    document.body.classList.add("error-body")
    document.title = "404 - 页面未找到"
    return () => document.body.classList.remove("error-body")
  }, [])

  return (
    <div className="error-page-container">
      <div className="error-content">
        <div className="error-code-section">
          <h1 className="error-code">404</h1>
          <div className="error-icon">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <circle cx={12} cy={12} r={10} />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
        </div>
        
        <div className="error-message-section">
          <h2 className="error-title">页面未找到 | Page Not Found</h2>
          <p className="error-description">
            抱歉，您访问的页面不存在。可能是链接已过期或输入有误。
          </p>
          <p className="error-description-en">
            Sorry, the page you are looking for does not exist. The link may have expired or been mistyped.
          </p>
        </div>

        <div className="error-actions">
          <button 
            className="error-btn error-btn-primary"
            onClick={() => {
              window.location.href = "/"
            }}
            data-testid="button-go-home-404"
          >
            返回首页 | Go Home
          </button>
          <button 
            className="error-btn error-btn-secondary"
            onClick={() => {
              window.history.back()
              setTimeout(() => {
                window.location.reload()
              }, 500)
            }}
            data-testid="button-go-back-404"
          >
            返回上一页 | Go Back
          </button>
        </div>

        <div className="error-image">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <path d="M50 100 L80 80 L100 90 L120 70 L150 100" stroke="#ddd" strokeWidth={2} fillOpacity={0.05} />
            <rect x="40" y="40" width="120" height="120" stroke="#ddd" strokeWidth={1} fill="none" opacity={0.3} />
          </svg>
        </div>
      </div>
    </div>
  )
}
