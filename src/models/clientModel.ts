import { Schema } from 'mongoose';
import config from '../utils/config';
import Database from './database';
import mongoConnection from '../bin/connection';

const mongo = Database.mongoDbConnect(config.database.mongo);
export interface ClientInterface {
    name: string;
    lastName: string;
};

const clientSchema = new Schema<ClientInterface>({
    name: { type: String, required: true },
    lastName: { type: String, required: true }
});

export const clientModel = mongoConnection.model<ClientInterface>('Client', clientSchema);