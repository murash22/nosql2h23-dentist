import { Types } from "mongoose";

export class AppoitmentDto {
    constructor(
        readonly _id: Types.ObjectId,
        readonly date: String,
        readonly procedure_id: Types.ObjectId,
        readonly patient_id: Types.ObjectId,
        readonly doctor_id: Types.ObjectId
    ) {}
}