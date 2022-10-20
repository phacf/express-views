
import { Request, Response, NextFunction } from 'express';


export default class HomeController {

    firstPage(req: Request, res: Response, next: NextFunction) {
        console.log('render page')
        return res.render('index')
    }
    secondPage(req: Request, res: Response, next: NextFunction) {
        console.log('render page')
        return res.render('second')
    }

    formSubmit(req: Request, res: Response, next: NextFunction) {
        return 
    }

}
