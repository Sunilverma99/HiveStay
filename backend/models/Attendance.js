import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    roll: { type: String, required: true },
    date: { type: Date, default: Date.now }
    });

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;