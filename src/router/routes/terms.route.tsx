import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const Terms = lazyWithRetry(() =>
  import("../../pages/terms/Terms").then((m) => ({ default: m.Terms }))
)

export const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: () => (
    <Suspense fallback={null}>
      <Terms />
    </Suspense>
  ),
})
