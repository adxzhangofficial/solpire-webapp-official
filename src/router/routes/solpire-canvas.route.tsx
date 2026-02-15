import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const SolpireCanvas = lazyWithRetry(() =>
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
