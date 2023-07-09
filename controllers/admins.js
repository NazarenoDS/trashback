const { matchedData } = require("express-validator");
const { adminsModel } = require("../models");
const { encrypt, compare } = require ("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { handleHttpError } = require("../utils/handleError");

/**
*obtener lista de base de datos
*@param {*} req
*@param {*} res
*/
const getItems = async (req, res) => {
    try {
        const data = await adminsModel.find({});
        res.send({data});
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
};

/**
*obtener detalle de base de datos
*@param {*} req
*@param {*} res
*/
const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {email} = req;
        const data = await adminsModel.findById({email});
        res.send({data});
    } catch(e) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }
};


const createItem = async (req, res) => {
    try {
        req = matchedData(req);
        const checkIsExist = await adminsModel.findOne({ email: req.email });
        if (checkIsExist) {
          handleErrorResponse(res, "USER_EXISTS", 401);
          return;
        }
        const password = await encrypt(req.password);
        const bodyInsert = { ...req, password };
        const data = await adminsModel.create(bodyInsert);
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_ITEMS");
    }
};

/**
*Eliminar un registro
*@param {*} req
*@param {*} res
*/
const deleteItem = async (req, res) => {
    try{ 
        req = matchedData(req)
        const {email} = req;
        const data = await adminsModel.findOneAndDelete({email});
        res.send({ data });
    } catch(e) {
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
};

module.exports = {
    getItems,
    getItem,
    createItem,
    deleteItem
}