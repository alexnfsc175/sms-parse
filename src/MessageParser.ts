import GraphemeSplitter from 'grapheme-splitter';
import {SegmentedMessage} from './SegmentedMessage';

export type Encoding = 'GSM-7' | 'UCS-2' | 'auto';

export class MessageParser {
  graphemeSplitter: GraphemeSplitter;
  encoding: Encoding;
  constructor(encoding: Encoding) {
    this.graphemeSplitter = new GraphemeSplitter();
    this.encoding = encoding;
  }

  parseNonGsmChars(message: string): string {
    const segmentedMessage = new SegmentedMessage(
      message,
      this.encoding,
      this.graphemeSplitter,
    );

    let parsedMessage = '';
    for (const segment of segmentedMessage.segments) {
      for (const seg of segment) {
        if (seg.codeUnits) {
          parsedMessage += String.fromCharCode(...seg.codeUnits);
        }
      }
    }
    return parsedMessage;
  }
}
