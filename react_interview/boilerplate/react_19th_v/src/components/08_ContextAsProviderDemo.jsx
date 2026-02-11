/**
 * Feature #8: <Context> as Provider (React 19)
 *
 * - Use <Context value={}> directly — no .Provider needed!
 * - <Context.Provider> is DEPRECATED
 * - Cleaner, less boilerplate
 */
import { createContext, use, useState } from "react";

const UserContext = createContext(null);
const ThemeContext = createContext("light");

function UserInfo() {
  const user = use(UserContext);
  const theme = use(ThemeContext);

  return (
    <div
      style={{
        padding: "15px",
        background: theme === "dark" ? "#333" : "#f0f0f0",
        color: theme === "dark" ? "white" : "black",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <p>Name: <strong>{user?.name}</strong></p>
      <p>Role: <strong>{user?.role}</strong></p>
      <p>Theme: <strong>{theme}</strong></p>
    </div>
  );
}

export default function ContextAsProviderDemo() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <h2>8. Context as Provider</h2>
      <p><code>{"<Context.Provider>"}</code> is deprecated. Use <code>{"<Context value={}>"}</code> directly.</p>

      {/* ✅ React 19 — direct Context as provider */}
      <UserContext value={{ name: "Abdul", role: "Frontend Dev" }}>
        <ThemeContext value={theme}>
          <UserInfo />
        </ThemeContext>
      </UserContext>

      <button onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
        Toggle Theme
      </button>

      <pre style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}>
{`// ✅ React 19
<UserContext value={{ name: "Abdul" }}>
  <ThemeContext value="dark">
    <App />
  </ThemeContext>
</UserContext>

// ❌ React 18 (deprecated)
<UserContext.Provider value={{ name: "Abdul" }}>
  <ThemeContext.Provider value="dark">
    <App />
  </ThemeContext.Provider>
</UserContext.Provider>`}
      </pre>
    </div>
  );
}
