const { matchedData } = require("express-validator");
const { auditModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

/**
*obtener lista de base de datos
*@param {*} req
*@param {*} res
*/
const getItems = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await auditModel.findById({});
        res.send({data});
    } catch(e) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }
};

/**
*obtener detalle de base de datos
*@param {*} req
*@param {*} res
*/
const getItem = async(req, res) => {
    try {
        req = matchedData(req)
        const data = await passModel.create(req)
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_ITEMS");
    }
};

/**
*Insertar un registro
*@param {*} req
*@param {*} res
*/
const createItem = async (req, res) => {
    const { body } = req
    console.log(body)
    const data = await auditModel.create(body)
    res.send({data})
};

module.exports = {
    getItems,
    getItem,
    createItem,
}