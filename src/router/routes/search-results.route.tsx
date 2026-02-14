import { createRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { rootRoute } from "../root"

const SearchResults = lazy(() =>
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
