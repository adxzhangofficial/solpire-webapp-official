import { createRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { lazyWithRetry } from "../../lib/lazyWithRetry";
import { rootRoute } from "../root";

// Lazy load the Registration page
const Registration = lazyWithRetry(() =>
  import("../../pages/registration/Registration").then((module) => ({
    default: module.Registration,
  }))
);

export const registrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/registration",
  component: () => (
    <Suspense fallback={null}>
      <Registration />
    </Suspense>
  ),
});
