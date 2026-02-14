import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const SolpireCanvas = lazy(() =>
  import("../../pages/solpire-canvas/SolpireCanvas").then((m) => ({ default: m.SolpireCanvas }))
)

export const solpireCanvasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/solpire-canvas",
  component: () => (
    <Suspense fallback={null}>
      <SolpireCanvas />
    </Suspense>
  ),
})
