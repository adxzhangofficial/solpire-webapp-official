import { createRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { lazyWithRetry } from "../../lib/lazyWithRetry";
import { rootRoute } from "../root";

// Lazy load the Signin page
const Signin = lazyWithRetry(() =>
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
