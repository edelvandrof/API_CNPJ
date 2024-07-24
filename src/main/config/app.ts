import express from 'express';
import setupRoutes from './routes';
import { setupMiddlewares } from './middlewares';
import { setupPostgres } from './databases';

export const setupApp = () => {
    const app = express()
    setupRoutes(app)
    setupMiddlewares(app)
    setupPostgres();
    return app
}