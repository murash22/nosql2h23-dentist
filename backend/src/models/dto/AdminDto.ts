import { Types } from "mongoose";

export class AdminDto {
    constructor(
        readonly _id: Types.ObjectId,
        readonly name: string, 
        readonly surname: string, 
        readonly email: string, 
    ) {}
}