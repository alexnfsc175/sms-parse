/**
 * Encoded Character Classes
 * Utility classes to represent a character in a given encoding.
 */
export declare class EncodedChar {
    raw: string;
    codeUnits: number[];
    isGSM7: boolean;
    encoding: 'GSM-7' | 'UCS-2';
    constructor(char: string, encoding: 'GSM-7' | 'UCS-2', forceGsmEcoding?: boolean);
    codeUnitSizeInBits(): number;
    sizeInBits(): number;
}
