/**
 * Feature #13: Resource Preloading APIs (React 19)
 *
 * - prefetchDNS() — prefetch DNS for future requests
 * - preconnect() — preconnect to origin (DNS + TCP + TLS)
 * - preload() — preload specific resources (fonts, scripts, etc.)
 * - preinit() — eagerly load and execute scripts/stylesheets
 *
 * No more manually adding <link rel="preload"> in index.html!
 * Call these from any component — React handles the rest.
 */
import { prefetchDNS, preconnect, preload, preinit } from "react-dom";
import { useState } from "react";

function AnalyticsDashboard() {
  // When this component renders, preload resources it will need
  prefetchDNS("https://analytics.google.com");
  preconnect("https://cdn.example.com");
  preload("https://cdn.example.com/charts.js", { as: "script" });
  preload("https://fonts.googleapis.com/css2?family=Roboto+Mono", { as: "style" });

  return (
    <div style={{ border: "1px solid #2196F3", padding: "15px", borderRadius: "8px" }}>
      <h4>Analytics Dashboard</h4>
      <p>Resources preloaded when this component rendered:</p>
      <ul>
        <li>DNS prefetched: analytics.google.com</li>
        <li>Preconnected: cdn.example.com</li>
        <li>Script preloaded: charts.js</li>
        <li>Font preloaded: Roboto Mono</li>
      </ul>
      <p style={{ color: "gray", fontSize: "12px" }}>
        Check DevTools Network tab — resources start loading before they're needed!
      </p>
    </div>
  );
}

function PaymentPage() {
  // Eagerly load payment SDK
  preinit("https://js.stripe.com/v3/", { as: "script" });
  preconnect("https://api.stripe.com");

  return (
    <div style={{ border: "1px solid #4CAF50", padding: "15px", borderRadius: "8px" }}>
      <h4>Payment Page</h4>
      <p>Stripe SDK preinit'd (eagerly loaded + executed):</p>
      <ul>
        <li>preinit: stripe v3 script</li>
        <li>preconnect: api.stripe.com</li>
      </ul>
    </div>
  );
}

export default function ResourcePreloadingDemo() {
  const [page, setPage] = useState("none");

  return (
    <div>
      <h2>13. Resource Preloading APIs</h2>
      <p>
        <code>prefetchDNS()</code>, <code>preconnect()</code>, <code>preload()</code>,{" "}
        <code>preinit()</code> — call from any component!
      </p>

      <button onClick={() => setPage("analytics")}>Load Analytics Dashboard</button>
      <button onClick={() => setPage("payment")} style={{ marginLeft: "5px" }}>Load Payment Page</button>
      <button onClick={() => setPage("none")} style={{ marginLeft: "5px" }}>Clear</button>

      <div style={{ marginTop: "10px" }}>
        {page === "analytics" && <AnalyticsDashboard />}
        {page === "payment" && <PaymentPage />}
      </div>

      <pre style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}>
{`import { prefetchDNS, preconnect, preload, preinit } from "react-dom";

function Dashboard() {
  // Call from any component — React adds to <head>
  prefetchDNS("https://analytics.google.com");
  preconnect("https://cdn.example.com");
  preload("/heavy-chart.js", { as: "script" });
  preinit("/critical.js", { as: "script" });

  return <div>Dashboard</div>;
}

// React 18: manually add in index.html
// <link rel="preconnect" href="..." />
// <link rel="preload" href="..." as="script" />`}
      </pre>
    </div>
  );
}
