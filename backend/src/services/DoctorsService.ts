import mongoose from "mongoose";
import { DoctorMongoCollection } from "../models/mongoose/DoctorModel";
import { DoctorDto } from "../models/dto/DoctorDto";
import { AppoitmentMongoCollection } from "../models/mongoose/AppoitmentModel";
import { PatientsMongoCollection } from "../models/mongoose/PatientModel";
import { ProceduresMongoCollection } from "../models/mongoose/ProcedureModel";

class DoctorsService {
    public async getDoctorById(id: string) {
        const objId = new mongoose.Types.ObjectId(id)
        const doctor = await DoctorMongoCollection.findById(objId)

        const appoitments = await AppoitmentMongoCollection.find({doctor_id: objId})

        let myAppoitments: { [key: string]: any }[] = [];

        for(const appoitment of appoitments) {
            const procedure = await ProceduresMongoCollection.findOne({_id: appoitment?.procedure_id})
            const patient = await PatientsMongoCollection.findOne({_id: appoitment?.patient_id})
            const date = appoitment?.date
            const appointmentDetails = {
                "date": date,
                "procedure": procedure?.name,
                "patient": patient?.name + " " + patient?.surname
            };
            myAppoitments.push(appointmentDetails);
        }


        return { "name": doctor?.name, "surname": doctor?.surname,  "appoitments": myAppoitments}
    }
}

export const doctorsService = new DoctorsService()