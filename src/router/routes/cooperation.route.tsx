import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const Cooperation = lazy(() =>
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
