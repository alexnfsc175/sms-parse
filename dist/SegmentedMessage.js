"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentedMessage = void 0;
const GSM7EncodedChar_1 = require("./GSM7EncodedChar");
const Segment_1 = require("./Segment");
const UCS2EncodedChar_1 = require("./UCS2EncodedChar");
/***************************************************************************
 * Segmented Message Class                                                 *
 *                                                                         *
 * Parse a message and build the segments based on the chosen encoding.    *
 ***************************************************************************/
class SegmentedMessage {
    constructor(message, encoding, graphemeSplitter) {
        this.charClass = this.charClassForEncoding(encoding);
        this.encoding = encoding;
        this.splitter = graphemeSplitter;
        let encodedChars = this.encodeChars(message);
        if (encoding === 'auto' && this.hasIncompatibleEncoding(encodedChars)) {
            this.charClass = UCS2EncodedChar_1.UCS2EncodedChar;
            encodedChars = this.encodeChars(message);
        }
        this.segments = this.buildSegments(encodedChars);
    }
    buildSegments(encodedChars, useTwilioReservedBits) {
        const segments = [];
        const hasTwilioReservedBits = useTwilioReservedBits === true;
        let currentSegment = null;
        for (const encodedChar of encodedChars) {
            if (currentSegment === null ||
                currentSegment.freeSizeInBits() < encodedChar.sizeInBits()) {
                if (currentSegment && hasTwilioReservedBits === false) {
                    return this.buildSegments(encodedChars, true);
                }
                currentSegment = new Segment_1.Segment(hasTwilioReservedBits);
                segments.push(currentSegment);
            }
            currentSegment.push(encodedChar);
        }
        return segments;
    }
    charClassForEncoding(encoding) {
        if (encoding === 'GSM-7') {
            return GSM7EncodedChar_1.GSM7EncodedChar;
        }
        else if (encoding === 'UCS-2') {
            return UCS2EncodedChar_1.UCS2EncodedChar;
        }
        else if (encoding === 'auto') {
            return GSM7EncodedChar_1.GSM7EncodedChar;
        }
        else {
            throw new Error('Unsupported encoding');
        }
    }
    getEncodingName() {
        if (this.charClass === GSM7EncodedChar_1.GSM7EncodedChar) {
            return 'GSM-7';
        }
        else if (this.charClass === UCS2EncodedChar_1.UCS2EncodedChar) {
            return 'UCS-2';
        }
        else {
            return 'Unkown';
        }
    }
    hasIncompatibleEncoding(encodedChars) {
        for (const encodedChar of encodedChars) {
            if (!encodedChar.codeUnits) {
                return true;
            }
        }
        return false;
    }
    encodeChars(message) {
        const encodedChars = [];
        for (const char of this.splitter.iterateGraphemes(message)) {
            if (char.length <= 2) {
                encodedChars.push(new this.charClass(char));
            }
            else {
                const parts = [...char];
                for (let i = 0; i < parts.length; i++) {
                    encodedChars.push(new this.charClass(parts[i], i === 0 ? parts.length : 0));
                }
            }
        }
        return encodedChars;
    }
    get totalSize() {
        let size = 0;
        for (const segment of this.segments) {
            size += segment.sizeInBits();
        }
        return size;
    }
    get messageSize() {
        let size = 0;
        for (const segment of this.segments) {
            size += segment.messageSizeInBits();
        }
        return size;
    }
}
exports.SegmentedMessage = SegmentedMessage;
