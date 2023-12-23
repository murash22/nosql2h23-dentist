import { Types } from "mongoose";

export class AppoitmentDto {
    constructor(
        readonly _id: Types.ObjectId,
        readonly date: string,
        readonly procedure_id: string,
        readonly patient_id: string,
        readonly doctor_id: string
    ) {}
}