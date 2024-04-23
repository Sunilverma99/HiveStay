
import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import { Dropdown, Toast } from "flowbite-react";
import { useSelector } from 'react-redux';
import {toast} from "react-hot-toast";
import axios from 'axios';
export default function Civil() {
  const user = useSelector((state) => state?.auth?.user);
console.log(user);
  const [hostelName, setHostelName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Category");
 const [value, setValue] = useState([]);
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user.firstName, category, hostelName, user.roomNumber, description, user.id);
    try {
      const res = await fetch("http://localhost:3000/api/roomMaintaince", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Corrected content type header
        },
        body: JSON.stringify({
          userId: user.id,
          category,
          description,
          hostelName,
          roomNumber: user.roomNumber,
        }),
      });
      const data = await res.json();
      if (res.ok ||data.status === 201) {
        toast.success(" Your Complaints added successfully");
      } else {
        toast.error("Please try again");
        console.log(error); // Logging the error
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getComplaints = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/getRoomComplains", {
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
      <Layout title="Room Complains"/>
      {user.email==="warden@iiitu.ac.in" ? (
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
                         <th scope="col" class="px-4 py-3">Room No.</th>
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
                         <td class="px-4 text-black py-3">{item.room}</td>
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
      ) : (
        <body className="white">
          <main className="main-content mt-0">
            <div className="page-header align-items-start min-vh-100" style={backgroundImageStyle}>
              <span className="mask bg-gradient-dark opacity-6"></span>
              <div className="container my-auto ml-56">
                <div className="row">
                  <div className="col-lg-6 col-md-8 col-7 mx-auto">
                    <div className="card z-index-0 fadeIn3 fadeInBottom">
                      <div className="card-header p-0 position-relative mt-n4 mx-8 z-index-2">
                        <div className="bg-gradient-primary shadow-primary border-radius-lg py-1 pe-1">
                          <h4 className="text-white font-weight-bolder text-xl text-center mt-2 mb-4">
                            Room Maintenance Complaints
                          </h4>
                          <div className="row mt-1"></div>
                        </div>
                      </div>
                      <div className="card-body">
                        <form onSubmit={handleSubmit} className="text-start">
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
                          <div className='flex gap-1'>
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
                                type="Number"
                                placeholder="Room Number"
                                className="form-control"
                                required
                                disabled
                                value={user.roomNumber}
                              />
                            </div>
                            <div className="input-group input-group-outline my-3">
                              <input
                                type="String"
                                placeholder="Hostel Name"
                                className="form-control"
                                required
                                id='hostelName'
                                onChange={(e)=>setHostelName(e.target.value)}
                              />
                            </div>
                          </div>
                         <Dropdown
  label={category}
  required={true}
  color={"red"}
  dismissOnClick={false}
  onChange={(value) => setCategory(value)} // Use handleCategoryChange function
  value={category} // Pass the current selected category as value
>
  <Dropdown.Item onClick={(value) => setCategory('Electric')}>Electric</Dropdown.Item>
  <Dropdown.Item  onClick={(value) => setCategory('Civil')}>Civil</Dropdown.Item>
  <Dropdown.Item  onClick={(value) => setCategory('Cleaning')}>Cleaning</Dropdown.Item>
</Dropdown>

                          <div className="input-group input-group-outline my-3"></div>
                          <div className="input-group input-group-outline my-3">
                            <textarea
                              type="text"
                              placeholder="Write your Complain"
                              className="form-control resize-none"
                              required
                              rows="5"
                              onChange={(e) => setDescription(e.target.value)}
                            />
                          </div>
                          <button type="submit" className='ml-48 mt-2 rounded-xl border bg-pink-500 hover:bg-pink-400 text-white p-2'>Submit</button>
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
  );
}
