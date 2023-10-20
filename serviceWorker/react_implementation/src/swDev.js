let url = `${process.env.PUBLIC_URL}/sw.js`;

export default function swDev() {
  console.log(url, " urll");
  navigator.serviceWorker
    .register(url)
    .then((res) => console.log(res, " resss"))
    .catch((err) => console.log(err, " errrr"));
}
