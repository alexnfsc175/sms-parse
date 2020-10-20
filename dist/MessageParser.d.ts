import GraphemeSplitter from 'grapheme-splitter';
export declare type Encoding = 'GSM-7' | 'UCS-2' | 'auto';
export declare class MessageParser {
    graphemeSplitter: GraphemeSplitter;
    encoding: Encoding;
    constructor(encoding: Encoding);
    parseNonGsmChars(message: string): string;
}
