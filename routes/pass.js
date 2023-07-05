const express = require("express");
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require("../validators/pass");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/pass");

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