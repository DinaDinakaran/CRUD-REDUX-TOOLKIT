import React from 'react'
import {url1 } from "../../../App"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from "yup"

import "./addstaff.css"

export default function Addstaff () {
  const navigate = useNavigate()
  const handleSubmit =async(value)=>{
        await axios.post(url1,value)
        navigate("/allstaff")
  }



  const formik =useFormik({
    initialValues:{
        name:'',
        email:"",
        age:"",
        number:"",
        department:""
    },
    validationSchema:yup.object({
      name: yup.string().required('* required'),
      email: yup.string().required('* required').email("*Enter a Valid Email Address"),
      age : yup.number().required('* required').min(1,"Enter above 1").max(100,"Enter below 100"),
      number : yup.number().required('* required').min(10,"Enter valid number"),
      department : yup.string().required('* required')
    }
    ),
    onSubmit :(values)=>{
      handleSubmit(values);
    }
  })

 
  return (
    <div className='addstudent'>
      <form onSubmit={formik.handleSubmit}>
       <div className="alain">
       <label for="name" >Name</label>
              <input 
              id="name"
              name="name"
              type="text"
              className="inputval"
              placeholder='Enter Name'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              />
       </div>
        {formik.touched.name && formik.errors.name?<div style={{color:"red"}}>{formik.errors.name}</div>:null}
      </form>
      <form onSubmit={formik.handleSubmit}>
       <div className="alain">
       <label for="email" >Email</label>
        <input 
        id="email"
        name="email"
        type="text"
        className="inputval"
        placeholder='Enter email'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
        />
       </div>
        {formik.touched.email && formik.errors.email?<div style={{color:"red"}}>{formik.errors.email}</div>:null}
      </form>
      <form onSubmit={formik.handleSubmit}>
       <div className="alain">
       <label for="age" >Age</label>
        <input 
        id="age"
        name="age"
        type="number"
        className="inputval"
        placeholder='Enter age'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.age}
        />
       </div>
        {formik.touched.age && formik.errors.age?<div style={{color:"red"}}>{formik.errors.age}</div>:null}
      </form>
      <form onSubmit={formik.handleSubmit}>
       <div className="alain">
       <label for="number" >Number</label>
        <input 
        id="number"
        name="number"
        type="number"
        className="inputval"
        placeholder='Enter number'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.number}
        />
       </div>
        {formik.touched.number && formik.errors.number?<div style={{color:"red"}}>{formik.errors.number}</div>:null}
      </form>
      <form onSubmit={formik.handleSubmit}>
       <div className="alain">
       <label for="department" >Department</label>
        <input 
        id="department"
        name="department"
        type="text"
        className="inputval"
        placeholder='Enter department'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.department}
        />
       </div>
        {formik.touched.department && formik.errors.department?<div style={{color:"red"}}>{formik.errors.department}</div>:null}
        <div>
        <button type='submit' className='submit-btn'>Submit</button>
        </div>
       
      </form>
     
    </div>
  )
}
