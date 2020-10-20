"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageParser = void 0;
const tslib_1 = require("tslib");
const grapheme_splitter_1 = tslib_1.__importDefault(require("grapheme-splitter"));
const SegmentedMessage_1 = require("./SegmentedMessage");
class MessageParser {
    constructor(encoding) {
        this.graphemeSplitter = new grapheme_splitter_1.default();
        this.encoding = encoding;
    }
    parseNonGsmChars(message) {
        const segmentedMessage = new SegmentedMessage_1.SegmentedMessage(message, this.encoding, this.graphemeSplitter);
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
exports.MessageParser = MessageParser;
