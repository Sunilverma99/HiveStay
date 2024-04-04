import HolidaysApplication from "../models/HolidaysApplication.js";
import mongoose from "mongoose";
import Complaints from "../models/Complaints.js";

export const holidaysApplicationStatus = async (req, res, next) => {
    const { id } = req.params;
    const { status } = req.body;
    console.log(id);
    console.log(status);

    try {
        const application = await HolidaysApplication.findByIdAndUpdate(
            id, 
            { $set: { status: status } },
            { new: true }
        );

        console.log(application);

        if (!application) {
            return res.status(404).json({ error: 'holidaysApplication not found' });
        }

        return res.json({ message: 'holidaysApplication status updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}



export const getHolidaysApplication = async (req, res, next) => {
    try{
        const application = await HolidaysApplication.find();
        return res.status(200).json(application);
    }
    catch(error){
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

}

export const getmessComplaints = async (req, res, next) => {
    try{
        const application = await Complaints.find();
        console.log(application);
        return res.status(200).json(application);
    }
    catch(error){
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
