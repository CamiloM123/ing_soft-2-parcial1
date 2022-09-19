const express = require("express");
const purchase_model = require("../models/purchase.model.js");
const purchase_routes = express.Router();


purchase_routes.get("/list", (req, res) => {
  purchase_routes
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json({ message: err }));
});

purchase_routes.post("/purchase", (req, res) => {
  const new_purchase = purchase_model(req.body);
  new_purchase
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json({ message: err }));
});


purchase_routes.get("/:purchaseId", (req, res) => {
  const { purchaseId } = req.params;
  purchase_model
    .findById(purchaseId)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});



module.exports = purchase_routes;