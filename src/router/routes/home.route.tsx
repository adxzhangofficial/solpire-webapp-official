import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root"
import { Home } from "../../pages/home/Home";


export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
})
