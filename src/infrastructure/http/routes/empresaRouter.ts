import { type Router, type Response } from 'express';

export const empresa = (router: Router) => {
    router.get('/empresa', (req, res) => {
        res.status(200).json({ message: 'Empresa' });
    });
}   