import GraphemeSplitter from 'grapheme-splitter';

import {Segment} from './Segment';
import {EncodedChar} from './EncodedChar';

type SmsEncoding = 'GSM-7';

type EncodedChars = Array<EncodedChar>;

/**
 * Class representing a segmented SMS
 */
export class GsmMessage {
  encoding = 'GSM-7';

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
   * @property {boolean} [encoding] encoding 'GSM-7'
   * @property {number} numberOfUnicodeScalars  Number of Unicode Scalars (i.e. unicode pairs) the message is made of
   *
   */
  constructor(message: string) {
    const splitter = new GraphemeSplitter();

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

  _buildSegments(encodedChars: EncodedChars): Segment[] {
    const segments: Segment[] = [];
    segments.push(new Segment());
    let currentSegment = segments[0];

    for (const encodedChar of encodedChars) {
      if (currentSegment.freeSizeInBits() < encodedChar.sizeInBits()) {
        segments.push(new Segment(true));
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
  getEncodingName(): string {
    return this.encodingName;
  }

  /**
   * Internal method to create an array of EncodedChar from a string
   *
   * @param {string[]} graphemes Array of graphemes representing the message
   * @returns {object[]} Array of EncodedChar
   * @private
   */
  _encodeChars(graphemes: string[]): EncodedChars {
    const encodedChars: EncodedChars = [];

    const forceGsm = true;
    for (const grapheme of graphemes) {
      encodedChars.push(new EncodedChar(grapheme, this.encodingName, forceGsm));
    }
    return encodedChars;
  }

  /**
   * @returns {number} Total size of the message in bits (including User Data Header if present)
   */
  get totalSize(): number {
    let size = 0;
    for (const segment of this.segments) {
      size += segment.sizeInBits();
    }
    return size;
  }

  /**
   * @returns {number} Total size of the message in bits (excluding User Data Header if present)
   */
  get messageSize(): number {
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
  get segmentsCount(): number {
    return this.segments.length;
  }

  /**
   *
   * @returns {string[]} Array of characters representing the non GSM-7 characters in the message body
   */
  getNonGsmCharacters(): string[] {
    return this.encodedChars
      .filter((encodedChar) => !encodedChar.isGSM7)
      .map((encodedChar) => encodedChar.raw);
  }

  get parsedMessage(): string {
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
