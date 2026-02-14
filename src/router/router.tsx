import { createRouter } from "@tanstack/react-router"
import { rootRoute } from "./root"

import { homeRoute } from "./routes/home.route"
import { signinRoute } from "./routes/signin.route"
import { registrationRoute } from "./routes/registration.route"
import { aboutUsRoute } from "./routes/about-us.route"
import { contactUsRoute } from "./routes/contact-us.route"
import { cooperationRoute } from "./routes/cooperation.route"
import { duplicateCheckerRoute } from "./routes/duplicate-checker.route"
import { duplicateChecker2Route } from "./routes/duplicate-checker-2.route"
import { forgetPasswordRoute } from "./routes/forget-password.route"
import { home2Route } from "./routes/home2.route"
import { otpRequestRoute } from "./routes/otp-request.route"
import { privacyPolicyRoute } from "./routes/privacy-policy.route"
import { searchResultsRoute } from "./routes/search-results.route"
import { supportCommunityRoute } from "./routes/support-community.route"
import { technicalSupportRoute } from "./routes/technical-support.route"
import { termsRoute } from "./routes/terms.route"
import { userInfoInterfaceRoute } from "./routes/user-info-interface.route"
import { error404Route } from "./routes/error-404.route"
import { error500Route } from "./routes/error-500.route"
import { notFoundRoute } from "./routes/not-found.route"
import { solpireCanvasRoute } from "./routes/solpire-canvas.route"
import { solpireAvatarRoute } from "./routes/solpire-avatar.route"
import { caseStudiesRoute } from "./routes/case-studies.route"
import { caseStudyDetailRoute } from "./routes/case-study-detail.route"
import { productsRoute } from "./routes/products.route"
import { productDetailRoute } from "./routes/product-detail.route"

const routeTree = rootRoute.addChildren([
  homeRoute,
  signinRoute,
  registrationRoute,
  aboutUsRoute,
  contactUsRoute,
  cooperationRoute,
  duplicateCheckerRoute,
  duplicateChecker2Route,
  forgetPasswordRoute,
  home2Route,
  otpRequestRoute,
  privacyPolicyRoute,
  searchResultsRoute,
  supportCommunityRoute,
  technicalSupportRoute,
  termsRoute,
  userInfoInterfaceRoute,
  error404Route,
  error500Route,
  notFoundRoute,
  solpireCanvasRoute,
  solpireAvatarRoute,
  caseStudiesRoute,
  caseStudyDetailRoute,
  productsRoute,
  productDetailRoute,
])

export const router = createRouter({ 
  routeTree,
  basepath: import.meta.env.BASE_URL,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
