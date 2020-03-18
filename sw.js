addEventListener("install", event => {
  console.log("Hello from the service worker");
});
addEventListener("fetch", event => {
  console.log(event);
});
