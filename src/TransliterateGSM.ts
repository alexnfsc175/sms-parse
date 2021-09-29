export const Transliterate: Record<string, Array<number>> = {
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
  0x00a9: [0x28, 0x63, 0x29], // COPYRIGHT SIGN
  0x00ae: [0x28, 0x72, 0x29], // REGISTERED SIGN
  0x00b1: [0x2b, 0x2f, 0x2d], // PLUS-MINUS SIGN
  0x00bc: [0x31, 0x2f, 0x34], // VULGAR FRACTION ONE QUARTER
  0x00bd: [0x31, 0x2f, 0x32], // VULGAR FRACTION ONE HALF
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
  0x00fe: [0x74, 0x68], // LATIN SMALL LETTER THORN => (Latin Small Letter T, Latin Small Letter H)
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
  0x00e9: [0xe9], // LATIN SMALL LETTER E WITH ACUTE => é
  0x005f: [0x5f], // Low Line => _
};
