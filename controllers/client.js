const { matchedData } = require("express-validator");
const { clientsModel } = require("../models/index");
const { handleHttpError } = require("../utils/handleError");

/**
*obtener lista de base de datos
*@param {*} req
*@param {*} res
*/
const getItems = async (req, res) => {
    try {
        const data = await clientsModel.find({});
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
        const data = await clientsModel.findById({});
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
        const data = await clientsModel.create(req)
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_ITEMS");
    }
};

/**
*Actualizar un registro
*@param {*} req
*@param {*} res
*/
const updateItem = async(req, res) => {
    try {
        const { id, ...body } = matchedData(req)
        const data = await clientsModel.findOneAndUpdate(id, body)
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_UPDATE_ITEMS");
    }
};

/**
*Eliminar un registro
*@param {*} req
*@param {*} res
*/
const deleteItem = async(req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await clientsModel.delete({_id:id});
        res.send({data});
    } catch(e) {
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
};

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}