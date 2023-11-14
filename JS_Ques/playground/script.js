console.log("Hello");

const items = document.querySelectorAll(".item");

function colorItGreen(item) {
  //   console.log(this.innerHtml);
  item.style.backgroundColor = "green";
}

for (let i = 0; i < items?.length; i++) {
  //   console.log(items[i], " itemmm");
  //   items[i].addEventListener("click", colorItGreen());
  //   items[i].addEventListener("click", () => console.log("qwert"));
  items[i].addEventListener("click", () => colorItGreen(items[i]));
}

// const items = document.querySelectorAll(".item");

// function colorItGreen(item) {
//     item.style.backgroundColor = "green";
// }

// for (let i = 0; i < items.length; i++) {
//     console.log(items[i], " itemmm");
//     // Add event listener correctly
//     items[i].addEventListener("click", function() {
//         colorItGreen(items[i]);
//     });
// }
