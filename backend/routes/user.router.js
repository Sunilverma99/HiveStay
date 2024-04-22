import express from "express"
import { complaints, holidaysApplication, roomMaintaince, suggestions ,user,holidayApplicationResponse,getCount,attendance} from "../controllers/user.controller.js";
const router = express.Router();
router.get('/user',user);
router.post('/addSuggestions',suggestions)
router.post('/addComplaints',complaints)
router.post('/holidaysApplication',holidaysApplication)
router.post('/roomMaintance',roomMaintaince)
router.get('/applicationResult/:userId',holidayApplicationResponse)
router.get('/getCount',getCount)
router.post('/attendance',attendance)
export default router;