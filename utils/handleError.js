const handleHttpError = (res, message = " Algo se rompio ", code = 403) => {
    res.status(code);
    res.status({ error: message });
};

module.exports = { handleHttpError };