import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const OtpRequest = lazyWithRetry(() =>
  import("../../pages/otp-request/OtpRequest").then((m) => ({ default: m.OtpRequest }))
)

export const otpRequestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/otp-request",
  component: () => (
    <Suspense fallback={null}>
      <OtpRequest />
    </Suspense>
  ),
})
