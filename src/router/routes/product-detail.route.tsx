import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const ProductDetail = lazyWithRetry(() => import("../../pages/products/ProductDetail"))

export const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$slug",
  component: () => (
    <Suspense fallback={null}>
      <ProductDetail />
    </Suspense>
  ),
})
