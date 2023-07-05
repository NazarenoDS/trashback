const bcryptjs = require("bcryptjs");

/**
 * Encrypts a password using bcryptjs.
 *
 * @param {string} passwordPlain - The plain text password to be encrypted.
 * @return {Promise<string>} A promise that resolves to the encrypted password.
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 7)
    return hash
}

/**
 * Compares a plain password to a hashed password using bcryptjs.
 *
 * @param {string} passwordPlain - The plain password to compare.
 * @param {string} hashPassword - The hashed password to compare against.
 * @return {Promise<boolean>} A promise that resolves to a boolean indicating whether the passwords match.
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
};

module.exports = {
    encrypt,
    compare
}