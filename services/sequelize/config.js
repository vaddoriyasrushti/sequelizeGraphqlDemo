const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });
console.log('env---',process.env.DB_URL)

module.exports.development = {
    dialect: "mysql",
    seederStorage: "sequelize",
    url: process.env.DB_URL
};

module.exports.production = {
    dialect: "mysql",
    url: process.env.DB_URL
};