"use strict";
/*
 * Represent a User Data Header https://en.wikipedia.org/wiki/User_Data_Header
 * Twilio messages reserve 6 of this per segment in a concatenated message
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataHeader = void 0;
class UserDataHeader {
    constructor() {
        this.isReservedChar = true;
        this.isUserDataHeader = true;
    }
    static codeUnitSizeInBits() {
        return 8;
    }
    sizeInBits() {
        return 8;
    }
}
exports.UserDataHeader = UserDataHeader;
