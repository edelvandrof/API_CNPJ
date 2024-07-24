import { Required, RequiredBuffer, RequiredString, IValidator, Extension, AllowedMimeTypes, MaxFileSize} from "@/application/validation";

export class ValidatorBuilder {
    private constructor (
        private readonly value: any,
        private readonly fieldName: string | undefined,
        private readonly validators: IValidator[] = []
    ) {}

    static of({ value, fieldName }: {value: any, fieldName?: string}): ValidatorBuilder {
        return new ValidatorBuilder(value, fieldName);
    }

    required (): ValidatorBuilder {
        if (this.value instanceof Buffer){
            this.validators.push(new RequiredBuffer(this.value, this.fieldName));
        }else if (typeof this.value === 'string'){
            this.validators.push(new RequiredString(this.value, this.fieldName));
        }else{
            this.validators.push(new Required(this.value, this.fieldName));
            if (this.value instanceof Buffer){
                this.validators.push(new RequiredBuffer(this.value, this.fieldName));
            }
        }
        return this
    }

    image({allowed, maxSizeInMb}: {allowed: Extension[], maxSizeInMb: number}): ValidatorBuilder {
        if (this.value.mimeType !== undefined) this.validators.push(new AllowedMimeTypes(this.value, this.value.mimeType))
        if (this.value.maxSize !== undefined) this.validators.push(new MaxFileSize(this.value, this.value.maxSizeInMb))
        return this
    }

    build (): IValidator[] {
        return this.validators;
    }
}