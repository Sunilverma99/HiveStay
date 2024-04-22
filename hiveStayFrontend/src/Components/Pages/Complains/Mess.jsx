import React from 'react'
import Layout from '../../Layout/Layout'
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { useEffect } from 'react';
import moment from 'moment';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export default function Mess() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [mess, setMess] = useState("");
  const [subject, setSubject] = useState("");
  const [complain, setComplain] = useState("");
  const [value,setValue]=useState([]);
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
  };
  const user = useSelector((state) => state?.auth?.user);
  useEffect(() => {
    setName(user?.firstName);
    setEmail(user?.email);
    setRoll(user?.rollNumber);
    setMess(user?.mess)
    console.log(user?.id)
  }, [name,email,roll,mess,subject,complain]);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res=await axios.post("http://localhost:3000/api/addComplaints",{name,email,roll,mess,subject,complain,userId: user?.id
    },{
      headers: {
        "Content-Type": "application/json",
      },

    })
    if(res.status===201){
      console.log("complaints added successfully")
      // window.location.reload();
      toast.success('Complaints added successfully');
      navigate('/');
    }

  }catch(err){
    console.log(err);
  }
}

const getComplaints = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/getmessComplaints", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const reversedData = res.data.reverse();
    console.log(reversedData);
    setValue(reversedData);
  } catch (error) {
    console.error("Failed to fetch complaints:", error);
  }
};


useEffect(() => {
  getComplaints();
},[])
  return (
    <div>
        <Layout title="Mess Complains"/>

        {user?.email==="warden@iiitu.ac.in"?(
           <div className='ml-72'>
            
            <section class="  p-3 sm:p-5">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div class=" relative shadow-md sm:rounded-lg overflow-hidden">
            
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs  uppercase  bg-pink-500 text-white">
                        <tr>
                            <th scope="col" class="px-4 py-3">Date</th>
                            <th scope="col" class="px-4 py-3">Name</th>
                            <th scope="col" class="px-4 py-3">Roll No.</th>
                            <th scope="col" class="px-4 py-3">Mess</th>
                            <th scope="col" class="px-4 py-3">Subject</th>
                            <th scope="col" class="px-4 py-3">Description</th>
                        </tr>
                    </thead>
          {value.map((item)=>{
              const formattedDate = new Date(item.Date).toLocaleDateString();

            return( 
                    <tbody>
                        <tr class="border-b dark:border-pink-500">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{formattedDate}</th>
                            <td class="px-4 text-black py-3">{item.name}</td>
                            <td class="px-4 text-black py-3">{item.roll}</td>
                            <td class="px-4 text-black py-3">{item.mess}</td>
                            <td class="px-4 text-black py-3">{item.subject}</td>
                            <td class="px-4 text-black py-3">{item.complain}</td>
                            
                        </tr>
                    </tbody>
                )
                
            
              })}
                </table>
            </div>
            
        </div>
    </div>
    </section>
           
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
                        Mess Complains
                        </h4>
                        <div class="row mt-1"></div>
                      </div>
                    </div>
                    <div class="card-body">
                      <form onSubmit={handleSubmit} class="text-start">
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="form-control"
                            required
                            value={user.firstName}
                            disabled
                            
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
                          />
                          
                        </div>
                        <div className="input-group input-group-outline my-3">
                          
                          <input
                            type="text"
                            placeholder="Mess"
                            className="form-control "
                        disabled
                            required
                            value={user.mess}
                          />
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="test"
                            placeholder="Subject "
                            className="form-control"
                            required
                            onChange={(e) => setSubject(e.target.value)}
                            
                          />
                         
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <textarea
                            type="text"
                            placeholder="Write your Complain"
                            className="form-control resize-none"
                            required
                            rows="5"
                            onChange={(e) => setComplain(e.target.value)}
                          />
                        </div>
                        <button className='ml-48 mt-2 rounded-xl border bg-pink-500 hover:bg-pink-400  text-white p-2'>Submit</button>

                       
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
  )
}
