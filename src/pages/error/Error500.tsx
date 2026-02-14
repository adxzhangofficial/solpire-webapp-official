import { useEffect } from "react"

export function Error500() {
  useEffect(() => {
    document.body.classList.add("error-body")
    document.title = "500 - 服务器错误"
    return () => document.body.classList.remove("error-body")
  }, [])

  return (
    <div className="error-page-container">
      <div className="error-content">
        <div className="error-code-section">
          <h1 className="error-code error-code-500">500</h1>
          <div className="error-icon error-icon-critical">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <circle cx={12} cy={12} r={10} />
              <line x1={12} y1={8} x2={12} y2={12} />
              <line x1={12} y1={16} x2={12.01} y2={16} />
            </svg>
          </div>
        </div>
        
        <div className="error-message-section">
          <h2 className="error-title error-title-critical">服务器错误 | Server Error</h2>
          <p className="error-description">
            抱歉，服务器出现了问题。我们的技术团队已收到通知，正在处理此问题。
          </p>
          <p className="error-description-en">
            Sorry, the server encountered an error. Our technical team has been notified and is working on it.
          </p>
        </div>

        <div className="error-actions">
          <button 
            className="error-btn error-btn-primary error-btn-primary-500"
            onClick={() => window.location.reload()}
            data-testid="button-retry-500"
          >
            重新加载 | Retry
          </button>
          <button 
            className="error-btn error-btn-secondary"
            onClick={() => {
              window.location.href = "/"
            }}
            data-testid="button-go-home-500"
          >
            返回首页 | Go Home
          </button>
        </div>

        <div className="error-image error-image-critical">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <path d="M100 50 L150 150 L50 150 Z" stroke="#e05b5b" strokeWidth={2} opacity={0.3} />
            <circle cx="100" cy="120" r="8" fill="#e05b5b" opacity={0.3} />
          </svg>
        </div>
      </div>
    </div>
  )
}
