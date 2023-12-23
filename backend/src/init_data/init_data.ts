import mongoose from "mongoose";
import { Types } from "mongoose";

import { UsersMongoCollection } from "../models/mongoose/UsersModel";
import { AdminsMongoCollection } from "../models/mongoose/AdminModel";
import { AppoitmentMongoCollection } from "../models/mongoose/AppoitmentModel";
import { DoctorMongoCollection } from "../models/mongoose/DoctorModel";
import { HistoryMongoCollection } from "../models/mongoose/HistoryModel";
import { PatientsMongoCollection } from "../models/mongoose/PatientModel";
import { ProceduresMongoCollection } from "../models/mongoose/ProcedureModel";

import { UserDto } from "../models/dto/UserDto";
import { AdminDto } from "../models/dto/AdminDto";
import { AppoitmentDto } from "../models/dto/AppoitmentDto";
import { DoctorDto } from "../models/dto/DoctorDto";
import { HistoryDto } from "../models/dto/HistoryDto";
import { PatientDto } from "../models/dto/PatientDto";
import { ProcedureDto } from "../models/dto/ProcedureDto";

class DataInitializer {
    public async initializeUsers(): Promise<void> {

        const testData: UserDto[] = [
            { _id: new mongoose.Types.ObjectId(), login: "admin", password: "admin", role: "admin" },
            { _id: new mongoose.Types.ObjectId(),  login: "doctor", password: "doctor", role: "doctor" },
            { _id: new mongoose.Types.ObjectId(), login: "patient", password: "patient", role: "patient" },
            { _id: new mongoose.Types.ObjectId(), login: "patient2", password: "patient", role: "patient" },
            { _id: new mongoose.Types.ObjectId(), login: "patient3", password: "patient", role: "patient" },
        ];
        await UsersMongoCollection.insertMany(testData);
    }

    public async initializeAdmins(): Promise<void> {
        const adminUser = await UsersMongoCollection.findOne({login: "admin"}).exec()
        const adminId = new Types.ObjectId(String(adminUser?._id))
        const testData: AdminDto[] = [
            { _id: adminId, name: "Антон", surname: "Торопыгин", email: "admin@example.com" },
        ];

        await AdminsMongoCollection.insertMany(testData);
    }

    public async initializeProcedures(): Promise<void> {
        const testData: ProcedureDto[] = [
            { _id: new mongoose.Types.ObjectId(), name: "Кариес", price: "10000$" },
            { _id: new mongoose.Types.ObjectId(), name: "Пульпит", price: "20000$" },
            { _id: new mongoose.Types.ObjectId(), name: "Вырвать зуб мудрости", price: "У вас нет столько денег" },
        ];
        await ProceduresMongoCollection.insertMany(testData);
    }

    public async initializeDoctors(): Promise<void> {
        const doctorUser = await UsersMongoCollection.findOne({login: "doctor"}).exec()
        const doctorId = new Types.ObjectId(String(doctorUser?._id))

        const testData: DoctorDto[] = [
            { _id: doctorId, name: "Ашыр", surname: "Мыратгилдиев", email: "doctor@example.com", contact: "123456789", experience: "5 years" },
        ];

        await DoctorMongoCollection.insertMany(testData);
    }

    public async initializePatients(): Promise<void> {
        const patientUsers = await UsersMongoCollection.find({ role: "patient" });

        const patientIds: Types.ObjectId[] = patientUsers.map(patient => patient._id!) as Types.ObjectId[];

        const testData: PatientDto[] = [
            { _id: patientIds[0], name: "Максим", surname: "Тишкин", email: "patient@example.com", birthdate: "22.08.2002", contact: "987654321", bloodgroup: "A+", card: "0001" },
            { _id: patientIds[1], name: "Саша", surname: "Морозов", email: "patient@example.com", birthdate: "22.08.2002", contact: "987654321", bloodgroup: "A+", card: "0002"  },
            { _id: patientIds[2], name: "Миша", surname: "Переверза", email: "patient@example.com", birthdate: "22.08.2002", contact: "987654321", bloodgroup: "A+", card: "0003"  },
        ];

        await PatientsMongoCollection.insertMany(testData);
    }

    public async initializeAppointments(): Promise<void> {
        const procedure = await ProceduresMongoCollection.findOne({name: "Кариес"}).exec()
        const procedureId = new Types.ObjectId(String(procedure?._id))

        const patientUsers = await UsersMongoCollection.find({ role: "patient" });
        const patientIds: Types.ObjectId[] = patientUsers.map(patient => patient._id!) as Types.ObjectId[];

        const doctorUser = await UsersMongoCollection.findOne({login: "doctor"}).exec()
        const doctorId = new Types.ObjectId(String(doctorUser?._id))

        const testData: AppoitmentDto[] = [
            { _id: new mongoose.Types.ObjectId(), date: "01/01/2024, 00:00-08:00", procedure_id: procedureId, patient_id: patientIds[0], doctor_id: doctorId },
            { _id: new mongoose.Types.ObjectId(), date: "02/01/2024, 00:00-08:00", procedure_id: procedureId, patient_id: patientIds[1], doctor_id: doctorId },
            { _id: new mongoose.Types.ObjectId(), date: "03/01/2024, 00:00-08:00", procedure_id: procedureId, patient_id: patientIds[2], doctor_id: doctorId },
        ];

        await AppoitmentMongoCollection.insertMany(testData);
    }

    public async initializeHistories(): Promise<void> {
        const procedure = await ProceduresMongoCollection.findOne({name: "Кариес"}).exec()
        const procedureId = new Types.ObjectId(String(procedure?._id))

        const patientUser = await UsersMongoCollection.findOne({login: "patient"}).exec()
        const patientId = new Types.ObjectId(String(patientUser?._id))

        const doctorUser = await UsersMongoCollection.findOne({login: "doctor"}).exec()
        const doctorId = new Types.ObjectId(String(doctorUser?._id))


        const testData: HistoryDto[] = [
            { _id: new mongoose.Types.ObjectId(), date: "2023-12-31", patient_id: patientId, procedure_id: procedureId, doctor_id: doctorId, helped: true },
        ];

        await HistoryMongoCollection.insertMany(testData);
    }



    public async initializeAllData() {
        await this.initializeUsers()
        await this.initializeProcedures()
        await this.initializeAdmins()
        await this.initializeDoctors()
        await this.initializePatients()
        await this.initializeHistories()
        await this.initializeAppointments()
    }

    public async removeAll() {
        await UsersMongoCollection.deleteMany({})
        await AdminsMongoCollection.deleteMany({})
        await AppoitmentMongoCollection.deleteMany({})
        await DoctorMongoCollection.deleteMany({})
        await HistoryMongoCollection.deleteMany({})
        await PatientsMongoCollection.deleteMany({})
        await ProceduresMongoCollection.deleteMany({})
    }
}

// Пример использования
export const dataInitializer = new DataInitializer();
