const dotenv = require('dotenv');

dotenv.config();

module.exports = config = {
    database:{
        user: process.env.MONGO_DB_USER,
        password: process.env.MONGO_DB_PASSWORD,
        database_name: process.env.MONGO_DB_DATABASE_NAME,
        host: process.env.MONGO_DB_HOST,
        protocol: process.env.MONGO_DB_PROTOCOL
    },
    server:{
        port: process.env.PORT
    }
};