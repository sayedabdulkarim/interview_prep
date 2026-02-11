/**
 * Feature #5: useDeferredValue with initialValue (React 19)
 *
 * - New optional `initialValue` parameter added in React 19
 * - On initial render, returns initialValue
 * - Then schedules a deferred re-render with actual value
 * - Great for search/filter — input stays responsive while results defer
 */
import { useState, useDeferredValue, useMemo } from "react";

// Generate a large list to simulate heavy rendering
const allItems = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `Item ${i} — ${["React", "Node", "MongoDB", "Express", "TypeScript", "GraphQL"][i % 6]}`,
}));

function SlowList({ filter }) {
  const filtered = useMemo(() => {
    if (!filter) return allItems.slice(0, 50);
    return allItems.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    ).slice(0, 100);
  }, [filter]);

  return (
    <ul style={{ maxHeight: "300px", overflow: "auto" }}>
      {filtered.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default function UseDeferredValueDemo() {
  const [query, setQuery] = useState("");

  // NEW in React 19: initialValue parameter
  // On first render, deferredQuery = "" (initialValue)
  // Then deferred re-render happens with actual query value
  const deferredQuery = useDeferredValue(query, "");

  const isStale = query !== deferredQuery;

  return (
    <div>
      <h2>5. useDeferredValue + initialValue</h2>
      <p>New in React 19: <code>useDeferredValue(value, initialValue)</code></p>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search items... (type 'React', 'Node', etc.)"
        style={{ width: "100%", padding: "8px" }}
      />

      <p style={{ fontSize: "12px" }}>
        Input: "{query}" | Deferred: "{deferredQuery}"
        {isStale && <span style={{ color: "orange" }}> ⏳ Updating...</span>}
      </p>

      <div style={{ opacity: isStale ? 0.5 : 1, transition: "opacity 0.2s" }}>
        <SlowList filter={deferredQuery} />
      </div>
    </div>
  );
}
