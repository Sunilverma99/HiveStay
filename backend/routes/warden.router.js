import express from "express"
import {holidaysApplicationStatus} from '../controllers/warden.controller.js'
import {getHolidaysApplication} from '../controllers/warden.controller.js'
import {getmessComplaints} from '../controllers/warden.controller.js'
import {getCivilComplaints} from '../controllers/warden.controller.js'
const router = express.Router();
router.put("/holidaysApplication/updateStatus/:id",holidaysApplicationStatus)
router.get('/holidaysApplication',getHolidaysApplication)
router.get('/getmessComplaints',getmessComplaints)
router.get('/getCivilComplaints',getCivilComplaints)
export default router;

