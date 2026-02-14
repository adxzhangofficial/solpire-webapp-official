import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const DuplicateChecker = lazy(() =>
  import("../../pages/duplicate-checker/DuplicateChecker").then((m) => ({ default: m.DuplicateChecker }))
)

export const duplicateCheckerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/duplicate-checker",
  component: () => (
    <Suspense fallback={null}>
      <DuplicateChecker />
    </Suspense>
  ),
})
