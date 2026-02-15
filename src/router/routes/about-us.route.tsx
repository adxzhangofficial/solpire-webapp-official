import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const AboutUs = lazyWithRetry(() =>
  import("../../pages/about-us/AboutUs").then((m) => ({ default: m.AboutUs }))
)

export const aboutUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about-us",
  component: () => (
    <Suspense fallback={null}>
      <AboutUs />
    </Suspense>
  ),
})
