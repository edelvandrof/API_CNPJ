import { HttpResponse } from "@/application/helpers";

export interface IMiddleware {
    handle: (request: any) => Promise<HttpResponse>
}