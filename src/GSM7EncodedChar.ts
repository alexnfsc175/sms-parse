import {Charset} from './Charset';
// Represent a GSM-7 encoded character
// GSM-7 is of variable length and requires 1 or 2 code units per character

import {EncodedChar} from './EncodedChar';

// a GSM-7 code unit is a septet (7bits)
export class GSM7EncodedChar extends EncodedChar {
  constructor(char: string) {
    super(char);

    if (char.length === 1) {
      this.codeUnits = Charset.UNICODE_TO_GSM[char.charCodeAt(0)];
    }
    const transliterate = Charset.TRANSLITERATE[char.charCodeAt(0)];
    if (transliterate) {
      this.codeUnits = transliterate;
    }
  }

  static codeUnitSizeInBits(): number {
    return 7; // GSM-7 code units are 7bits long
  }

  sizeInBits(): number {
    if (this.codeUnits) {
      return this.codeUnits.length * 7; // GSM-7 can be composed of 1 or 2 code units
    } else {
      return 0; // Some characters do not exist in GSM-7 thus making their length 0
    }
  }
}
