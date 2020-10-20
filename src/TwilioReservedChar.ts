import {EncodedChar} from './EncodedChar';

export class TwilioReservedChar extends EncodedChar {
  constructor() {
    super(null);
    this.codeUnits = null;
  }

  sizeInBits(): number {
    return 8;
  }

  static codeUnitSizeInBits(): number {
    return 8;
  }
}
