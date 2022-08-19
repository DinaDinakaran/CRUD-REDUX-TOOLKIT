import React, { useState, useEffect } from 'react'
import {url1 } from "../../../App"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

import "./update.css"
export default function Updatestaff() {
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)
  const [age, setAge] = useState(0)
  const [department, setDepartment] = useState('')
  const [name, setName] = useState('')

const value = async()=>{
  const result = await axios.get(url1+"/"+id)

  setEmail(result.data.email)
  setPhone(result.data.number)
  setAge(result.data.age)
  setDepartment(result.data.department)
  setName(result.data.name)
}

  useEffect(()=>{
    value(); 
  },[]) 
 





  const handleupdate = async() => {
    await axios.put(`${url1}/${id}`,  {
      name,
      email,
      age,
      phone,
      department
    })
    navigate("/allstaff")
  }

  return (
    <div className='Edit'>
      <>
        <label className='title'>Name:</label><br />
        <input className='inputval' type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label className='title'>Email:</label><br />
        <input className='inputval' type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label className='title'>Age:</label><br />
        <input className='inputval' type="number" value={age} onChange={(e) => setAge(e.target.value)} /><br />
        <label>phon Number:</label><br />
        <input className='inputval' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
        <label className='title'>Department:</label><br />
        <input className='inputval' type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
        <br />
        <button className='submit-btn' onClick={() => handleupdate()}>Update</button>
      </>

    </div>
  )
}

