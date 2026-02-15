import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const DuplicateChecker2 = lazyWithRetry(() =>
  import("../../pages/duplicate-checker-2/DuplicateChecker2").then((m) => ({ default: m.DuplicateChecker2 }))
)

export const duplicateChecker2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/duplicate-checker-2",
  component: () => (
    <Suspense fallback={null}>
      <DuplicateChecker2 />
    </Suspense>
  ),
})
