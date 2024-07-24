import express, { Request, Response } from 'express';
import cors from 'cors';
import setupRoutes from './routes';

export const setupApp = () => {
    const app = express()
    app.use(cors())
    setupRoutes(app)
    return app
}