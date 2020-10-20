"use strict";
// Represent a UCS-2 encoded character
// UCS-2 is of fixed length and requires 2 code units per character
Object.defineProperty(exports, "__esModule", { value: true });
exports.UCS2EncodedChar = void 0;
const EncodedChar_1 = require("./EncodedChar");
// a UCS-2 code unit is an octet (8bits)
class UCS2EncodedChar extends EncodedChar_1.EncodedChar {
    constructor(char, graphemeSize) {
        super(char);
        this.graphemeSize = graphemeSize !== null && graphemeSize !== void 0 ? graphemeSize : 1;
        if (char.length === 2) {
            this.codeUnits = [char.charCodeAt(0), char.charCodeAt(1)];
        }
        else {
            this.codeUnits = [0x00, char.charCodeAt(0)];
        }
    }
    static codeUnitSizeInBits() {
        return 8; // UCS-2 code units are 8bits long
    }
    sizeInBits() {
        return 16 * this.graphemeSize; // UCS-2 characters are always 2 code units -> 16bits
    }
}
exports.UCS2EncodedChar = UCS2EncodedChar;
