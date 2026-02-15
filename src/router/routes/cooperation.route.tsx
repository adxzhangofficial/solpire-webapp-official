import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const Cooperation = lazyWithRetry(() =>
  import("../../pages/cooperation/Cooperation").then((m) => ({ default: m.Cooperation }))
)

export const cooperationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cooperation",
  component: () => (
    <Suspense fallback={null}>
      <Cooperation />
    </Suspense>
  ),
})
