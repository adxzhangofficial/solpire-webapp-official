import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const OtpRequest = lazy(() =>
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
