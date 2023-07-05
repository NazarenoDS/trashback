const { check } = require("express-validator");
const validationResult = require ("../utils/handleValidator");

const validatorCreateItem = [
    check("nombre")
    .exists()
    .notEmpty(),
    check("places")
    .exists()
    .notEmpty(),
    check("date")
    .exists()
    .notEmpty(),
    check("price")
    .exists()
    .notEmpty(),
    check("state")
    .exists()
    .notEmpty(),
    check("sMaintenance")
    .exists()
    .notEmpty(),
    check("oService")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validationResult(req, res, next)
    }
];

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validationResult(req, res, next)
    }
];

module.exports = { validatorCreateItem, validatorGetItem };