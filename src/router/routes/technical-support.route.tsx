import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const TechnicalSupport = lazy(() =>
  import("../../pages/technical-support/TechnicalSupport").then((m) => ({ default: m.TechnicalSupport }))
)

export const technicalSupportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/technical-support",
  component: () => (
    <Suspense fallback={null}>
      <TechnicalSupport />
    </Suspense>
  ),
})
