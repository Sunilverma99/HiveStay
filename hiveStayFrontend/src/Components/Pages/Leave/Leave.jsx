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
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
  };
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
  homeMobileNumber:user.homeMobileNumber,
  reason:"",
  userId:user?._id
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
console.log(data)
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
        console.log(error);
      }
    };
    fetchData();
    console.log(value);
  }, []);
  console.log(value);

  const handleChange = (e) => {
     const {id,value}=e.target;
     setData((prev)=>{
      return{
        ...prev,
        [id]:value
      }
     })
  };
  return (<>
  

    <div>
        <Layout title=" Leave form"/>

        {user?.email==="warden@iiitu.ac.in"?(
           <div className='ml-96'>
           {value.map((item)=>(
               <LeaveCard key={item._id}
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
        <body class="white">
     
        <main class="main-content  mt-0">
          <div
            class="page-header align-items-start min-vh-100"
            style={backgroundImageStyle}
          >
            <span class="mask bg-gradient-dark opacity-6"></span>
            <div class="container my-auto ml-56">
              <div class="row">
                <div class="col-lg-6 col-md-8 col-7 mx-auto">
                  <div class="card z-index-0 fadeIn3 fadeInBottom">
                    <div class="card-header p-0 position-relative mt-n4 mx-8 z-index-2">
                      <div class="bg-gradient-primary shadow-primary border-radius-lg py-1 pe-1">
                        <h4 class="text-white font-weight-bolder text-xl text-center mt-2 mb-4">
                        Leave Form
                        </h4>
                        <div class="row mt-1"></div>
                      </div>
                    </div>
                    <div class="card-body">
                      <form  onSubmit={handleSubmit} class="text-start">
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="form-control"
                            required
                            value={user.firstName}
                            disabled
                            id='name'
                          />
                         
                        </div>

                        <div className="input-group input-group-outline my-3">
                          <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            required
                            disabled
                            value={user.email}
                            id='email'
                          />
                        
                        </div>
                    <div className='flex gap-2'>
                    <div className="input-group input-group-outline my-3">
                          <input
                            type="String"
                            placeholder="Hostel Name"
                            className="form-control"
                            required
                            onChange={handleChange}
                            id='hostelName'
                          />
                          
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="Number"
                            placeholder="Room No."
                            className="form-control"
                            required
                            disabled
                           value={user.roomNumber}
                           id='roomNumber'
                          />
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="Number"
                            placeholder="Roll No."
                            className="form-control"
                            required
                            disabled
                            value={user.rollNumber}
                            id='rollNumber'
                          />
                          
                        </div>
                    </div>
                    <div className='flex gap-2'>
                    <div className="input-group input-group-outline my-3">
                          <input
                            type="Number"
                            placeholder="No of Holidays"
                            className="form-control"
                            required
                            onChange={handleChange}
                            id='noOfHolidays'
                          />
                          
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="Date"
                            placeholder="From"
                            className="form-control"
                            required
                            onChange={handleChange}
                            id='from'
                          />
                        </div>
                        <h3 className='py-4'>To</h3>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="Date"
                            placeholder="To"
                            className="form-control"
                            required
                            onChange={handleChange}
                            id='to'
                          />
                        </div>
                    </div>
                        <div className='flex gap-2'>
                        <div className="input-group input-group-outline my-3">
                          
                          <input
                            type="text"
                            placeholder="Mobile Number"
                            className="form-control "
                            disabled
                            required
                            value={user.mobileNumber}
                            id='mobileNumber'
                          />
                        </div>
                        <div className="input-group input-group-outline my-3">
                          
                          <input
                            type="text"
                            placeholder="Home Mobile Number"
                            className="form-control "
                            required
                            value={user.homeMobileNumber}
                            onChange={handleChange}
                            id='homeMobileNumber'
                          />
                        </div>
                        </div>
                        <div className="input-group input-group-outline my-3">
                          
                          <input
                            type="text"
                            placeholder="Subject( max 12 character)"
                            className="form-control "
                            required
                            id='subject'
                          />
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <textarea
                            type="text"
                            placeholder="Write the Reason for Leave"
                            className="form-control resize-none"
                            required
                            rows="5"
                            onChange={handleChange}
                            id='reason'
                          />
                        </div>
                        <button className=' justify-center ml-56 mt-2 rounded-xl border bg-pink-500  hover:bg-pink-400  text-white p-2'>Submit</button>
                      </form>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
      )}
    </div>
    </>
  )
  
}