const { Router } = require('express');

const HomeController = require('../controller/homeController')

const router = Router();

const home = new HomeController()

router.route('').get(home.firstPage)

module.exports = { home: router }
