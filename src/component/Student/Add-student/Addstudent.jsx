import React from 'react'
import { useNavigate } from "react-router-dom"

import { useFormik } from 'formik';
import * as yup from "yup"
import { v4 as uuidv4 } from 'uuid';

import "./addstudent.css"
import { useDispatch,useSelector } from 'react-redux';
import { addaction } from '../../../store/Store';


export default function Addstaff () {
  const people = useSelector((state)=>state.studentList)
  const newone = people.length
  const newID = uuidv4()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit =(value)=>{
        dispatch(addaction.add({
          name : value.name,
          email :value.email,
          age :value.age,
          number : value.number,
          rank :value.rank,
          id :uuidv4()
        }))
        navigate("/allstudents")
        
  }



  const formik =useFormik({
    initialValues:{
        name:'',
        email:"",
        age:"",
        number:"",
        rank:""
    },
    validationSchema:yup.object({
      name: yup.string().required('* required'),
      email: yup.string().required('* required').email("*Enter a Valid Email Address"),
      age : yup.number().required('* required').min(1,"Enter above 1").max(100,"Enter below 100"),
      number : yup.number().required('* required').min(10,"Enter valid number"),
      rank : yup.string().required('* required')
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
       <label for="rank" >Rank</label>
        <input 
        id="rank"
        name="rank"
        type="text"
        className="inputval"
        placeholder='Enter rank'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.rank}
        />
       </div>
        {formik.touched.rank && formik.errors.department?<div style={{color:"red"}}>{formik.errors.department}</div>:null}
        <button type='submit' className='submit-btn'>Submit</button>
      </form>
      
    </div>
  )
}
