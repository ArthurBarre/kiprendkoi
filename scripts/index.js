const clipboard = require("./clipboard");
const shareModule = require("./share");

clipboard.init();
shareModule.share();

const button = document.getElementById("test");

button.addEventListener("click", function() {
  console.log("test");
});
