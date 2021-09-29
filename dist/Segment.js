"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segment = void 0;
const UserDataHeader_1 = require("./UserDataHeader");
/**
 * Segment Class
 * A modified array representing one segment and add some helper functions
 */
class Segment extends Array {
    constructor(withUserDataHeader = false) {
        super();
        // TODO: Refactor this. Bad practice to extend basic types
        Object.setPrototypeOf(this, Object.create(Segment.prototype));
        this.hasTwilioReservedBits = withUserDataHeader;
        this.hasUserDataHeader = withUserDataHeader;
        if (withUserDataHeader) {
            for (let i = 0; i < 6; i++) {
                this.push(new UserDataHeader_1.UserDataHeader());
            }
        }
    }
    // Size in bits *including* User Data Header (if present)
    sizeInBits() {
        return this.reduce((accumulator, encodedChar) => accumulator + encodedChar.sizeInBits(), 0);
    }
    // Size in bits *excluding* User Data Header (if present)
    messageSizeInBits() {
        return this.reduce((accumulator, encodedChar) => accumulator +
            (encodedChar instanceof UserDataHeader_1.UserDataHeader ? 0 : encodedChar.sizeInBits()), 0);
    }
    freeSizeInBits() {
        const maxBitsInSegment = 1120; // max size of a SMS is 140 octets -> 140 * 8bits = 1120 bits
        return maxBitsInSegment - this.sizeInBits();
    }
    addHeader() {
        if (this.hasUserDataHeader) {
            return [];
        }
        const leftOverChar = [];
        this.hasTwilioReservedBits = true;
        this.hasUserDataHeader = false;
        for (let i = 0; i < 6; i++) {
            this.unshift(new UserDataHeader_1.UserDataHeader());
        }
        // Remove characters
        while (this.freeSizeInBits() < 0) {
            leftOverChar.unshift(this.pop());
        }
        return leftOverChar;
    }
}
exports.Segment = Segment;
