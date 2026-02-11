# React 19 — All New Features (19.0 + 19.1 + 19.2)

---

## React 19.0 (Dec 2024)

### New Hooks
1. **`useActionState`** — form action state management (error, submitAction, isPending)
2. **`useOptimistic`** — optimistic UI updates while async request in progress
3. **`useFormStatus`** — read parent form's pending state without prop drilling
4. **`use()`** — read promises/context directly in render (replaces some useContext patterns)
5. **`useDeferredValue` with `initialValue`** — new optional param for initial render value

### Components & JSX Changes
6. **`ref` as prop** — function components accept ref directly, no more forwardRef
7. **Ref cleanup functions** — return a cleanup function from ref callback
8. **`<Context>` as provider** — use `<Context value={}>` instead of `<Context.Provider>`
9. **Document Metadata** — `<title>`, `<meta>`, `<link>` directly in components, auto-hoisted to `<head>`
10. **Stylesheets with `precedence`** — managed CSS ordering, deduplication across components
11. **Async `<script>`** — `<script async={true} src="..."/>`, deduplication + all environments

### Server Features
12. **Server Components** — stable, render on server, zero client JS
13. **Server Actions** — `"use server"` directive, async functions on server from client
14. **`prerender()`** — static site generation API
15. **`prerenderToNodeStream()`** — Node.js stream version of prerender

### Form Features
16. **`<form action={fn}>`** — pass function directly as action prop
17. **`<button formAction={fn}>`** — per-button form actions
18. **`requestFormReset()`** — manual form reset API

### Resource Preloading APIs
19. **`prefetchDNS()`** — prefetch DNS for future requests
20. **`preconnect()`** — preconnect to origin
21. **`preload()`** — preload resources (fonts, stylesheets, etc.)
22. **`preinit()`** — load and execute scripts eagerly

### Performance & Core
23. **React Compiler** — auto-memoization, no manual useMemo/useCallback/React.memo needed
24. **Concurrent Rendering** — enabled by default
25. **Automatic Batching improvements** — expanded to promises, setTimeout, native event handlers

### Error Handling & DX
26. **Hydration error diffs** — better mismatch error messages with visible diffs
27. **`onCaughtError`** — root option for caught errors
28. **`onUncaughtError`** — root option for uncaught errors
29. **`onRecoverableError`** — root option for recoverable errors
30. **Duplicate error logging eliminated** — cleaner console

### Web Components & Compatibility
31. **Custom Elements (Web Components)** — full support, proper property/attribute handling
32. **Third-party script/extension compatibility** — better hydration, skips unexpected tags

### Deprecated
33. **`forwardRef`** — deprecated (use ref as prop)
34. **`<Context.Provider>`** — deprecated (use `<Context>` directly)
35. **`ReactDOM.useFormState`** — renamed to `useActionState`

---

## React 19.1 (June 2025)

36. **`useId` prefix change** — `:r:` → `«r»`
37. **Bug fixes + stability improvements**

---

## React 19.2 (Oct 2025)

### New Features
38. **`<Activity />` component** — visible/hidden modes, pre-render hidden UI, preserve state while unmounting effects
39. **`useEffectEvent` hook** — separate event logic from effects, always sees latest state, no unnecessary re-runs
40. **`cacheSignal`** — AbortSignal for `cache()` cleanup (Server Components only)

### SSR / Partial Pre-rendering
41. **`prerender()` with AbortController** — enhanced static generation
42. **`resume()`** — resume SSR from postponed state (Web Streams)
43. **`resumeToPipeableStream()`** — resume SSR (Node Streams)
44. **`resumeAndPrerender()`** — resume to static HTML for SSG (Web Streams)
45. **`resumeAndPrerenderToNodeStream()`** — resume SSG (Node Streams)
46. **`renderToReadableStream()`** — now available for Node.js
47. **Batching Suspense boundaries for SSR** — batch reveals for better UX

### DevTools & Tooling
48. **Performance Tracks** — Scheduler Track + Components Track in Chrome DevTools
49. **`eslint-plugin-react-hooks` v6** — flat config, React Compiler rules
50. **`<ViewTransition>` support prep** — upcoming view transitions

### Other Changes
51. **`useId` prefix change** — `«r»` → `_r_` (valid for view-transition-name + XML)
52. **Nonce on hoistable styles** — security for CSP
53. **Context stringify** — `"SomeContext"` instead of `"SomeContext.Provider"`
54. **Fix: infinite `useDeferredValue` loop** — popstate events fix
55. **Fix: `React.use` inside `React.lazy`** — now works correctly
56. **Fix: form submission with Client Actions** — crash fix
57. **Stop warning for ARIA 1.3 attributes** — updated ARIA support
58. **Improved component stacks** — better debugging info

---

**Total: 58 features/changes across React 19.0, 19.1, 19.2**

### Demo-able Features (Client-side)
> Ye features hain jinke demos is project mein bane hain:

| # | Feature | Component |
|---|---------|-----------|
| 1 | useActionState | `UseActionStateDemo` |
| 2 | useOptimistic | `UseOptimisticDemo` |
| 3 | useFormStatus | `UseFormStatusDemo` |
| 4 | use() hook | `UseHookDemo` |
| 5 | useDeferredValue + initialValue | `UseDeferredValueDemo` |
| 6 | ref as prop | `RefAsPropDemo` |
| 7 | Ref cleanup functions | `RefCleanupDemo` |
| 8 | Context as provider | `ContextAsProviderDemo` |
| 9 | Document Metadata | `DocumentMetadataDemo` |
| 10 | Form action={fn} | `FormActionsDemo` |
| 11 | useEffectEvent (19.2) | `UseEffectEventDemo` |
| 12 | Activity component (19.2) | `ActivityDemo` |
| 13 | Resource Preloading | `ResourcePreloadingDemo` |
| 14 | React Compiler | `ReactCompilerDemo` |

### Server-only Features (Need Next.js/Remix)
> Ye features client-side demo mein nahi ban sakte:
- Server Components, Server Actions, prerender, resume, cacheSignal, SSR APIs
