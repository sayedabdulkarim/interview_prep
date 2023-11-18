// https://fakestoreapi.com/carts?limit=2
// https://fakestoreapi.com/products/1

function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

Person.prototype.fullName = function () {
  console.log("hello");
};

const PersonOne = new Person("Ram", " Singh");

const products = [];
const cards = [];

function getCards() {
  fetch("https://fakestoreapi.com/carts?limit=2")
    .then((res) => res.json())
    .then((res) => {
      console.log(res, " ress");
      const prodArr = res.flatMap((i) => [...i.products]);
      const singleProd = prodArr.map(
        (i) => `https://fakestoreapi.com/products/${i.productId}`
      );
      getProduct(singleProd);
    })
    .catch((err) => console.log(err, " errr"));
}

function getProduct(urls) {
  const promises = urls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  Promise.all(promises)
    .then((res) => console.log(res, " from all")) // 'res' will be an array of results from each fetch
    .catch((err) => console.log(err, " catch from all"));
}

getCards();

////////////////////////////////////////////////

// const getCards = async () => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/carts?limit=2");
//     const carts = await response.json();
//     console.log(carts, " carts");

//     const productIds = new Set(
//       carts.flatMap((cart) => cart.products.map((p) => p.productId))
//     );
//     await getProduct(Array.from(productIds));
//   } catch (err) {
//     console.log(err, "Error fetching carts");
//   }
// };

// const getProduct = async (productIds) => {
//   try {
//     const promises = productIds.map((id) =>
//       fetch(`https://fakestoreapi.com/products/${id}`).then((response) =>
//         response.json()
//       )
//     );
//     const products = await Promise.all(promises);
//     console.log(products, "Products from all carts");
//   } catch (err) {
//     console.log(err, "Error fetching products");
//   }
// };

// getCards();
