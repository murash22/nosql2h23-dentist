import { Types } from "mongoose";

export class ProcedureDto {
    constructor(
        readonly _id: Types.ObjectId,
        readonly name: string,
        readonly price: string,
    ) {}
}