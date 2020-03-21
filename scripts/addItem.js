"use strict";
const axios = require("axios");
const keyApi = require("../constants");
exports.add = function() {
  const addButton = document.getElementById("create-item");
  const itemName = document.getElementById("name");
  const itemUser = document.getElementById("user");
  addButton.addEventListener("click", function() {
    let name = itemName.value;
    let user = itemUser.value;
    createItem(name, user);
  });
  function getImage(name) {
    axios
      .get(
        `https://pixabay.com/api/?q=${name}&key=15682507-3e8e250fcfcf0d1690e9a1d6e`
      )
      .then(data => console.log(data.data.hits[0].largeImageUR));
  }
  function createItem(name, user) {
    let newItem = {
      name: name,
      user: user,
      imageUrl: getImage(name)
    };
  }
};
