export declare abstract class EncodedChar {
    codeUnits: number[] | null;
    raw: string | null;
    constructor(char: string | null);
    sizeInBits(): number;
    static codeUnitSizeInBits(): number | undefined;
}
