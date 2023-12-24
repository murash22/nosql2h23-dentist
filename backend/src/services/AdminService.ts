import mongoose from "mongoose";
import {AdminsMongoCollection} from "../models/mongoose/AdminModel";
import {AppoitmentMongoCollection} from "../models/mongoose/AppoitmentModel";
import {ProceduresMongoCollection} from "../models/mongoose/ProcedureModel";
import {PatientsMongoCollection} from "../models/mongoose/PatientModel";
import {DoctorMongoCollection} from "../models/mongoose/DoctorModel";

class AdminService {
    public async getAdminById(id: string) {
        const objId = new mongoose.Types.ObjectId(id)
        const admin = await AdminsMongoCollection.findById(objId)

        const appointments = await AppoitmentMongoCollection.find({})

        let myAppointments: { [key: string]: any }[] = [];

        for(const appointment of appointments) {
            const procedure = await ProceduresMongoCollection.findOne({_id: appointment?.procedure_id})
            const patient = await PatientsMongoCollection.findOne({_id: appointment?.patient_id})
            const date = appointment?.date
            const doctor = await DoctorMongoCollection.findOne({_id: appointment?.doctor_id})
            const appointmentDetails = {
                "date": date,
                "procedure": procedure?.name,
                "patient": patient?.name + " " + patient?.surname,
                "doctor": doctor?.name + " " + doctor?.surname
            };
            myAppointments.push(appointmentDetails);
        }


        return {"appointments": myAppointments}
    }
}

export const adminService = new AdminService()