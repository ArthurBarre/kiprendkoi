const regeneratorRuntime = require("regenerator-runtime").path;
const clipboard = require("./clipboard");
const shareModule = require("./share");
const addItem = require("./addItem");
const pushNotifications = require("./pushNotification");
clipboard.init();
shareModule.share();
addItem.add();
pushNotifications.notification();

if (localStorage.getItem("items") === null) {
  localStorage.setItem("items", JSON.stringify([]));
}