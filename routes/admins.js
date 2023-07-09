const express = require("express");
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require("../validators/admins");
const { getItems, getItem, createItem, deleteItem } = require("../controllers/admins");

// Todo CRUD
// Lista
router.get("/", getItems);
// Obtiene
router.get("/:email", validatorGetItem, getItem);
// Crea
router.post("/", validatorCreateItem, createItem);
// Borrar
router.delete("/:email", validatorGetItem, deleteItem);

module.exports = router;