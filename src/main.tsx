import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "./router/router"

// Offline Fonts
import "@fontsource/inter/200.css"
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/source-sans-3/index.css"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import * as bootstrap from "bootstrap"

// Make bootstrap globally available for external scripts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(window as any).bootstrap = bootstrap

// SweetAlert2
import "sweetalert2/dist/sweetalert2.min.css"
import Swal from "sweetalert2"

// Make Swal globally available
// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(window as any).Swal = Swal

// Initialize lightweight UI behaviors for custom components
import "./components/ui-init";

// Initialize theme before render to avoid FOUC
import { useThemeStore } from "./stores/themeStore"
useThemeStore.getState()

// Swiper
import "swiper/swiper-bundle.css"

// Global styles
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
