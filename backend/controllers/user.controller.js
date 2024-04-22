import mongoose from "mongoose";
import User from "../models/User.js";
import Suggestion from "../models/Suggestion.js";
import Complaint from "../models/Complaints.js";
import HolidaysApplication from "../models/HolidaysApplication.js";
import RoomMaintaince from '../models/RoomMaintaince.js'
import Attendance from '../models/Attendance.js'

//To find the user and its all details
export const user= async(req,res,next)=>{
  try {
    const _id = req.body;  

    try {
      const user = await User.findById(_id);  //
      console.log(user)
      if (!user) {
        return res.status(404).json("This user does not exist");
      }
      return res.status(200).json({
        _id: user._id,
        firstName: user.firstName,
    lastName:user.lastName,
    email:user.email,
    rollNumber: user.rollNumber,
    roomNumber: user.roomNumber,
    branch:user.branch,
    mess: user.mess,
    mobileNumber:user.mobileNumber,
    homeMobileNumber: user.homeMobileNumber,
    address:user.address,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } catch (error) {
    console.error('There is some error in finding the user:', error);
    next(error);
  }
}

// Complaints function 
export const complaints=async(req,res,next)=>{
  try {
    const { name,email,roll,mess,subject,complain,userId} = req.body;
    console.log("userid",userId)
    console.log("name",req.body)
    const complaint = new Complaint({name,email,roll,mess,subject,complain,userId});
    console.log(complaint);
    if(!complaint){
      return res.status(400).json({ error: 'Please Enter the complaints or Empty' });
    }
    await complaint.save();
    
    res.status(201).send("your complaints added successfully");
  } catch (error) {
    res.status(400).send(error);
  }
}
// Suggestions function
export const suggestions=async(req,res,next)=>{
  try {
    const suggestion = new Suggestion(req.body);
    if(!suggestion){
      return res.status(400).json({ error: 'Please Enter the suggestion or Empty' });
    }
    await suggestion.save();
    res.status(201).send("your suggestions added successfully");
  } catch (error) {
    res.status(400).send(error);
  }
}
// Holidays application
export  const holidaysApplication=async(req,res,next)=>{
  try {
    const holidayApplication = new HolidaysApplication(req.body);
    
    
    const value=await holidayApplication.save();
    console.log("value",value);
    res.status(201).send("Your application is sended successfully");
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }

}
//function for room maintaince like electric and civil
export const roomMaintaince=async(req,res,next)=>{
  try {
    const { userId, category, description,hostelName,roomNumber } = req.body;

    const maintenanceRequest = new RoomMaintaince({
      userId,
      category,
      description,
      hostelName,
      roomNumber
    });

    await maintenanceRequest.save();
    res.status(201).json("Your request is sended successfuly");
  } catch (error) {
    res.status(400).send(error);
  }
}

export const holidayApplicationResponse = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const applications = await HolidaysApplication.find({ userId: userId });
    if (!applications || applications.length === 0) {
      return res.status(404).json({ error: 'No holiday applications found for this user' });
    } else {
      return res.status(200).json(applications);
    }

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
export const getCount=async(req,res,next)=>{
  try {
    const userCount = await User.countDocuments();
    const complaintCount = await Complaint.countDocuments();

    res.status(200).json({ userCount, complaintCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const attendance=async(req,res,next)=>{
  try{
    const {name,roll,date}=req.body;
    const attendance = new Attendance({name,roll,date});

    const checkUser=await Attendance.findOne({roll:roll,date:date});
    if(!checkUser){
      await attendance.save();
    }
    else{
    
    }
   
    res.status(201).send("your complaints added successfully");
  }
  catch(error){
    res.status(500).json({error:error.message});
  }
}
