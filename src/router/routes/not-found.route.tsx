import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { Error404 } from "../../pages/error/Error404"

export const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: Error404,
})
