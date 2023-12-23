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

        const appointments = await AppoitmentMongoCollection.find({doctor_id: objId})

        let myAppointments: { [key: string]: any }[] = [];

        for(const appointment of appointments) {
            const procedure = await ProceduresMongoCollection.findOne({_id: appointment?.procedure_id})
            const patient = await PatientsMongoCollection.findOne({_id: appointment?.patient_id})
            const date = appointment?.date
            const appointmentDetails = {
                "date": date,
                "procedure": procedure?.name,
                "patient": patient?.name + " " + patient?.surname
            };
            myAppointments.push(appointmentDetails);
        }


        return { "name": doctor?.name, "surname": doctor?.surname,  "appointments": myAppointments}
    }
}

export const doctorsService = new DoctorsService()