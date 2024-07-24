import { Express, Router } from "express";
import { readdirSync } from "fs";
import { json } from "path";
//Resolve non-relative import
export default (app: Express) => {
    const router = Router();
    app.use('/api', router);
    health(router)
}