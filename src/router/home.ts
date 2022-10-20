import { Router } from 'express';

import HomeController from '../controller/homeController';

export const router = Router();

const home = new HomeController()

router.route('').get(home.firstPage)
router.route('').post(home.createClient)

router.route('/home').get(home.secondPage)

