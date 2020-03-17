const clipboard = require("./clipboard");
const shareModule = require("./share");

// const $buttonCopy = document.getElementById("copy");
clipboard.init();
shareModule.share();

// $buttonCopy.addEventListener("click", function copy() {
//   var $copyText = document.getElementById("url");
//   $copyText.select();
//   document.execCommand("copy");
// });
