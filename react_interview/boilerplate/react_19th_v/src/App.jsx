import { useState } from "react";
import UseActionStateDemo from "./components/01_UseActionStateDemo";
import UseOptimisticDemo from "./components/02_UseOptimisticDemo";
import UseFormStatusDemo from "./components/03_UseFormStatusDemo";
import UseHookDemo from "./components/04_UseHookDemo";
import UseDeferredValueDemo from "./components/05_UseDeferredValueDemo";
import RefAsPropDemo from "./components/06_RefAsPropDemo";
import RefCleanupDemo from "./components/07_RefCleanupDemo";
import ContextAsProviderDemo from "./components/08_ContextAsProviderDemo";
import DocumentMetadataDemo from "./components/09_DocumentMetadataDemo";
import FormActionsDemo from "./components/10_FormActionsDemo";
import UseEffectEventDemo from "./components/11_UseEffectEventDemo";
import ActivityDemo from "./components/12_ActivityDemo";
import ResourcePreloadingDemo from "./components/13_ResourcePreloadingDemo";
import ReactCompilerDemo from "./components/14_ReactCompilerDemo";

const demos = [
  { id: 1, name: "useActionState", component: UseActionStateDemo, version: "19.0" },
  { id: 2, name: "useOptimistic", component: UseOptimisticDemo, version: "19.0" },
  { id: 3, name: "useFormStatus", component: UseFormStatusDemo, version: "19.0" },
  { id: 4, name: "use() Hook", component: UseHookDemo, version: "19.0" },
  { id: 5, name: "useDeferredValue + initialValue", component: UseDeferredValueDemo, version: "19.0" },
  { id: 6, name: "ref as Prop", component: RefAsPropDemo, version: "19.0" },
  { id: 7, name: "Ref Cleanup", component: RefCleanupDemo, version: "19.0" },
  { id: 8, name: "Context as Provider", component: ContextAsProviderDemo, version: "19.0" },
  { id: 9, name: "Document Metadata", component: DocumentMetadataDemo, version: "19.0" },
  { id: 10, name: "Form Actions", component: FormActionsDemo, version: "19.0" },
  { id: 11, name: "useEffectEvent", component: UseEffectEventDemo, version: "19.2" },
  { id: 12, name: "Activity", component: ActivityDemo, version: "19.2" },
  { id: 13, name: "Resource Preloading", component: ResourcePreloadingDemo, version: "19.0" },
  { id: 14, name: "React Compiler", component: ReactCompilerDemo, version: "19.0" },
];

function App() {
  const [activeDemo, setActiveDemo] = useState(null);

  const ActiveComponent = activeDemo ? demos.find((d) => d.id === activeDemo)?.component : null;

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      {/* Sidebar */}
      <nav
        style={{
          width: "260px",
          background: "#1a1a2e",
          color: "white",
          padding: "20px",
          overflowY: "auto",
          flexShrink: 0,
        }}
      >
        <h2 style={{ margin: "0 0 5px", fontSize: "20px" }}>React 19 Features</h2>
        <p style={{ color: "#888", fontSize: "12px", margin: "0 0 20px" }}>14 Interactive Demos</p>

        <button
          onClick={() => setActiveDemo(null)}
          style={{
            width: "100%",
            padding: "8px 12px",
            marginBottom: "15px",
            background: !activeDemo ? "#e94560" : "transparent",
            color: "white",
            border: "1px solid #e94560",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          All Demos
        </button>

        {demos.map((demo) => (
          <button
            key={demo.id}
            onClick={() => setActiveDemo(demo.id)}
            style={{
              width: "100%",
              padding: "8px 12px",
              marginBottom: "4px",
              background: activeDemo === demo.id ? "#16213e" : "transparent",
              color: activeDemo === demo.id ? "#e94560" : "#ccc",
              border: "none",
              borderLeft: activeDemo === demo.id ? "3px solid #e94560" : "3px solid transparent",
              cursor: "pointer",
              textAlign: "left",
              fontSize: "13px",
              borderRadius: "0 4px 4px 0",
            }}
          >
            <span style={{ color: "#666", marginRight: "6px" }}>#{demo.id}</span>
            {demo.name}
            <span
              style={{
                float: "right",
                fontSize: "10px",
                background: demo.version === "19.2" ? "#e94560" : "#333",
                padding: "1px 5px",
                borderRadius: "3px",
              }}
            >
              {demo.version}
            </span>
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "30px", overflowY: "auto" }}>
        {ActiveComponent ? (
          <ActiveComponent />
        ) : (
          <div>
            <h1>React 19 — All Features Demo</h1>
            <p>Click a feature in the sidebar or scroll through all demos below.</p>
            <hr />
            {demos.map((demo) => {
              const Component = demo.component;
              return (
                <div
                  key={demo.id}
                  style={{
                    marginBottom: "40px",
                    paddingBottom: "40px",
                    borderBottom: "2px solid #eee",
                  }}
                >
                  <Component />
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
