const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const axios = require("axios");

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(express.static("pwa"));

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/party", (req, res) => {
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({ data }) => res.redirect(`/party/${data._id}`))
    .catch(err => res.send(err));
});

app.post("/party/:id/items", (req, res) => {
  axios
    .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body)
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch(err => res.send(err));
});

app.get("/party/:id", (req, res) => {
  axios
    .get(`${process.env.API_URL}/party/${req.params.id}`)
    .then(({ data }) =>
      res.render("party", {
        party: data,
        name: data.name,
        author: data.author,
        _id: data._id,
        title: data.name,
        url: `${process.env.FRONT_URL_PROD}/party/${data._id}`,
        items: data.items
      })
    )
    .catch(err => console.log(err));
});

app.get("/item/:partyID/:id", function(req, res) {
  axios
    .delete(
      `${process.env.API_URL}/party/${req.params.partyID}/items/${req.params.id}`
    )
    .then(() => res.redirect(`/party/${req.params.partyID}`))
    .catch(err => res.send(err));
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));
