console.log("Hello");

customElements.define(
  "cust-tag",
  class extends HTMLElement {
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" });

      // Add styles
      const style = document.createElement("style");
      style.textContent = `
          .error {
            color: green;
            font-weight: bold;
          }
        `;

      // Append the style to the shadow root
      shadowRoot.appendChild(style);

      // Add content
      shadowRoot.innerHTML += "<p class='error'>Hello Shadow DOM</p>";
    }
  }
);

customElements.define(
  "temp-tag",
  class extends HTMLElement {
    connectedCallback() {
      //   const template = document.createElement("template");
      const template = this.attachShadow({ mode: "open" });

      template.innerHTML = `
        <div>
            <button>Shadow 1 button</button>
        </div>
      `;
      //   this.attachShadow({ mode: "open" });
    }
  }
);
