const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const axios = require("axios");

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));

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
        title: data.name,
        url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`
      })
    )
    .catch(err => console.log(err));
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));
