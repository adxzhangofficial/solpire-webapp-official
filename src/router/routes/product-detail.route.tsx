import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const ProductDetail = lazy(() => import("../../pages/products/ProductDetail"))

export const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$slug",
  component: () => (
    <Suspense fallback={null}>
      <ProductDetail />
    </Suspense>
  ),
})
