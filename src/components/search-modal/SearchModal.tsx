import { useEffect, useRef } from 'react';

const SearchModal: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const modalEl = modalRef.current;
    const searchBtn = document.getElementById('searchBtn');
    const inputEl = inputRef.current; // Store ref for cleanup
    
    if (!modalEl || !searchBtn) return;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bs = (window as any).bootstrap;
    if (!bs || !bs.Modal) return;
    
    const modal = new bs.Modal(modalEl);
    
    const handleClick = (e: Event) => {
      e.stopPropagation();
      modal.show();
    };
    
    const handleShown = () => {
      inputRef.current?.focus();
    };

    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const query = target.value.toLowerCase();
      const listItems = modalEl.querySelectorAll('.list-group-item');
      
      listItems.forEach((item) => {
        const text = (item as HTMLElement).textContent?.toLowerCase() || '';
        (item as HTMLElement).style.display = text.includes(query) || query === '' ? 'block' : 'none';
      });
    };
    
    searchBtn.addEventListener('click', handleClick);
    modalEl.addEventListener('shown.bs.modal', handleShown);
    inputEl?.addEventListener('input', handleInput);
    
    return () => {
      searchBtn.removeEventListener('click', handleClick);
      modalEl.removeEventListener('shown.bs.modal', handleShown);
      inputEl?.removeEventListener('input', handleInput);
      modal.dispose();
    };
  }, []);

  return (
    <div
      ref={modalRef}
      className="modal fade"
      id="searchModal"
      tabIndex={-1}
      aria-labelledby="searchModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div
          className="modal-content"
          style={{ borderRadius: 20, border: 'none' }}
        >
          <div
            className="modal-header"
            style={{ borderBottom: '1px solid #eee', padding: '25px 30px' }}
          >
            <div className="d-flex align-items-center gap-3 w-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                ref={inputRef}
                type="text"
                className="form-control border-0 shadow-none"
                id="searchInput"
                placeholder="搜索产品、服务、技术解决方案..."
                style={{ fontSize: 18 }}
              />
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body" style={{ maxHeight: 500, overflowY: 'auto' }}>
            <div className="mb-4">
              <h6
                className="text-uppercase text-muted mb-3"
                style={{ fontSize: 13, fontWeight: 600, letterSpacing: 0.5 }}
              >
                热门搜索 | Popular Searches
              </h6>
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action border-0 rounded-3 mb-2">
                  <span className="me-2">🔥</span>AI解决方案
                  <span className="badge bg-light text-dark float-end">热门</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action border-0 rounded-3 mb-2">
                  <span className="me-2">⚡</span>GeoOptix 零件智研软件
                </a>
                <a href="#" className="list-group-item list-group-item-action border-0 rounded-3 mb-2">
                  <span className="me-2">🤝</span>技术合作方案
                </a>
                <a href="#" className="list-group-item list-group-item-action border-0 rounded-3 mb-2">
                  <span className="me-2">🧠</span>多模态大模型
                </a>
              </div>
            </div>

            <div className="mb-4">
              <h6
                className="text-uppercase text-muted mb-3"
                style={{ fontSize: 13, fontWeight: 600, letterSpacing: 0.5 }}
              >
                最近搜索 | Recent
              </h6>
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action border-0 rounded-3 mb-2">
                  <span className="me-2">🕒</span>机器视觉技术
                </a>
                <a href="#" className="list-group-item list-group-item-action border-0 rounded-3 mb-2">
                  <span className="me-2">🕒</span>高精度3D感知
                </a>
              </div>
            </div>

            <div>
              <h6
                className="text-uppercase text-muted mb-3"
                style={{ fontSize: 13, fontWeight: 600, letterSpacing: 0.5 }}
              >
                建议分类 | Categories
              </h6>
              <div className="list-group list-group-flush">
                <a href="#products" className="list-group-item list-group-item-action border-0 rounded-3 mb-2" data-bs-dismiss="modal">
                  <span className="me-2">📦</span>产品与服务
                </a>
                <a href="#about" className="list-group-item list-group-item-action border-0 rounded-3 mb-2" data-bs-dismiss="modal">
                  <span className="me-2">ℹ️</span>关于我们
                </a>
                <a href="#support" className="list-group-item list-group-item-action border-0 rounded-3 mb-2" data-bs-dismiss="modal">
                  <span className="me-2">💡</span>技术支持
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
