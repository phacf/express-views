import { Schema, model } from 'mongoose';
import config from '../utils/config';
import { databaseConnections } from '../bin/connection';

const mongo = databaseConnections.mongoGetConnection(config.database.mongo.name);



export interface ClientInterface {
    name: string;
    lastName: string;
};

const clientSchema = new Schema<ClientInterface>({
    name: { type: String, required: true },
    lastName: { type: String, required: true }
});

export const clientModel = mongo?.model<ClientInterface>('Client', clientSchema);