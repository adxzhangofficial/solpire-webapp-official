import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const ContactUs = lazy(() =>
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
