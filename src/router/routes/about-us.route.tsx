import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const AboutUs = lazy(() =>
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
