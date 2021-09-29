import { Segment } from './Segment';
import { EncodedChar } from './EncodedChar';
declare type SmsEncoding = 'GSM-7';
declare type EncodedChars = Array<EncodedChar>;
/**
 * Class representing a segmented SMS
 */
export declare class GsmMessage {
    encoding: string;
    segments: Segment[];
    graphemes: string[];
    encodingName: SmsEncoding;
    numberOfUnicodeScalars: number;
    numberOfCharacters: number;
    encodedChars: EncodedChars;
    /**
     *
     * Create a new segmented message from a string
     *
     * @param {string} message Body of the message
     * @param {boolean} [encoding] Optional: encoding. It can be 'GSM-7', 'UCS-2', 'auto'. Default value: 'auto'
     * @property {number} numberOfUnicodeScalars  Number of Unicode Scalars (i.e. unicode pairs) the message is made of
     *
     */
    constructor(message: string);
    /**
     * Internal method used to build message's segment(s)
     *
     * @param {object[]} encodedChars Array of EncodedChar
     * @returns {object[]} Array of Segment
     * @private
     */
    _buildSegments(encodedChars: EncodedChars): Segment[];
    /**
     * Return the encoding of the message segment
     *
     * @returns {string} Encoding for the message segment(s)
     */
    getEncodingName(): string;
    /**
     * Internal method to create an array of EncodedChar from a string
     *
     * @param {string[]} graphemes Array of graphemes representing the message
     * @returns {object[]} Array of EncodedChar
     * @private
     */
    _encodeChars(graphemes: string[]): EncodedChars;
    /**
     * @returns {number} Total size of the message in bits (including User Data Header if present)
     */
    get totalSize(): number;
    /**
     * @returns {number} Total size of the message in bits (excluding User Data Header if present)
     */
    get messageSize(): number;
    /**
     *
     * @returns {number} Number of segments
     */
    get segmentsCount(): number;
    /**
     *
     * @returns {string[]} Array of characters representing the non GSM-7 characters in the message body
     */
    getNonGsmCharacters(): string[];
    get parsedMessage(): string;
}
export {};
