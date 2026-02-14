import React from 'react';

const LanguageModal: React.FC = () => {
  return (
    <div className="language-modal" id="languageModal">
      <div className="language-modal-overlay"></div>
      <div className="language-modal-dialog">
        <div className="language-modal-header">
          <h3>选择语言 / Select Language</h3>
          <button className="language-modal-close" id="languageModalClose" aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="language-modal-body">
          <div className="language-option active" data-lang="zh">
            <span className="language-icon">🇨🇳</span>
            <span className="language-name">中文 (简体)</span>
            <span className="language-check">✓</span>
          </div>
          <div className="language-option" data-lang="en">
            <span className="language-icon">🇺🇸</span>
            <span className="language-name">English</span>
            <span className="language-check">✓</span>
          </div>
          <div className="language-option" data-lang="es">
            <span className="language-icon">🇪🇸</span>
            <span className="language-name">Español</span>
            <span className="language-check">✓</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
