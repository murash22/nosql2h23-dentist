import { Types } from "mongoose";

export class HistoryDto {
    constructor(
        readonly _id: Types.ObjectId,
        readonly date: string,
        readonly patient_id: Types.ObjectId,
        readonly procedure_id: Types.ObjectId,
        readonly doctor_id: Types.ObjectId,
        readonly helped: boolean,
    ) {}
}