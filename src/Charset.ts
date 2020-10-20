export class Charset {
  /* In order to avoid confusion here is a list of terms
   * used throughout this code:
   * - octet: represent a byte or 8bits
   * - septet: represent 7bits
   * - character: a text unit, think one char is one glyph (Warning: this is an oversimplification and not always true)
   * - code point: a character value in a given encoding
   * - code unit: a single "block" used to encode a character
   *              UCS-2 is of fixed length and every character is 2 code units long
   *              GSM-7 is of variable length and require 1 or 2 code unit per character
   */

  // // Map of Javascript code points to GSM-7
  static UNICODE_TO_GSM: {[key: number]: number[]} = {
    0x000a: [0x0a],
    0x000c: [0x1b, 0x0a],
    0x000d: [0x0d],
    0x0020: [0x20],
    0x0021: [0x21],
    0x0022: [0x22],
    0x0023: [0x23],
    0x0024: [0x02],
    0x0025: [0x25],
    0x0026: [0x26],
    0x0027: [0x27],
    0x0028: [0x28],
    0x0029: [0x29],
    0x002a: [0x2a],
    0x002b: [0x2b],
    0x002c: [0x2c],
    0x002d: [0x2d],
    0x002e: [0x2e],
    0x002f: [0x2f],
    0x0030: [0x30],
    0x0031: [0x31],
    0x0032: [0x32],
    0x0033: [0x33],
    0x0034: [0x34],
    0x0035: [0x35],
    0x0036: [0x36],
    0x0037: [0x37],
    0x0038: [0x38],
    0x0039: [0x39],
    0x003a: [0x3a],
    0x003b: [0x3b],
    0x003c: [0x3c],
    0x003d: [0x3d],
    0x003e: [0x3e],
    0x003f: [0x3f],
    0x0040: [0x00], // @
    0x0041: [0x41],
    0x0042: [0x42],
    0x0043: [0x43],
    0x0044: [0x44],
    0x0045: [0x45],
    0x0046: [0x46],
    0x0047: [0x47],
    0x0048: [0x48],
    0x0049: [0x49],
    0x004a: [0x4a],
    0x004b: [0x4b],
    0x004c: [0x4c],
    0x004d: [0x4d],
    0x004e: [0x4e],
    0x004f: [0x4f],
    0x0050: [0x50],
    0x0051: [0x51],
    0x0052: [0x52],
    0x0053: [0x53],
    0x0054: [0x54],
    0x0055: [0x55],
    0x0056: [0x56],
    0x0057: [0x57],
    0x0058: [0x58],
    0x0059: [0x59],
    0x005a: [0x5a],
    0x005b: [0x1b, 0x3c],
    0x005c: [0x1b, 0x2f],
    0x005d: [0x1b, 0x3e],
    0x005e: [0x1b, 0x14],
    0x005f: [0x11],
    0x0061: [0x61],
    0x0062: [0x62],
    0x0063: [0x63],
    0x0064: [0x64],
    0x0065: [0x65],
    0x0066: [0x66],
    0x0067: [0x67],
    0x0068: [0x68],
    0x0069: [0x69],
    0x006a: [0x6a],
    0x006b: [0x6b],
    0x006c: [0x6c],
    0x006d: [0x6d],
    0x006e: [0x6e],
    0x006f: [0x6f],
    0x0070: [0x70],
    0x0071: [0x71],
    0x0072: [0x72],
    0x0073: [0x73],
    0x0074: [0x74],
    0x0075: [0x75],
    0x0076: [0x76],
    0x0077: [0x77],
    0x0078: [0x78],
    0x0079: [0x79],
    0x007a: [0x7a],
    0x007b: [0x1b, 0x28],
    // 0x007b: [0x1b28],
    0x007c: [0x1b, 0x40],
    // 0x007c: [0x1b40],
    0x007d: [0x1b, 0x29],
    // 0x007d: [0x1b29],
    0x007e: [0x1b, 0x3d],
    // 0x007e: [0x1b3d],
    0x00a1: [0x40],
    0x00a3: [0x01],
    0x00a4: [0x24],
    0x00a5: [0x03],
    0x00a7: [0x5f],
    0x00bf: [0x60],
    0x00c4: [0x5b],
    0x00c5: [0x0e],
    0x00c6: [0x1c],
    0x00c9: [0x1f],
    0x00d1: [0x5d],
    0x00d6: [0x5c],
    0x00d8: [0x0b],
    0x00dc: [0x5e],
    0x00df: [0x1e],
    0x00e0: [0x7f],
    0x00e4: [0x7b],
    0x00e5: [0x0f],
    0x00e6: [0x1d],
    0x00c7: [0x09],
    0x00e8: [0x04],
    0x00e9: [0x05],
    0x00ec: [0x07],
    0x00f1: [0x7d],
    0x00f2: [0x08],
    0x00f6: [0x7c],
    0x00f8: [0x0c],
    0x00f9: [0x06],
    0x00fc: [0x7e],
    0x0393: [0x13],
    0x0394: [0x10],
    0x0398: [0x19],
    0x039b: [0x14],
    0x039e: [0x1a],
    0x03a0: [0x16],
    0x03a3: [0x18],
    0x03a6: [0x12],
    0x03a8: [0x17],
    0x03a9: [0x15],
    0x20ac: [0x1b, 0x65],
    // 0x20ac: [0x1b65],
  };

  // Outra versão
  // static UNICODE_TO_GSM: { [key: number]: number[] } = {
  //   0x0000: [0x40], //	COMMERCIAL AT
  //   // 0x0000	: 0x00,	//	NULL (see note above)
  //   0x0001: [0xA3], //	POUND SIGN
  //   0x0002: [0x24], //	DOLLAR SIGN
  //   0x0003: [0xA5], //	YEN SIGN
  //   0x0004: [0xE8], //	LATIN SMALL LETTER E WITH GRAVE
  //   0x0005: [0xE9], //	LATIN SMALL LETTER E WITH ACUTE
  //   0x0006: [0xF9], //	LATIN SMALL LETTER U WITH GRAVE
  //   0x0007: [0xEC], //	LATIN SMALL LETTER I WITH GRAVE
  //   0x0008: [0xF2], //	LATIN SMALL LETTER O WITH GRAVE
  //   // 0x0009: 0xE7, //	LATIN SMALL LETTER C WITH CEDILLA
  //   // 0x0009	: 0xC7,	//	LATIN CAPITAL LETTER C WITH CEDILLA (see note above)
  //   0x000a: [0x0A], //	LINE FEED
  //   0x000b: [0xD8], //	LATIN CAPITAL LETTER O WITH STROKE
  //   0x000c: [0xF8], //	LATIN SMALL LETTER O WITH STROKE
  //   0x000d: [0x0D], //	CARRIAGE RETURN
  //   0x000e: [0xC5], //	LATIN CAPITAL LETTER A WITH RING ABOVE
  //   0x000f: [0xE5], //	LATIN SMALL LETTER A WITH RING ABOVE
  //   // 0x0010: '\u0394', //	GREEK CAPITAL LETTER DELTA
  //   0x0011: [0x5F], //	LOW LINE
  //   // 0x0012: '\u03A6', //	GREEK CAPITAL LETTER PHI
  //   // 0x0013: '\u0393', //	GREEK CAPITAL LETTER GAMMA
  //   // 0x0014: '\u039B', //	GREEK CAPITAL LETTER LAMDA
  //   // 0x0015: '\u03A9', //	GREEK CAPITAL LETTER OMEGA
  //   // 0x0016: '\u03A0', //	GREEK CAPITAL LETTER PI
  //   // 0x0017: '\u03A8', //	GREEK CAPITAL LETTER PSI
  //   // 0x0018: '\u03A3', //	GREEK CAPITAL LETTER SIGMA
  //   // 0x0019: '\u0398', //	GREEK CAPITAL LETTER THETA
  //   // 0x001a: '\u039E', //	GREEK CAPITAL LETTER XI
  //   0x001b: [0xA0], //	ESCAPE TO EXTENSION TABLE (or displayed as NBSP, see note above)
  //   0x1b0a: [0x0C], //	FORM FEED
  //   0x1b14: [0x5E], //	CIRCUMFLEX ACCENT
  //   0x1b28: [0x7B], //	LEFT CURLY BRACKET
  //   0x1b29: [0x7D], //	RIGHT CURLY BRACKET
  //   0x1b2f: [0x5C], //	REVERSE SOLIDUS
  //   0x1b3c: [0x5B], //	LEFT SQUARE BRACKET
  //   0x1b3d: [0x7E], //	TILDE
  //   0x1b3e: [0x5D], //	RIGHT SQUARE BRACKET
  //   0x1b40: [0x7C], //	VERTICAL LINE
  //   // 0x1b65: '\u20AC', //	EURO SIGN
  //   0x001c: [0xC6], //	LATIN CAPITAL LETTER AE
  //   0x001d: [0xE6], //	LATIN SMALL LETTER AE
  //   0x001e: [0xDF], //	LATIN SMALL LETTER SHARP S (German)
  //   0x001f: [0xC9], //	LATIN CAPITAL LETTER E WITH ACUTE
  //   0x0020: [0x20], //	SPACE
  //   0x0021: [0x21], //	EXCLAMATION MARK
  //   0x0022: [0x22], //	QUOTATION MARK
  //   0x0023: [0x23], //	NUMBER SIGN
  //   0x0024: [0xA4], //	CURRENCY SIGN
  //   0x0025: [0x25], //	PERCENT SIGN
  //   0x0026: [0x26], //	AMPERSAND
  //   0x0027: [0x27], //	APOSTROPHE
  //   0x0028: [0x28], //	LEFT PARENTHESIS
  //   0x0029: [0x29], //	RIGHT PARENTHESIS
  //   0x002a: [0x2A], //	ASTERISK
  //   0x002b: [0x2B], //	PLUS SIGN
  //   0x002c: [0x2C], //	COMMA
  //   0x002d: [0x2D], //	HYPHEN-MINUS
  //   0x002e: [0x2E], //	FULL STOP
  //   0x002f: [0x2F], //	SOLIDUS
  //   0x0030: [0x30], //	DIGIT ZERO
  //   0x0031: [0x31], //	DIGIT ONE
  //   0x0032: [0x32], //	DIGIT TWO
  //   0x0033: [0x33], //	DIGIT THREE
  //   0x0034: [0x34], //	DIGIT FOUR
  //   0x0035: [0x35], //	DIGIT FIVE
  //   0x0036: [0x36], //	DIGIT SIX
  //   0x0037: [0x37], //	DIGIT SEVEN
  //   0x0038: [0x38], //	DIGIT EIGHT
  //   0x0039: [0x39], //	DIGIT NINE
  //   0x003a: [0x3A], //	COLON
  //   0x003b: [0x3B], //	SEMICOLON
  //   0x003c: [0x3C], //	LESS-THAN SIGN
  //   0x003d: [0x3D], //	EQUALS SIGN
  //   0x003e: [0x3E], //	GREATER-THAN SIGN
  //   0x003f: [0x3F], //	QUESTION MARK
  //   0x0040: [0xA1], //	INVERTED EXCLAMATION MARK
  //   0x0041: [0x41], //	LATIN CAPITAL LETTER A
  //   0x0042: [0x42], //	LATIN CAPITAL LETTER B
  //   0x0043: [0x43], //	LATIN CAPITAL LETTER C
  //   0x0044: [0x44], //	LATIN CAPITAL LETTER D
  //   0x0045: [0x45], //	LATIN CAPITAL LETTER E
  //   0x0046: [0x46], //	LATIN CAPITAL LETTER F
  //   0x0047: [0x47], //	LATIN CAPITAL LETTER G
  //   0x0048: [0x48], //	LATIN CAPITAL LETTER H
  //   0x0049: [0x49], //	LATIN CAPITAL LETTER I
  //   0x004a: [0x4A], //	LATIN CAPITAL LETTER J
  //   0x004b: [0x4B], //	LATIN CAPITAL LETTER K
  //   0x004c: [0x4C], //	LATIN CAPITAL LETTER L
  //   0x004d: [0x4D], //	LATIN CAPITAL LETTER M
  //   0x004e: [0x4E], //	LATIN CAPITAL LETTER N
  //   0x004f: [0x4F], //	LATIN CAPITAL LETTER O
  //   0x0050: [0x50], //	LATIN CAPITAL LETTER P
  //   0x0051: [0x51], //	LATIN CAPITAL LETTER Q
  //   0x0052: [0x52], //	LATIN CAPITAL LETTER R
  //   0x0053: [0x53], //	LATIN CAPITAL LETTER S
  //   0x0054: [0x54], //	LATIN CAPITAL LETTER T
  //   0x0055: [0x55], //	LATIN CAPITAL LETTER U
  //   0x0056: [0x56], //	LATIN CAPITAL LETTER V
  //   0x0057: [0x57], //	LATIN CAPITAL LETTER W
  //   0x0058: [0x58], //	LATIN CAPITAL LETTER X
  //   0x0059: [0x59], //	LATIN CAPITAL LETTER Y
  //   0x005a: [0x5A], //	LATIN CAPITAL LETTER Z
  //   0x005b: [0xC4], //	LATIN CAPITAL LETTER A WITH DIAERESIS
  //   0x005c: [0xD6], //	LATIN CAPITAL LETTER O WITH DIAERESIS
  //   0x005d: [0xD1], //	LATIN CAPITAL LETTER N WITH TILDE
  //   0x005e: [0xDC], //	LATIN CAPITAL LETTER U WITH DIAERESIS
  //   0x005f: [0xA7], //	SECTION SIGN
  //   0x0060: [0xBF], //	INVERTED QUESTION MARK
  //   0x0061: [0x61], //	LATIN SMALL LETTER A
  //   0x0062: [0x62], //	LATIN SMALL LETTER B
  //   0x0063: [0x63], //	LATIN SMALL LETTER C
  //   0x0064: [0x64], //	LATIN SMALL LETTER D
  //   0x0065: [0x65], //	LATIN SMALL LETTER E
  //   0x0066: [0x66], //	LATIN SMALL LETTER F
  //   0x0067: [0x67], //	LATIN SMALL LETTER G
  //   0x0068: [0x68], //	LATIN SMALL LETTER H
  //   0x0069: [0x69], //	LATIN SMALL LETTER I
  //   0x006a: [0x6A], //	LATIN SMALL LETTER J
  //   0x006b: [0x6B], //	LATIN SMALL LETTER K
  //   0x006c: [0x6C], //	LATIN SMALL LETTER L
  //   0x006d: [0x6D], //	LATIN SMALL LETTER M
  //   0x006e: [0x6E], //	LATIN SMALL LETTER N
  //   0x006f: [0x6F], //	LATIN SMALL LETTER O
  //   0x0070: [0x70], //	LATIN SMALL LETTER P
  //   0x0071: [0x71], //	LATIN SMALL LETTER Q
  //   0x0072: [0x72], //	LATIN SMALL LETTER R
  //   0x0073: [0x73], //	LATIN SMALL LETTER S
  //   0x0074: [0x74], //	LATIN SMALL LETTER T
  //   0x0075: [0x75], //	LATIN SMALL LETTER U
  //   0x0076: [0x76], //	LATIN SMALL LETTER V
  //   0x0077: [0x77], //	LATIN SMALL LETTER W
  //   0x0078: [0x78], //	LATIN SMALL LETTER X
  //   0x0079: [0x79], //	LATIN SMALL LETTER Y
  //   0x007a: [0x7A], //	LATIN SMALL LETTER Z
  //   0x007b: [0xE4], //	LATIN SMALL LETTER A WITH DIAERESIS
  //   0x007c: [0xF6], //	LATIN SMALL LETTER O WITH DIAERESIS
  //   0x007d: [0xF1], //	LATIN SMALL LETTER N WITH TILDE
  //   0x007e: [0xFC], //	LATIN SMALL LETTER U WITH DIAERESIS
  //   0x007f: [0xE0], //	LATIN SMALL LETTER A WITH GRAVE
  // };

  /**
   * Maps UTF-8 chars that are not present in the GSM charset to a close match in one or more GSM charset-compatible
   * UTF-8 chars.
   */
  static TRANSLITERATE: {[key: number]: number[]} = {
    // Characters in the Unicode range 0000 - 00FF (latin1).
    // This list is hand-crafted and aims to cover the full latin1 range. Mappings marked with (*) are very
    // rough approximations that could be candidate for removal if full latin1 range is not a requirement anymore.
    0x0060: [0x27], // GRAVE ACCENT => APOSTROPHE
    0x00a0: [0x20], // NO-BREAK SPACE => SPACE
    0x00a2: [0x63], // CENT SIGN => LATIN SMALL LETTER C
    0x00a6: [0x7c], // BROKEN BAR => VERTICAL LINE
    0x00a8: [0x22], // DIAERESIS => QUOTATION MARK (*)
    0x00aa: [0x61], // FEMININE ORDINAL INDICATOR => LATIN SMALL LETTER A
    0x00ab: [0x22], // LEFT-POINTING DOUBLE ANGLE QUOTATION MARK => QUOTATION MARK
    0x00ac: [0x2d], // NOT SIGN => HYPHEN-MINUS (*)
    0x00ad: [0x2d], // SOFT HYPHEN => HYPHEN-MINUS
    0x00af: [0x5f], // MACRON => LOW LINE (*)
    0x00b0: [0x6f], // DEGREE SIGN => LATIN SMALL LETTER O (*)

    // 0x00A9: ['(c)'], // COPYRIGHT SIGN
    0x00a9: [0x28, 0x63, 0x29], // COPYRIGHT SIGN
    // '\u00AE': '(r)', // REGISTERED SIGN
    0x00ae: [0x28, 0x72, 0x29], // REGISTERED SIGN
    // '\u00B1': '+/-', // PLUS-MINUS SIGN
    0x00b1: [0x2b, 0x2f, 0x2d], // PLUS-MINUS SIGN
    // '\u00BC': '1/4', // VULGAR FRACTION ONE QUARTER
    0x00bc: [0x31, 0x2f, 0x34], // VULGAR FRACTION ONE QUARTER
    // '\u00BD': '1/2', // VULGAR FRACTION ONE HALF
    0x00bd: [0x31, 0x2f, 0x32], // VULGAR FRACTION ONE HALF
    // '\u00BE': '3/4', // VULGAR FRACTION THREE QUARTERS
    0x00be: [0x33, 0x2f, 0x34], // VULGAR FRACTION THREE QUARTERS

    0x00b2: [0x32], // SUPERSCRIPT TWO => DIGIT TWO
    0x00b3: [0x33], // SUPERSCRIPT THREE => DIGIT THREE
    0x00b4: [0x27], // ACUTE ACCENT => APOSTROPHE
    0x00b5: [0x75], // MICRO SIGN => LATIN SMALL LETTER U
    0x00b6: [0xa7], // PILCROW SIGN => SECTION SIGN (*)
    0x00b7: [0x2e], // MIDDLE DOT => FULL STOP
    0x00b8: [0x2c], // CEDILLA => COMMA (*)
    0x00b9: [0x31], // SUPERSCRIPT ONE => DIGIT ONE
    0x00ba: [0x6f], // MASCULINE ORDINAL INDICATOR => LATIN SMALL LETTER O (*)
    0x00bb: [0x22], // RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK => QUOTATION MARK
    0x00c0: [0x41], // LATIN CAPITAL LETTER A WITH GRAVE => LATIN CAPITAL LETTER A
    0x00c1: [0x41], // LATIN CAPITAL LETTER A WITH ACUTE => LATIN CAPITAL LETTER A
    0x00c2: [0x41], // LATIN CAPITAL LETTER A WITH CIRCUMFLEX => LATIN CAPITAL LETTER A
    0x00c3: [0x41], // LATIN CAPITAL LETTER A WITH TILDE => LATIN CAPITAL LETTER A
    0x00c8: [0x45], // LATIN CAPITAL LETTER E WITH GRAVE => LATIN CAPITAL LETTER E
    0x00ca: [0x45], // LATIN CAPITAL LETTER E WITH CIRCUMFLEX => LATIN CAPITAL LETTER E
    0x00cb: [0x45], // LATIN CAPITAL LETTER E WITH DIAERESIS => LATIN CAPITAL LETTER E
    0x00cc: [0x49], // LATIN CAPITAL LETTER I WITH GRAVE => LATIN CAPITAL LETTER I
    0x00cd: [0x49], // LATIN CAPITAL LETTER I WITH ACUTE => LATIN CAPITAL LETTER I
    0x00ce: [0x49], // LATIN CAPITAL LETTER I WITH CIRCUMFLEX => LATIN CAPITAL LETTER I
    0x00cf: [0x49], // LATIN CAPITAL LETTER I WITH DIAERESIS => LATIN CAPITAL LETTER I
    0x00d0: [0x44], // LATIN CAPITAL LETTER ETH => LATIN CAPITAL LETTER D
    0x00d2: [0x4f], // LATIN CAPITAL LETTER O WITH GRAVE => LATIN CAPITAL LETTER O
    0x00d3: [0x4f], // LATIN CAPITAL LETTER O WITH ACUTE => LATIN CAPITAL LETTER O
    0x00d4: [0x4f], // LATIN CAPITAL LETTER O WITH CIRCUMFLEX => LATIN CAPITAL LETTER O
    0x00d5: [0x4f], // LATIN CAPITAL LETTER O WITH TILDE => LATIN CAPITAL LETTER O
    0x00d7: [0x78], // MULTIPLICATION SIGN => LATIN SMALL LETTER X
    0x00d9: [0x55], // LATIN CAPITAL LETTER U WITH GRAVE => LATIN CAPITAL LETTER U
    0x00da: [0x55], // LATIN CAPITAL LETTER U WITH ACUTE => LATIN CAPITAL LETTER U
    0x00db: [0x55], // LATIN CAPITAL LETTER U WITH CIRCUMFLEX => LATIN CAPITAL LETTER U
    0x00dd: [0x59], // LATIN CAPITAL LETTER Y WITH ACUTE => LATIN CAPITAL LETTER Y
    // '\u00DE': 'TH', // LATIN CAPITAL LETTER THORN
    // 0x00DE: [0x44], // LATIN CAPITAL LETTER THORN => (((((ALEX)))))
    0x00de: [0x54, 0x48], // LATIN CAPITAL LETTER THORN
    0x00e1: [0x61], // LATIN SMALL LETTER A WITH ACUTE => LATIN SMALL LETTER A
    0x00e2: [0x61], // LATIN SMALL LETTER A WITH CIRCUMFLEX => LATIN SMALL LETTER A
    0x00e3: [0x61], // LATIN SMALL LETTER A WITH TILDE => LATIN SMALL LETTER A
    0x00e7: [0x63], // LATIN SMALL LETTER C WITH CEDILLA => LATIN SMALL LETTER C

    0x00ea: [0x65], // LATIN SMALL LETTER E WITH CIRCUMFLEX => LATIN SMALL LETTER E
    0x00eb: [0x65], // LATIN SMALL LETTER E WITH DIAERESIS => LATIN SMALL LETTER E
    0x00ed: [0x69], // LATIN SMALL LETTER I WITH ACUTE => LATIN SMALL LETTER I
    0x00ee: [0x69], // LATIN SMALL LETTER I WITH CIRCUMFLEX => LATIN SMALL LETTER I
    0x00ef: [0x69], // LATIN SMALL LETTER I WITH DIAERESIS => LATIN SMALL LETTER I
    0x00f0: [0x64], // LATIN SMALL LETTER ETH => LATIN SMALL LETTER D
    0x00f3: [0x6f], // LATIN SMALL LETTER O WITH ACUTE => LATIN SMALL LETTER O
    0x00f4: [0x6f], // LATIN SMALL LETTER O WITH CIRCUMFLEX => LATIN SMALL LETTER O
    0x00f5: [0x6f], // LATIN SMALL LETTER O WITH TILDE => LATIN SMALL LETTER O
    0x00f7: [0x2f], // DIVISION SIGN => SOLIDUS
    0x00fa: [0x75], // LATIN SMALL LETTER U WITH ACUTE => LATIN SMALL LETTER U
    0x00fb: [0x75], // LATIN SMALL LETTER U WITH CIRCUMFLEX => LATIN SMALL LETTER U
    0x00fd: [0x79], // LATIN SMALL LETTER Y WITH ACUTE => LATIN SMALL LETTER Y
    // '\u00FE': 'th', // LATIN SMALL LETTER THORN
    0x00fe: [0x74, 0x68], // LATIN SMALL LETTER THORN => (Latin Small Letter T, Latin Small Letter H) (((((ALEX)))))
    // 0x00FE: [0x70], // LATIN SMALL LETTER THORN => Latin Small Letter P (((((ALEX)))))
    0x00ff: [0x79], // LATIN SMALL LETTER Y WITH DIAERESIS => LATIN SMALL LETTER Y,

    // Polish chars.
    // See: https://github.com/BenMorel/GsmCharsetConverter/issues/1
    0x0105: [0x61], // Latin Small Letter A with Ogonek => Latin Small Letter A
    0x0104: [0x41], // Latin Capital Letter A with Ogonek => Latin Capital Letter A
    0x0107: [0x63], // Latin Small Letter C with Acute => Latin Small Letter C
    0x0106: [0x43], // Latin Capital Letter C with Acute => Latin Capital Letter C
    0x0119: [0x65], // Latin Small Letter E with Ogonek => Latin Small Letter E
    0x0118: [0x45], // Latin Capital Letter E with Ogonek => Latin Capital Letter E
    0x0142: [0x6c], // Latin Small Letter L with Stroke => Latin Small Letter L
    0x0141: [0x4c], // Latin Capital Letter L with Stroke => Latin Capital Letter L
    0x0144: [0x6e], // Latin Small Letter N with Acute => Latin Small Letter N
    0x0143: [0x4e], // Latin Capital Letter N with Acute => Latin Capital Letter N
    0x015b: [0x73], // Latin Small Letter S with Acute => Latin Small Letter S
    0x015a: [0x53], // Latin Capital Letter S with Acute => Latin Capital Letter S
    0x017a: [0x7a], // Latin Small Letter Z with Acute => Latin Small Letter Z
    0x0179: [0x5a], // Latin Capital Letter Z with Acute => Latin Capital Letter Z
    0x017c: [0x7a], // Latin Small Letter Z with Dot Above => Latin Small Letter Z
    0x017b: [0x5a], // Latin Capital Letter Z with Dot Above => Latin Capital Letter Z

    // Caracters que serão subistiuidos
    0x00e9: [0xe9]
  };
}
