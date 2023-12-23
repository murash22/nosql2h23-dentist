import { Router } from "express";
import { LoginController } from "../controllers/LoginController";
import { DoctorController } from "../controllers/DoctorController";
import { PatientController } from "../controllers/PatientController";
import { AdminController } from "../controllers/AdminController";

const router = Router();

router.post('/login', LoginController.login)

router.get('/doctors/:id', DoctorController.getDoctorById)

router.get('/patients/', PatientController.getPatientInfo)

router.get('/admins/', AdminController.getAdminInfo)

router.get('/', LoginController.login)

export default router;