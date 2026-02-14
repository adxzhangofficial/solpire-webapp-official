import { createRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { rootRoute } from "../root";

// Lazy load the Registration page
const Registration = lazy(() =>
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
