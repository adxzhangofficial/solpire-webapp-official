import { useEffect } from "react";
import "./SolpireDevice.css";

/**
 * Solpire Device — 100% faithful reproduction of solpire-product.html
 * All CSS is scoped under .solpire-dev-* prefix to avoid any leaks.
 */
export function SolpireDevice() {
  useEffect(() => {
    function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();

      const ampm = hours >= 12 ? "PM" : "AM";
      const ampmEl = document.getElementById("solpire-dev-ampm");
      if (ampmEl) ampmEl.textContent = ampm;

      let displayHours = hours % 12;
      if (displayHours === 0) displayHours = 12;
      const timeStr = displayHours + ":" + minutes.toString().padStart(2, "0");
      const timeEl = document.getElementById("solpire-dev-digitalTime");
      if (timeEl) timeEl.textContent = timeStr;
    }

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="solpire-dev-body solpire-dev-reset">
      <div className="solpire-dev-shadow">
        <div className="solpire-dev-layer1">
          {/* Side button on right edge */}
          <div className="solpire-dev-side-btn"></div>
          <div className="solpire-dev-layer2">
            <div className="solpire-dev-layer3">
              <div className="solpire-dev-device">
                {/* Camera */}
                <div className="solpire-dev-camera"></div>

                {/* Screen */}
                <div className="solpire-dev-screen-bezel">
                  <div className="solpire-dev-screen-wrapper">
                    <div className="solpire-dev-screen">
                      {/* Clock ticks via SVG */}
                      <svg className="solpire-dev-clock-svg" viewBox="0 0 180 180">
                        {/* Major ticks: 12, 3, 6, 9 */}
                        <line className="solpire-dev-tick-major" x1="90" y1="10" x2="90" y2="24" stroke="#2a2a2a" strokeWidth="2.5" />
                        <line className="solpire-dev-tick-major" x1="90" y1="156" x2="90" y2="170" stroke="#2a2a2a" strokeWidth="2.5" />
                        <line className="solpire-dev-tick-major" x1="156" y1="90" x2="170" y2="90" stroke="#2a2a2a" strokeWidth="2.5" />
                        <line className="solpire-dev-tick-major" x1="10" y1="90" x2="24" y2="90" stroke="#2a2a2a" strokeWidth="2.5" />
                        {/* Minor ticks */}
                        <line className="solpire-dev-tick-minor" x1="126" y1="19" x2="131" y2="10.3" stroke="#999" strokeWidth="1.3" />
                        <line className="solpire-dev-tick-minor" x1="158" y1="51" x2="166" y2="46.4" stroke="#999" strokeWidth="1.3" />
                        <line className="solpire-dev-tick-minor" x1="158" y1="129" x2="166" y2="133.6" stroke="#999" strokeWidth="1.3" />
                        <line className="solpire-dev-tick-minor" x1="126" y1="161" x2="131" y2="169.7" stroke="#999" strokeWidth="1.3" />
                        <line className="solpire-dev-tick-minor" x1="54" y1="161" x2="49" y2="169.7" stroke="#999" strokeWidth="1.3" />
                        <line className="solpire-dev-tick-minor" x1="22" y1="129" x2="14" y2="133.6" stroke="#999" strokeWidth="1.3" />
                        <line className="solpire-dev-tick-minor" x1="22" y1="51" x2="14" y2="46.4" stroke="#999" strokeWidth="1.3" />
                        <line className="solpire-dev-tick-minor" x1="54" y1="19" x2="49" y2="10.3" stroke="#999" strokeWidth="1.3" />
                      </svg>

                      {/* Screen content */}
                      <div className="solpire-dev-screen-content">
                        <span className="solpire-dev-am-label" id="solpire-dev-ampm">AM</span>
                        <span className="solpire-dev-time" id="solpire-dev-digitalTime">10:09</span>
                        <span className="solpire-dev-ai-ready">AI Ready</span>
                      </div>

                      {/* Pill indicator */}
                      <div className="solpire-dev-screen-pill"></div>
                    </div>
                  </div>
                </div>

                {/* Controls row */}
                <div className="solpire-dev-controls">
                  <div className="solpire-dev-knob-container">
                    <div className="solpire-dev-knob"></div>
                  </div>

                  <div className="solpire-dev-btn-container">
                    <button className="solpire-dev-ai-talk-btn">
                      <svg className="solpire-dev-mic-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect className="solpire-dev-mic-rect" x="9" y="2" width="6" height="11" rx="3" ry="3" />
                        <path className="solpire-dev-mic-arc" d="M5 11a7 7 0 0 0 14 0" />
                        <line className="solpire-dev-mic-stem" x1="12" y1="18" x2="12" y2="22" />
                        <line className="solpire-dev-mic-base" x1="9" y1="22" x2="15" y2="22" />
                      </svg>
                    </button>
                    <span className="solpire-dev-btn-label">AI Talk</span>
                  </div>

                  <div className="solpire-dev-btn-container">
                    <button className="solpire-dev-emergency-outer">
                      <div className="solpire-dev-emergency-ring">
                        <div className="solpire-dev-emergency-btn-inner"></div>
                      </div>
                    </button>
                    <span className="solpire-dev-btn-label">Emergency</span>
                  </div>
                </div>

                {/* Branding */}
                <div className="solpire-dev-branding">
                  <span className="solpire-dev-brand-en">Solpire</span>
                  <span className="solpire-dev-brand-cn">溯湃人工智能</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
