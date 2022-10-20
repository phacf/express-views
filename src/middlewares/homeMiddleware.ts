import { Request, Response, NextFunction } from 'express';

export default function homeMiddware (req: Request, res: Response, next: NextFunction) {
    console.log('home middware')
    next();
};
