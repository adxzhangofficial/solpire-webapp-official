import { useEffect } from "react"
import { Error500 } from "./Error500"

type Props = {
  error: Error
  reset: () => void
}

export function ErrorBoundary({ error }: Props) {
  useEffect(() => {
    console.error("Error caught by boundary:", error)
  }, [error])

  return <Error500 />
}
