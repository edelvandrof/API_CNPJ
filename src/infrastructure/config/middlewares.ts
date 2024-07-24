import { type Express } from "express";
import { bodyParser,contentType,cors, resourceNotImplemented } from "./../http";

export const setupMiddlewares = (app: Express) => {
    app.use(bodyParser);
    app.use(contentType);
    app.use(cors);
    app.use(resourceNotImplemented);
}