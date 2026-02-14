import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const PrivacyPolicy = lazy(() =>
  import("../../pages/privacy-policy/PrivacyPolicy").then((m) => ({ default: m.PrivacyPolicy }))
)

export const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: () => (
    <Suspense fallback={null}>
      <PrivacyPolicy />
    </Suspense>
  ),
})
