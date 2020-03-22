"use strict";
const keyApi = require("../constants");
const pushNotifications = require("./pushNotification");
let Pusher = new pushNotifications();
exports.init = async function() {
  const addButton = document.getElementById("create-item");
  const removeButton = document.getElementById("remove-item");
  const itemName = document.getElementById("name");
  const itemUser = document.getElementById("user");
  // const items = JSON.parse(localStorage.getItem("items"));
  if (addButton) {
    //listen add item click
    addButton.addEventListener("click", function() {
      let name = itemName.value;
      let user = itemUser.value;
      createItem(name, user);
    });
  }
  async function createItem(name, user) {
    //Ceci est également non utilisé, cela fait partie de mes expérimentations
    //, elle fonctionne mais n'est pas implémenté
    // let imageUrl = "";
    // let newItem = {};
    // let response = await fetch(
    //   `https://pixabay.com/api/?q=${name}&key=${keyApi}`
    // );
    // response = await response.json();
    // let imageId = itemId.id;
    // newItem = {
    //   id: itemId.id,
    //   name: name,
    //   user: user,
    //   imageUrl: response.hits[0].largeImageURL
    // };
    // let tempItems = items;
    // tempItems.push(newItem);
    // localStorage.removeItem("items");
    // localStorage.setItem("items", JSON.stringify(tempItems));
    Pusher.pushNotification(`${user} ramene ${name}`);
  }
  if (removeButton) {
    removeButton.addEventListener("click", function() {
      const itemName = document.getElementById("name-item");
      const itemUser = document.getElementById("user-item");
      Pusher.pushNotification(
        `${itemUser.textContent} ne ramene plus ${itemName.textContent}`
      );
    });
  }
};
