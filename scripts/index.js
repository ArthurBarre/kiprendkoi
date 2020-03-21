const regeneratorRuntime = require("regenerator-runtime").path
const clipboard = require("./clipboard");
const shareModule = require("./share");
const addItem = require("./addItem");
clipboard.init();
shareModule.share();
addItem.add();

if (localStorage.getItem("items") === null) {
  localStorage.setItem("items", JSON.stringify([]));
}
