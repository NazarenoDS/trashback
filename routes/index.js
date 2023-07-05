const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

/**
 * Removes the file extension from the given fileName.
 *
 * @param {string} fileName - The name of the file including the extension.
 * @return {string} The name of the file without the extension.
 */
const removeExtension = (fileName) => {
    return fileName.split(".").shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)
    if(name !== `index`){
        router.use(`/${name}`, require(`./${file}`))
    }
});

module.exports = router;