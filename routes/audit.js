const express = require("express");
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require("../validators/audit");
const { getItems, getItem, createItem } = require("../controllers/audit");

// Todo CRUD
// Lista
router.get("/", getItems);
// Obtiene
router.get("/:id", validatorGetItem, getItem);
// Crea
router.post("/", validatorCreateItem, createItem);

module.exports = router;