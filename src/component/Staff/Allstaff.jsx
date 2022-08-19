import React, { useState,useEffect } from 'react'
import "./allstaff.css"
import {url1 } from "../../App"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom"
import axios from 'axios';

export default function Allstaff() {
  

  const [staffdata, setStaffdata] = useState([])


 async function value (){
   const allstaff = await axios.get(url1)
   setStaffdata(allstaff.data)
 }

  useEffect(()=>{
value();
  },[])
  const handledelete = async(id) => {
    await axios.delete(`${url1}/${id}`)
    value();
    
  }

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
   
    {
      field: "action",
      headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/updatestaff/${params.row.id}`}>
              <button className='stu-btn' >Edit</button>
            </Link>
            <DeleteOutlineIcon className='delete-btn' onClick={() => handledelete(params.row.id)} />

          </>
        )
      }

    }

  ];


  return (
    <>
      <div className='Allstudents'>
        <div style={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={staffdata}
            columns={columns}
            pageSize={8}
            disableSelectionOnClick
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </>
  )
}

