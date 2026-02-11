/**
 * Feature #12: <Activity /> Component (React 19.2)
 *
 * - Two modes: "visible" and "hidden"
 * - Hidden: hides children, unmounts effects, defers updates
 * - Visible: shows children, mounts effects, processes updates
 * - Preserves STATE even when hidden (unlike conditional rendering)
 * - Great for: tabs, pre-rendering, back navigation
 *
 * NOTE: Activity is still experimental in 19.2
 * Import from 'react' — may need unstable_ prefix
 */
import { useState, useEffect, unstable_Activity as Activity } from "react";

function Timer({ label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + 1), 1000);
    console.log(`${label}: Timer effect MOUNTED`);
    return () => {
      clearInterval(id);
      console.log(`${label}: Timer effect UNMOUNTED`);
    };
  }, [label]);

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", margin: "5px 0" }}>
      <strong>{label}</strong>: Count = {count}
    </div>
  );
}

function ExpensiveComponent() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "10px", border: "1px solid #4CAF50", margin: "5px 0" }}>
      <strong>Expensive Form (state preserved when hidden!)</strong>
      <br />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something, hide, then show again..."
        style={{ width: "100%", padding: "8px" }}
      />
      <p>You typed: "{text}"</p>
    </div>
  );
}

export default function ActivityDemo() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <h2>12. {"<Activity />"} Component (React 19.2)</h2>
      <p>
        Hidden mode: hides children, unmounts effects, but <strong>preserves state</strong>.
        Unlike conditional rendering which destroys state.
      </p>

      <div>
        <button
          onClick={() => setActiveTab("tab1")}
          style={{ fontWeight: activeTab === "tab1" ? "bold" : "normal", padding: "8px 16px" }}
        >
          Tab 1 (Timer)
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          style={{ fontWeight: activeTab === "tab2" ? "bold" : "normal", padding: "8px 16px", marginLeft: "5px" }}
        >
          Tab 2 (Form)
        </button>
        <button
          onClick={() => setActiveTab("tab3")}
          style={{ fontWeight: activeTab === "tab3" ? "bold" : "normal", padding: "8px 16px", marginLeft: "5px" }}
        >
          Tab 3 (Timer)
        </button>
      </div>

      {/* Activity preserves state when hidden */}
      <Activity mode={activeTab === "tab1" ? "visible" : "hidden"}>
        <Timer label="Tab 1 Timer" />
      </Activity>

      <Activity mode={activeTab === "tab2" ? "visible" : "hidden"}>
        <ExpensiveComponent />
      </Activity>

      <Activity mode={activeTab === "tab3" ? "visible" : "hidden"}>
        <Timer label="Tab 3 Timer" />
      </Activity>

      <p style={{ color: "gray", fontSize: "12px", marginTop: "10px" }}>
        Try: Type in Tab 2's input → switch to Tab 1 → come back to Tab 2.
        Your text is still there! Effects unmount when hidden (timer pauses).
      </p>

      <h4>Activity vs Conditional Rendering:</h4>
      <pre style={{ background: "#f5f5f5", padding: "10px" }}>
{`// ✅ Activity — state preserved, effects unmounted
<Activity mode={active ? "visible" : "hidden"}>
  <ExpensiveForm />
</Activity>

// ❌ Conditional rendering — state LOST
{active && <ExpensiveForm />}

// ❌ CSS display:none — effects still running!
<div style={{ display: active ? "block" : "none" }}>
  <ExpensiveForm />
</div>`}
      </pre>
    </div>
  );
}
