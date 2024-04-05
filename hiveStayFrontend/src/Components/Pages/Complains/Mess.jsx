import React from 'react'
import Layout from '../../Layout/Layout'
import { useSelector } from "react-redux";
import axios from "axios";
import { useState,useEffect } from "react";
import {toast } from 'react-hot-toast'
export default function Mess() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [mess, setMess] = useState("");
  const [subject, setSubject] = useState("");
  const [complain, setComplain] = useState("");
  const [value,setValue]=useState([]);

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
    if(res.ok){
      console.log("complaints added successfully")
      toast.success("Complaints added successfully");
      window.location.reload();
    }else{
      toast.error("Pleae try again");
    }
   
  }catch(err){
    toast.error("Please try again");
    console.log(err);
  }
}

const getComplaints=async()=>{
  try{
    const res=await axios.get("http://localhost:3000/api/getmessComplaints",{
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log(res.data)
    setValue(res.data)
  }
catch(err){
  console.log(err);
}}

useEffect(() => {
  getComplaints();
},[])
  return (
    <div>
        <Layout title="Mess Complains"/>

        {user?.email==="warden@iiitu.ac.in"?(
           <div className='ml-72'>
          {value.map((item)=>{

          })}
            <div>
              <h1>Mess Regardings Complains</h1>
              
            </div>
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
