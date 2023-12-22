import { Types } from "mongoose";

export class UserDto {
    constructor(
        readonly _id: Types.ObjectId,
        readonly login: string,
        readonly password: string,
        readonly role: string
    ) {}
}