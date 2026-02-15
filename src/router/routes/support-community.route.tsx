import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const SupportCommunity = lazyWithRetry(() =>
  import("../../pages/support-community/SupportCommunity").then((m) => ({ default: m.SupportCommunity }))
)

export const supportCommunityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/support-community",
  component: () => (
    <Suspense fallback={null}>
      <SupportCommunity />
    </Suspense>
  ),
})
