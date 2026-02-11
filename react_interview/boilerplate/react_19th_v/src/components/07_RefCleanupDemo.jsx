/**
 * Feature #7: Ref Cleanup Functions (React 19)
 *
 * - Return a cleanup function from ref callback
 * - Like useEffect cleanup but for refs
 * - Runs when element unmounts or ref changes
 * - Old way: ref callback with null check — DEPRECATED
 */
import { useState } from "react";

export default function RefCleanupDemo() {
  const [showVideo, setShowVideo] = useState(false);
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()} — ${msg}`]);

  return (
    <div>
      <h2>7. Ref Cleanup Functions</h2>
      <p>Return cleanup function from ref callback — like useEffect cleanup for refs.</p>

      <button onClick={() => setShowVideo((v) => !v)}>
        {showVideo ? "Hide" : "Show"} Video Player
      </button>

      {showVideo && (
        <div
          ref={(node) => {
            // Setup — element mounted
            addLog("🟢 Video container MOUNTED — setting up observers");
            const observer = new ResizeObserver(() => {
              // Observing resize...
            });
            observer.observe(node);

            // ✅ React 19: Return cleanup function!
            return () => {
              addLog("🔴 Video container UNMOUNTED — cleaning up observers");
              observer.disconnect();
            };
          }}
          style={{ border: "2px solid blue", padding: "20px", margin: "10px 0", background: "#e3f2fd" }}
        >
          📹 Video Player (resize observer attached)
        </div>
      )}

      <h4>Lifecycle Logs:</h4>
      <div style={{ background: "#f5f5f5", padding: "10px", maxHeight: "200px", overflow: "auto" }}>
        {logs.length === 0 ? (
          <p style={{ color: "gray" }}>Toggle video to see ref cleanup in action...</p>
        ) : (
          logs.map((log, i) => <div key={i}>{log}</div>)
        )}
      </div>

      <button onClick={() => setLogs([])} style={{ marginTop: "5px" }}>Clear Logs</button>

      <pre style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}>
{`// React 19 — ref with cleanup
<div ref={(node) => {
  // Setup
  const observer = new ResizeObserver(callback);
  observer.observe(node);

  // Cleanup (NEW!)
  return () => observer.disconnect();
}} />

// React 18 — null check (deprecated)
<div ref={(node) => {
  if (node) { /* setup */ }
  else { /* cleanup?? messy */ }
}} />`}
      </pre>
    </div>
  );
}
