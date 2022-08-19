import React,{ useState,useEffect} from 'react'
import {url1} from "../../../App"
import { DataGrid} from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Staff.css"


export default function Staff() {
  const [staffdata, setStaffdata] = useState([])
  async function value (){
     const allstaff = await axios.get(url1)
     setStaffdata(allstaff.data)
   }
  
    useEffect(()=>{
  value();
    },[])

  const columns = [
    { field: 'id', headerName: 'ID', width:70 },
    { field: 'name', headerName: 'Name', width: 180 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 70,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 230,
    },
    {
      field: 'department',
      headerName: 'Department',
      type: 'string',
      width: 230,
    },
    {
        field: 'number',
        headerName: 'Phone',
        type: 'number',
        width: 190,
      },
   
]


  return (

   <div className="student">
    <div className="edit">
    <Link to="/allstaff">
      <button className='edit-btn'>Edit List</button>
    </Link>
    <Link to="/addstaff">
      <button className='Add-btn'>Add List</button>
    </Link>
    </div>
     <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={staffdata}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  )
}
