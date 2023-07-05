const { check } = require("express-validator");
const validationResult = require ("../utils/handleValidator");

const validatorCreateItem = [
    check("date")
    .exists()
    .notEmpty(),
    check("id")
    .exists()
    .notEmpty(),
    check("accion")
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