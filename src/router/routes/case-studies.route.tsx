import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const CaseStudies = lazyWithRetry(() => import("../../pages/case-studies/CaseStudies"))

export const caseStudiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/case-studies",
  component: () => (
    <Suspense fallback={null}>
      <CaseStudies />
    </Suspense>
  ),
})
