
const {genSalt, hash, compare} = require("bcrypt");
//const { genSalt } = require("bcrypt");

async function generateCrypt(data) {
    const salt = await genSalt(10);

    return await hash(data, salt);
}

async function compareHash(hash, data) {
    return compare(hash, data) 
}

module.exports.createCrypt = async function createCrypt(word) {
    generateCrypt,
    compareHash
}