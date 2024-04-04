import React, { useEffect } from 'react';
import Layout from '../../Layout/Layout';
import axios from 'axios';
import { useSelector } from 'react-redux';
import NotificationCard from './NotificationCard';

export default function Notification() {
  const user = useSelector((state) => state.auth.user);
  const [value,setValue]=React.useState([])

  const userId = user.id;

  const applicationResult = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/applicationResult/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      setValue(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    applicationResult();
  }, [userId,value]);

  return (
    <div>
      <Layout title="Notification" />
      <div className="text-center text-4xl mt-2 font-bold text-black lg:ml-0">
        Latest Updates...
      </div>
      <div className='ml-96'>
        {
          value.map((item) => (
            <NotificationCard
              name={item.name}
              mobileNumber={item.mobileNumber}
              id={item.id}
              email={item.email}
              rollNumber={item.rollNumber}
              noOfHolidays={item.noOfHolidays}
              hostelName={item.hostelName}
              from={item.from}
                to={item.to}
                reason={item.reason}
                status={item.status}

             
            />
          ))
        }
      </div>
    </div>
  );
}
