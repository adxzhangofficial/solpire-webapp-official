import React, { useCallback } from 'react';

const FloatingAIButton: React.FC = () => {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const chatOverlay = document.getElementById('chatModal');
    if (!chatOverlay) return;

    if (chatOverlay.classList.contains('open')) {
      chatOverlay.classList.remove('open');
      chatOverlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('has-chat-open');
    } else {
      chatOverlay.classList.add('open');
      chatOverlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('has-chat-open');
    }
  }, []);

  return (
    <button className="floating-ai-btn" id="floatingAiBtn" aria-label="AI Assistant" onClick={handleClick}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </button>
  );
};

export default FloatingAIButton;
