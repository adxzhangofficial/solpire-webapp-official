import { useEffect, useState, useRef } from "react"

const INTRO_KEY = "sp-intro-seen"

export const LoadingSpinner = () => {
  const [phase, setPhase] = useState<"loading" | "intro" | "done">("loading")
  const isHomePage = useRef(
    window.location.pathname === "/" || window.location.pathname === ""
  )
  const isFirstVisit = useRef(
    isHomePage.current && !sessionStorage.getItem(INTRO_KEY)
  )
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onReady = () => {
      if (isFirstVisit.current) {
        // First homepage load in this tab: show cinematic intro
        sessionStorage.setItem(INTRO_KEY, "1")
        setPhase("intro")
        // Auto-dismiss after animation completes (~4.8s)
        setTimeout(() => setPhase("done"), 4800)
      } else {
        // Returning visit: quick fade
        setTimeout(() => setPhase("done"), 400)
      }
    }

    if (document.readyState === "complete") {
      onReady()
    } else {
      window.addEventListener("load", onReady)
    }
    return () => window.removeEventListener("load", onReady)
  }, [])

  if (phase === "done") return null

  /* ── Returning-visitor spinner ── */
  if (!isFirstVisit.current) {
    return (
      <div className="loading-spinner">
        <div className="loading-spinner-backdrop" />
        <div className="loading-spinner-container">
          <div className="spinner-circle" />
          <img
            src="/assets/images/2026/loading-spinner-inner.png"
            alt="Solpire"
            className="spinner-logo"
          />
        </div>
      </div>
    )
  }
 
  /* ── First-visit cinematic intro ── */
  return (
    <div
      ref={containerRef}
      className={`sp-intro ${phase === "intro" ? "sp-intro--play" : ""} ${phase === "loading" ? "sp-intro--loading" : ""}`}
    >
      {/* Dark backdrop */}
      <div className="sp-intro__backdrop" />

      {/* Radial spotlight cone */}
      <div className="sp-intro__spotlight" />

      {/* Logo + orbits grouped together */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Orbiting dot ring */}
        <div className="sp-intro__orbit">
          <div className="sp-intro__dot" />
        </div>

        {/* Second dot (offset) */}
        <div className="sp-intro__orbit sp-intro__orbit--b">
          <div className="sp-intro__dot sp-intro__dot--b" />
        </div>

        {/* Logo */}
        <div className="sp-intro__logo-wrap">
          <img
            src="/assets/images/2026/new-bg.png"
            alt="Solpire"
            className="sp-intro__logo"
          />
        </div>
      </div>

      {/* Brand text */}
      <div className="sp-intro__text">
        <span className="sp-intro__brand">SOLPIRE</span>
        <span className="sp-intro__tagline">Intelligent Solutions</span>
      </div>

      {/* Glowing divider + motto */}
      <div className="sp-intro__divider-wrap">
        <div className="sp-intro__divider-line">
          <div className="sp-intro__divider-glow" />
        </div>
        <div className="sp-intro__motto">
          <span className="sp-intro__motto-char" style={{ '--c-i': 0 } as React.CSSProperties}>A</span>
          <span className="sp-intro__motto-char" style={{ '--c-i': 1 } as React.CSSProperties}>I</span>
          <span className="sp-intro__motto-sep" style={{ '--c-i': 2 } as React.CSSProperties}>·</span>
          <span className="sp-intro__motto-char" style={{ '--c-i': 3 } as React.CSSProperties}>赋</span>
          <span className="sp-intro__motto-char" style={{ '--c-i': 4 } as React.CSSProperties}>能</span>
          <span className="sp-intro__motto-char" style={{ '--c-i': 5 } as React.CSSProperties}>产</span>
          <span className="sp-intro__motto-char" style={{ '--c-i': 6 } as React.CSSProperties}>业</span>
          <span className="sp-intro__motto-sep" style={{ '--c-i': 7 } as React.CSSProperties}>·</span>
          <span className="sp-intro__motto-char" style={{ '--c-i': 8 } as React.CSSProperties}>创</span>
          <span className="sp-intro__motto-char" style={{ '--c-i': 9 } as React.CSSProperties}>造</span>
          <span className="sp-intro__motto-char" style={{ '--c-i': 10 } as React.CSSProperties}>未</span>
          <span className="sp-intro__motto-char" style={{ '--c-i': 11 } as React.CSSProperties}>来</span>
        </div>
      </div>

      {/* Bottom progress bar */}
      <div className="sp-intro__progress">
        <div className="sp-intro__progress-track">
          <div className="sp-intro__progress-fill" />
        </div>
        <span className="sp-intro__progress-text">正在加载体验...</span>
      </div>

      {/* Particle field */}
      <div className="sp-intro__particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="sp-intro__particle"
            style={{
              "--p-x": `${Math.random() * 100}%`,
              "--p-y": `${Math.random() * 100}%`,
              "--p-delay": `${0.5 + Math.random() * 2.5}s`,
              "--p-dur": `${1.5 + Math.random() * 2}s`,
              "--p-size": `${2 + Math.random() * 3}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  )
}
