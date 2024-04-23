import React from 'react'
import Layout from '../Layout/Layout'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Profile() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    const navigate = useNavigate();
    const logout =async () => {
      try{
        const res=await axios.get("http://localhost:3000/api/logout",{
          headers: {
            "Content-Type": "application/json",
        }
        
      })
      Cookies.remove('accessToken')
      toast.success("Logged Out Successfully");
      navigate("/login")
  
    }catch(err){
      toast.error("Logout Failed ,Please try Again");
      console.log(err);
    }
  }
   
    const user = useSelector(state => state.auth.user);
    console.log("hello",user)

    const backgroundImageStyle = {
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
      };
      const handleSubmit = async (e) => {}
        
  return (
    <div>
        {/* <Layout title="Profile Page"/> */}
        {/* <div class="h-screen dark:bg-gray-700 bg-gray-200 pt-4 ">

    <div class="max-w-sm mx-auto bg-white wdark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div class="border-b px-4 pb-6">
            <div class="text-center my-2">
                <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                    src="https://randomuser.me/api/portraits/women/21.jpg" alt=""/>
                <div class="my-1 flex ">
                   <input  className='border rounded-lg mr-2 p-2 -ml-4 w-40 text-xs' placeholder='First Name' type='name'></input>
                   <input  className='border rounded-lg mr-3 p-2 w-40 text-xs' placeholder='Last Name' type='name'></input>
                   <input  className='border rounded-lg  p-2 w-40 h-10 text-xs' placeholder='Email' type='email'></input>
                </div>
                <div class="my-1 flex ">
                   <input  className='border rounded-lg mr-2 p-2 -ml-4 w-40 text-xs' placeholder='Roll No.' type='number'></input>
                   <input  className='border rounded-lg mr-3 p-2 w-40 text-xs' placeholder='Room No.' type='number'></input>
                   <input  className='border rounded-lg  p-2 w-40 h-10 text-xs' placeholder='Hostel' type='name'></input>
                </div>
                <div class="my-1 flex ">
                   <input  className='border rounded-lg mr-2 p-2 -ml-4 w-40 text-xs' placeholder='Branch' type='name'></input>
                   <input  className='border rounded-lg mr-3 p-2 w-40 text-xs' placeholder='Mess' type='name'></input>
                   <input  className='border rounded-lg  p-2 w-40 h-10 text-xs' placeholder='Semester' type='number'></input>
                </div>
                <div class="my-1 flex ">
                   <input  className='border rounded-lg mr-2 p-2 -ml-4 w-40 text-xs' placeholder='Address' type='name'></input>
                   <input  className='border rounded-lg mr-3 p-2 w-40 text-xs' placeholder='Mobile No.' type='number'></input>
                </div>
               
            </div>
           
        </div>
        <div class="px-4 py-4">
            <div class="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                <svg class="h-6 w-6 text-gray-600 dark:text-gray-400" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path class=""
                        d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
                </svg>
                <span><strong class="text-black dark:text-white">12</strong> Followers you know</span>
            </div>
          
        </div>
    </div>

</div> */}
 <html>
 <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <h1 className="text-3xl text-white ml-12 mt-4">HIVE STAY</h1>
        </div>
        <nav className="flex flex-col p-3 -mt-4">
          <ul className="flex flex-col">
            <li className="mb-4 text-lg ">
              <Link to="/" className="text-slate-100 flex items-center hover:text-pink-600 ">
                <svg
                  className="h-12 w-10 fill-current mr-2"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H5a1 1 0 01-1-1zm13.707-7.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L10 10.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Dashboard
              </Link>
            </li>
            <li className="mb-4 text-lg ">
              <Link to="/leave" className="text-slate-100 flex items-center hover:text-pink-600">
                <svg
                  className="h-12 w-10 fill-current mr-2"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H5a1 1 0 01-1-1zm13.707-7.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L10 10.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Leave-Portal
              </Link>
            </li>

            <li className="mb-4 text-lg relative">
              <a
                href="#"
                className="text-slate-100 flex items-center hover:text-pink-600"
                onClick={toggleDropdown}
              >
                <svg
                  className="h-10 w-10 fill-current mr-2"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm14 5a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h12a1 1 0 011 1v3zm-1 6a1 1 0 01-1 1H5a1 1 0 01-1-1v-1a1 1 0 011-1h10a1 1 0 011 1v1z"
                    clipRule="evenodd"
                  />
                </svg>
                Complaints
              </a>
              {isDropdownOpen && (
                <div
                  className="dropdown-content absolute bg-gray-800 text-white p-1 mt-1"
                  onClick={() => setIsDropdownOpen(true)}
                >
                  <Link to="/mess" className="block px-4 text-lg py-2">
                    Mess
                  </Link>
                  <Link to="/civil" className="block px-4 text-lg py-2">
                    Civil
                  </Link>
                </div>
              )}
            </li>
            <li className="mb-4 text-lg ">
              <Link to="/attendance" className="text-slate-100 flex items-center hover:text-pink-600 ">
                <svg
                  className="h-12 w-10 fill-current mr-2"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H5a1 1 0 01-1-1zm13.707-7.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L10 10.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Attendance Manager
              </Link>
            </li>
            <li className="mb-4 text-lg">
              <Link to="/notification" className="text-slate-100 flex items-center hover:text-pink-600">
                <svg
                  className="h-10 w-10 fill-current mr-2"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 4a1 1 0 011 1v6a1 1 0 01-2 0V5a1 1 0 011-1zm9-1a1 1 0 011 1v14a1 1 0 01-2 0V4a1 1 0 011-1zM1 5a1 1 0 011-1h2a1 1 0 010 2H2v12h4v-2a1 1 0 112 0v2h4v-2a1 1 0 112 0v2h2a1 1 0 010 2H3a1 1 0 01-1-1V5z"
                    clipRule="evenodd"
                  />
                </svg>
                Notifications
              </Link>
       <li><button onClick={logout} className="align-center mt-8 ml-4 border hover:bg-pink-500 bg-pink-600 p-2 w-44 rounded-xl text-white">Logout </button></li> 
            </li>
          </ul>
        </nav>
        
      </aside>
      <body class="bg-gray-200">
        <div class="container position-sticky z-index-sticky top-0">
          <div class="row">
            <div class="col-8"></div>
          </div>
        </div>
        {
          user.email!=="warden@iiitu.ac.in" && 
          <main class="main-content  mt-0">
          <div
            class="page-header align-items-start min-vh-100"
            style={backgroundImageStyle}
          >
            <span class="mask bg-gradient-dark opacity-6"></span>
            <div class="container my-auto">
              <div class="row">
                <div class="col-lg-6 col-md-8 col-7 mx-auto">
                  <div class="card z-index-0 fadeIn3 fadeInBottom">
                    <div class="card-header p-0 position-relative mt-n4 mx-8 z-index-2">
                      <div class="bg-gradient-primary shadow-primary border-radius-lg py-1 pe-1">
                        <h4 class="text-white font-weight-bolder text-xl text-center mt-2 mb-4">
                        Profile
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
                            
                          />
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control ml-2"
                            style={{ marginLeft: "10px" }}
                            required
                            value={user.lastName}
                          />
                        </div>

                        <div className="input-group input-group-outline my-3">
                          <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            required
                            value={user.email}
                          />
                        
                        </div>

                        <div className="input-group input-group-outline my-3">
                          <input
                            type="Number"
                            placeholder="Roll No."
                            className="form-control"
                            required
                        value={user.rollNumber}
                          />
                          <input
                            type="Number"
                            placeholder="Room No."
                            className="form-control ml-2"
                            style={{ marginLeft: "10px" }}
                            required
                            value={user.roomNumber}
                          />
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="text"
                            placeholder="Branch"
                            className="form-control"
                            required
                            value={user.branch}
                          />
                          <input
                            type="text"
                            placeholder="Mess"
                            className="form-control ml-2"
                            style={{ marginLeft: "10px" }}
                            required
                            value={user.mess}
                          />
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="number"
                            placeholder="Mobile No. "
                            className="form-control"
                            required
                            value={user.mobileNumber}
                          />
                          <input
                            type="number"
                            placeholder="Parent's Mobile No."
                            className="form-control ml-2"
                            style={{ marginLeft: "10px" }}
                            required
                            value={user.homeMobileNumber}
                          />
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="text"
                            placeholder="Address"
                            className="form-control"
                            required
                            value={user.address}
                          />
                        </div>
                      </form>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        }
        {
          user.email==="warden@iiitu.ac.in"&&
          <main class="main-content mt-0">
          <div
            class="page-header align-items-start min-vh-100"
            style={backgroundImageStyle}
          >
            <span class="mask bg-gradient-dark opacity-6"></span>
            <div class="container my-auto w-4/6 ">
              <div class="row">
                <div class="col-lg-6 col-md-8 col-7 mx-auto">
                  <div class="card z-index-0 fadeIn3 fadeInBottom">
                    <div class="card-header p-0 position-relative mt-n4 mx-8 z-index-2">
                      <div class="bg-gradient-primary shadow-primary border-radius-lg py-1 pe-1">
                        <h4 class="text-white font-weight-bolder text-xl text-center mt-2 mb-4">
                        Profile
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
                            
                          />
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control ml-2"
                            style={{ marginLeft: "10px" }}
                            required
                            value={user.lastName}
                          />
                        </div>

                        <div className="input-group input-group-outline my-3">
                          <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            required
                            value={user.email}
                          />  
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="number"
                            placeholder="Mobile No. "
                            className="form-control"
                            required
                            value={user.mobileNumber}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        }
      </body>
    </html>
</div> 

  )
}
