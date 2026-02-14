import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { Error404 } from "../../pages/error/Error404"

export const error404Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/404",
  component: Error404,
})
