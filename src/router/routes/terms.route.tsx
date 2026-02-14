import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const Terms = lazy(() =>
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
