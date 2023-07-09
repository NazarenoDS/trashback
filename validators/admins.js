const { check } = require("express-validator");
const validationResult = require ("../utils/handleValidator");

const validatorCreateItem = [
    check("email")
    .isEmail(),
    check("password")
    .isString(),
    check("name")
    .isString(),
    check("dni")
    .isInt(),
    check("birthdate")
    .isDate(),
    check("phone")
    .isInt(),
    (req, res, next) => {
        return validationResult(req, res, next)
    }
];

const validatorGetItem = [
    check("email")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validationResult(req, res, next)
    }
];

module.exports = { validatorCreateItem, validatorGetItem };