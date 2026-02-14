// Lightweight UI initializer for modals and floating/chat interactions.
// This file uses safe DOM checks and minimal behavior so it won't break
// the app if elements are absent. Keep logic simple and predictable.

function safeQuery(sel: string) {
  return document.querySelector<HTMLElement>(sel);
}

function initFloatingChat() {
  const floatingBtn = safeQuery('#floatingAiBtn');
  const chatOverlay = safeQuery('#chatModal');
  const chatClose = safeQuery('#chatModalClose');

  if (!floatingBtn || !chatOverlay) return;

  const openChat = () => {
    chatOverlay.classList.add('open');
    chatOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('has-chat-open');
  };
  const closeChat = () => {
    chatOverlay.classList.remove('open');
    chatOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('has-chat-open');
  };

  floatingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (chatOverlay.classList.contains('open')) closeChat();
    else openChat();
  });

  if (chatClose) chatClose.addEventListener('click', closeChat);

  // Close chat when clicking outside container
  chatOverlay.addEventListener('click', (ev) => {
    if (ev.target === chatOverlay) closeChat();
  });
}

function initFileUploadAndDrop() {
  const fileBtn = safeQuery('#fileUploadBtn');
  const fileInput = safeQuery('#fileInput') as HTMLInputElement | null;
  const dropZone = safeQuery('#fileDropZone');
  const attachmentsPreview = safeQuery('#attachmentsPreview');

  if (fileBtn && fileInput) {
    fileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      fileInput.click();
    });

    fileInput.addEventListener('change', () => {
      if (!attachmentsPreview) return;
      const files = fileInput.files;
      if (!files) return;
      attachmentsPreview.innerHTML = '';
      Array.from(files).forEach((f) => {
        const item = document.createElement('div');
        item.className = 'attachment-item';
        if (f.type.startsWith('image/')) {
          const img = document.createElement('img');
          img.className = 'attachment-thumb';
          img.src = URL.createObjectURL(f);
          img.onload = () => URL.revokeObjectURL(img.src);
          item.appendChild(img);
        } else {
          item.textContent = f.name;
        }
        attachmentsPreview.appendChild(item);
      });
    });
  }

  if (!dropZone) return;

  ['dragenter', 'dragover'].forEach((ev) =>
    dropZone.addEventListener(ev, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.add('drag-over');
    })
  );

  ['dragleave', 'drop'].forEach((ev) =>
    dropZone.addEventListener(ev, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove('drag-over');
    })
  );

  dropZone.addEventListener('drop', (e: DragEvent) => {
    const dt = e.dataTransfer;
    if (!dt || !dt.files) return;
    const files = Array.from(dt.files);
    if (!attachmentsPreview) return;
    attachmentsPreview.innerHTML = '';
    files.forEach((f) => {
      const item = document.createElement('div');
      item.className = 'attachment-item';
      if (f.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.className = 'attachment-thumb';
        img.src = URL.createObjectURL(f);
        img.onload = () => URL.revokeObjectURL(img.src);
        item.appendChild(img);
      } else {
        item.textContent = f.name;
      }
      attachmentsPreview.appendChild(item);
    });
  });
}

function initChatClear() {
  const clearBtn = safeQuery('#chatClear');
  const messages = safeQuery('#chatMessages');
  if (!clearBtn || !messages) return;
  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    messages.innerHTML = '<div class="chat-welcome-message">\n                  <div class="welcome-icon">\n                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>\n                     </svg>\n                  </div>\n                  <h4>欢迎使用 AI Agent 助手</h4>\n                  <p>我可以帮您了解GeoOptix产品功能、技术支持和更多信息</p>\n               </div>';
  });
}

function initLanguageSelector() {
  const options = Array.from(document.querySelectorAll('.language-option')) as HTMLElement[];
  if (!options.length) return;
  options.forEach((opt) => {
    opt.addEventListener('click', () => {
      options.forEach((o) => o.classList.remove('active'));
      opt.classList.add('active');
      const lang = opt.dataset.lang;
      if (lang) document.documentElement.lang = lang;
      const modalClose = safeQuery('#languageModalClose');
      if (modalClose) modalClose.dispatchEvent(new Event('click'));
    });
  });
}

export function initUI() {
  if (typeof window === 'undefined') return;
  try {
    initFloatingChat();
    initFileUploadAndDrop();
    initChatClear();
    initLanguageSelector();
  } catch (err) {
    // Swallow errors to avoid breaking the app runtime
    // but log for debugging
    console.error('ui-init error', err);
  }
}

// Auto-init on DOMContentLoaded
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => initUI());
}
