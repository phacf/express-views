import Database from '../models/database';
import { Connection } from 'mongoose'
import { ConnectionsManager } from './connectionsPool';
import config from '../utils/config';

export const databaseConnections = new ConnectionsManager();

export class DatabaseConnection {


    static async mongo(): Promise<Connection | undefined> {
        try {
            const mongoConnect = await Database.mongoDbConnect(config.database.mongo);

            Database.mongoEvents(mongoConnect);

            return mongoConnect

        }
        catch (error) {
            console.error(error, 'Connection with database failed');
            return;
        };

    }


};