"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncodedChar = void 0;
const TransliterateGSM_1 = require("./TransliterateGSM");
const UnicodeToGSM_1 = require("./UnicodeToGSM");
/**
 * Encoded Character Classes
 * Utility classes to represent a character in a given encoding.
 */
class EncodedChar {
    constructor(char, encoding, forceGsmEcoding = false) {
        this.raw = char;
        this.encoding = encoding;
        this.isGSM7 = Boolean(char && UnicodeToGSM_1.UnicodeToGsm[char.charCodeAt(0)]);
        if (this.isGSM7) {
            this.codeUnits = UnicodeToGSM_1.UnicodeToGsm[char.charCodeAt(0)];
        }
        else {
            this.codeUnits = [];
            for (let i = 0; i < char.length; i++) {
                this.codeUnits.push(char.charCodeAt(i));
            }
        }
        if (forceGsmEcoding) {
            const transliterate = TransliterateGSM_1.Transliterate[char.charCodeAt(0)];
            if (transliterate) {
                this.codeUnits = transliterate;
            }
        }
    }
    codeUnitSizeInBits() {
        return this.encoding === 'GSM-7' ? 7 : 8;
    }
    sizeInBits() {
        const bitsPerUnits = this.encoding === 'GSM-7' ? 7 : 16;
        return bitsPerUnits * this.codeUnits.length;
    }
}
exports.EncodedChar = EncodedChar;
