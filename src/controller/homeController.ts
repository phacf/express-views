
import { Request, Response, NextFunction } from 'express';
import { clientModel, ClientInterface } from '../models/clientModel'


export default class HomeController {

    firstPage(req: Request, res: Response, next: NextFunction) {
        console.log('render page')
        return res.render('index')
    }
    secondPage(req: Request, res: Response, next: NextFunction) {
        console.log('render page')
        return res.render('second')
    }

    async createClient(req: Request, res: Response, next: NextFunction) {
        const { name, lastName }: ClientInterface = req.body;

        try {
            const client = new clientModel({
                name,
                lastName
            });

            await client.save();

            return res.status(201).json({ client });

        }
        catch (error) {
            console.error('Failed to save client', error);
            return res.status(500).json({ msg: error })
        }

        console.log()
    }

}
