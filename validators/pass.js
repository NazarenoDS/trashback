const { check } = require("express-validator");
const validationResult = require ("../utils/handleValidator");

const validatorCreateItem = [
    check("game")
    .exists()
    .notEmpty(),
    check("date")
    .exists()
    .notEmpty(),
    check("price")
    .exists()
    .notEmpty(),
    check("nticket")
    .exists()
    .notEmpty(),
    check("employee")
    .exists()
    .notEmpty(),
    check("client")
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