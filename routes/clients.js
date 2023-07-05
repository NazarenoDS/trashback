const express = require("express");
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require("../validators/clients");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/client");

// Todo CRUD
// Lista
router.get("/", getItems);
// Obtiene
router.get("/:id", validatorGetItem, getItem);
// Crea
router.post("/", validatorCreateItem, createItem);
// Actualizar
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem)
// Borrar
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;