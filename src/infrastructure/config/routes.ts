import { type Express, Router } from "express";
import { health } from "@/infrastructure/http/routes";
//Resolve non-relative import
export default (app: Express) => {
    const router = Router();
    app.use('/api', router);
    health(router)
}