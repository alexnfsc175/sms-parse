import GraphemeSplitter = require('grapheme-splitter');
import {EncodedChar} from './EncodedChar';
import {GSM7EncodedChar} from './GSM7EncodedChar';
import {Segment} from './Segment';
import {UCS2EncodedChar} from './UCS2EncodedChar';

// type Constructor<T> = Function & { prototype: T }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T> = new (...args: any[]) => T;

/***************************************************************************
 * Segmented Message Class                                                 *
 *                                                                         *
 * Parse a message and build the segments based on the chosen encoding.    *
 ***************************************************************************/

export class SegmentedMessage {
  charClass: Constructor<EncodedChar>;
  encoding: string;
  splitter: GraphemeSplitter;
  segments: Segment[];

  constructor(
    message: string,
    encoding: string,
    graphemeSplitter: GraphemeSplitter,
  ) {
    this.charClass = this.charClassForEncoding(encoding);
    this.encoding = encoding;
    this.splitter = graphemeSplitter;

    let encodedChars = this.encodeChars(message);
    if (encoding === 'auto' && this.hasIncompatibleEncoding(encodedChars)) {
      this.charClass = UCS2EncodedChar;
      encodedChars = this.encodeChars(message);
    }

    this.segments = this.buildSegments(encodedChars);
  }

  buildSegments(
    encodedChars: EncodedChar[],
    useTwilioReservedBits?: boolean,
  ): Segment[] {
    const segments = [];
    const hasTwilioReservedBits = useTwilioReservedBits === true;
    let currentSegment = null;

    for (const encodedChar of encodedChars) {
      if (
        currentSegment === null ||
        currentSegment.freeSizeInBits() < encodedChar.sizeInBits()
      ) {
        if (currentSegment && hasTwilioReservedBits === false) {
          return this.buildSegments(encodedChars, true);
        }

        currentSegment = new Segment(hasTwilioReservedBits);
        segments.push(currentSegment);
      }
      currentSegment.push(encodedChar);
    }

    return segments;
  }

  charClassForEncoding(encoding: string): Constructor<EncodedChar> {
    if (encoding === 'GSM-7') {
      return GSM7EncodedChar;
    } else if (encoding === 'UCS-2') {
      return UCS2EncodedChar;
    } else if (encoding === 'auto') {
      return GSM7EncodedChar;
    } else {
      throw new Error('Unsupported encoding');
    }
  }

  getEncodingName(): string {
    if (this.charClass === GSM7EncodedChar) {
      return 'GSM-7';
    } else if (this.charClass === UCS2EncodedChar) {
      return 'UCS-2';
    } else {
      return 'Unkown';
    }
  }

  hasIncompatibleEncoding(encodedChars: EncodedChar[]): boolean {
    for (const encodedChar of encodedChars) {
      if (!encodedChar.codeUnits) {
        return true;
      }
    }
    return false;
  }

  encodeChars(message: string): EncodedChar[] {
    const encodedChars = [];
    for (const char of this.splitter.iterateGraphemes(message)) {
      if (char.length <= 2) {
        encodedChars.push(new this.charClass(char));
      } else {
        const parts = [...char];
        for (let i = 0; i < parts.length; i++) {
          encodedChars.push(
            new this.charClass(parts[i], i === 0 ? parts.length : 0),
          );
        }
      }
    }
    return encodedChars;
  }

  get totalSize(): number {
    let size = 0;
    for (const segment of this.segments) {
      size += segment.sizeInBits();
    }
    return size;
  }

  get messageSize(): number {
    let size = 0;
    for (const segment of this.segments) {
      size += segment.messageSizeInBits();
    }
    return size;
  }
}
