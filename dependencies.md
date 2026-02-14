# Dependencies Documentation

<div align="center">

**Solpire - GeoOptix Web Application**

*Complete dependency reference and installation guide*

</div>

---

## Table of Contents

- [Overview](#overview)
- [Production Dependencies](#production-dependencies)
- [Development Dependencies](#development-dependencies)
- [Dependency Categories](#dependency-categories)
- [Installation](#installation)
- [Version Compatibility](#version-compatibility)
- [Updating Dependencies](#updating-dependencies)
- [Troubleshooting](#troubleshooting)

---

## Overview

This document provides comprehensive documentation for all dependencies used in the Solpire-React project. Dependencies are categorized into production (runtime) and development (build-time) packages.

| Category | Count | Purpose |
|----------|-------|---------|
| Production | 16 | Required for application runtime |
| Development | 11 | Required for building and development |
| **Total** | **27** | Complete dependency count |

---

## Production Dependencies

These packages are required for the application to run in production.

### Core Framework

| Package | Version | Description |
|---------|---------|-------------|
| `react` | ^19.2.0 | Core React library for building user interfaces |
| `react-dom` | ^19.2.0 | React DOM rendering package for web applications |

### Routing

| Package | Version | Description |
|---------|---------|-------------|
| `@tanstack/react-router` | ^1.136.8 | Type-safe routing solution for React applications with first-class TypeScript support |

### Styling & UI Framework

| Package | Version | Description |
|---------|---------|-------------|
| `bootstrap` | ^5.3.8 | CSS framework for responsive grid system and utility classes |
| `@tailwindcss/postcss` | ^4.1.17 | Tailwind CSS integration with PostCSS for utility-first styling |
| `autoprefixer` | ^10.4.22 | PostCSS plugin for automatic vendor prefixing |

### Typography

| Package | Version | Description |
|---------|---------|-------------|
| `@fontsource/inter` | ^5.2.8 | Self-hosted Inter font family for consistent typography |
| `@fontsource/source-sans-3` | ^5.2.9 | Self-hosted Source Sans 3 font family |

### Form Handling

| Package | Version | Description |
|---------|---------|-------------|
| `react-hook-form` | ^7.67.0 | Performant form library with minimal re-renders |
| `@hookform/resolvers` | ^5.2.2 | Validation resolvers for react-hook-form |
| `zod` | ^4.1.13 | TypeScript-first schema validation library |

### State Management

| Package | Version | Description |
|---------|---------|-------------|
| `zustand` | ^5.0.8 | Lightweight state management solution |

### UI Components & Animations

| Package | Version | Description |
|---------|---------|-------------|
| `swiper` | ^12.0.3 | Modern touch slider/carousel component |
| `aos` | ^2.3.4 | Animate On Scroll library for scroll-triggered animations |
| `sweetalert2` | ^11.26.3 | Beautiful, responsive, customizable popup/alert boxes |
| `lucide-react` | ^0.554.0 | Beautiful & consistent icon library for React |

---

## Development Dependencies

These packages are only required during development and build processes.

### Build Tools

| Package | Version | Description |
|---------|---------|-------------|
| `vite` | ^7.2.2 | Next-generation frontend build tool with fast HMR |
| `@vitejs/plugin-react` | ^5.1.0 | Official Vite plugin for React with Fast Refresh |

### TypeScript

| Package | Version | Description |
|---------|---------|-------------|
| `typescript` | ~5.9.3 | TypeScript language compiler |
| `@types/node` | ^24.10.0 | TypeScript definitions for Node.js |
| `@types/react` | ^19.2.2 | TypeScript definitions for React |
| `@types/react-dom` | ^19.2.2 | TypeScript definitions for React DOM |

### Code Quality (ESLint)

| Package | Version | Description |
|---------|---------|-------------|
| `eslint` | ^9.39.1 | Pluggable JavaScript/TypeScript linter |
| `@eslint/js` | ^9.39.1 | ESLint JavaScript rules configuration |
| `eslint-plugin-react-hooks` | ^7.0.1 | ESLint rules for React Hooks |
| `eslint-plugin-react-refresh` | ^0.4.24 | ESLint plugin for React Refresh compatibility |
| `typescript-eslint` | ^8.46.3 | TypeScript ESLint parser and plugin |
| `globals` | ^16.5.0 | Global variables for ESLint environments |

---

## Dependency Categories

### By Functionality

```
┌─────────────────────────────────────────────────────────────────┐
│                    DEPENDENCY ARCHITECTURE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   CORE REACT    │  │    ROUTING      │  │     STATE       │  │
│  │  react          │  │ @tanstack/      │  │   zustand       │  │
│  │  react-dom      │  │ react-router    │  │                 │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│                                                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │    STYLING      │  │     FORMS       │  │   UI/EFFECTS    │  │
│  │  bootstrap      │  │ react-hook-form │  │   swiper        │  │
│  │  tailwindcss    │  │ @hookform/      │  │   aos           │  │
│  │  autoprefixer   │  │   resolvers     │  │   sweetalert2   │  │
│  │  @fontsource/*  │  │ zod             │  │   lucide-react  │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                   BUILD & DEVELOPMENT                     │   │
│  │  vite, typescript, eslint, @types/*, globals              │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Package Relationships

```
react ─────────────────────────┬──► react-dom
                               │
                               ├──► @tanstack/react-router
                               │
                               ├──► react-hook-form ──► @hookform/resolvers ──► zod
                               │
                               ├──► zustand
                               │
                               ├──► swiper
                               │
                               └──► lucide-react

vite ──────────────────────────┬──► @vitejs/plugin-react
                               │
                               └──► @tailwindcss/postcss ──► autoprefixer

typescript ────────────────────┬──► @types/node
                               ├──► @types/react
                               ├──► @types/react-dom
                               └──► typescript-eslint

eslint ────────────────────────┬──► @eslint/js
                               ├──► eslint-plugin-react-hooks
                               ├──► eslint-plugin-react-refresh
                               └──► globals
```

---

## Installation

### Full Installation

Install all dependencies at once:

```bash
npm install
```

### Manual Installation

#### Production Dependencies

```bash
npm install react react-dom @tanstack/react-router bootstrap @tailwindcss/postcss autoprefixer @fontsource/inter @fontsource/source-sans-3 react-hook-form @hookform/resolvers zod zustand swiper aos sweetalert2 lucide-react
```

#### Development Dependencies

```bash
npm install -D vite @vitejs/plugin-react typescript @types/node @types/react @types/react-dom eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh typescript-eslint globals
```

### Clean Installation

For a fresh install (removes existing node_modules):

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## Version Compatibility

### Node.js Requirements

| Requirement | Version |
|-------------|---------|
| Minimum Node.js | 18.0.0 |
| Recommended Node.js | 20.x LTS |
| npm | 9.0.0+ |

### React Ecosystem Compatibility

| Package | Compatible With |
|---------|-----------------|
| React 19.2.0 | React DOM 19.2.0, @types/react 19.x |
| TanStack Router 1.x | React 18+, TypeScript 5.x |
| React Hook Form 7.x | React 18+, @hookform/resolvers 5.x |
| Zustand 5.x | React 18+ |

### Build Tool Compatibility

| Package | Compatible With |
|---------|-----------------|
| Vite 7.x | Node.js 18+, TypeScript 5.x |
| TypeScript 5.9.x | ESLint 9.x, typescript-eslint 8.x |
| ESLint 9.x | Node.js 18+ |

---

## Updating Dependencies

### Check for Updates

```bash
# Check outdated packages
npm outdated

# Interactive update tool (requires npm-check-updates)
npx npm-check-updates
```

### Update Commands

```bash
# Update all packages to latest compatible versions
npm update

# Update a specific package
npm update <package-name>

# Update to latest major versions (use with caution)
npx npm-check-updates -u
npm install
```

### Recommended Update Strategy

1. **Patch Updates** (x.x.X): Safe to update automatically
2. **Minor Updates** (x.X.0): Review changelog, usually safe
3. **Major Updates** (X.0.0): Read migration guide, test thoroughly

---

## Troubleshooting

### Common Issues

#### 1. Peer Dependency Warnings

```bash
# If you see peer dependency warnings, try:
npm install --legacy-peer-deps
```

#### 2. TypeScript Version Mismatch

```bash
# Ensure TypeScript version matches @types packages
npm install typescript@~5.9.3 @types/react@^19.2.2 @types/react-dom@^19.2.2
```

#### 3. Vite Build Errors

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

#### 4. ESLint Configuration Issues

```bash
# Regenerate ESLint cache
rm -rf .eslintcache
npm run lint
```

#### 5. Module Resolution Errors

```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Getting Help

If you encounter issues not covered here:

1. Check the package's GitHub issues
2. Review the package's official documentation
3. Ensure Node.js and npm versions meet requirements
4. Try a clean installation

---

## Quick Reference

### Package.json Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server |
| `build` | `npm run build` | Build for production |
| `preview` | `npm run preview` | Preview production build |
| `lint` | `npm run lint` | Run ESLint checks |

### Key Version Numbers

```json
{
  "react": "^19.2.0",
  "typescript": "~5.9.3",
  "vite": "^7.2.2",
  "eslint": "^9.39.1"
}
```

---

<div align="center">

**Solpire Technology**

*Last Updated: December 2025*

</div>
