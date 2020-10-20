// Represent a UCS-2 encoded character
// UCS-2 is of fixed length and requires 2 code units per character

import {EncodedChar} from './EncodedChar';

// a UCS-2 code unit is an octet (8bits)
export class UCS2EncodedChar extends EncodedChar {
  graphemeSize: number;

  constructor(char: string, graphemeSize?: number) {
    super(char);
    this.graphemeSize = graphemeSize ?? 1;

    if (char.length === 2) {
      this.codeUnits = [char.charCodeAt(0), char.charCodeAt(1)];
    } else {
      this.codeUnits = [0x00, char.charCodeAt(0)];
    }
  }

  static codeUnitSizeInBits(): number {
    return 8; // UCS-2 code units are 8bits long
  }

  sizeInBits(): number {
    return 16 * this.graphemeSize; // UCS-2 characters are always 2 code units -> 16bits
  }
}
