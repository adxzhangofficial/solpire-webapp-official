import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const TechnicalSupport = lazyWithRetry(() =>
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
