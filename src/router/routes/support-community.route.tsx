import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const SupportCommunity = lazy(() =>
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
