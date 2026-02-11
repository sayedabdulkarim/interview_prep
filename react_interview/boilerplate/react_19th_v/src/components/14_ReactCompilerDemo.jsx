/**
 * Feature #14: React Compiler (React 19)
 *
 * - Auto-memoization — compiler does it for you
 * - No more manual useMemo(), useCallback(), React.memo()
 * - Compiler analyzes code and adds memoization where needed
 * - Works at BUILD time (Babel plugin)
 * - This demo shows the CONCEPT — actual compiler needs babel-plugin-react-compiler
 */
import { useState, useMemo, useCallback, memo } from "react";

// ---- REACT 18 WAY (manual memoization) ----

const ExpensiveListOld = memo(function ExpensiveListOld({ items, onSelect }) {
  console.log("ExpensiveListOld rendered");
  return (
    <ul>
      {items.map((item) => (
        <li key={item} onClick={() => onSelect(item)} style={{ cursor: "pointer" }}>
          {item}
        </li>
      ))}
    </ul>
  );
});

function React18Way() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null);

  // Manual memoization needed in React 18
  const items = useMemo(() => ["Apple", "Banana", "Cherry", "Date"], []);
  const handleSelect = useCallback((item) => setSelected(item), []);

  return (
    <div style={{ border: "1px solid orange", padding: "10px", margin: "10px 0" }}>
      <h4>React 18 Way (Manual Memoization)</h4>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
      <p>Selected: {selected || "none"}</p>
      <ExpensiveListOld items={items} onSelect={handleSelect} />
      <p style={{ fontSize: "12px", color: "gray" }}>
        Need: useMemo for items, useCallback for handler, memo() for component
      </p>
    </div>
  );
}

// ---- REACT 19 WAY (compiler handles it) ----

// No memo() wrapper, no useMemo, no useCallback!
function ExpensiveListNew({ items, onSelect }) {
  console.log("ExpensiveListNew rendered");
  return (
    <ul>
      {items.map((item) => (
        <li key={item} onClick={() => onSelect(item)} style={{ cursor: "pointer" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function React19Way() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null);

  // No memoization needed — React Compiler handles it!
  const items = ["Apple", "Banana", "Cherry", "Date"];
  const handleSelect = (item) => setSelected(item);

  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px 0" }}>
      <h4>React 19 Way (Compiler Auto-Memoizes)</h4>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
      <p>Selected: {selected || "none"}</p>
      <ExpensiveListNew items={items} onSelect={handleSelect} />
      <p style={{ fontSize: "12px", color: "gray" }}>
        No useMemo, useCallback, or memo() — Compiler does it at build time!
      </p>
    </div>
  );
}

export default function ReactCompilerDemo() {
  return (
    <div>
      <h2>14. React Compiler (Auto-Memoization)</h2>
      <p>
        Compiler analyzes your code at build time and adds memoization automatically.
        No more manual useMemo/useCallback/React.memo!
      </p>

      <React18Way />
      <React19Way />

      <pre style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}>
{`// React 18 — manual memoization hell
const List = memo(({ items, onSelect }) => { ... });

function App() {
  const items = useMemo(() => [...], []);
  const onSelect = useCallback((item) => { ... }, []);
  return <List items={items} onSelect={onSelect} />;
}

// React 19 — just write normal code!
function List({ items, onSelect }) { ... }

function App() {
  const items = [...];
  const onSelect = (item) => { ... };
  return <List items={items} onSelect={onSelect} />;
}
// Compiler adds memoization at build time!

// Setup: npm install babel-plugin-react-compiler
// vite.config.js:
// plugins: [react({ babel: {
//   plugins: ['babel-plugin-react-compiler']
// }})]`}
      </pre>
    </div>
  );
}
