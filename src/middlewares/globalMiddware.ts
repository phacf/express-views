import { Request, Response, NextFunction } from 'express';

export default function globalMiddware (req: Request, res: Response, next: NextFunction) {
    console.log('global middware');
    console.log(req.body)
    next();
};
