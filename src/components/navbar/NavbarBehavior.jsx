import React, { useEffect, useRef } from "react";

/**
 * NavbarBehavior
 */
export default function NavbarBehavior() {
  const navbarRef = useRef(null);
  const blurOverlayRef = useRef(null);
  const mutationObserverRef = useRef(null);

  // Align dropdown content with nav item (same math as original)
  function alignDropdownWithNavItem(navItem, dropdown) {
    if (!navItem || !dropdown) return;

    const navLink = navItem.querySelector(".nav-link");
    if (!navLink) return;

    const navLinkRect = navLink.getBoundingClientRect();
    const viewportCenterX = window.innerWidth / 2;
    const dropdownWidth = dropdown.offsetWidth;
    const dropdownHorizontalPadding = 50;

    const navLinkLeftFromCenter =
      navLinkRect.left - (viewportCenterX - dropdownWidth / 2);

    const contentPaddingLeft = Math.max(
      20,
      navLinkLeftFromCenter - dropdownHorizontalPadding
    );
    const lineOffset = contentPaddingLeft - 15;

    dropdown.style.setProperty("--content-padding-left", `${contentPaddingLeft}px`);
    dropdown.style.setProperty("--line-offset", `${lineOffset}px`);
  }

  // Generic hover dropdown handler factory to avoid repeated code
  function createHoverDropdownHandlers({ navItemId, dropdownId, align = true }) {
    const navItem = navItemId ? document.getElementById(navItemId) : null;
    const dropdown = dropdownId ? document.getElementById(dropdownId) : null;

    if (!navItem || !dropdown) return null;

    let hoverTimer = null;
    let isHovering = false;

    function showDropdown() {
      dropdown.classList.add("show");
      if (navItem.classList) navItem.classList.add("active");
      if (align) alignDropdownWithNavItem(navItem, dropdown);
    }

    function hideDropdown() {
      dropdown.classList.remove("show");
      if (navItem.classList) navItem.classList.remove("active");
      if (blurOverlayRef.current) blurOverlayRef.current.classList.remove("active");
    }

    function onMouseEnterNav() {
      isHovering = true;
      clearTimeout(hoverTimer);
      if (blurOverlayRef.current) blurOverlayRef.current.classList.add("active");
      hoverTimer = setTimeout(showDropdown, 100);
    }

    function onMouseLeaveNav(e) {
      isHovering = false;
      clearTimeout(hoverTimer);
      const rect = dropdown.getBoundingClientRect();
      const isMovingToDropdown =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!isMovingToDropdown) {
        hoverTimer = setTimeout(hideDropdown, 200);
      }
    }

    function onMouseEnterDropdown() {
      isHovering = true;
      clearTimeout(hoverTimer);
      if (blurOverlayRef.current) blurOverlayRef.current.classList.add("active");
    }

    function onMouseLeaveDropdown() {
      isHovering = false;
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(hideDropdown, 200);
    }

    function onDocumentClick(e) {
      if (!navItem.contains(e.target) && !dropdown.contains(e.target)) {
        hideDropdown();
      }
    }

    function onDropdownLinkClick(e) {
      if (e.target.tagName === "A") {
        const href = e.target.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
        }
        hideDropdown();
      }
    }

    // attach listeners
    navItem.addEventListener("mouseenter", onMouseEnterNav);
    navItem.addEventListener("mouseleave", onMouseLeaveNav);
    dropdown.addEventListener("mouseenter", onMouseEnterDropdown);
    dropdown.addEventListener("mouseleave", onMouseLeaveDropdown);
    document.addEventListener("click", onDocumentClick);
    dropdown.addEventListener("click", onDropdownLinkClick);

    // return cleanup
    return () => {
      navItem.removeEventListener("mouseenter", onMouseEnterNav);
      navItem.removeEventListener("mouseleave", onMouseLeaveNav);
      dropdown.removeEventListener("mouseenter", onMouseEnterDropdown);
      dropdown.removeEventListener("mouseleave", onMouseLeaveDropdown);
      document.removeEventListener("click", onDocumentClick);
      dropdown.removeEventListener("click", onDropdownLinkClick);
    };
  }

  useEffect(() => {
    const navbar = navbarRef.current || document.querySelector(".navbar");
    if (!navbar) return;

    navbarRef.current = navbar;

    // Create blur overlay and append to body (like original)
    const blurOverlay = document.createElement("div");
    blurOverlay.className = "dropdown-blur-overlay";
    document.body.appendChild(blurOverlay);
    blurOverlayRef.current = blurOverlay;

    // updateBlurState: check if any .has-dropdown.active exists inside navbar
    function updateBlurState() {
      const hasActiveDropdown = !!navbar.querySelector(".has-dropdown.active");
      if (hasActiveDropdown) {
        blurOverlay.classList.add("active");
      } else {
        blurOverlay.classList.remove("active");
      }
    }

    // observe class changes inside navbar (only) to toggle blur
    const observerConfig = { attributes: true, attributeFilter: ["class"], subtree: true };
    const navbarObserver = new MutationObserver(updateBlurState);
    navbarObserver.observe(navbar, observerConfig);
    mutationObserverRef.current = navbarObserver;

    // blur overlay click: close all dropdowns & remove active classes
    function onBlurOverlayClick() {
      document.querySelectorAll(".show").forEach((el) => {
        // Don't remove `show` from modals (managed by React)
        if (el.id === 'meetingModal' || el.closest('.meeting-modal-content')) return;
        if (el.id === 'languageModal' || el.closest('.language-modal')) return;
        el.classList.remove("show");
      });
      document.querySelectorAll(".active").forEach((el) => {
        if (el.classList && el.classList.contains("has-dropdown")) {
          el.classList.remove("active");
        }
      });
      blurOverlay.classList.remove("active");
    }
    blurOverlay.addEventListener("click", onBlurOverlayClick);

    // Smooth navbar hide/show on scroll (same algorithm)
    let lastScrollTop = 0;
    let scrollTimer = null;
    const scrollThreshold = 5;

    navbar.classList.add("navbar-visible");

    function handleScroll() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll <= 50) {
        navbar.classList.remove("navbar-hidden");
        navbar.classList.add("navbar-visible");
        lastScrollTop = currentScroll;
        return;
      }

      if (Math.abs(currentScroll - lastScrollTop) < scrollThreshold) return;

      if (currentScroll > lastScrollTop) {
        // scrolling down - but only if no modal is open
        const languageModalOpen = document.getElementById("languageModal")?.classList.contains("show");
        const meetingModalOpen = document.getElementById("meetingModal")?.classList.contains("show");
        
        if (!languageModalOpen && !meetingModalOpen) {
          navbar.classList.remove("navbar-visible");
          navbar.classList.add("navbar-hidden");
          // close dropdowns and remove blur
          blurOverlay.classList.remove("active");
          document.querySelectorAll(".show").forEach((el) => {
            if (el.id === 'meetingModal' || el.closest('.meeting-modal-content')) return;
            if (el.id === 'languageModal' || el.closest('.language-modal')) return;
            el.classList.remove("show");
          });
          document.querySelectorAll(".active").forEach((el) => {
            if (el.classList && el.classList.contains("has-dropdown")) {
              el.classList.remove("active");
            }
          });
        }
      } else if (currentScroll < lastScrollTop) {
        // scrolling up
        navbar.classList.remove("navbar-hidden");
        navbar.classList.add("navbar-visible");
      }

      lastScrollTop = currentScroll;
    }

    function throttleScroll() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // Immediate response for scrolling up
      if (currentScroll < lastScrollTop && currentScroll > 50) {
        navbar.classList.remove("navbar-hidden");
        navbar.classList.add("navbar-visible");
      }

      if (scrollTimer === null) {
        scrollTimer = setTimeout(() => {
          handleScroll();
          scrollTimer = null;
        }, 30);
      }
    }

    window.addEventListener("scroll", throttleScroll, { passive: true });

    // Setup hover/dropdown handlers (Products, About, Cooperation, Support, User)
    const cleanupHandlers = [];

    const productsHandlers = createHoverDropdownHandlers({
      navItemId: "productsNavItem",
      dropdownId: "productsDropdown",
      align: true,
    });
    if (productsHandlers) cleanupHandlers.push(productsHandlers);

    const aboutHandlers = createHoverDropdownHandlers({
      navItemId: "aboutNavItem",
      dropdownId: "aboutDropdown",
      align: true,
    });
    if (aboutHandlers) cleanupHandlers.push(aboutHandlers);

    const cooperationHandlers = createHoverDropdownHandlers({
      navItemId: "cooperationNavItem",
      dropdownId: "cooperationDropdown",
      align: false, // original cooperation didn't align
    });
    if (cooperationHandlers) cleanupHandlers.push(cooperationHandlers);

    const supportHandlers = createHoverDropdownHandlers({
      navItemId: "supportNavItem",
      dropdownId: "supportDropdown",
      align: true,
    });
    if (supportHandlers) cleanupHandlers.push(supportHandlers);

    // User dropdown (slightly different: clicking outside logic)
    (function initUserDropdown() {
      const userBtn = document.getElementById("userBtn");
      const userDropdown = document.getElementById("userDropdown");
      if (!userBtn || !userDropdown) return;

      let hoverTimer = null;

      function showDropdown() {
        userDropdown.classList.add("show");
        if (blurOverlayRef.current) blurOverlayRef.current.classList.add("active");
      }
      function hideDropdown() {
        userDropdown.classList.remove("show");
        if (blurOverlayRef.current) blurOverlayRef.current.classList.remove("active");
      }

      function onUserEnter() {
        clearTimeout(hoverTimer);
        if (blurOverlayRef.current) blurOverlayRef.current.classList.add("active");
        hoverTimer = setTimeout(showDropdown, 100);
      }
      function onUserLeave(e) {
        clearTimeout(hoverTimer);
        const rect = userDropdown.getBoundingClientRect();
        const isMovingToDropdown =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        if (!isMovingToDropdown) {
          hoverTimer = setTimeout(hideDropdown, 200);
        }
      }
      function onUserDropdownEnter() {
        clearTimeout(hoverTimer);
        if (blurOverlayRef.current) blurOverlayRef.current.classList.add("active");
      }
      function onUserDropdownLeave() {
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(hideDropdown, 200);
        if (blurOverlayRef.current) blurOverlayRef.current.classList.remove("active");
      }
      function onDocClick(e) {
        if (!userBtn.contains(e.target) && !userDropdown.contains(e.target)) {
          hideDropdown();
        }
      }

      userBtn.addEventListener("mouseenter", onUserEnter);
      userBtn.addEventListener("mouseleave", onUserLeave);
      userDropdown.addEventListener("mouseenter", onUserDropdownEnter);
      userDropdown.addEventListener("mouseleave", onUserDropdownLeave);
      document.addEventListener("click", onDocClick);

      cleanupHandlers.push(() => {
        userBtn.removeEventListener("mouseenter", onUserEnter);
        userBtn.removeEventListener("mouseleave", onUserLeave);
        userDropdown.removeEventListener("mouseenter", onUserDropdownEnter);
        userDropdown.removeEventListener("mouseleave", onUserDropdownLeave);
        document.removeEventListener("click", onDocClick);
      });
    })();

    // Language Modal init (similar logic to original)
    (function initLanguageModal() {
      let languageModalInitialized = false;
      let optionClickHandlers = [];

      function tryInit() {
        if (languageModalInitialized) return true;

        const languageBtn = document.getElementById("languageBtn");
        const languageModal = document.getElementById("languageModal");
        const languageModalClose = document.getElementById("languageModalClose");
        const languageModalOverlay = languageModal ? languageModal.querySelector(".language-modal-overlay") : null;
        const languageOptions = languageModal ? languageModal.querySelectorAll(".language-option") : [];

        if (!languageBtn || !languageModal || languageOptions.length === 0) {
          return false;
        }

        languageModalInitialized = true;

        function openModal(e) {
          e.preventDefault();
          e.stopPropagation();
          languageModal.classList.add("show");
          document.body.style.overflow = "hidden";
        }

        function closeModal() {
          languageModal.classList.remove("show");
          document.body.style.overflow = "";
        }

        function onBtnClick(e) {
          openModal(e);
        }

        function onCloseClick(e) {
          e.preventDefault();
          e.stopPropagation();
          closeModal();
        }

        function onOverlayClick(e) {
          if (e.target === languageModalOverlay) {
            closeModal();
          }
        }

        function onKeyDown(e) {
          if (e.key === "Escape" && languageModal.classList.contains("show")) {
            closeModal();
          }
        }

        languageBtn.addEventListener("click", onBtnClick);
        if (languageModalClose) languageModalClose.addEventListener("click", onCloseClick);
        if (languageModalOverlay) languageModalOverlay.addEventListener("click", onOverlayClick);
        document.addEventListener("keydown", onKeyDown);

        languageOptions.forEach((option) => {
          const handler = function (e) {
            e.stopPropagation();
            languageOptions.forEach((opt) => opt.classList.remove("active"));
            this.classList.add("active");
            setTimeout(closeModal, 300);
          };
          optionClickHandlers.push({ option, handler });
          option.addEventListener("click", handler);
        });

        cleanupHandlers.push(() => {
          languageBtn.removeEventListener("click", onBtnClick);
          if (languageModalClose) languageModalClose.removeEventListener("click", onCloseClick);
          if (languageModalOverlay) languageModalOverlay.removeEventListener("click", onOverlayClick);
          document.removeEventListener("keydown", onKeyDown);
          optionClickHandlers.forEach(({ option, handler }) => {
            option.removeEventListener("click", handler);
          });
          // Safety: ensure body overflow is reset on cleanup
          if (languageModal.classList.contains("show")) {
            languageModal.classList.remove("show");
            document.body.style.overflow = "";
          }
        });

        return true;
      }

      // since in React markup is present, tryInit should succeed immediately
      // but we attempt a few times in case parent components populate later
      if (!tryInit()) {
        const langObserver = new MutationObserver(() => {
          if (tryInit()) langObserver.disconnect();
        });
        langObserver.observe(navbar, { childList: true, subtree: true });
        setTimeout(() => langObserver.disconnect(), 5000);
      }
    })();

    // Recalculate alignment on window resize (debounced)
    let resizeTimer = null;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const productsNavItem = document.getElementById("productsNavItem");
        const productsDropdown = document.getElementById("productsDropdown");
        const aboutNavItem = document.getElementById("aboutNavItem");
        const aboutDropdown = document.getElementById("aboutDropdown");
        const supportNavItem = document.getElementById("supportNavItem");
        const supportDropdown = document.getElementById("supportDropdown");

        if (productsDropdown && productsDropdown.classList.contains("show")) {
          alignDropdownWithNavItem(productsNavItem, productsDropdown);
        }
        if (aboutDropdown && aboutDropdown.classList.contains("show")) {
          alignDropdownWithNavItem(aboutNavItem, aboutDropdown);
        }
        if (supportDropdown && supportDropdown.classList.contains("show")) {
          alignDropdownWithNavItem(supportNavItem, supportDropdown);
        }
      }, 100);
    }
    window.addEventListener("resize", onResize);

    // Cleanup on unmount
    return () => {
      // remove blur overlay
      blurOverlay.removeEventListener("click", onBlurOverlayClick);
      if (blurOverlay && blurOverlay.parentNode) blurOverlay.parentNode.removeChild(blurOverlay);

      // disconnect navbar observer
      if (navbarObserver) navbarObserver.disconnect();

      // remove scroll listener
      window.removeEventListener("scroll", throttleScroll);

      // remove resize listener
      window.removeEventListener("resize", onResize);

      // cleanup handlers
      cleanupHandlers.forEach((fn) => {
        try {
          fn();
        } catch (e) {
          // ignore
        }
      });
    };
  }, []); // run once on mount

  // This component doesn't render DOM itself — it's behavior-only.
  // Keep it empty or return null.
  return null;
}
