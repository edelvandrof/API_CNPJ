import { MaxFileSizeError } from "@/application/errors";
import { IValidator } from "./IValidator";

export class MaxFileSize implements IValidator{
    constructor(
        private readonly maxSizeMb: number,
        private readonly value: Buffer
    ){}

    validate(): Error | undefined {
        const maxFileSizeInBytes = this.maxSizeMb * 1024 * 1024
        if(this.value.length > maxFileSizeInBytes){
            return new MaxFileSizeError(this.maxSizeMb)
        }
    }
}