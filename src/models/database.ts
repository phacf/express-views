import config from '../utils/config';
import { Connection, createConnection } from 'mongoose';
import { databaseConnections } from '../bin/connection';

interface MongoInterface {
    user: string | undefined;
    password: string | undefined;
    name: string | undefined;
    host: string | undefined;
    protocol: string | undefined;
};

export default class Database {

    static async mongoDbConnect(mongo: MongoInterface) {
        const { user, password, name, host, protocol } = mongo

        return createConnection(
            `${protocol}://${user}:${password}@${host}/${name}?retryWrites=true&w=majority`,
            {
                connectTimeoutMS: 1000
            }
        );
    };

    static mongoEvents(mongoConnection: Connection) {

        /**** 
               Connection ready state

               0 = disconnected
               1 = connected
               2 = connecting
               3 = disconnecting
       ****/

        mongoConnection.on('connecting', () => {

            console.log('Connection with Mongo database is on the way');

        });

        mongoConnection.on('connected', () => {

            console.log('Connection with Mongo database successfully established');
            databaseConnections.mongoCreateConnection(config.database.mongo.name, mongoConnection)

        });

        mongoConnection.on('disconnecting', () => {

            console.log('Connection with Mongo database instable');

        });

        mongoConnection.on('disconnected', () => {

            console.log('Connection with Mongo database off');

        });
    }

}

