import config from '../utils/config';
import { createConnection } from 'mongoose';


export default class Database {

    static async mongoDbConnect() {
        const { user, password, name, host, protocol } = config.database

        return createConnection(
            `${protocol}://${user}:${password}@${host}/${name}?retryWrites=true&w=majority`,
            {
                connectTimeoutMS: 1000
            }
        );
    };

    static mongoEvents(mongoConnection: any) {

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

        });

        mongoConnection.on('disconnecting', () => {

            console.log('Connection with Mongo database instable');

        });

        mongoConnection.on('disconnected', () => {

            console.log('Connection with Mongo database off');

        });
    }

}

