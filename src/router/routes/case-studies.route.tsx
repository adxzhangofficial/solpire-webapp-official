import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const CaseStudies = lazy(() => import("../../pages/case-studies/CaseStudies"))

export const caseStudiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/case-studies",
  component: () => (
    <Suspense fallback={null}>
      <CaseStudies />
    </Suspense>
  ),
})
