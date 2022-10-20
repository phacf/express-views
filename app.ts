import express from 'express';
import path from 'path';
import config from './src/utils/config';

//database
import Database from './src/models/db';
const database = new Database();

//routes
import { router as home } from './src/router/home';

//middlewares
import  homeMiddware from './src/middlewares/homeMiddleware';
import globalMiddware from './src/middlewares/globalMiddware';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//routes config
app.use(globalMiddware);
app.use('/', homeMiddware, home);

app.listen(config.server.port, async () => {
    console.log(`running on: http://localhost:${config.server.port}/`);
    try {
        const mongoConnect = await database.mongoDbConnect();
        /**** 
                Connection ready state

                0 = disconnected
                1 = connected
                2 = connecting
                3 = disconnecting
        ****/
        mongoConnect.on('connected', () => {
            
            console.log('Connection with Mongo database successfully established');

        });

    }
    catch (error) {
        console.error(error, 'Connection failed with database');
    };
})