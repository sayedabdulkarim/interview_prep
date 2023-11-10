// const throttle = (fn, delay) => {
//   let last = 0;

//   return (...args) => {
//     const now = new Date().getTime();
//     if (now - last < delay) return;
//     last = now;
//     return fn(...args);
//   };
// };

// window.addEventListener(
//   "resize",
//   console.log("Window resized")
//   //   throttle(function () {
//   //   }, 1000)
// );

///////////
// Define a simple event handler
function handleResize() {
  console.log("Window resized from from handle");
}
window.addEventListener("resize", handleResize);

// Define a throttle function
const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    console.log({
      now,
      last,
      delay,
    });
    return fn(...args);
  };
};
// Attach the event handler directly to the resize event
window.addEventListener(
  "resize",
  throttle(function () {
    console.log("Window resized from throttle");
  }, 1000)
);

// After some time, remove the direct event handler
//   setTimeout(() => {
//     window.removeEventListener("resize", handleResize);

//     // Attach the throttled event handler to compare
//     const throttledHandleResize = throttle(function () {
//       console.log("Throttled resize");
//     }, 1000);

//     window.addEventListener("resize", throttledHandleResize);

//     // Optionally, remove the throttled handler after some time
//     setTimeout(() => {
//       window.removeEventListener("resize", throttledHandleResize);
//     }, 10000); // Remove after 10 seconds for example
//   }, 10000); // Switch to throttled after 10 seconds for example
