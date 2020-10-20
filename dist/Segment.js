"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segment = void 0;
const TwilioReservedChar_1 = require("./TwilioReservedChar");
class Segment extends Array {
    constructor(hasTwilioReservedBits) {
        super();
        this.hasTwilioReservedBits = hasTwilioReservedBits;
        if (this.hasTwilioReservedBits) {
            for (let i = 0; i < 6; i++) {
                this.push(new TwilioReservedChar_1.TwilioReservedChar());
            }
        }
    }
    sizeInBits() {
        return this.reduce((accumulator, encodedChar) => accumulator + encodedChar.sizeInBits(), 0);
    }
    messageSizeInBits() {
        return this.reduce((accumulator, encodedChar) => accumulator +
            (encodedChar instanceof TwilioReservedChar_1.TwilioReservedChar
                ? 0
                : encodedChar.sizeInBits()), 0);
    }
    freeSizeInBits() {
        const maxBitsInSegment = 1120; // max size of a SMS is 140 octets -> 140 * 8bits = 1120 bits
        return maxBitsInSegment - this.sizeInBits();
    }
}
exports.Segment = Segment;
