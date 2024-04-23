import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [mess, setMess] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [homeMobileNumber, setHomeMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if(email==="warden@iiitu.ac.in"){ 
        toast.error("This  email is not allowed to sign up !");
        return;
      }
      const res=await axios.post("http://localhost:3000/api/signup",{firstName,lastName,email,password,rollNumber,roomNumber,branch,mess,mobileNumber,homeMobileNumber,address},{
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data)
      if(res.status===201){
        toast.success("Account Created Successfully");
        navigate("/login");
      }else{
        toast.error("AccountCreation Failed");
      }
    }
    catch(err){
      console.log(err);
      toast.error("Pleas try Again ");
      navigate("/signup")

    }
  };
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
  };
  return (
    <html>
      <body class="bg-gray-200">
        <div class="container position-sticky z-index-sticky top-0">
          <div class="row">
            <div class="col-8"></div>
          </div>
        </div>
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
                          Sign Up
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
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control ml-2"
                            style={{ marginLeft: "10px" }}
                            required
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>

                        <div className="input-group input-group-outline my-3">
                          <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control ml-2"
                            style={{ marginLeft: "10px" }}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div className="input-group input-group-outline my-3">
                          <input
                            type="Number"
                            placeholder="Roll No."
                            className="form-control"
                            required
                            onChange={(e) => setRollNumber(e.target.value)}
                          />
                          <input
                            type="Number"
                            placeholder="Room No."
                            className="form-control ml-2"
                            style={{ marginLeft: "10px" }}
                            required
                            onChange={(e) => setRoomNumber(e.target.value)}
                          />
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="text"
                            placeholder="Branch"
                            className="form-control"
                            required
                            onChange={(e) => setBranch(e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Mess"
                            className="form-control ml-2"
                            style={{ marginLeft: "10px" }}
                            required
                            onChange={(e) => setMess(e.target.value)}
                          />
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="number"
                            placeholder="Mobile No. "
                            className="form-control"
                            required
                            onChange={(e) => setMobileNumber(e.target.value)}
                          />
                          <input
                            type="number"
                            placeholder="Parent's Mobile No."
                            className="form-control ml-2"
                            style={{ marginLeft: "10px" }}
                            required
                            onChange={(e) => setHomeMobileNumber(e.target.value)}
                          />
                        </div>
                        <div className="input-group input-group-outline my-3">
                          <input
                            type="text"
                            placeholder="Address"
                            className="form-control"
                            required
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>

                        <div class="text-center">
                          <button class="bg-pink-600 h-10 rounded-lg hover:bg-pink-500 text-white w-100 my-4 mb-2">
                            Sign Up
                          </button>
                        </div>
                      </form>
                      <p class="mt-4 text-sm text-center">
                        Have Account?
                        <Link
                          to="/login"
                          class="text-primary text-gradient font-weight-bold"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
