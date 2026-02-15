import { lazy, type ComponentType } from "react"

/**
 * Wraps React.lazy() with automatic retry on chunk load failure.
 * When a new deployment changes chunk hashes, cached bundles may reference
 * old filenames that no longer exist (404). This detects the error and
 * forces a single full page reload so the browser fetches the latest bundle.
 */
export function lazyWithRetry<T extends ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(() =>
    factory().catch((err: unknown) => {
      // Only reload once per session to avoid infinite loops
      const key = "chunk-reload"
      const hasReloaded = sessionStorage.getItem(key)

      if (!hasReloaded) {
        sessionStorage.setItem(key, "1")
        window.location.reload()
        // Return a never-resolving promise so React doesn't render stale content
        return new Promise<{ default: T }>(() => {})
      }

      // Already tried reloading — clear flag and throw the real error
      sessionStorage.removeItem(key)
      throw err
    })
  )
}
