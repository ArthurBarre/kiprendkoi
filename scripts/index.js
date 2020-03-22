const regeneratorRuntime = require("regenerator-runtime").path;
const clipboard = require("./clipboard");
const shareModule = require("./share");
const addItem = require("./manageItem");
const pushNotifications = require("./pushNotification");

clipboard.init();
shareModule.share();
addItem.init();
let Pusher = new pushNotifications();
//check support
Pusher.checkSupport();
//check permission
Pusher.checkPermission();
//init items in localstorage
if (localStorage.getItem("items") === null) {
  localStorage.setItem("items", JSON.stringify([]));
}
