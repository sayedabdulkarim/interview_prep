/**
 * Feature #6: ref as prop (React 19)
 *
 * - Function components now accept `ref` directly as a prop
 * - No more forwardRef wrapper needed!
 * - forwardRef is DEPRECATED in React 19
 */
import { useRef } from "react";

// ✅ React 19 way — ref is just a prop!
function FancyInput({ placeholder, label, ref }) {
  return (
    <div>
      <label>{label}: </label>
      <input
        ref={ref}
        placeholder={placeholder}
        style={{ padding: "8px", border: "2px solid #4CAF50", borderRadius: "4px" }}
      />
    </div>
  );
}

// ❌ Old way (React 18) — needed forwardRef
// const FancyInput = forwardRef(function FancyInput({ placeholder, label }, ref) {
//   return <input ref={ref} placeholder={placeholder} />;
// });

function FancyButton({ children, ref }) {
  return (
    <button
      ref={ref}
      style={{ padding: "10px 20px", background: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
    >
      {children}
    </button>
  );
}

export default function RefAsPropDemo() {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <div>
      <h2>6. ref as Prop (No forwardRef!)</h2>
      <p>Function components accept ref directly. forwardRef is deprecated.</p>

      <FancyInput ref={inputRef} placeholder="Type here..." label="Name" />
      <br />
      <FancyButton ref={buttonRef}>Click Me</FancyButton>
      <br /><br />

      <button onClick={() => inputRef.current?.focus()}>
        Focus Input (via ref)
      </button>
      <button onClick={() => alert(`Button text: ${buttonRef.current?.textContent}`)} style={{ marginLeft: "5px" }}>
        Read Button Text (via ref)
      </button>

      <pre style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}>
{`// React 19 — ref is just a prop
function FancyInput({ placeholder, ref }) {
  return <input ref={ref} placeholder={placeholder} />;
}

// React 18 — needed forwardRef wrapper
const FancyInput = forwardRef((props, ref) => {
  return <input ref={ref} placeholder={props.placeholder} />;
});`}
      </pre>
    </div>
  );
}
