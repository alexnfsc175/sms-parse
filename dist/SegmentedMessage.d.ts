import GraphemeSplitter = require('grapheme-splitter');
import { EncodedChar } from './EncodedChar';
import { Segment } from './Segment';
declare type Constructor<T> = new (...args: any[]) => T;
/***************************************************************************
 * Segmented Message Class                                                 *
 *                                                                         *
 * Parse a message and build the segments based on the chosen encoding.    *
 ***************************************************************************/
export declare class SegmentedMessage {
    charClass: Constructor<EncodedChar>;
    encoding: string;
    splitter: GraphemeSplitter;
    segments: Segment[];
    constructor(message: string, encoding: string, graphemeSplitter: GraphemeSplitter);
    buildSegments(encodedChars: EncodedChar[], useTwilioReservedBits?: boolean): Segment[];
    charClassForEncoding(encoding: string): Constructor<EncodedChar>;
    getEncodingName(): string;
    hasIncompatibleEncoding(encodedChars: EncodedChar[]): boolean;
    encodeChars(message: string): EncodedChar[];
    get totalSize(): number;
    get messageSize(): number;
}
export {};
