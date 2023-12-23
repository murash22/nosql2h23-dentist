import { Schema, model, Document, Model, Types } from "mongoose";

const AppoitmentSchema = new Schema({
    _id: { type: Types.ObjectId, auto: true},
    date: { type: String, required: true},
    procedure_id: { type: Types.ObjectId, required: true},
    patient_id: { type: Types.ObjectId, required: true},
    doctor_id: { type: Types.ObjectId, required: true},
})

export const AppoitmentMongoCollection = model(
    "Appoitments",
    AppoitmentSchema
)