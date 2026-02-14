 (function () {
    let navbarScriptsInitialized = false;

    function startNavbarScripts() {
        if (navbarScriptsInitialized) {
            return;
        }
        navbarScriptsInitialized = true;

    // Create blur overlay for dropdowns
    const blurOverlay = document.createElement('div');
    blurOverlay.className = 'dropdown-blur-overlay';
    document.body.appendChild(blurOverlay);

    // Function to check if any dropdown is active
    function updateBlurState() {
        const hasActiveDropdown = document.querySelector('.has-dropdown.active') !== null;
        if (hasActiveDropdown) {
            blurOverlay.classList.add("active");
        } else {
            blurOverlay.classList.remove("active");
        }
    }

    // Watch for changes in active dropdowns using MutationObserver
    const observerConfig = { attributes: true, attributeFilter: ['class'], subtree: true };
    const navbarObserver = new MutationObserver(updateBlurState);
    
    // Start observing after navbar is loaded
    function waitForNavbarToObserve() {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
            navbarObserver.observe(navbar, observerConfig);
        } else {
            setTimeout(waitForNavbarToObserve, 100);
        }
    }
    waitForNavbarToObserve();

    // Close all dropdowns when clicking blur overlay
    blurOverlay.addEventListener("click", function () {
        document.querySelectorAll(".show").forEach(el => {
            el.classList.remove("show");
        });
        document.querySelectorAll(".active").forEach(el => {
            if (el.classList.contains("has-dropdown")) {
                el.classList.remove("active");
            }
        });
        blurOverlay.classList.remove("active");
    });

    // Helper function to align dropdown content with nav-item
    function alignDropdownWithNavItem(navItem, dropdown) {
        if (!navItem || !dropdown) return;
        
        const navLink = navItem.querySelector('.nav-link');
        if (!navLink) return;
        
        const navLinkRect = navLink.getBoundingClientRect();
        const viewportCenterX = window.innerWidth / 2;
        const dropdownWidth = dropdown.offsetWidth;
        const dropdownHorizontalPadding = 50;
        
        const navLinkLeftFromCenter = navLinkRect.left - (viewportCenterX - dropdownWidth / 2);
        
        const contentPaddingLeft = Math.max(20, navLinkLeftFromCenter - dropdownHorizontalPadding);
        const lineOffset = contentPaddingLeft - 15;
        
        dropdown.style.setProperty('--content-padding-left', `${contentPaddingLeft}px`);
        dropdown.style.setProperty('--line-offset', `${lineOffset}px`);
    }

    // Smooth Navbar Scroll Animation
    (function () {
        function waitForNavbar(callback) {
            const existingNavbar = document.querySelector(".navbar");
            if (existingNavbar) {
                callback(existingNavbar);
                return;
            }

            const observer = new MutationObserver(() => {
                const navbar = document.querySelector(".navbar");
                if (navbar) {
                    clearTimeout(timeoutId);
                    observer.disconnect();
                    callback(navbar);
                }
            });

            const startObserving = () => {
                if (document.body) {
                    observer.observe(document.body, { childList: true, subtree: true });
                }
            };

            const timeoutId = setTimeout(() => observer.disconnect(), 5000);

            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", startObserving, { once: true });
            } else {
                startObserving();
            }
        }

        function setupSmoothNavbar(navbar) {
            let lastScrollTop = 0;
            let scrollTimer = null;
            const scrollThreshold = 5;

            // Initialize navbar as visible
            navbar.classList.add("navbar-visible");

            function handleScroll() {
                const currentScroll =
                    window.pageYOffset ||
                    document.documentElement.scrollTop;

                // Don't hide navbar at the very top
                if (currentScroll <= 50) {
                    navbar.classList.remove("navbar-hidden");
                    navbar.classList.add("navbar-visible");
                    lastScrollTop = currentScroll;
                    return;
                }

                // Only trigger if scroll difference is significant (prevents jitter)
                if (
                    Math.abs(currentScroll - lastScrollTop) <
                    scrollThreshold
                ) {
                    return;
                }

                // Scrolling down
                if (currentScroll > lastScrollTop) {
                    navbar.classList.remove("navbar-visible");
                    navbar.classList.add("navbar-hidden");
                    // Close all dropdowns and remove blur when navbar hides
                    blurOverlay.classList.remove("active");
                    document.querySelectorAll(".show").forEach(el => {
                        el.classList.remove("show");
                    });
                    document.querySelectorAll(".active").forEach(el => {
                        if (el.classList.contains("has-dropdown")) {
                            el.classList.remove("active");
                        }
                    });
                }
                // Scrolling up
                else if (currentScroll < lastScrollTop) {
                    navbar.classList.remove("navbar-hidden");
                    navbar.classList.add("navbar-visible");
                }

                lastScrollTop = currentScroll;
            }

            // Throttle scroll events for smooth performance with immediate upward response
            function throttleScroll() {
                const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
                
                // Immediate response for scrolling up
                if (currentScroll < lastScrollTop && currentScroll > 50) {
                    navbar.classList.remove("navbar-hidden");
                    navbar.classList.add("navbar-visible");
                }
                
                if (scrollTimer === null) {
                    scrollTimer = setTimeout(function () {
                        handleScroll();
                        scrollTimer = null;
                    }, 30);
                }
            }

            // Add scroll event listener
            window.addEventListener("scroll", throttleScroll, {
                passive: true,
            });
        }

        waitForNavbar(setupSmoothNavbar);
    })();

    // Products Dropdown Hover Animation
    (function () {
        const productsNavItem = document.getElementById("productsNavItem");
        const productsDropdown = document.getElementById("productsDropdown");
        
        if (productsNavItem && productsDropdown) {
            let hoverTimer = null;
            let isHovering = false;

            // Function to show dropdown
            function showDropdown() {
                productsDropdown.classList.add("show");
                productsNavItem.classList.add("active");
                alignDropdownWithNavItem(productsNavItem, productsDropdown);
            }

            // Function to hide dropdown
            function hideDropdown() {
                productsDropdown.classList.remove("show");
                productsNavItem.classList.remove("active");
                blurOverlay.classList.remove("active");
            }

            // Mouse enter on nav item
            productsNavItem.addEventListener("mouseenter", function () {
                isHovering = true;
                clearTimeout(hoverTimer);
                blurOverlay.classList.add("active");
                hoverTimer = setTimeout(showDropdown, 100);
            });

            // Mouse leave from nav item
            productsNavItem.addEventListener("mouseleave", function (e) {
                isHovering = false;
                clearTimeout(hoverTimer);
                
                // Check if mouse is moving to dropdown
                const rect = productsDropdown.getBoundingClientRect();
                const isMovingToDropdown = (
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom
                );
                
                if (!isMovingToDropdown) {
                    hoverTimer = setTimeout(hideDropdown, 200);
                }
            });

            // Mouse enter on dropdown
            productsDropdown.addEventListener("mouseenter", function () {
                isHovering = true;
                clearTimeout(hoverTimer);
                blurOverlay.classList.add("active");
            });

            // Mouse leave from dropdown
            productsDropdown.addEventListener("mouseleave", function () {
                isHovering = false;
                clearTimeout(hoverTimer);
                hoverTimer = setTimeout(hideDropdown, 200);
            });

            // Close dropdown when clicking outside
            document.addEventListener("click", function (e) {
                if (!productsNavItem.contains(e.target)) {
                    hideDropdown();
                }
            });

            // Close dropdown and remove blur when clicking dropdown links
            productsDropdown.addEventListener("click", function (e) {
                if (e.target.tagName === 'A') {
                    const href = e.target.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        e.preventDefault();
                    }
                    hideDropdown();
                }
            });
        }
    })();

    // About Us Dropdown Hover Animation
    (function () {
        const aboutNavItem = document.getElementById("aboutNavItem");
        const aboutDropdown = document.getElementById("aboutDropdown");
        
        if (aboutNavItem && aboutDropdown) {
            let hoverTimer = null;
            let isHovering = false;

            function showDropdown() {
                if (aboutDropdown) {
                    aboutDropdown.classList.add("show");
                    aboutNavItem.classList.add("active");
                    alignDropdownWithNavItem(aboutNavItem, aboutDropdown);
                }
            }

            function hideDropdown() {
                if (aboutDropdown) {
                    aboutDropdown.classList.remove("show");
                    aboutNavItem.classList.remove("active");
                    blurOverlay.classList.remove("active");
                }
            }

            aboutNavItem.addEventListener("mouseenter", function () {
                isHovering = true;
                clearTimeout(hoverTimer);
                blurOverlay.classList.add("active");
                hoverTimer = setTimeout(showDropdown, 100);
            });

            aboutNavItem.addEventListener("mouseleave", function (e) {
                isHovering = false;
                clearTimeout(hoverTimer);
                
                if (aboutDropdown) {
                    const rect = aboutDropdown.getBoundingClientRect();
                    const isMovingToDropdown = (
                        e.clientX >= rect.left &&
                        e.clientX <= rect.right &&
                        e.clientY >= rect.top &&
                        e.clientY <= rect.bottom
                    );
                    
                    if (!isMovingToDropdown) {
                        hoverTimer = setTimeout(hideDropdown, 200);
                    }
                }
            });

            aboutDropdown.addEventListener("mouseenter", function () {
                isHovering = true;
                clearTimeout(hoverTimer);
                blurOverlay.classList.add("active");
            });

            aboutDropdown.addEventListener("mouseleave", function () {
                isHovering = false;
                clearTimeout(hoverTimer);
                hoverTimer = setTimeout(hideDropdown, 200);
            });

            document.addEventListener("click", function (e) {
                if (aboutNavItem && !aboutNavItem.contains(e.target)) {
                    hideDropdown();
                }
            });

            // Close dropdown and remove blur when clicking dropdown links
            aboutDropdown.addEventListener("click", function (e) {
                if (e.target.tagName === 'A') {
                    const href = e.target.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        e.preventDefault();
                    }
                    hideDropdown();
                }
            });
        }
    })();

    // Cooperation Dropdown Hover Animation
    (function () {
        const cooperationNavItem = document.getElementById("cooperationNavItem");
        const cooperationDropdown = document.getElementById("cooperationDropdown");
        
        if (cooperationNavItem && cooperationDropdown) {
            let hoverTimer = null;
            let isHovering = false;

            function showDropdown() {
                if (cooperationDropdown) {
                    cooperationDropdown.classList.add("show");
                    cooperationNavItem.classList.add("active");
                }
            }

            function hideDropdown() {
                if (cooperationDropdown) {
                    cooperationDropdown.classList.remove("show");
                    cooperationNavItem.classList.remove("active");
                    blurOverlay.classList.remove("active");
                }
            }

            cooperationNavItem.addEventListener("mouseenter", function () {
                isHovering = true;
                clearTimeout(hoverTimer);
                blurOverlay.classList.add("active");
                hoverTimer = setTimeout(showDropdown, 100);
            });

            cooperationNavItem.addEventListener("mouseleave", function (e) {
                isHovering = false;
                clearTimeout(hoverTimer);
                
                if (cooperationDropdown) {
                    const rect = cooperationDropdown.getBoundingClientRect();
                    const isMovingToDropdown = (
                        e.clientX >= rect.left &&
                        e.clientX <= rect.right &&
                        e.clientY >= rect.top &&
                        e.clientY <= rect.bottom
                    );
                    
                    if (!isMovingToDropdown) {
                        hoverTimer = setTimeout(hideDropdown, 200);
                    }
                }
            });

            cooperationDropdown.addEventListener("mouseenter", function () {
                isHovering = true;
                clearTimeout(hoverTimer);
                blurOverlay.classList.add("active");
            });

            cooperationDropdown.addEventListener("mouseleave", function () {
                isHovering = false;
                clearTimeout(hoverTimer);
                hoverTimer = setTimeout(hideDropdown, 200);
            });

            document.addEventListener("click", function (e) {
                if (cooperationNavItem && !cooperationNavItem.contains(e.target)) {
                    hideDropdown();
                }
            });

            // Close dropdown and remove blur when clicking dropdown links
            cooperationDropdown.addEventListener("click", function (e) {
                if (e.target.tagName === 'A') {
                    const href = e.target.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        e.preventDefault();
                    }
                    hideDropdown();
                }
            });
        }
    })();

    // Support Dropdown Hover Animation
    (function () {
        const supportNavItem = document.getElementById("supportNavItem");
        const supportDropdown = document.getElementById("supportDropdown");
        
        if (supportNavItem && supportDropdown) {
            let hoverTimer = null;
            let isHovering = false;

            function showDropdown() {
                if (supportDropdown) {
                    supportDropdown.classList.add("show");
                    supportNavItem.classList.add("active");
                    alignDropdownWithNavItem(supportNavItem, supportDropdown);
                }
            }

            function hideDropdown() {
                if (supportDropdown) {
                    supportDropdown.classList.remove("show");
                    supportNavItem.classList.remove("active");
                    blurOverlay.classList.remove("active");
                }
            }

            supportNavItem.addEventListener("mouseenter", function () {
                isHovering = true;
                clearTimeout(hoverTimer);
                blurOverlay.classList.add("active");
                hoverTimer = setTimeout(showDropdown, 100);
            });

            supportNavItem.addEventListener("mouseleave", function (e) {
                isHovering = false;
                clearTimeout(hoverTimer);
                
                if (supportDropdown) {
                    const rect = supportDropdown.getBoundingClientRect();
                    const isMovingToDropdown = (
                        e.clientX >= rect.left &&
                        e.clientX <= rect.right &&
                        e.clientY >= rect.top &&
                        e.clientY <= rect.bottom
                    );
                    
                    if (!isMovingToDropdown) {
                        hoverTimer = setTimeout(hideDropdown, 200);
                    }
                }
            });

            supportDropdown.addEventListener("mouseenter", function () {
                isHovering = true;
                clearTimeout(hoverTimer);
                blurOverlay.classList.add("active");
            });

            supportDropdown.addEventListener("mouseleave", function () {
                isHovering = false;
                clearTimeout(hoverTimer);
                hoverTimer = setTimeout(hideDropdown, 200);
            });

            document.addEventListener("click", function (e) {
                if (supportNavItem && !supportNavItem.contains(e.target)) {
                    hideDropdown();
                }
            });

            // Close dropdown and remove blur when clicking dropdown links
            supportDropdown.addEventListener("click", function (e) {
                if (e.target.tagName === 'A') {
                    const href = e.target.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        e.preventDefault();
                    }
                    hideDropdown();
                }
            });
        }
    })();

    // User Dropdown Hover Animation
    (function () {
        const userBtn = document.getElementById("userBtn");
        const userDropdown = document.getElementById("userDropdown");
        
        if (userBtn && userDropdown) {
            let hoverTimer = null;
            let isHovering = false;

            function showDropdown() {
                if (userDropdown) {
                    userDropdown.classList.add("show");
                    blurOverlay.classList.add("active");
                }
            }

            function hideDropdown() {
                if (userDropdown) {
                    userDropdown.classList.remove("show");
                    blurOverlay.classList.remove("active");
                }
            }

            userBtn.addEventListener("mouseenter", function () {
                isHovering = true;
                clearTimeout(hoverTimer);
                blurOverlay.classList.add("active");
                hoverTimer = setTimeout(showDropdown, 100);
            });

            userBtn.addEventListener("mouseleave", function (e) {
                isHovering = false;
                clearTimeout(hoverTimer);
                
                if (userDropdown) {
                    const rect = userDropdown.getBoundingClientRect();
                    const isMovingToDropdown = (
                        e.clientX >= rect.left &&
                        e.clientX <= rect.right &&
                        e.clientY >= rect.top &&
                        e.clientY <= rect.bottom
                    );
                    
                    if (!isMovingToDropdown) {
                        hoverTimer = setTimeout(hideDropdown, 200);
                    }
                }
            });

            userDropdown.addEventListener("mouseenter", function () {
                isHovering = true;
                clearTimeout(hoverTimer);
                blurOverlay.classList.add("active");
            });

            userDropdown.addEventListener("mouseleave", function () {
                isHovering = false;
                clearTimeout(hoverTimer);
                hoverTimer = setTimeout(hideDropdown, 200);
                blurOverlay.classList.remove("active");
            });

            document.addEventListener("click", function (e) {
                if (userBtn && !userBtn.contains(e.target) && !userDropdown.contains(e.target)) {
                    hideDropdown();
                }
            });
        }
    })();

    // Language Modal
    (function () {
        let languageModalInitialized = false;

        function initLanguageModal() {
            if (languageModalInitialized) {
                return true;
            }

            const languageBtn = document.getElementById("languageBtn");
            const languageModal = document.getElementById("languageModal");
            const languageModalClose = document.getElementById("languageModalClose");
            const languageOptions = languageModal ? languageModal.querySelectorAll(".language-option") : [];
            
            if (!languageBtn || !languageModal || languageOptions.length === 0) {
                return false;
            }

            languageModalInitialized = true;

            // Open modal
            languageBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                languageModal.classList.add("show");
                document.body.style.overflow = "hidden";
            });

            // Close modal
            function closeModal() {
                languageModal.classList.remove("show");
                document.body.style.overflow = "";
            }

            if (languageModalClose) {
                languageModalClose.addEventListener("click", closeModal);
            }

            // Close on overlay click
            languageModal.querySelector(".language-modal-overlay")?.addEventListener("click", closeModal);

            // Close on Escape key
            document.addEventListener("keydown", function (e) {
                if (e.key === "Escape" && languageModal.classList.contains("show")) {
                    closeModal();
                }
            });

            // Language selection
            languageOptions.forEach(option => {
                option.addEventListener("click", function () {
                    languageOptions.forEach(opt => opt.classList.remove("active"));
                    this.classList.add("active");
                    setTimeout(closeModal, 300);
                });
            });

            return true;
        }

        if (!initLanguageModal()) {
            const observer = new MutationObserver(() => {
                if (initLanguageModal()) {
                    observer.disconnect();
                }
            });

            if (document.body) {
                observer.observe(document.body, { childList: true, subtree: true });
            }

            setTimeout(() => observer.disconnect(), 5000);
        }
    })();

    // Recalculate alignment on window resize
    (function () {
        let resizeTimer = null;
        
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                const productsNavItem = document.getElementById("productsNavItem");
                const productsDropdown = document.getElementById("productsDropdown");
                const aboutNavItem = document.getElementById("aboutNavItem");
                const aboutDropdown = document.getElementById("aboutDropdown");
                const supportNavItem = document.getElementById("supportNavItem");
                const supportDropdown = document.getElementById("supportDropdown");
                
                if (productsDropdown && productsDropdown.classList.contains('show')) {
                    alignDropdownWithNavItem(productsNavItem, productsDropdown);
                }
                if (aboutDropdown && aboutDropdown.classList.contains('show')) {
                    alignDropdownWithNavItem(aboutNavItem, aboutDropdown);
                }
                if (supportDropdown && supportDropdown.classList.contains('show')) {
                    alignDropdownWithNavItem(supportNavItem, supportDropdown);
                }
            }, 100);
        });
    })();
    }

    function waitForNavbarElement(callback) {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
            callback();
            return;
        }

        const observer = new MutationObserver(() => {
            if (document.querySelector(".navbar")) {
                observer.disconnect();
                callback();
            }
        });

        if (document.body) {
            observer.observe(document.body, { childList: true, subtree: true });
        }

        setTimeout(() => observer.disconnect(), 5000);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => waitForNavbarElement(startNavbarScripts));
    } else {
        waitForNavbarElement(startNavbarScripts);
    }
})();
