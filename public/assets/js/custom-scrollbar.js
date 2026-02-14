(function () {
    let scrollbarInitialized = false;

    function createScrollbar(fileGrid, scrollbarContainer) {
        const scrollbarThumb = document.createElement('div');
        scrollbarThumb.className = 'file-list-scrollbar-thumb';
        scrollbarContainer.appendChild(scrollbarThumb);

        let isDragging = false;
        let startY = 0;
        let startScrollTop = 0;

        function updateScrollbar() {
            const scrollHeight = fileGrid.scrollHeight;
            const clientHeight = fileGrid.clientHeight;
            const scrollTop = fileGrid.scrollTop;

            const scrollbarHeight = clientHeight * 0.8;
            const thumbHeight = Math.max((clientHeight / scrollHeight) * scrollbarHeight, 30);
            const maxThumbTop = scrollbarHeight - thumbHeight;
            const thumbTop = (scrollTop / (scrollHeight - clientHeight)) * maxThumbTop;

            scrollbarThumb.style.height = thumbHeight + 'px';
            scrollbarThumb.style.transform = `translateY(${isNaN(thumbTop) ? 0 : thumbTop}px)`;

            if (scrollHeight <= clientHeight) {
                scrollbarContainer.style.opacity = '0';
                scrollbarContainer.style.pointerEvents = 'none';
            } else {
                scrollbarContainer.style.opacity = '1';
                scrollbarContainer.style.pointerEvents = 'auto';
            }
        }

        function initScrollbarHeight() {
            const containerHeight = fileGrid.clientHeight;
            const calculatedHeight = containerHeight * 0.8;
            scrollbarContainer.style.setProperty('height', calculatedHeight + 'px', 'important');
            updateScrollbar();
        }

        fileGrid.addEventListener('scroll', updateScrollbar);

        scrollbarThumb.addEventListener('mousedown', function (e) {
            isDragging = true;
            startY = e.clientY;
            startScrollTop = fileGrid.scrollTop;
            e.preventDefault();
        });

        document.addEventListener('mousemove', function (e) {
            if (!isDragging) return;

            const deltaY = e.clientY - startY;
            const scrollbarHeight = fileGrid.clientHeight * 0.8;
            const thumbHeight = scrollbarThumb.clientHeight;
            const maxThumbTop = scrollbarHeight - thumbHeight;

            const scrollHeight = fileGrid.scrollHeight;
            const clientHeight = fileGrid.clientHeight;
            const maxScrollTop = scrollHeight - clientHeight;

            const scrollRatio = deltaY / maxThumbTop;
            const newScrollTop = startScrollTop + (scrollRatio * maxScrollTop);

            fileGrid.scrollTop = Math.max(0, Math.min(newScrollTop, maxScrollTop));
        });

        document.addEventListener('mouseup', function () {
            isDragging = false;
        });

        scrollbarContainer.addEventListener('click', function (e) {
            if (e.target === scrollbarThumb) return;

            const rect = scrollbarContainer.getBoundingClientRect();
            const clickY = e.clientY - rect.top;
            const scrollbarHeight = fileGrid.clientHeight * 0.8;

            const scrollHeight = fileGrid.scrollHeight;
            const clientHeight = fileGrid.clientHeight;
            const maxScrollTop = scrollHeight - clientHeight;

            const scrollRatio = clickY / scrollbarHeight;
            fileGrid.scrollTop = scrollRatio * maxScrollTop;
        });

        window.addEventListener('resize', initScrollbarHeight);
        initScrollbarHeight();

        const resizeObserver = new ResizeObserver(() => {
            initScrollbarHeight();
        });
        resizeObserver.observe(fileGrid);
    }

    function startScrollbarScript() {
        if (scrollbarInitialized) return;

        const fileGrid = document.querySelector('.file-grid');
        const scrollbarContainer = document.querySelector('.file-list-scrollbar');

        if (fileGrid && scrollbarContainer) {
            scrollbarInitialized = true;
            createScrollbar(fileGrid, scrollbarContainer);
            return;
        }

        // If elements are not yet present, observe DOM mutations and initialize when they appear
        const observer = new MutationObserver((mutations, obs) => {
            const fg = document.querySelector('.file-grid');
            const sc = document.querySelector('.file-list-scrollbar');
            if (fg && sc) {
                obs.disconnect();
                if (!scrollbarInitialized) {
                    scrollbarInitialized = true;
                    createScrollbar(fg, sc);
                }
            }
        });

        observer.observe(document.documentElement || document.body, {
            childList: true,
            subtree: true
        });
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startScrollbarScript);
    } else {
        startScrollbarScript();
    }
})();
