/**
 * Feature #4: use() Hook (React 19)
 *
 * - Read promises and context directly in render
 * - Suspends component while promise resolves
 * - Can be used CONDITIONALLY (unlike other hooks!)
 * - Can be used inside if/else, loops, after early returns
 * - Replaces some useContext + useEffect patterns
 */
import { use, Suspense, createContext, useState } from "react";

// --- Demo 1: use() with Promises ---
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = {
        1: { name: "Abdul", role: "Frontend Dev" },
        2: { name: "Rahul", role: "Backend Dev" },
        3: { name: "Priya", role: "Full Stack Dev" },
      };
      resolve(users[id] || { name: "Unknown", role: "N/A" });
    }, 1500);
  });
}

function UserCard({ userPromise }) {
  // use() suspends until promise resolves — no useEffect needed!
  const user = use(userPromise);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <strong>{user.name}</strong> — {user.role}
    </div>
  );
}

// --- Demo 2: use() with Context (conditional!) ---
const ThemeContext = createContext("light");

function ThemedBox({ showTheme }) {
  // use() can be called CONDITIONALLY — useContext cannot!
  if (!showTheme) {
    return <p>Theme hidden. Toggle to see.</p>;
  }

  const theme = use(ThemeContext);
  return (
    <div
      style={{
        padding: "10px",
        background: theme === "dark" ? "#333" : "#f0f0f0",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      Current theme: <strong>{theme}</strong>
    </div>
  );
}

export default function UseHookDemo() {
  const [userId, setUserId] = useState(1);
  const [userPromise, setUserPromise] = useState(() => fetchUser(1));
  const [showTheme, setShowTheme] = useState(true);
  const [theme, setTheme] = useState("light");

  const handleFetchUser = (id) => {
    setUserId(id);
    setUserPromise(fetchUser(id));
  };

  return (
    <div>
      <h2>4. use() Hook</h2>
      <p>Read promises & context in render. Can be used conditionally!</p>

      <h4>Demo 1: use() with Promise</h4>
      <div>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => handleFetchUser(id)}
            style={{ fontWeight: userId === id ? "bold" : "normal", marginRight: "5px" }}
          >
            User {id}
          </button>
        ))}
      </div>
      <Suspense fallback={<p>Loading user...</p>}>
        <UserCard userPromise={userPromise} />
      </Suspense>

      <h4>Demo 2: use() with Context (conditional)</h4>
      <ThemeContext value={theme}>
        <button onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
          Toggle Theme
        </button>
        <button onClick={() => setShowTheme((s) => !s)} style={{ marginLeft: "5px" }}>
          {showTheme ? "Hide" : "Show"} Theme Box
        </button>
        <ThemedBox showTheme={showTheme} />
      </ThemeContext>
      <p style={{ color: "gray", fontSize: "12px" }}>
        Notice: Context as Provider (Feature #8) also shown here — no Context.Provider!
      </p>
    </div>
  );
}
