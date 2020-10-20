import {TwilioReservedChar} from './TwilioReservedChar';

export class Segment extends Array {
  hasTwilioReservedBits: boolean;

  constructor(hasTwilioReservedBits: boolean) {
    super();

    this.hasTwilioReservedBits = hasTwilioReservedBits;

    if (this.hasTwilioReservedBits) {
      for (let i = 0; i < 6; i++) {
        this.push(new TwilioReservedChar());
      }
    }
  }

  sizeInBits(): number {
    return this.reduce(
      (accumulator, encodedChar) => accumulator + encodedChar.sizeInBits(),
      0,
    );
  }

  messageSizeInBits(): number {
    return this.reduce(
      (accumulator, encodedChar) =>
        accumulator +
        (encodedChar instanceof TwilioReservedChar
          ? 0
          : encodedChar.sizeInBits()),
      0,
    );
  }

  freeSizeInBits(): number {
    const maxBitsInSegment = 1120; // max size of a SMS is 140 octets -> 140 * 8bits = 1120 bits
    return maxBitsInSegment - this.sizeInBits();
  }
}
