"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncodedChar = void 0;
// export interface Base{}
class EncodedChar {
    constructor(char) {
        this.raw = char;
        this.codeUnits = null;
    }
    sizeInBits() {
        return 0;
    }
    static codeUnitSizeInBits() {
        return undefined;
    }
}
exports.EncodedChar = EncodedChar;
