     import mongoose from "mongoose";
     const holidayApplicationSchema = new mongoose.Schema({
     name: { type: String,
          required: true },
     
     email:{type: String,
          required: true
     },
     hostelName:{type: String,
          required: true 
     },
     rollNumber: { type: String,
          required: true },

     roomNumber: { type: String,
          required: true },

     noOfHolidays: { type: String,
          required: true },
          from:{
               type: Date,
          required: true
          },
          to :{
               type: Date,
               required: true   
          },
     
     reason: { type: String,
          required: true },

     mobileNumber: { type: String,
          required: true },

     homeMobileNumber: { type: String,
          required: true },

     userId: {
          type: String,
               required: true,
          },
               
     status: { type: String,
          default: 'Pending' },
          
          createdAt: { type: Date,
               default: Date.now },
     });
     const HolidaysApplication = mongoose.model("HolidaysApplication", holidayApplicationSchema);

     export default HolidaysApplication;