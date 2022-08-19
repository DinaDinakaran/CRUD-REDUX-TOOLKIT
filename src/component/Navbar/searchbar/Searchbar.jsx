import React, { useState,useEffect } from 'react'
import "./searchbar.css"
import axios from 'axios';
import {url} from "../../../App"
import { useNavigate } from 'react-router-dom';

//icons-search
import SearchIcon from '@mui/icons-material/Search';
import {useSelector} from "react-redux"


function Searchbar() {
  const people = useSelector((state)=>state.studentList)
  const navigate = useNavigate()
    const [studata, setStudata] = useState([])
    function value (){
      setStudata(people);
     }
    
      useEffect(()=>{
    value();
      },[])
 const [query ,setQuery]= useState('')
  const handlechange =(id)=>{
    navigate(`/edit/${id}`)
    setQuery("")
  }

  return (
    <div>
        <div className="searchbar">
                <input type="text" placeholder='Search..' className="searchbox" onChange={e=>setQuery(e.target.value)} />
                <SearchIcon className='searchbtn'/>
                <div className="list">
                    <ul className="itemlist">
                        { query ?
                            studata.filter(ele=>ele.name.toLowerCase().includes(query))
                            .map(element=>{
                                return(
                                    <li className='listitem' >
                                      <button key={element.id} className="listitem" onClick={()=>handlechange(element.id)}>{element.name}</button>
                                    </li>
                                )
                            })
                            :null
                        }
                    </ul>
                </div>
              </div>
    </div>
  )
}

export default Searchbar