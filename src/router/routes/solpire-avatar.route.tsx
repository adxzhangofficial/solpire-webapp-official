import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const SolpireAvatar = lazyWithRetry(() =>
  import("../../pages/solpire-avatar/SolpireAvatar").then((m) => ({ default: m.SolpireAvatar }))
)

export const solpireAvatarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/solpire-avatar",
  component: () => (
    <Suspense fallback={null}>
      <SolpireAvatar />
    </Suspense>
  ),
})
