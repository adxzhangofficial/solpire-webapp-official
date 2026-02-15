import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const Home2 = lazyWithRetry(() =>
  import("../../pages/home2/Home2").then((m) => ({ default: m.Home2 }))
)

export const home2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home2",
  component: () => (
    <Suspense fallback={null}>
      <Home2 />
    </Suspense>
  ),
})
