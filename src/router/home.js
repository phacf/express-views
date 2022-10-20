const { Router } = require('express');

const HomeController = require('../controller/homeController')


const router = Router();

const home = new HomeController()



router.route('').get(home.firstPage)
router.route('').post(home.formSubmit)

router.route('/home').get(home.secondPage)

module.exports = { home: router }
