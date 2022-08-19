import React from 'react'
import Navbar from './component/Navbar/Navbar'
import "./app.css"
import Sidebar from "./component/sidebar/Sidebar"
import Home from "./Pages/home/Home"
import Staff from './component/Staff/Staff/Staff'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Student from './component/Student/Student'
import AllStudents from './component/Student/All-Students/AllStudents'
import Addstudent from './component/Student/Add-student/Addstudent'
import Edit from './component/Student/Edit/Edit'
import Updatestaff from './component/Staff/Updatestaff/Updatestaff'
import Addstaff from "./component/Staff/addStaff/Addstaff"
import Allstaff from './component/Staff/Allstaff'
export const url ="https://62ee0396c1ef25f3da819a6d.mockapi.io/students"
export const url1= "https://62a6f9ecbedc4ca6d7be78a2.mockapi.io/student"

//please click student button one ui .......

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Routes>
          <Route path='*' element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/allstudents" element={<AllStudents />} />
            <Route path='/addstudent' element={<Addstudent />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/staff' element={<Staff/>} />
            <Route path='/updatestaff/:id' element={<Updatestaff/>}/>
            <Route path='/addstaff' element ={<Addstaff/>}  />
            <Route path='/allstaff' element={<Allstaff/>} />
          </Routes>
      </div>
    </Router>


  )
}
