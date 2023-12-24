import { Router } from "express";
import { LoginController } from "../controllers/LoginController";
import { DoctorController } from "../controllers/DoctorController";
import { PatientController } from "../controllers/PatientController";
import { AdminController } from "../controllers/AdminController";

const router = Router();

router.post('/login', LoginController.login)

router.get('/doctors/:id', DoctorController.getDoctorById)

router.get('/patients/:id', PatientController.getPatientById)
router.get('/patients', PatientController.getAllPatients)

router.get('/appointments', AdminController.getAppointments)

export default router;