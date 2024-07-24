import { InvalidMimeTypeError } from "@/application/errors";
import { IValidator } from "./IValidator";

export type Extension = 'pgn' | 'jpeg' | 'png' | 'jpg' | 'pdf'

export class AllowedMimeTypes implements IValidator {
    constructor(
        private readonly allowed: Extension[],
        private readonly mimetype: string
    ){}

    validate(): Error | undefined {
        let isValid = false;
        if(this.isPng() || this.isJpeg() || this.isPdf()) isValid = true;
        else if (!isValid) return new InvalidMimeTypeError(this.allowed);
    }

    private isPng(): boolean {
        return this.allowed.includes('png') && this.mimetype === 'image/png';
    }

    private isJpeg(): boolean {
        return this.allowed.includes('jpeg') && this.mimetype === 'image/jpeg';
    }

    private isPdf(): boolean {
        return this.allowed.includes('pdf') && this.mimetype === 'application/pdf';
    }
}