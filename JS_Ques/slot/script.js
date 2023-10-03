customElements.define(
  "my-card",
  class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: "open" }).innerHTML = `
      <style>
        .card {
          border: 1px solid #ccc;
          padding: 16px;
        }
      </style>
      <div class="card">
        <slot name="card-title">Default Title</slot>
        <hr>
        <slot name="card-content">Default Content</slot>
      </div>
    `;
    }
  }
);
