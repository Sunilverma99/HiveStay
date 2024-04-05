import mongoose from "mongoose";
const maintenanceRequestSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    category: { type: String, required: true }, 
    description: { type: String, required: true },
    hostelName:{type:String,required:true},
    roomNumber:{ type:Number,required:true},
    status: { type: String, default: 'Pending' }, 
    createdAt: { type: Date, default: Date.now },
  });
  const RoomMaintaince = mongoose.model("RoomMaintaince",maintenanceRequestSchema);

  export default RoomMaintaince;