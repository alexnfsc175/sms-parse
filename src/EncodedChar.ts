// export interface Base{}
export abstract class EncodedChar {
  codeUnits: number[] | null;
  raw: string | null;

  constructor(char: string | null) {
    this.raw = char;
    this.codeUnits = null;
  }

  sizeInBits(): number {
    return 0;
  }

  static codeUnitSizeInBits(): number | undefined {
    return undefined;
  }
}
