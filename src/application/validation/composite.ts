import { IValidator } from "./IValidator";

export class ValidationComposite implements IValidator {
    constructor(private readonly validators: IValidator[]) {}

    validate(): Error | undefined {
        for (const validator of this.validators) {
            const error = validator.validate();
            if (error !== undefined) {
                return error;
            }
        }
        return undefined;
    }
}