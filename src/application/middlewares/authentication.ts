import { forbidden, HttpResponse, ok } from "../helpers";
import { IMiddleware } from '@/application/middlewares';
import { RequiredString } from '@/application/validation';

type HttpRequest = { authorization: string }
type Model = Error | { userId: string }
type Authorize = (input: {token: string}) => Promise<string>

export class AuthenticationMiddleware implements IMiddleware {
    constructor(
        private readonly authorize: Authorize
    ) {}

    async handle({authorization}: HttpRequest): Promise<HttpResponse<Model>> {
        if (!this.validate({authorization})) return forbidden()
        try {
            const userId = await this.authorize({token: authorization})
            return ok({userId})
        } catch (error) {
            return forbidden()
        }
    }

    private validate({authorization}: HttpRequest): boolean {
        const error = new RequiredString(authorization, 'authorization').value
        return error === undefined
    }
}
