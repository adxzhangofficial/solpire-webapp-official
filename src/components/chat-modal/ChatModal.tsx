import React from 'react';

const ChatModal: React.FC = () => {
  return (
    <div className="chat-modal-overlay" id="chatModal">
      <div className="chat-modal-container">
        <div className="chat-modal-header">
          <div className="chat-header-left">
            <div className="chat-avatar-status">
              <div className="chat-ai-avatar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="chat-status-indicator"></div>
            </div>
            <div className="chat-header-info">
              <h3>AI Agent 助手</h3>
              <span className="chat-status-text">在线 - 随时为您服务</span>
            </div>
          </div>
          <div className="chat-header-actions">
            <button className="chat-action-btn" id="chatSettings" aria-label="Settings" title="设置">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"></path>
              </svg>
            </button>
            <button className="chat-action-btn" id="chatClear" aria-label="Clear Chat" title="清空对话">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
            <button className="chat-modal-close" id="chatModalClose" aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="chat-quick-actions">
          <button className="quick-action-btn" data-action="功能">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
            <span>产品功能</span>
          </button>
          <button className="quick-action-btn" data-action="价格如何">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span>价格方案</span>
          </button>
          <button className="quick-action-btn" data-action="如何开始使用">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>快速开始</span>
          </button>
          <button className="quick-action-btn" data-action="支持">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span>技术支持</span>
          </button>
        </div>

        <div className="chat-modal-messages" id="chatMessages">
          <div className="chat-welcome-message">
            <div className="welcome-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h4>欢迎使用 AI Agent 助手</h4>
            <p>我可以帮您了解GeoOptix产品功能、技术支持和更多信息</p>
          </div>
        </div>

        <div className="file-drop-zone" id="fileDropZone">
          <div className="drop-zone-content">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <h3>拖放文件到此处</h3>
            <p>支持图片、PDF、文档等格式</p>
          </div>
        </div>

        <div className="chat-attachments-preview" id="attachmentsPreview"></div>

        <div className="chat-modal-input-area">
          <div className="input-tools">
            <button className="input-tool-btn" id="fileUploadBtn" aria-label="Upload File" title="上传文件">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
              </svg>
            </button>
            <input type="file" id="fileInput" multiple accept="image/*,.pdf,.doc,.docx,.txt" style={{ display: 'none' }} />

            <button className="input-tool-btn" id="voiceInputBtn" aria-label="Voice Input" title="语音输入">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
            </button>

            <button className="input-tool-btn" id="emojiBtn" aria-label="Emoji" title="表情">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </button>
          </div>

          <div className="input-main-wrapper">
            <textarea className="chat-modal-input" id="chatInput" placeholder="输入您的问题... (支持 Shift+Enter 换行)" autoComplete="off" rows={1}></textarea>
            <button className="chat-modal-send" id="chatSend">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>

        <div className="chat-input-footer">
          <span className="character-count" id="charCount">0/500</span>
          <span className="input-hint">Shift+Enter 换行 | Enter 发送</span>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
