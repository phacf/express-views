const express = require('express');
const path = require('path');

const { home } = require('./src/router/home')

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.resolve(__dirname,'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use('/', home);

app.listen(5000, () => {
    console.log('listenning on port: 5000');
})