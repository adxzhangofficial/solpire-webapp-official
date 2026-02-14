import { createRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { rootRoute } from "../root";

// Lazy load the Signin page
const Signin = lazy(() =>
  import("../../pages/signin/Signin").then((module) => ({
    default: module.Signin,
  }))
);

export const signinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signin",
  component: () => (
    <Suspense fallback={null}>
      <Signin />
    </Suspense>
  ),
});
