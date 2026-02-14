"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { useState, type MouseEvent as ReactMouseEvent } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { cn } from "../../lib/utils";

function useIsDark() {
  const [dark, setDark] = React.useState(
    () => document.documentElement.getAttribute("data-theme") === "dark"
  );
  React.useEffect(() => {
    const obs = new MutationObserver(() =>
      setDark(document.documentElement.getAttribute("data-theme") === "dark")
    );
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = React.useState(
    () => window.matchMedia(`(max-width: ${breakpoint}px)`).matches
  );
  React.useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return mobile;
}

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isDark = useIsDark();
  const isMobile = useIsMobile();
  const spotlightColor = isDark ? color : "transparent";

  // Always call the hook (rules of hooks) — only apply on desktop
  const maskImage = useMotionTemplate`
    radial-gradient(
      ${radius}px circle at ${mouseX}px ${mouseY}px,
      white,
      transparent 80%
    )
  `;

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // On mobile, always show the effect (no hover needed)
  const isActive = isMobile || isHovering;

  // On mobile, center the spotlight on the card
  const cardRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (isMobile && cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();
      mouseX.set(width / 2);
      mouseY.set(height / 2);
    }
  }, [isMobile, mouseX, mouseY]);

  return (
    <div
      ref={cardRef}
      className={cn("card-spotlight-wrap", className)}
      style={{ position: "relative", overflow: "hidden" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        style={{
          pointerEvents: "none",
          position: "absolute",
          zIndex: 0,
          inset: "-1px",
          borderRadius: "inherit",
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.3s",
          backgroundColor: spotlightColor,
          ...(isMobile
            ? {}
            : {
                maskImage,
                WebkitMaskImage: maskImage,
              }),
        }}
      >
        {isActive && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="card-spotlight-canvas"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
      {/* Ensure children render above the spotlight layer */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};
