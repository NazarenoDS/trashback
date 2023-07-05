const { encrypt, compare } = require("../utils/handleJwt");
const { handleHttpError, handleErrorResponse} = require("../utils/handleError");
const { tokenSign } = require("../utils/handleJwt");
const { adminsModel, employeesModel } = require("../models");
const { matchedData } = require("express-validator");

/**
 * Controller for login
 * @param {*} req
 * @param {*} res
 * @returns
 */
const loginCtrl = async (req, res) => {
  try {
    const role = req.body.role;
    const body = matchedData(req);
    if( role = admins ){
    const user = await adminsModel.findOne({ email: body.email });
    }else{
        const user = await employeesModel.findOne({ email: body.email });
    }
    if (!user) {
      handleErrorResponse(res, "Authentic Invalid", 404);
      return;
    }
    const checkPassword = await compare(body.password, user.password);

    if (!checkPassword) {
      handleErrorResponse(res, "Authentic Invalid", 402);
      return;
    }

    const tokenJwt = await tokenSign(user);

    const data = {
      token: tokenJwt,
      user: user,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = { loginCtrl };