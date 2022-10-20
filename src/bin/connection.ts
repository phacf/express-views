import Database from '../models/database';
import {Connection} from 'mongoose'

export class DatabaseConnection{

    static async mongo(): Promise<Connection | undefined>{
        try {
            const mongoConnect = await Database.mongoDbConnect();
    
            Database.mongoEvents(mongoConnect);

            return mongoConnect
    
        }
        catch (error) {
            console.error(error, 'Connection with database failed');
            return;
        };

    }

    
};