"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GSM7EncodedChar = void 0;
const Charset_1 = require("./Charset");
// Represent a GSM-7 encoded character
// GSM-7 is of variable length and requires 1 or 2 code units per character
const EncodedChar_1 = require("./EncodedChar");
// a GSM-7 code unit is a septet (7bits)
class GSM7EncodedChar extends EncodedChar_1.EncodedChar {
    constructor(char) {
        super(char);
        if (char.length === 1) {
            this.codeUnits = Charset_1.Charset.UNICODE_TO_GSM[char.charCodeAt(0)];
        }
        const transliterate = Charset_1.Charset.TRANSLITERATE[char.charCodeAt(0)];
        if (transliterate) {
            this.codeUnits = transliterate;
        }
    }
    static codeUnitSizeInBits() {
        return 7; // GSM-7 code units are 7bits long
    }
    sizeInBits() {
        if (this.codeUnits) {
            return this.codeUnits.length * 7; // GSM-7 can be composed of 1 or 2 code units
        }
        else {
            return 0; // Some characters do not exist in GSM-7 thus making their length 0
        }
    }
}
exports.GSM7EncodedChar = GSM7EncodedChar;
