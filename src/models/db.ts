import config from '../utils/config';
import { createConnection } from 'mongoose';


export default class Database{
    async mongoDbConnect() {
        const { user, password, name, host, protocol } = config.database
    
    
        return createConnection(
            `${protocol}://${user}:${password}@${host}/${name}?retryWrites=true&w=majority`,
            {
                connectTimeoutMS: 1000
            }
        );
    };
}

