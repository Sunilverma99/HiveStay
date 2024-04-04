import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LeaveCard from './LeaveCard';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
export default function Leave() {
  const user = useSelector(state => state.auth.user);
  const [value,setValue]=useState([]);
  
const[data,setData]=useState({
  name:user.firstName,
  email:user.email,
  hostelName:"",
  roomNumber:user.roomNumber,
  rollNumber:user.rollNumber,
  noOfHolidays:0,
  from:Date,
  to:Date,
  mobileNumber:user.mobileNumber,
  homeMobileNumber:"",
  reason:"",
  userId:user?.id
});

const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/api/holidaysApplication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log('Data submitted successfully!');
      toast.success("Your application has been submitted successfully");
      navigate('/');
    } else {
      console.error('Failed to submit data');
      toast.error("Failed to submit your application ,Please try again")
    }
  } catch (error) {
    console.error('Error submitting data:', error);
    toast.error("Please try again Later");
  }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/holidaysApplication', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
       setValue(res.data);
       const filteredData=res.data.filter((item)=>{
        if(item.status==="Pending"){
          return item;
        } 
       });
        setValue(filteredData);
       
      } catch (error) {
       
      }
    };
  
    fetchData();
  }, [value]);
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
        <Layout title="Leave"/>
        {user.email==="warden@iiitu.ac.in"?(
          <div className='ml-96'>
            {value.map((item)=>(
                <LeaveCard
                id={item._id}
                name={item.name}
                email={item.email}
                hostelName={item.hostelName}
                roomNumber={item.roomNumber}
                rollNumber={item.rollNumber}
                noOfHolidays={item.noOfHolidays}
                reason={item.reason}
                status={item.status}
                mobileNumber={item.mobileNumber}
                homeMobileNumber={item.homeMobileNumber}
                from={item.from}
                to={item.to}

                />
            ))}
        
          </div>
        ):(
<form onSubmit={handleSubmit} className="max-w-md mx-auto my-4 ">
<div className="relative z-0 w-full mb-5 group bg-rose-200 text-black rounded-lg">
      <input onChange={handleChange} value={user.firstName} disabled type="name" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  <div className="relative z-0 w-full mb-5 group bg-rose-200 text-black rounded-lg">
      <input onChange={handleChange} value={user.email} disabled type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  
  
  <div className="grid md:grid-cols-3 md:gap-6">
    <div className="relative z-0 w-full mb-5 group bg-rose-200 text-black rounded-lg">
      <input type="text" onChange={handleChange} name="hostelName" id="HostelName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hostel Name</label>
  </div>
    <div className="relative z-0 w-full mb-5 group bg-rose-200 text-black rounded-lg">
        <input type="text" name="roomNumber" value={user.roomNumber} disabled onChange={handleChange} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Room No</label>
    </div>
    <div className="relative z-0 w-full mb-5 group bg-rose-200 text-black rounded-lg">
        <input type="text" name="rollNumber" value={user.rollNumber} disabled onChange={handleChange} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Roll No.</label>
    </div>
  </div>
   
  <div className="grid md:grid-cols-3 md:gap-6">
    <div className="relative z-0 w-full mb-5 group bg-rose-200 text-black rounded-lg">
      <input type="text" name="noOfHolidays"  onChange={handleChange} id="HostelName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No of Holidays</label>
  </div>
    <div className="relative z-0 w-full mb-5 group bg-rose-200 text-black rounded-lg">
        <input type="date" name="from" onChange={handleChange} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">From</label>
    </div>
    <div className="relative z-0 w-full mb-5 group bg-rose-200 text-black rounded-lg">
        <input type="date" name="to" onChange={handleChange} id="floating_la" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">To</label>
    </div>

  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{10}" name="mobileNumber" value={user.mobileNumber} disabled  onChange={handleChange} id="floating_phone" class="block text-black py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile number (70465-54542)</label>
    </div>
    <div className="relative z-0 w-full mb-5 group bg-rose-200 text-black rounded-lg">
        <input type="tel" name="homeMobileNumber" onChange={handleChange} id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Home Mobile Number </label>
    </div>
  </div>
 
  <div className="relative z-0 w-full mb-5 group bg-rose-200 text-black rounded-lg">
        <textarea type="text" name="reason" onChange={handleChange} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Reason</label>
    </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
        )}

    </div>
  )
  
}