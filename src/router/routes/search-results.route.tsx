import { createRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { lazyWithRetry } from "../../lib/lazyWithRetry"
import { rootRoute } from "../root"

const SearchResults = lazyWithRetry(() =>
  import("../../pages/search-results/SearchResults").then((m) => ({ default: m.SearchResults }))
)

export const searchResultsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search-results",
  component: () => (
    <Suspense fallback={null}>
      <SearchResults />
    </Suspense>
  ),
})
