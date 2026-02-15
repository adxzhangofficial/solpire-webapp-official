import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const DuplicateChecker = lazyWithRetry(() =>
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
