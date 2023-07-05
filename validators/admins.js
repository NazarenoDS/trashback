const { check } = require("express-validator");
const validationResult = require ("../utils/handleValidator");

const validatorCreateItem = [
    check("email")
    .exists()
    .notEmpty(),
    check("contraseña")
    .exists()
    .notEmpty(),
    check("nombre")
    .exists()
    .notEmpty(),
    check("dni")
    .exists()
    .notEmpty(),
    check("birthdate")
    .exists()
    .notEmpty(),
    check("phone")
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