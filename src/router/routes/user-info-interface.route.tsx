import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const UserInfoInterface = lazyWithRetry(() =>
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
