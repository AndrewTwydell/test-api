const { join } = require("path")
require('dotenv').config({path: '../.env'})
module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: process.env.MYSQL_HOST || 'db',
            port: parseInt(process.env.MYSQL_PORT || '3306', 10),
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || '',
            database: process.env.MYSQL_DATABASE || 'api',
        },
        migrations: {
            directory: join(__dirname, '..', 'migrations'),
        },
    },
};
