import { EncodedChar } from './EncodedChar';
export declare class GSM7EncodedChar extends EncodedChar {
    constructor(char: string);
    static codeUnitSizeInBits(): number;
    sizeInBits(): number;
}
