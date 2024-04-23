import React, { useEffect } from "react";
import { useState } from "react";
import "../../assets/css/material-dashboard.css";
import "../../assets/css/material-dashboard.min.css";
import "../../assets/css/nucleo-icons.css";
import { IoMdNotifications } from "react-icons/io";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import axios from "axios";

import { useSelector } from "react-redux";
import Post from "../Post/Post";
import { set } from "mongoose";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userValue, setUserValue] = useState([]);
  const [complainValue,setComplainValue]=useState([]);
  const user = useSelector((state) => state.auth.user);
  console.log("from home", user?.email);

  if (user?.email === "warden@iiitu.ac.in") {
    console.log("warden");
  } else {
    console.log("student");
  }

  const handlePost = async (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const name = "warden";

    const res = await axios.post(
      "http://localhost:3000/api/post",
      { title, content, date, time, name },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    window.location.reload();
    

  };

  useEffect(() => {
    try{
      axios.get("http://localhost:3000/api/getCount", {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res.data);
        setUserValue(res.data.userCount)
        setComplainValue(res.data.complaintCount)
      });
    }catch(err){
      console.log(err);
    }
  }, [userValue,complainValue]);

  const card = [
    {
      icon: "message",
      message: "Total Message",
      number: "2",
      percentage: "+55% than last week",
      colorClass: "bg-blue-600",
    },
    {
      icon: "person",
      message: "Total Users",
      number: `${userValue}`,
      percentage: "+3% than last month",
      colorClass: "bg-pink-600",
    },
    {
      icon: "report",
      message: "Total Complains",
      number: `${complainValue}`,
      percentage: "-2% than yesterday",
      colorClass: "bg-green-600",
    },
    {
      icon: "event",
      message: "Attendance",
      number: "0",
      percentage: "+5% than yesterday",
      colorClass: "bg-yellow-400",
    },
  ];

  return (
    <div className="g-sidenav-show bg-gray-200 ">
      <Layout title="Dashboard" />
      <main class="main-content position-relative h-100 border-radius-lg lg:ml-72 ">
        <div class="container-fluid py-4">
          <div class="row">
      
            {user?.email === "warden@iiitu.ac.in" &&
              card.map((item, index) => {
                return (
                  <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div class="card">
                      <div class="card-header p-3 pt-2">
                      <div className={`icon icon-lg icon-shape ${item.colorClass} shadow-dark text-center border-radius-xl mt-n4 position-absolute`}>
                          <i class="material-icons opacity-10">{item.icon}</i>
                        </div>
                        <div class="text-end pt-1">
                          <p class="text-sm mb-0 text-capitalize">
                            {item.message}
                          </p>
                          <h4 class="mb-0">{item.number}</h4>
                        </div>
                      </div>
                      <hr class="dark horizontal my-0" />
                      <div class="card-footer p-3"></div>
                    </div>
                    
                  </div>
                );
              })}
                  <div class="row mt-4 mb-4">
                  <div class="flex justify-between">
  <div class="da relative flex  flex-col justify-center overflow-hidden ">
    <div class="group relative m-0 flex h-48 w-72 rounded-xl ">
      <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-100">
        <img className="h-48" src="data:image/jpeg;base64,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" alt="" />
      </div>
      <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
        <h1 class="font-serif text-2xl font-bold text-white shadow-xl ">College</h1>
        <h1 class="text-sm font-light text-gray-200 shadow-xl">Academic Block</h1>
      </div>
    </div>
  </div>
  <div class="da relative flex  flex-col justify-center overflow-hidden ">
    <div class="group relative m-0 flex h-48 w-72 rounded-xl ">
      <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-100">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehnV5SKeKB4gsfoq0dkimakHSYmoTzF0slQ&usqp=CAU" class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
      </div>
      <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
        <h1 class="font-serif text-2xl font-bold text-white shadow-xl">Hostels</h1>
        <h1 class="text-sm font-light text-gray-200 shadow-xl">Rules and Regulation</h1>
      </div>
    </div>
  </div>
  <div class="da relative flex  flex-col justify-center overflow-hidden ">
    <div class="group relative m-0 flex h-48 w-72 rounded-xl ">
      <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-100 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-100">
        <img src="data:image/jpeg;base64,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" class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
      </div>
      <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
        <h1 class="font-serif text-2xl font-bold text-white shadow-xl">Mess</h1>
        <h1 class="text-sm font-light text-gray-200 shadow-xl">Information about mess and mess menu</h1>
      </div>
    </div>
  </div>
  
  
</div>

       
      
      </div>



      <div class="col-lg-8 col-md-6 mb-md-0 mb-4 ">
  <div class="card">
      <div class="card-header pb-0">
      <div class="row">
        <div class="">
          {user?.email === "warden@iiitu.ac.in" ? (
            <div class="ml-4 mt-4 md:mt-0 bg-white rounded-lg">
              <form onSubmit={handlePost} class="p-4">
                <input
                onChange={(e) => setTitle(e.target.value)}
                  placeholder='Title'
                  class='mb-2 border-b w-full focus:outline-none'
                ></input>
                <div class='flex mt-4'>
                  <img src="https://upload.wikimedia.org/wikipedia/en/8/83/Indian_Institute_of_Information_Technology%2C_Una_logo.png" class='h-10 w-10 mr-4' />
                  <textarea
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
                    placeholder="What's happening?"
                    rows="6"
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>
                <div class="flex justify-between items-center mt-4">
                  <div class="flex space-x-2 ml-8">
                    <button class="text-black hover:text-blue-700 focus:outline-none">
                      <img src="like.png" />
                    </button>
                    <button class="text-yellow-500 hover:text-yellow-700 focus:outline-none">
                      <img src="upload.png" class='ml-10' />
                    </button>
                    <button class="text-green-500 hover:text-green-700 focus:outline-none">
                      <img src="comment.png" class='ml-10' />
                    </button>
                  </div>
                  <button
                    class="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:bg-blue-600"
                  >
                    Tweet
                  </button>
                </div>
              </form>
              <div className="border mb-4 "></div>
              <h1 className="text-bold text-xl mb-4">Recent Posts...</h1>
              <Post />
            </div>
          ) : (
            <div>
            <h1>Here Are some Latest Updates</h1>
            <Post/>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

        <div class="col-lg-4 col-md-6">
          <div class="card h-100">
            
        
          </div>
        </div>

          </div>
        </div>
      

        <div className="">
          
        </div>
      </main>
    </div>
  );
}
