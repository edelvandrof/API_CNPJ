import { type Express, Router } from "express";
import { health } from "./../http";
//Resolve non-relative import
export default (app: Express) => {
    const router = Router();
    app.use('/api', router);
    health(router)
}