import React, { useState, useEffect } from 'react'
import {url } from "../../../App"
import { useParams, useNavigate } from "react-router-dom"
import "./edit.css"
import axios from 'axios'
import {useSelector,useDispatch} from "react-redux"
import { addaction } from '../../../store/Store'

export default function Edit() {
  const studentList = useSelector((state)=>state.studentList)
  const dispatch = useDispatch();
  const params = useParams();
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)
  const [age, setAge] = useState(0)
  const [rank, setRank] = useState(0)
  const [name, setName] = useState('')

  const id = params.id
  const navigate = useNavigate()
  
  function data (){
  const value1 = studentList.filter((item)=>item.id===id)
  setEmail(value1[0].email)
  setPhone(value1[0].phone)
  setAge(value1[0].age)
  setRank(value1[0].rank)
  setName(value1[0].name)
  }
  useEffect(()=>{
    data()
  },[])




const handleupdate = () => {

  dispatch(addaction.edit({
    name,
    email,
    age,
    phone,
    rank,
    id
  }))
  navigate("/allstudents")
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
        <label className='title'>Rank:</label><br />
        <input className='inputval' type="text" value={rank} onChange={(e) => setRank(e.target.value)} />
        <br />
        <button className='submit-btn' onClick={() => handleupdate()}>Update</button>
      </>

    </div>
  )
}