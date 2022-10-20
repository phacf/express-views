const express = require('express');
const path = require('path');

//routes
const { home } = require('./src/router/home')

//middlewares
const { homeMiddware } = require('./src/middlewares/homeMiddleware')
const { globalMiddware } = require('./src/middlewares/globalMiddware')



const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//routes config
app.use(globalMiddware)
app.use('/',homeMiddware, home);

app.listen(5000, () => {
    console.log('running on: http://localhost:5000/');
})