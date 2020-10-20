import { EncodedChar } from './EncodedChar';
export declare class UCS2EncodedChar extends EncodedChar {
    graphemeSize: number;
    constructor(char: string, graphemeSize?: number);
    static codeUnitSizeInBits(): number;
    sizeInBits(): number;
}
