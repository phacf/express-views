
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

        if (clientModel) {
            try {
                const client = new clientModel({
                    name,
                    lastName
                });

                await client.save();

                // res.status(201).json({client});

                return res.render('index');

            }
            catch (error) {
                console.error('Failed to save client', error);
                return res.status(500).json({ msg: error })
            }

        }else{
            console.error('Database Model Error');
        }

    }

}
