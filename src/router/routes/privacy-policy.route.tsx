import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const PrivacyPolicy = lazyWithRetry(() =>
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
