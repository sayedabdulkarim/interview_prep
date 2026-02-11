/**
 * Feature #11: useEffectEvent (React 19.2)
 *
 * - Separate event logic from Effect dependencies
 * - Always sees latest props/state
 * - Does NOT cause effect to re-run
 * - Solves the "stale closure + unnecessary re-run" problem
 * - Must be declared in same component/hook as the Effect
 */
import { useState, useEffect, useEffectEvent } from "react";

export default function UseEffectEventDemo() {
  const [url, setUrl] = useState("https://api.example.com/users");
  const [theme, setTheme] = useState("light");
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()} — ${msg}`]);

  // ✅ useEffectEvent — reads latest theme without re-triggering effect
  const onFetched = useEffectEvent((data) => {
    addLog(`Fetched from ${url}. Theme was: ${theme}. Data: ${data}`);
    // This always sees latest `theme` — but changing theme does NOT re-run the effect!
  });

  useEffect(() => {
    addLog(`🔄 Effect running — fetching: ${url}`);

    // Simulate fetch
    const timer = setTimeout(() => {
      onFetched(`[mock data for ${url}]`);
    }, 1000);

    return () => clearTimeout(timer);
  }, [url]); // theme is NOT a dependency — but onFetched reads it!

  return (
    <div>
      <h2>11. useEffectEvent (React 19.2)</h2>
      <p>Event logic separated from effects. Always latest state, no unnecessary re-runs.</p>

      <div>
        <strong>URL (changes trigger effect):</strong>
        <br />
        <button onClick={() => setUrl("https://api.example.com/users")}>/users</button>
        <button onClick={() => setUrl("https://api.example.com/posts")} style={{ marginLeft: "5px" }}>/posts</button>
        <button onClick={() => setUrl("https://api.example.com/comments")} style={{ marginLeft: "5px" }}>/comments</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <strong>Theme (does NOT trigger effect re-run):</strong>
        <br />
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")} style={{ marginLeft: "5px" }}>Dark</button>
        <button onClick={() => setTheme("blue")} style={{ marginLeft: "5px" }}>Blue</button>
        <span style={{ marginLeft: "10px" }}>Current: {theme}</span>
      </div>

      <h4>Logs:</h4>
      <div style={{ background: "#f5f5f5", padding: "10px", maxHeight: "200px", overflow: "auto" }}>
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
      <button onClick={() => setLogs([])} style={{ marginTop: "5px" }}>Clear Logs</button>

      <p style={{ color: "gray", fontSize: "12px" }}>
        Notice: Changing URL triggers effect (🔄). Changing theme does NOT — but the log still
        shows the latest theme value!
      </p>

      <pre style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}>
{`// Without useEffectEvent — theme causes re-runs
useEffect(() => {
  fetch(url).then(data => {
    console.log(theme); // stale or causes re-run
  });
}, [url, theme]); // theme shouldn't be here!

// With useEffectEvent — clean separation
const onFetched = useEffectEvent((data) => {
  console.log(theme); // always latest, no re-run
});

useEffect(() => {
  fetch(url).then(onFetched);
}, [url]); // theme NOT needed!`}
      </pre>
    </div>
  );
}
