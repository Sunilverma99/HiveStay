import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { MdDashboard } from "react-icons/md";
import { MdHolidayVillage } from "react-icons/md";
import { MdOutlineReportProblem } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { useSelector } from "react-redux";
export default function Layout({ title }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 
  const user = useSelector((state) => state?.auth?.user);
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
    navigate("/login")

  }catch(err){
    console.log(err);
  }
}
useEffect(() => {
  // Function to handle clicks outside the dropdown
  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  }

  // Add event listener to detect clicks on the document body
  document.body.addEventListener('click', handleClickOutside);

  // Cleanup: remove event listener when component unmounts
  return () => {
    document.body.removeEventListener('click', handleClickOutside);
  };
}, []);

  return (
    <div>
        {user?.email==="warden@iiitu.ac.in"?(
          <>
            <div className="g-sidenav-show bg-gray-200  "  ref={dropdownRef}>
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <h1 className="text-3xl text-white ml-12 mt-4">HIVE STAY</h1>
        </div>
        <nav className="flex flex-col p-3 -mt-4">
          <ul className={`flex flex-col ${isDropdownOpen?"":""}`}>
            <li className="mb-4 text-lg ">
              <Link to="/" className="text-slate-100 flex items-center hover:text-pink-600 ">
              <MdDashboard className="m-2" />
                Dashboard
              </Link>
            </li>
            {/* <li className="mb-4 text-lg ">
              <Link to="/leave" className="text-slate-100 flex items-center hover:text-pink-600">
              <MdHolidayVillage className="m-2" />
                Leave-Portal
              </Link>
            </li> */}

            <li className="mb-4 text-lg relative">
              <a
                href="#"
                className="text-slate-100 flex items-center hover:text-pink-600"
                onClick={toggleDropdown}
              >
                <MdOutlineReportProblem className="m-2" />
                Complaints
              </a>
              {isDropdownOpen && (
                <div
                  className={`dropdown-content absolute bg-gray-800 text-white p-1 mt-1 rounded-lg ${isDropdownOpen?"":""}`}
                  onClick={() => setIsDropdownOpen(isDropdownOpen?false:true)}
                >
                  <Link to="/mess" className="block px-4 text-lg py-2">
                    Mess
                  </Link>
                  <Link to="/roomComplain" className="block px-4 text-lg py-2">
                    Room
                  </Link>
                </div>
              )}
            </li>
            <li className="mb-4 text-lg ">
              <Link to="/scanner" className="text-slate-100 flex items-center hover:text-pink-600 ">
              <FaRegCalendar className="m-2" />
                Attendance Manager
              </Link>
            </li>
            <li className="mb-4 text-lg">
              <Link to="/notification" className="text-slate-100 flex items-center hover:text-pink-600">
              <IoNotifications className="m-2" />
                Notifications
              </Link>
       <li><button onClick={logout} className="align-center mt-8 ml-4 border hover:bg-pink-500 bg-pink-600 p-2 w-44 rounded-xl text-white">Logout </button></li> 
            </li>
          </ul>
        </nav>
        
      </aside>
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg lg:ml-72 ">
        {/* <!-- Navbar --> */}
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-2 shadow-none border-radius-xl"
          id="navbarBlur"
          data-scroll="true"
        >
          <div className="container-fluid py-1 px-3 flex justify-between items-center">
            <h6 className="font-weight-bolder mb-0 text-2xl">{title}</h6>
            <div className="text-right flex">
              <Link to="/notification">
                <IoMdNotifications className="h-8 mt-1 w-44 -mr-12 cursor-pointer" />{" "}
              </Link>

              <Link  className='w-20' to="/profile">
                <img
                  className="h-10 w-04 cursor-pointer"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlu7f9_MmSWQq06q_SUCRIx-0Cu0udlR-9hw&usqp=CAU"
                  alt="Notification Icon"
                />
              </Link>

              {/* Adjust the height and width as needed */}
            </div>
          </div>
        </nav>
      </main>
    </div>
          </>
          ):(
            <>
  <div className="g-sidenav-show bg-gray-200  "  ref={dropdownRef}>
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <h1 className="text-3xl text-white ml-12 mt-4">HIVE STAY</h1>
        </div>
        <nav className="flex flex-col p-3 -mt-4">
          <ul className={`flex flex-col ${isDropdownOpen?"":""}`}>
            <li className="mb-4 text-lg ">
              <Link to="/" className="text-slate-100 flex items-center hover:text-pink-600 ">
              <MdDashboard className="m-2" />
                Dashboard
              </Link>
            </li>
            <li className="mb-4 text-lg ">
              <Link to="/leave" className="text-slate-100 flex items-center hover:text-pink-600">
              <MdHolidayVillage className="m-2" />
                Leave-Portal
              </Link>
            </li>

            <li className="mb-4 text-lg relative">
              <a
                href="#"
                className="text-slate-100 flex items-center hover:text-pink-600"
                onClick={toggleDropdown}
              >
                <MdOutlineReportProblem className="m-2" />
                Complaints
              </a>
              {isDropdownOpen && (
                <div
                  className={`dropdown-content absolute bg-gray-800 text-white p-1 mt-1 rounded-lg ${isDropdownOpen?"":""}`}
                  onClick={() => setIsDropdownOpen(isDropdownOpen?false:true)}
                >
                  <Link to="/mess" className="block px-4 text-lg py-2">
                    Mess
                  </Link>
                  <Link to="/roomComplain" className="block px-4 text-lg py-2">
                    Room
                  </Link>
                </div>
              )}
            </li>
            <li className="mb-4 text-lg ">
              <Link to="/attendance" className="text-slate-100 flex items-center hover:text-pink-600 ">
              <FaRegCalendar className="m-2" />
                Attendance Manager
              </Link>
            </li>
            <li className="mb-4 text-lg">
              <Link to="/notification" className="text-slate-100 flex items-center hover:text-pink-600">
              <IoNotifications className="m-2" />
                Notifications
              </Link>
       <li><button onClick={logout} className="align-center mt-8 ml-4 border hover:bg-pink-500 bg-pink-600 p-2 w-44 rounded-xl text-white">Logout </button></li> 
            </li>
          </ul>
        </nav>
        
      </aside>
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg lg:ml-72 ">
        {/* <!-- Navbar --> */}
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-2 shadow-none border-radius-xl"
          id="navbarBlur"
          data-scroll="true"
        >
          <div className="container-fluid py-1 px-3 flex justify-between items-center">
            <h6 className="font-weight-bolder mb-0 text-2xl">{title}</h6>
            <div className="text-right flex">
              <Link to="/notification">
                <IoMdNotifications className="h-8 mt-1 w-44 -mr-12 cursor-pointer" />{" "}
              </Link>

              <Link  className='w-20' to="/profile">
                <img
                  className="h-10 w-04 cursor-pointer"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlu7f9_MmSWQq06q_SUCRIx-0Cu0udlR-9hw&usqp=CAU"
                  alt="Notification Icon"
                />
              </Link>

              {/* Adjust the height and width as needed */}
            </div>
          </div>
        </nav>
      </main>
    </div>
</> )}
      </div>
  
  );
}
