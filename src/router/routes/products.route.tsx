import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const Products = lazyWithRetry(() => import("../../pages/products/Products"))

export const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: () => (
    <Suspense fallback={null}>
      <Products />
    </Suspense>
  ),
})
