import mongoose from "mongoose";
const maintenanceRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  roll: { type: String, required: true },
  room: { type: String, required: true },
  subject: { type: String, required: true },
  complain: { type: String, required: true },
  userId: { type: String, required: true },
  Date: { type: Date, default: Date.now },
  });
  const RoomMaintaince = mongoose.model("RoomMaintaince",maintenanceRequestSchema);

  export default RoomMaintaince;