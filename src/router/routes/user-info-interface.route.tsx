import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const UserInfoInterface = lazy(() =>
  import("../../pages/user-info-interface/UserInfoInterface").then((m) => ({ default: m.UserInfoInterface }))
)

export const userInfoInterfaceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/user-info-interface",
  component: () => (
    <Suspense fallback={null}>
      <UserInfoInterface />
    </Suspense>
  ),
})
