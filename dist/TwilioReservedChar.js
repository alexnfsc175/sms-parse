"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioReservedChar = void 0;
const EncodedChar_1 = require("./EncodedChar");
class TwilioReservedChar extends EncodedChar_1.EncodedChar {
    constructor() {
        super(null);
        this.codeUnits = null;
    }
    sizeInBits() {
        return 8;
    }
    static codeUnitSizeInBits() {
        return 8;
    }
}
exports.TwilioReservedChar = TwilioReservedChar;
