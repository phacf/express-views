const config = require('../utils/config');
const { createConnection } = require('mongoose');


class Database{
    async mongoDbConnect() {
        const { user, password, name, host, protocol } = config.database
    
    
        return createConnection(
            `${protocol}://${user}:${password}@${host}/${name}?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
    };
}


module.exports = Database;