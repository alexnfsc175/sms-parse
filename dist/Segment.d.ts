export declare class Segment extends Array {
    hasTwilioReservedBits: boolean;
    constructor(hasTwilioReservedBits: boolean);
    sizeInBits(): number;
    messageSizeInBits(): number;
    freeSizeInBits(): number;
}
