import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signup from './Components/Login/Signup'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Mess from './Components/Pages/Complains/Mess'
import Attendance from './Components/Pages/Attendance/Attendance'
import RoomComplain from './Components/Pages/Complains/RoomMaintaince'
import Notification from './Components/Pages/Notification/Notification'
import Leave from './Components/Pages/Leave/Leave'
import Profile from './Components/Login/Profile'
import LeaveDescription from './Components/Pages/Leave/LeaveDescription'
import { Toaster } from 'react-hot-toast'
import QrScanner from './Components/Pages/Attendance/QrScanner'
import HoselRulePage from './Components/Pages/rules/HostelRule'
import MessRulesPage from './Components/Pages/rules/MessRules'


function App() {

  return (
    <>
   
        <BrowserRouter>
        <Routes>
          <Route path='/mess' element={<Mess/>}/>
          <Route path='/leave' element={<Leave/>}/>
          <Route path='/notification' element={<Notification/>}/>
          <Route path='/attendance' element={<Attendance/>}/>
          <Route path='/roomComplain' element={<RoomComplain/>}/>
          <Route path="/layout" element={<Layout/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path="/:id" element={<LeaveDescription />} />
          <Route path='/scanner' element={<QrScanner/>}/>
          <Route path='/hostelRule' element={<HoselRulePage/>}/>
          <Route path='/messRule' element={<MessRulesPage/>}/>
        </Routes>
        <Toaster/>
        </BrowserRouter>
    
    </>
  )
}

export default App
