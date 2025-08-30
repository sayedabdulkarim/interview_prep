# React Interview Preparation Guide

## 📚 Table of Contents

- [React 19 Features](#react-19-features)
- [Machine Coding Questions](#machine-coding-questions)
- [Core React Concepts](#core-react-concepts)
- [React Router](#react-router)
- [Redux](#redux)
- [React Testing](#react-testing)
- [Babel](#babel)
- [Miscellaneous Topics](#miscellaneous-topics)
- [Resources &amp; Videos](#resources--videos)

---

## Resources & Videos

### YouTube Channels & Playlists

- [React Interview Questions](https://www.youtube.com/watch?v=s-b-txm_Gvk&list=PLmcRO0ZwQv4SNhbW4CI4vc-6IHBHCKzZN&index=2)
- [Uncommon Geeks](https://www.youtube.com/@uncommongeeks/playlists)
- [Interview Adda](https://www.youtube.com/@InterviewAddaOffical/videos)
- [All Things JavaScript](https://www.youtube.com/@AllThingsJavaScript/playlists)

### Learning Platforms

- [Learners Bucket](https://learnersbucket.com/)
- [BigFrontend.dev](https://bigfrontend.dev/)

---

## React 19 Features

_React 19 is moving towards SSR capabilities similar to Next.js for better SEO support_

### New Hooks and APIs

#### 1. **useTransition**

- Marks state updates as non-urgent
- Allows React to interrupt and prioritize other updates

#### 2. **useOptimistic**

- Updates UI optimistically before API response
- Automatically reverts if request fails
- Great for instant UI feedback

#### 3. **use() API**

```javascript
import { use } from "react";

function Comments({ commentsPromise }) {
  // 'use' will suspend until the promise resolves
  const comments = use(commentsPromise);
  return comments.map((comment) => <p key={comment.id}>{comment}</p>);
}

function Page({ commentsPromise }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments commentsPromise={commentsPromise} />
    </Suspense>
  );
}
```

- Can grab context data: `const profileContext = use(ProfileContext)`
- Can be used conditionally (unlike other hooks)

#### 4. **Other Improvements**

- **No forwardRef needed**: Pass ref directly as props
- **Built-in SEO tags**: Use `<title>`, `<link>`, `<meta>` directly in components

---

## Machine Coding Questions

### Essential Implementations

- ✅ **Custom Hooks**

  - count timer hooks
  - useInput hook
  - useFetch hook - [Tutorial](https://www.youtube.com/watch?v=Vspeudp-M9k)
  - Error boundaries - [Implementation](https://www.youtube.com/watch?v=hszc3T0hdvU)

- ✅ **Performance Patterns**

  - useMemo, useCallback, React.memo
    - [Memo Tutorial 1](https://www.youtube.com/watch?v=yM2q_joUmNQ)
    - [Memo Tutorial 2](https://www.youtube.com/watch?v=uojLJFt9SzY)
  - Memoization techniques
  - Render props - [Video](https://www.youtube.com/watch?v=7VZcTYdoK54)
  - HOC (Higher Order Components)
  - Compound pattern - [Video](https://www.youtube.com/watch?v=Xh2HPpc0xNw)

- ✅ **Common Components**

  - Infinite scrolling - [Implementation](https://www.youtube.com/watch?v=lVgF2OziomM)
  - Notification toast - [Tutorial](https://www.youtube.com/watch?v=cOJTshh56Zc)
  - File explorer - [Video](https://www.youtube.com/watch?v=20F_KzHPpvI)
  - Star rating widget (including decimal ratings like 4.7)
  - Progress bar (multiple)
  - Dynamic form with validation
  - Google Calendar clone
  - Typeahead/Autocomplete
  - Excel-like spreadsheet
  - Twitter post textarea
  - Todo list (with bulk delete)
  - E-commerce cart page
  - Product listing with filters (pagination, sorting, filtering)
  - Tic-tac-toe game

### Polyfills

- [useState Polyfill](https://www.youtube.com/watch?v=_qkX3yAmgEw)
- Custom hook implementations

### Interview Questions Resources

- [LeetCode Frontend Questions](https://leetcode.com/discuss/interview-question/742791/Front-End-Interview-Questions)
- [BigFrontend Problems](https://bigfrontend.dev/problem)
- [Machine Coding Playlist](https://www.youtube.com/watch?v=4s7wew3dGHY&list=PLAjOh0819rC3R8orm7bOag7ENKlRXJN4x)

---

## Core React Concepts

### Authentication & Security

- **How to call children function from parent** (without state/props)
- **Token vs Session**: [Video Explanation](https://www.youtube.com/watch?v=QzntvHz23tw)
- **How authentication works**
- **PropTypes** for type checking
- **JWT Mechanism**

#### JWT Flow Diagram

```
+---------------------+              +--------------------+           +-----------------+
|    User's Device    |              | Server / Backend   |           |    Database     |
+---------------------+              +--------------------+           +-----------------+
        |                                    |                              |
        | 1. Authentication                  |                              |
        |----------------------------------->|                              |
        |                                    |                              |
        | 2. JWT Creation                    |                              |
        |<-----------------------------------|                              |
        |                                    |                              |
        | 3. Include JWT in Headers          |                              |
        |----------------------------------->|                              |
        |                                    |                              |
        | 4. Verify JWT & Extract Claims     |                              |
        |<-----------------------------------|                              |
```

### React Internals

- **How React Compiler Works**

  - [Video 1](https://www.youtube.com/watch?v=OMRdBKinfmA)
  - [Video 2](https://www.youtube.com/watch?v=TjnyFNxQ67Y)
  - [Hooks Under the Hood](https://www.youtube.com/watch?v=_qkX3yAmgEw)

- **Arrow vs Normal Functions**: [Differences](https://www.youtube.com/watch?v=Wdlu_wlj6as)

### React Version Changes

#### React 18 Features

- [Overview Video](https://www.youtube.com/watch?v=N0DhCV_-Qbg)
- **Automatic Batching**: All state updates are batched (even in setTimeout, promises)
- **useTransition**: For priority state updates
- **useDeferredValue**: For expensive computations
  - [useTransition vs useDeferredValue](https://www.youtube.com/watch?v=lDukIAymutM)
  - [Simple useTransition](https://www.youtube.com/watch?v=IPIV6Zjz5NU)
- **React Batching**: [Detailed Explanation](https://www.youtube.com/watch?v=f1lFVZCREZ0)

#### React 17 Features

- [React 17 Changes](https://www.youtube.com/watch?v=8D-rWP3c088)

### Refs

- [Understanding Refs](https://www.youtube.com/watch?v=ScT4ElKd6eo)

### Event Handling

- **Event Delegation** (technique using event bubbling)

  - [JavaScript Basics](https://www.youtube.com/watch?v=abbdJ4Yfm54)
  - [More Examples](https://www.youtube.com/watch?v=rS_4YfbEo2U)
  - [Deep Dive](https://www.youtube.com/watch?v=pKzf80F3O0U)
  - [React Implementation](https://www.youtube.com/watch?v=16VS048MsfQ)

- **Synthetic Events**

  - Every React event is an instance of SyntheticBaseEvent (v18) or SyntheticEvent
  - [Detailed Explanation](https://www.youtube.com/watch?v=16VS048MsfQ)

### Performance & Optimization

- **Code Splitting**: [Implementation](https://www.youtube.com/watch?v=IBrmsyy9R94)
- **Tree Shaking**: Remove unused files
- **CSS Optimization**:
  - `purge-css-webpack-plugin`: Remove unused CSS
  - `glob`: Scan folders to filter used CSS
  - `mini-css-extract-plugin`: Separate CSS files for caching
- **JS Polyfills**: [Tutorial](https://www.youtube.com/watch?v=Th3rZjfKKhI)

### Reconciliation & Fiber

#### Reconciliation Process

- How Virtual DOM works:
  1. React creates new Virtual DOM on state change
  2. Compares with previous Virtual DOM using diffing algorithm
  3. Updates only changed parts in actual DOM
  4. Faster than repainting entire DOM

#### React Fiber

- Introduced in React 16
- Makes reconciliation asynchronous and interruptible
- Enables priority-based rendering
- Foundation for concurrent features

  **#### Verbal talk ####**

ok, jaise before react 18, agar humlog same setter function multi call krte the in a block then teeno call hota tha, but in react18 me batch aa gaya . that means if
same setter than it will skip and run the last .
setCount(1)
setCount(2)
setCount(3)

in react 17 also batching is there but only with events not with asynchronous operations.

But with react18 they used fully. the batching thing and
also react 18 introduces useTransition and useDeffered, jo ki part hai fiber ka hi .

React reconciliation :

reconcillation means the way virtual DOMs works. means everytime render hapen react creates a virtual dom , and with final one it compare with the actual DOM. and with the use of dffing algorithm it checks the chunk whihc differ from the actual
DOM , and updates only that part in our actaul DOM . which makes it faster to repaint instead of repainiting the full DOM

#### Batching Evolution

```javascript
// Before React 18
setCount(1);
setCount(2);
setCount(3);
// 3 renders in async operations, 1 render in event handlers

// React 18
setCount(1);
setCount(2);
setCount(3);
// Always 1 render (automatic batching everywhere)
```

### SSR vs SSG vs CSR

#### Server-Side Rendering (SSR)

- [SSR Tutorial](https://www.youtube.com/watch?v=fjTDclQ6Ytc)
- HTML generated on each request
- Good for SEO (data visible in view source)
- Fast initial load
- Hydration makes page interactive

```javascript
// Next.js SSR Example
export async function getServerSideProps(context) {
  const res = await fetch("https://example.com/data");
  const data = await res.json();
  return { props: { data } };
}

function SSRPage({ data }) {
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

#### Static Site Generation (SSG)

- [SSG Tutorial](https://www.youtube.com/watch?v=mS7K-GQcGHw)
- HTML generated at build time
- Best performance
- Use `revalidate` for ISR

```javascript
export async function getStaticProps({ params }) {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 10, // ISR - revalidate every 10 seconds
  };
}
```

#### CSR vs SSR Decision

- [When to use which](https://www.youtube.com/watch?v=NwyQONeqRXA)

### Service Workers & PWA

- [Service Workers in JS](https://www.youtube.com/watch?v=ksXwaWHCW6k)
- [PWA in React](https://www.youtube.com/watch?v=u39sdT5okpM)
- Runs in background, enables offline functionality

---

## React Router

### React Router v6 Changes

- [Migration Guide](https://www.youtube.com/watch?v=UjHT_NKR_gU)

| Old (v5)   | New (v6)    |
| ---------- | ----------- |
| Switch     | Routes      |
| component  | element     |
| useHistory | useNavigate |
| Redirect   | Navigate    |

- **Nested Routes**: All defined routes
- **Outlet**: Shared layout inheritance

### Basic Questions

#### 1. What is React Router?

A library for routing in React SPAs with:

- SPA Navigation
- Dynamic Routing
- URL Parameters & Query Strings
- Route Protection

#### 2. Installation

```bash
npm install react-router-dom
# or
yarn add react-router-dom
```

#### 3. BrowserRouter vs HashRouter

- [Video Explanation](https://www.youtube.com/watch?v=336gNj9V8qE)
- **HashRouter**: Adds `#` to URLs, works on GitHub Pages without server config
- **BrowserRouter**: Clean URLs, needs server config (`app.get("*", res.sendFile("index.html"))`)

#### 4-8. Core Components

- **Route**: Defines routes
- **Link**: Better than `<a>` tags (no page refresh)
- **Redirect/Navigate**: Route redirection
- **Switch/Routes**: Renders first matching route
- **Route Parameters**:

```javascript
<Route path="/user/:id" element={<UserProfile />} />;
// Access with:
const { id } = useParams();
```

### Intermediate Questions

#### 9. Protected Routes

Restrict access based on authentication

#### 10. withRouter HOC

Injects router props into components

#### 11. Nested Routing

Routes within routes using Outlet

#### 12. Lazy Loading

```javascript
const Home = React.lazy(() => import("./routes/Home"));
const About = React.lazy(() => import("./routes/About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

#### 13. Router Hooks

- `useNavigate`: Programmatic navigation
- `useLocation`: Current location
- `useParams`: Route parameters
- `useSearchParams`: Query parameters

#### 14-15. Navigation

- **404 Handling**: Catch-all route with `path="*"`
- **Programmatic Navigation**: Using navigate function

### Advanced Questions

16. Query parameter handling
17. Route transitions and animations
18. React Router with Redux integration
19. Performance considerations
20. Authentication flows

---

## Redux

### Redux Thunk

- Allows action creators to return functions instead of actions
- Provides delay for async operations
- Used for handling asynchronous actions

```javascript
// Example usage
const fetchData = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "LOADING" });
    try {
      const data = await api.getData();
      dispatch({ type: "SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  };
};
```

---

## React Testing

### Testing Resources

- [Testing Playlist](https://www.youtube.com/watch?v=7W07acU9fqw&list=PLolI8AY2AS9Yzq5tPVuNPnmwm4XIBIMn2)

### Query Methods

#### When to use which?

- **get**: Element must be in DOM (throws if not found)
  - `getByText`, `getByRole`, `getByTestId`
- **query**: Testing absence (returns null if not found)
  - `queryByText`, `queryByRole`, `queryByTestId`
- **find**: Async elements (returns promise)
  - `findByText`, `findByRole`, `findByTestId`

#### waitFor vs find

- **find**: Initial async render
- **waitFor**: After user interaction

### Testing Methods

#### Jest

- `describe`, `test`, `expect`
- `mock`, `beforeEach`, `afterEach`
- `beforeAll`, `afterAll`

#### React Testing Library

- `render`, `fireEvent`, `waitFor`
- `getByText`, `findByText`, `queryByText`

### Sample Test

```javascript
test("input displays typed value", () => {
  render(<InputComponent />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Hello" } });
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
```

---

## Babel

### What is Babel?

- [Tutorial](https://www.youtube.com/watch?v=AE-TfB6jGtw)
- Transpiles JSX to browser-readable JavaScript
- Converts modern JS to compatible versions

### Example

```javascript
// Input
<h1>Hello</h1>;

// Output
React.createElement("h1", null, "Hello");
```

---

## Miscellaneous Topics

### Performance

- **Infinite Scroll**: [Implementation](https://www.youtube.com/watch?v=lVgF2OziomM)
- **Debouncing/Throttling**: [Tutorial](https://www.youtube.com/watch?v=cxi25srbYX8)
- **Cancel API Requests**: [Guide](https://www.youtube.com/watch?v=cIwpavIhI84)

### React Hooks

- [All Hooks Overview](https://www.youtube.com/watch?v=LlvBzyy-558)
- **useEffect without dependencies**: [Behavior](https://www.youtube.com/watch?v=0ZJgIjIuY7U)
- **Cleanup in useEffect**: [Guide](https://www.youtube.com/watch?v=5gCtW7RCtQA)

### Advanced Concepts

- **Shadow DOM vs Virtual DOM**: [Explanation](https://www.youtube.com/watch?v=5AK98MpCc30)
- **Functional vs Class Components**: Why functional is preferred
- **Context API**: Including multiple contexts
- **Render Props**: [Pattern](https://www.youtube.com/watch?v=7VZcTYdoK54)
- **Error Boundaries**: Catching React errors

### Additional Topics

- [Reconciliation &amp; Diffing](https://www.youtube.com/watch?v=osL7c1Ug7qo)
- [useTransition vs useDeferredValue](https://www.youtube.com/watch?v=lDukIAymutM)
- **RxJS & WebSockets**
- **TypeScript with React**
- **Why React uses Node.js**

### Implementation Topics

- Security (XSS, CORS)
- Performance optimization
- SEO best practices
- Server-side considerations
- WebSocket implementation
- Cookie management
- Redis implementation

---

## Video Resources

### Playlists

1. [Channel 1](https://www.youtube.com/channel/UCnQkfv879sarKeKm7eMH_dg/playlists)
2. [React Series](https://www.youtube.com/watch?v=FgXFoSr2Db8&list=PLXQpH_kZIxTWQfh_krE4sI_8etq5rH_z6)
3. [Advanced React](https://www.youtube.com/watch?v=N-572SrMThE&list=PLGZJDzu5NntRgpuqVtEb9e2tDaRYXRZFG)
4. [Machine Coding](https://www.youtube.com/watch?v=O2dTW3uNAeQ&list=PLKmmzLM3RgQWCNh6ZxmvKKZOGHH2CYyqm)
5. [Toast Library](https://www.youtube.com/watch?v=HhpbzPMCKDc)
6. [More Tutorials](https://www.youtube.com/watch?v=5jiTVkTkPlw&list=PL4ruoTJ8LTT--I8qPdGlyWJdymkJdpTB4)

### Interview Prep

- [Interview Questions](https://www.youtube.com/watch?v=hrk-1aDP3X8)
- [Google Docs Guide](https://docs.google.com/document/d/13yliGfXu73TW4AgOU4aNkXlyTIox0YthzOEOOZ89tM0/edit)

---

## Node.js Bonus

### API Design

- File upload API design
- RESTful principles
- Error handling patterns
- Rate limiting

---

_Last Updated: 2024_
