import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const SolpireAvatar = lazy(() =>
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
