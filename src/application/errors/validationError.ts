export class RequiredFieldError extends Error {
    constructor(fieldName?: string){
        const message = fieldName === undefined
            ? 'Field'
            : `The field ${fieldName} is required`
        super(message)
        this.name = 'RequiredFieldError'
    }
}

export class InvalidMimeTypeError extends Error {
    constructor(allowedTypes: string[]){
        super(`Invalid mime type. Allowed types: ${allowedTypes.join(', ')}`)
        this.name = 'InvalidMimeTypeError'
    }
}

export class MaxFileSizeError extends Error {
    constructor(maxSize: number){
        super(`File size exceeds the limit of ${maxSize}MB`)
        this.name = 'MaxFileSizeError'
    }
}