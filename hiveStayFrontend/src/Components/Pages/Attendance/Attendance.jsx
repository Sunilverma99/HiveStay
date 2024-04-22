import React from 'react'
import Layout from '../../Layout/Layout'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from "react-qr-code";
 import { useSelector } from "react-redux";



export default function Attendance() {
  const [location, setLocation] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  console.log(user)

  const currentDate = new Date().toISOString().split('T')[0];
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          error => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []); 

  const bound={
    North: 31.490428,
    South: 31.450428,
    East: 76.20917,
    West: 76.18917,
  }

  if (location) {
    if (
      location.latitude > bound.North ||
      location.latitude < bound.South ||
      location.longitude > bound.East ||
      location.longitude < bound.West
    ) {  
      console.log('in bound')  
    }
    else{
      console.log('out of  bound')

    
  }
}
  

  return (
    <div>
    <div className="g-sidenav-show bg-gray-200 ">
      
      <Layout title="Attendance"/>
      
    </div>
    <h1 className='text-center'>hello</h1>
    <button className='text-center' >Get Location</button>
    <div className='flex flex-col gap-10 items-center justify-center '>
                    <QRCode
                        value={JSON.stringify({ name: user?.firstName, roll: user?.rollNumber,date:currentDate})}
                        style={{ width: "200px", height: "200px", marginTop: "100px" }}
                    />
                </div>
                    <span className='border border-black p-3 rounded-md bg-white'>{user?.firstName}</span>

    </div>
  )
}
