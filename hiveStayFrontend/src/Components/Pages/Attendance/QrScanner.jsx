import React, { useEffect } from 'react'
import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function QrScanner() {
  const [scanner, setScanner] = useState(true);
  const [scannedData, setScannedData] = useState([]);
  const [dataStored, setDataStored] = useState(false); 
  const [attendanceData, setAttendanceData] = useState([]); 
  const navigate = useNavigate();
  const user = useSelector((state) => state?.auth?.user);
  console.log(user);


  const qrData = (data) => {
      if (!dataStored) { // Check if data is not already stored
          const newData = JSON.parse(data);
          console.log(newData);
          setScannedData([...scannedData, newData]);
          setScanner(false);

          axios.post("http://localhost:3000/api/attendance", { name: newData.name, roll: newData.roll, date: newData.date }, {
              headers: {
                  "Content-Type": "application/json"
              }
          }).then(() => {
              setDataStored(true); // Set the flag to true after storing data
              navigate('/');
          }).catch((error) => {
              console.log("Error storing data:", error);
          });
      }
  }

  const getAttendance = () => {
    axios.get("http://localhost:3000/api/getattendance", {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        console.log(res.data);
        setAttendanceData(res.data);
        console.log(attendanceData);
    }).catch((error) => {
        console.error("Error fetching attendance:", error);
    });
}
useEffect(() => {
    getAttendance();
}, []);


const exportToExcel = () => {
  // Prepare data for Excel
  const dataRows = [];
  let currentDate = null;

  attendanceData.forEach((entry, index) => {
      const formattedDate = new Date(entry.date).toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });

      // If the date changes, add a new row with the date
      if (formattedDate !== currentDate) {
          currentDate = formattedDate;
          dataRows.push(['', '', '', currentDate]); // Add an empty row with the date
      }

      // Add the data for the current entry
      dataRows.push([index + 1, entry.name, entry.roll, '']);
  });

  // Create worksheet
  const ws = XLSX.utils.aoa_to_sheet(dataRows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Export to Excel
  XLSX.writeFile(wb, 'scanned_data.xlsx');
};



  return (
      <div>
        {user?.email!=="warden@iiitu.ac.in"?(
          <>
          <h1>QR Scanner</h1>
          <Scanner
              components={{
                  audio: false,
                  video: false,
              }}
              options={{
                  delayBetweenScanAttempts: 1000,
                  delayBetweenScanSuccess: 10000,
              }}
              onResult={(text, result) => {
                  qrData(text);
              }}
              enabled={scanner}
              onError={(error) => console.log(error?.message)}
          />
          </>
          ):(
            <>
<button onClick={() => { 
  exportToExcel();
   getAttendance(); }}>Export to Excel</button>
</> )}
      </div>
  )
}
