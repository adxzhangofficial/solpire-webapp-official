import { useEffect, useState, type RefObject } from 'react'

/**
 * Wait for all non-lazy `<img>` elements inside a container to finish loading.
 * Returns `true` once every eager image has loaded (or errored).
 *
 * @param containerRef  Ref to the DOM element whose images we track
 * @param key           Optional key that resets the loading state (e.g. route param)
 * @param timeout       Safety cap in ms — always resolves after this (default 8 s)
 */
export function useImagesLoaded(
  containerRef: RefObject<HTMLElement | null>,
  key?: string | number,
  timeout = 8000,
): boolean {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false) // reset on key / ref change

    const el = containerRef.current
    if (!el) {
      setLoaded(true)
      return
    }

    let done = false
    const finish = () => {
      if (!done) {
        done = true
        setLoaded(true)
      }
    }

    // Safety timeout — always show page after this duration
    const timer = setTimeout(finish, timeout)

    const check = () => {
      // Only wait for eager-loaded images (skip loading="lazy")
      const imgs = Array.from(
        el.querySelectorAll<HTMLImageElement>('img:not([loading="lazy"])'),
      )
      const pending = imgs.filter((img) => !img.complete)

      if (pending.length === 0) {
        finish()
        return
      }

      let count = pending.length
      const onDone = () => {
        if (--count <= 0) finish()
      }

      pending.forEach((img) => {
        img.addEventListener('load', onDone, { once: true })
        img.addEventListener('error', onDone, { once: true })
      })
    }

    // Double rAF so React has committed all <img> elements to the DOM
    requestAnimationFrame(() => requestAnimationFrame(check))

    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, key, timeout])

  return loaded
}
