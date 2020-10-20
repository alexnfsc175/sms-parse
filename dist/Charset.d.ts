export declare class Charset {
    static UNICODE_TO_GSM: {
        [key: number]: number[];
    };
    /**
     * Maps UTF-8 chars that are not present in the GSM charset to a close match in one or more GSM charset-compatible
     * UTF-8 chars.
     */
    static TRANSLITERATE: {
        [key: number]: number[];
    };
}
