"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GsmMessage = void 0;
const tslib_1 = require("tslib");
const grapheme_splitter_1 = (0, tslib_1.__importDefault)(require("grapheme-splitter"));
const Segment_1 = require("./Segment");
const EncodedChar_1 = require("./EncodedChar");
/**
 * Class representing a segmented SMS
 */
class GsmMessage {
    /**
     *
     * Create a new segmented message from a string
     *
     * @param {string} message Body of the message
     * @param {boolean} [encoding] Optional: encoding. It can be 'GSM-7', 'UCS-2', 'auto'. Default value: 'auto'
     * @property {number} numberOfUnicodeScalars  Number of Unicode Scalars (i.e. unicode pairs) the message is made of
     *
     */
    constructor(message) {
        this.encoding = 'GSM-7';
        const splitter = new grapheme_splitter_1.default();
        /**
         * @property {string[]} graphemes Graphemes (array of strings) the message have been split into
         */
        this.graphemes = splitter.splitGraphemes(message);
        /**
         * @property {number} numberOfUnicodeScalars  Number of Unicode Scalars (i.e. unicode pairs) the message is made of
         * Some characters (e.g. extended emoji) can be made of more than one unicode pair
         */
        this.numberOfUnicodeScalars = [...message].length;
        /**
         * @property {number} numberOfCharacters Number of characters in the message. Each character count as 1, regardless of the encoding.
         */
        this.numberOfCharacters = this.graphemes.length;
        this.encodingName = 'GSM-7';
        /**
         * @property {string[]} encodedChars Array of encoded characters composing the message
         */
        this.encodedChars = this._encodeChars(this.graphemes);
        /**
         * @property {object[]} segments Array of segment(s) the message have been segmented into
         */
        this.segments = this._buildSegments(this.encodedChars);
    }
    /**
     * Internal method used to build message's segment(s)
     *
     * @param {object[]} encodedChars Array of EncodedChar
     * @returns {object[]} Array of Segment
     * @private
     */
    _buildSegments(encodedChars) {
        const segments = [];
        segments.push(new Segment_1.Segment());
        let currentSegment = segments[0];
        for (const encodedChar of encodedChars) {
            if (currentSegment.freeSizeInBits() < encodedChar.sizeInBits()) {
                segments.push(new Segment_1.Segment(true));
                currentSegment = segments[segments.length - 1];
                const previousSegment = segments[segments.length - 2];
                if (!previousSegment.hasUserDataHeader) {
                    const removedChars = previousSegment.addHeader();
                    removedChars.forEach((char) => currentSegment.push(char));
                }
            }
            currentSegment.push(encodedChar);
        }
        return segments;
    }
    /**
     * Return the encoding of the message segment
     *
     * @returns {string} Encoding for the message segment(s)
     */
    getEncodingName() {
        return this.encodingName;
    }
    /**
     * Internal method to create an array of EncodedChar from a string
     *
     * @param {string[]} graphemes Array of graphemes representing the message
     * @returns {object[]} Array of EncodedChar
     * @private
     */
    _encodeChars(graphemes) {
        const encodedChars = [];
        const forceGsm = true;
        for (const grapheme of graphemes) {
            encodedChars.push(new EncodedChar_1.EncodedChar(grapheme, this.encodingName, forceGsm));
        }
        return encodedChars;
    }
    /**
     * @returns {number} Total size of the message in bits (including User Data Header if present)
     */
    get totalSize() {
        let size = 0;
        for (const segment of this.segments) {
            size += segment.sizeInBits();
        }
        return size;
    }
    /**
     * @returns {number} Total size of the message in bits (excluding User Data Header if present)
     */
    get messageSize() {
        let size = 0;
        for (const segment of this.segments) {
            size += segment.messageSizeInBits();
        }
        return size;
    }
    /**
     *
     * @returns {number} Number of segments
     */
    get segmentsCount() {
        return this.segments.length;
    }
    /**
     *
     * @returns {string[]} Array of characters representing the non GSM-7 characters in the message body
     */
    getNonGsmCharacters() {
        return this.encodedChars
            .filter((encodedChar) => !encodedChar.isGSM7)
            .map((encodedChar) => encodedChar.raw);
    }
    get parsedMessage() {
        let message = '';
        for (const segment of this.segments) {
            for (const seg of segment) {
                if (seg.codeUnits) {
                    message += String.fromCharCode(...seg.codeUnits);
                }
            }
        }
        return message;
    }
}
exports.GsmMessage = GsmMessage;
