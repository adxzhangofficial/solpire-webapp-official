import { create } from 'zustand'

type Theme = 'light' | 'dark'

interface ThemeStore {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem('sp-theme')
  if (stored === 'dark' || stored === 'light') return stored
  return 'dark'
}

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('sp-theme', theme)
}

/** Use View Transitions API for a smooth GPU-composited crossfade. */
const applyThemeWithTransition = (theme: Theme) => {
  if (typeof document !== 'undefined' && document.startViewTransition) {
    document.startViewTransition(() => applyTheme(theme))
  } else {
    applyTheme(theme)
  }
}

export const useThemeStore = create<ThemeStore>((set) => {
  // Apply initial theme on load
  const initial = getInitialTheme()
  if (typeof window !== 'undefined') {
    applyTheme(initial)
  }

  return {
    theme: initial,
    toggleTheme: () =>
      set((state) => {
        const next = state.theme === 'light' ? 'dark' : 'light'
        applyThemeWithTransition(next)
        return { theme: next }
      }),
    setTheme: (theme: Theme) => {
      applyThemeWithTransition(theme)
      set({ theme })
    },
  }
})
