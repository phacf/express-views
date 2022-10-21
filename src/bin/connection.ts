import Database from '../models/database';
import { Connection } from 'mongoose'
import config from '../utils/config';

const mongoConnection: Connection = Database.mongoDbConnect(config.database.mongo);

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

export default mongoConnection;
