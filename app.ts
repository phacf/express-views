import express from 'express';
import path from 'path';
import config from './src/utils/config';

//database

//routes
import { router as home } from './src/router/home';

//middlewares
import homeMiddware from './src/middlewares/homeMiddleware';
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

//start server
app.listen(config.server.port, async () => {
    console.log(`running on: http://localhost:${config.server.port}/`);
})

//docker run -d -e MONGO_INITDB_ROOT_USERNAME=pol -e MONGO_INITDB_ROOT_PASSWORD=12345678 -p 8000:27017 --name=Mongo -v MongoDb:/db mongo