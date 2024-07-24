import { Request, Response, NextFunction } from 'express';

export const resourceNotImplemented = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({message: "Resource not implemented"});
}