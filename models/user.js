// Requirements
const bcrypt = require("bcrypt");

// Database import
const DB = require("./index");

module.exports.createUser = async function () {
    throw new Error("Not implemented.");
};

module.exports.findByEmail = async function (email) {
    try {
        let user = await DB.query(`SELECT * FROM users WHERE email = ?`, email);
        return user[0];
    } catch (err) {
        throw new Error("Error while selecting user by email.");
    }
};

module.exports.validatePassword = async function (password, hash) {
    try {
        return await bcrypt.compare(password, hash);
    }
    catch(err) {
        throw new Error("Error while validating user password.");
    }
};