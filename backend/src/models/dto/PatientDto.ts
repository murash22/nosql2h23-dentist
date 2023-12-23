import { Types } from "mongoose";

export class PatientDto {
    constructor(
        readonly _id: Types.ObjectId,
        readonly name: string,
        readonly surname: string,
        readonly email: string,
        readonly birthdate: string,
        readonly contact: string,
        readonly bloodgroup: string,
    ) {}
}