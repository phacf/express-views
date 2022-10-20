const express = require('express');
const path = require('path');

const { home } = require('./src/router/home')
const { homeMiddware } = require('./src/middlewares/homeMiddleware')


const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//routes config
app.use('/',homeMiddware, home);

app.listen(5000, () => {
    console.log('running on: http://localhost:5000/');
})