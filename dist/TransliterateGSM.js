"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transliterate = void 0;
exports.Transliterate = {
    // Characters in the Unicode range 0000 - 00FF (latin1).
    // This list is hand-crafted and aims to cover the full latin1 range. Mappings marked with (*) are very
    // rough approximations that could be candidate for removal if full latin1 range is not a requirement anymore.
    0x0060: [0x27],
    0x00a0: [0x20],
    0x00a2: [0x63],
    0x00a6: [0x7c],
    0x00a8: [0x22],
    0x00aa: [0x61],
    0x00ab: [0x22],
    0x00ac: [0x2d],
    0x00ad: [0x2d],
    0x00af: [0x5f],
    0x00b0: [0x6f],
    0x00a9: [0x28, 0x63, 0x29],
    0x00ae: [0x28, 0x72, 0x29],
    0x00b1: [0x2b, 0x2f, 0x2d],
    0x00bc: [0x31, 0x2f, 0x34],
    0x00bd: [0x31, 0x2f, 0x32],
    0x00be: [0x33, 0x2f, 0x34],
    0x00b2: [0x32],
    0x00b3: [0x33],
    0x00b4: [0x27],
    0x00b5: [0x75],
    0x00b6: [0xa7],
    0x00b7: [0x2e],
    0x00b8: [0x2c],
    0x00b9: [0x31],
    0x00ba: [0x6f],
    0x00bb: [0x22],
    0x00c0: [0x41],
    0x00c1: [0x41],
    0x00c2: [0x41],
    0x00c3: [0x41],
    0x00c8: [0x45],
    0x00ca: [0x45],
    0x00cb: [0x45],
    0x00cc: [0x49],
    0x00cd: [0x49],
    0x00ce: [0x49],
    0x00cf: [0x49],
    0x00d0: [0x44],
    0x00d2: [0x4f],
    0x00d3: [0x4f],
    0x00d4: [0x4f],
    0x00d5: [0x4f],
    0x00d7: [0x78],
    0x00d9: [0x55],
    0x00da: [0x55],
    0x00db: [0x55],
    0x00dd: [0x59],
    0x00de: [0x54, 0x48],
    0x00e1: [0x61],
    0x00e2: [0x61],
    0x00e3: [0x61],
    0x00e7: [0x63],
    0x00ea: [0x65],
    0x00eb: [0x65],
    0x00ed: [0x69],
    0x00ee: [0x69],
    0x00ef: [0x69],
    0x00f0: [0x64],
    0x00f3: [0x6f],
    0x00f4: [0x6f],
    0x00f5: [0x6f],
    0x00f7: [0x2f],
    0x00fa: [0x75],
    0x00fb: [0x75],
    0x00fd: [0x79],
    0x00fe: [0x74, 0x68],
    0x00ff: [0x79],
    // Polish chars.
    // See: https://github.com/BenMorel/GsmCharsetConverter/issues/1
    0x0105: [0x61],
    0x0104: [0x41],
    0x0107: [0x63],
    0x0106: [0x43],
    0x0119: [0x65],
    0x0118: [0x45],
    0x0142: [0x6c],
    0x0141: [0x4c],
    0x0144: [0x6e],
    0x0143: [0x4e],
    0x015b: [0x73],
    0x015a: [0x53],
    0x017a: [0x7a],
    0x0179: [0x5a],
    0x017c: [0x7a],
    0x017b: [0x5a],
    // Caracters que serão subistiuidos
    0x00e9: [0xe9],
    0x005f: [0x5f], // Low Line => _
};
