import  {type Router, type Response} from 'express';

export const health = (router: Router) => {
    router.get('/health', (req, res) => {
        res.status(200).json({ message: 'Healthy' });
    });
}