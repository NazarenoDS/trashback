const { matchedData } = require("express-validator");
const { adminsModel } = require("../models");
const { encrypt, compare } = require ("../utils/handlePassword");
const { handleHttpError } = require("../utils/handleError");

/**
*obtener lista de base de datos
*@param {*} req
*@param {*} res
*/
const getItems = async (req, res) => {
    try {
        const data = await adminsModel.find({});
        data.set("password", undefined, { strict: false });
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
        const {id} = req;
        const data = await adminsModel.findById({});
        data.set("password", undefined, { strict: false });
        res.send({data});
    } catch(e) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }
};

/**
*Insertar un registro
*@param {*} req
*@param {*} res
*/
const createItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const dataAdmin = await adminsModel.findOne({});
        dataAdmin.set("password", undefined, { strict: false });
        const data = {
            token: await tokenSign(dataAdmin),
            user: dataAdmin
        }
        res.send({data});
        //const { body } = matchedData(req)
        //const data = await adminsModel.create(body)
        //res.send({data})
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
        req = matchedData(req);
        const {id} = req;
        const data = await adminsModel.delete({_id:id});
        data.set("password", undefined, { strict: false });
        res.send({data});
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