console.log("hello");

const divElem = document.getElementsByClassName("div_elem")[0];
const formElem = document.getElementsByClassName("form_elem")[0];
const btnElem = document.getElementsByClassName("btn_elem")[0];

// divElem.addEventListener("click", () => alert("div Called"), {
//   capture: true,
// });
// formElem.addEventListener("click", () => alert("form Called"), {
//   capture: true,
// });
// btnElem.addEventListener("click", () => alert("btnCalled"), {
//   capture: true,
// });

divElem.addEventListener("click", (e) => func(e), { capture: true });
formElem.addEventListener("click", (e) => func(e), { capture: true });
btnElem.addEventListener("click", (e) => func(e), { capture: true });

// function alertMsg(name) {
//   alert("called " + name);
// }

function func(e) {
  e.stopPropagation();
  //   console.log(e.currentTarget, "e.currentTarget");
  //   console.log(e.target, "e.target");

  console.log({
    currentTarget: e.currentTarget.tagName,
    target: e.target.tagName,
    // thisTarget: this,
  });
}
