import { Types } from "mongoose";

export class HistoryDto {
    constructor(
        readonly _id: Types.ObjectId,
        readonly date: string,
        readonly patient_id: string,
        readonly procedure_id: string,
        readonly doctor_id: string,
        readonly helped: boolean,
    ) {}
}