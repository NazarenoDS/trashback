const { check } = require("express-validator");
const validationResult = require ("../utils/handleValidator");

const validatorCreateItem = [
    check("name")
    .isString(),
    check("dni")
    .isInt(),
    check("birthdate")
    .isDate(),
    check("phone")
    .isMobilePhone(),
    check("balance")
    .isInt(),
    check("idCard")
    .isInt(),
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