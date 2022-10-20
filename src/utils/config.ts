const dotenv = require('dotenv');

dotenv.config();

export default  {
    database:{
        user: process.env.MONGO_DB_USER,
        password: process.env.MONGO_DB_PASSWORD,
        name: process.env.MONGO_DB_DATABASE_NAME,
        host: process.env.MONGO_DB_HOST,
        protocol: process.env.MONGO_DB_PROTOCOL
    },
    server:{
        port: process.env.SERVER_PORT
    }
};