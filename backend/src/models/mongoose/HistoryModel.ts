import { Schema, model, Document, Model, Types } from "mongoose";

const HistorySchema = new Schema({
    _id: { type: Types.ObjectId, auto: true},
    date: { type: String, required: true },
    patient_id: { type: String, required: true},
    procedure_id: { type: String, required: true },
    doctor_id: { type: String, required: true },
    helped: { type: Boolean, required: true },
})

export const HistoryMongoCollection = model(
    "History", 
    HistorySchema
)