/**
 * Feature #9: Document Metadata (React 19)
 *
 * - Use <title>, <meta>, <link> directly inside components
 * - React auto-hoists them to <head>
 * - Works in client, SSR, and Server Components
 * - No more react-helmet needed!
 */
import { useState } from "react";

function ProductPage({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin: "10px 0" }}>
      {/* These get hoisted to <head> automatically! */}
      <title>{product.name} — React 19 Shop</title>
      <meta name="description" content={product.description} />
      <link rel="canonical" href={`https://shop.example.com/products/${product.id}`} />

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: <strong>${product.price}</strong></p>
      <p style={{ color: "gray", fontSize: "12px" }}>
        Check browser tab — title changed to "{product.name} — React 19 Shop"!
      </p>
    </div>
  );
}

const products = [
  { id: 1, name: "MacBook Pro", description: "Apple M4 Pro laptop", price: 1999 },
  { id: 2, name: "iPhone 16", description: "Latest iPhone with A18 chip", price: 999 },
  { id: 3, name: "AirPods Pro", description: "Active noise cancellation earbuds", price: 249 },
];

export default function DocumentMetadataDemo() {
  const [selectedId, setSelectedId] = useState(1);
  const product = products.find((p) => p.id === selectedId);

  return (
    <div>
      <h2>9. Document Metadata</h2>
      <p>
        Use <code>{"<title>"}</code>, <code>{"<meta>"}</code>, <code>{"<link>"}</code> directly in
        components. Auto-hoisted to {"<head>"}. No react-helmet needed!
      </p>

      <div>
        {products.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedId(p.id)}
            style={{
              fontWeight: selectedId === p.id ? "bold" : "normal",
              marginRight: "5px",
              padding: "5px 10px",
            }}
          >
            {p.name}
          </button>
        ))}
      </div>

      <ProductPage product={product} />

      <pre style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}>
{`// React 19 — metadata inside components!
function ProductPage({ product }) {
  return (
    <div>
      <title>{product.name} — Shop</title>
      <meta name="description" content={product.desc} />
      <link rel="canonical" href={product.url} />
      <h1>{product.name}</h1>
    </div>
  );
}

// React 18 — needed react-helmet
// import { Helmet } from 'react-helmet';
// <Helmet><title>...</title></Helmet>`}
      </pre>
    </div>
  );
}
