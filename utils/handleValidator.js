const { validationResult } = require ("express-validator");


/**
* Validates the request and returns the validation results.
*
* @param {Object} req - The request object.
* @param {Object} res - The response object.
* @param {Function} next - The next function.
* @return {undefined} The function does not return a value.
*/

const validationResults = (req, res, next) =>{
    try {
        validationResult(req).throw();
        return next();
    } catch (err){
        res.status(403);
        res.send({ errors: err.array() });
    }
};

module.exports = validationResults