console.log("Hello world");

const elem = <div>Hello world</div>;
// const elem = React.createElement("div", { class: "qwer" }, "Hello");

ReactDOM.render(elem, document.getElementById("app"));
