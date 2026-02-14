import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Get the correct asset path with base URL for GitHub Pages deployment.
 * Converts paths like "/assets/images/foo.png" to use the correct base path.
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Get the base URL from Vite (includes trailing slash)
  const base = import.meta.env.BASE_URL;
  return `${base}${cleanPath}`;
}
