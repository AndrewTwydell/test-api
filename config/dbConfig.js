const {DB} = require("./config");
const { knex } = require("knex");

exports.knexInstance = knex({
    client: 'mysql2',
    useNullAsDefault: true,
    connection: {
        host: DB.HOST,
        port: DB.PORT,
        database: DB.DB,
        user: DB.USER,
        password: DB.PASSWORD,
    },
    pool: {
        min: 2,
        max: 10,
    },
});


