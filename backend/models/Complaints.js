import mongoose from "mongoose";
const complaintSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  roll: { type: String, required: true },
  mess: { type: String, required: true },
  subject: { type: String, required: true },
  complain: { type: String, required: true },
  userId: { type: String, required: true },
  Date: { type: Date, default: Date.now },
});
const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;