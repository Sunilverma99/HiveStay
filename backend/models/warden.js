// Using export statement
import mongoose from 'mongoose';

const newSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:true
  },
lastName:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required:true,
  },
  mobileNumber:{
    type:String,
    required:true,
  }
});
const Warden = mongoose.model("Warden", newSchema);
export default Warden;
