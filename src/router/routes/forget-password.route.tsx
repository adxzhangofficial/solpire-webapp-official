import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const ForgetPassword = lazyWithRetry(() =>
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
