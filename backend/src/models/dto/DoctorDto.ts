import { Types } from "mongoose";

export class DoctorDto {
    constructor(
        readonly _id: Types.ObjectId,
        readonly name: string,
        readonly surname: string,
        readonly email: string,
        readonly contact: string,
        readonly experience: string
    ) {}
}