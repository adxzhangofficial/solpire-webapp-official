import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const ForgetPassword = lazy(() =>
  import("../../pages/forget-password/ForgetPassword").then((m) => ({ default: m.ForgetPassword }))
)

export const forgetPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forget-password",
  component: () => (
    <Suspense fallback={null}>
      <ForgetPassword />
    </Suspense>
  ),
})
