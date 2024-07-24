import { UnauthorizedError, ServerError, ForbiddenError } from "../errors";

export type HttpResponse<T = any> = {
    statusCode: number
    data: T
}

export const ok = (data: any) => ({
    statusCode: 200,
    data
})

export const created = (data: any) => ({
    statusCode: 201,
    data
})

export const noContent = () => ({
    statusCode: 204,
    data: null
}) 

export const badRequest = (error: Error) => ({
    statusCode: 400,
    data: error
})

export const unauthorized = () => ({
    statusCode: 401,
    data: new UnauthorizedError()
})

export const forbidden = () => ({
    statusCode: 403,
    data: new ForbiddenError()
})

export const serverError = (error: Error) => ({
    statusCode: 500,
    data: new ServerError(error)
})