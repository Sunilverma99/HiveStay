import express from "express"
import {holidaysApplicationStatus} from '../controllers/warden.controller.js'
import {getHolidaysApplication} from '../controllers/warden.controller.js'
import {getmessComplaints} from '../controllers/warden.controller.js'
import {getRoomComplains} from '../controllers/warden.controller.js'
import {getattendance} from '../controllers/warden.controller.js'
const router = express.Router();
router.put("/holidaysApplication/updateStatus/:id",holidaysApplicationStatus)
router.get('/holidaysApplication',getHolidaysApplication)
router.get('/getmessComplaints',getmessComplaints)
router.get('/getRoomComplains',getRoomComplains)
router.get('/getattendance',getattendance)
export default router;

