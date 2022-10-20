import { Schema, model } from 'mongoose'

export interface ClientInterface {
    name: string;
    lastName: string;
}

const clientSchema = new Schema<ClientInterface>({
    name: { type: String, required: true },
    lastName: { type: String, required: true }
});

export const clientModel = model<ClientInterface>('Client', clientSchema);