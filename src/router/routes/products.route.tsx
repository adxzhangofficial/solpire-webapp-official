import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const Products = lazy(() => import("../../pages/products/Products"))

export const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: () => (
    <Suspense fallback={null}>
      <Products />
    </Suspense>
  ),
})
