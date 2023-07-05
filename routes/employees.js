const express = require("express");
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require("../validators/employees");
const { getItems, getItem, createItem, deleteItem } = require("../controllers/employees");

// Todo CRUD
// Lista
router.get("/", getItems);
// Obtiene
router.get("/:id", validatorGetItem, getItem);
// Crea
router.post("/", validatorCreateItem, createItem);
// Borrar
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;