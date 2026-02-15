import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const CaseStudyDetail = lazyWithRetry(() => import("../../pages/case-studies/CaseStudyDetail"))

export const caseStudyDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/case-studies/$id",
  component: () => (
    <Suspense fallback={null}>
      <CaseStudyDetail />
    </Suspense>
  ),
})
