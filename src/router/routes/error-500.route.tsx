import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { Error500 } from "../../pages/error/Error500"

export const error500Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/500",
  component: Error500,
  errorComponent: Error500,
})
