// const data = [
//   {
//     name: "One",
//     age: 11,
//   },
//   {
//     name: "Two",
//     age: 22,
//   },
//   {
//     name: "Three",
//     age: 33,
//   },
// ];

// const appElem = document.querySelector(".app");

// data.map((i) => {
//   //   const elem = document.createElement("p");
//   //   elem.innerText = `${i.name} : ${i.age}`;
//   const elem = `${i.name} : ${i.age}`;
//   //   appElem.innerHTML = elem;
//   appElem.append(elem);
// });

const appElem = document.querySelector(".app");

appElem.addEventListener("click", () =>
  console.log(appElem.innerText, "clickeddd")
);

console.log("qwerty");
