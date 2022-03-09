const { join } = require("path")
require('dotenv').config()
exports.SERVER = {
    host: process.env.SERVER_HOST || 'localhost',
    port: process.env.SERVER_PORT || 4000,
};

exports.DB = {
    HOST: process.env.MYSQL_HOST || 'localhost',
    PORT: parseInt(process.env.MYSQL_PORT || '3306', 10),
    USER: process.env.MYSQL_USER || 'root',
    PASSWORD: process.env.MYSQL_PASSWORD || '',
    DB: process.env.MYSQL_DATABASE || 'api',
};
