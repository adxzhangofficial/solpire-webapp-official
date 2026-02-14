import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const CaseStudyDetail = lazy(() => import("../../pages/case-studies/CaseStudyDetail"))

export const caseStudyDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/case-studies/$id",
  component: () => (
    <Suspense fallback={null}>
      <CaseStudyDetail />
    </Suspense>
  ),
})
