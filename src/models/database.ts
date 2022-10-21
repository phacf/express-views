import {  createConnection } from 'mongoose';

interface MongoInterface {
    user: string | undefined;
    password: string | undefined;
    name: string | undefined;
    host: string | undefined;
    protocol: string | undefined;
};

export default class Database {

    static mongoDbConnect(mongo: MongoInterface) {
        const { user, password, name, host, protocol } = mongo
        
        return  createConnection(
            `${protocol}://${user}:${password}@${host}/${name}?retryWrites=true&w=majority`,
            {
                connectTimeoutMS: 1000
            }
        );

    };

   
}

