import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const ContactUs = lazyWithRetry(() =>
  import("../../pages/contact-us/ContactUs").then((m) => ({ default: m.ContactUs }))
)

export const contactUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact-us",
  component: () => (
    <Suspense fallback={null}>
      <ContactUs />
    </Suspense>
  ),
})
