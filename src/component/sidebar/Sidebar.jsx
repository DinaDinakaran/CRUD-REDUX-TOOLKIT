import React from 'react'
import "./sidebar.css"
//icon
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import BoyIcon from '@mui/icons-material/Boy';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='Sidebarcotainer'>
      <div className="sidebarwrrap">
        <div className="sidebarTitle">
          DashBord
        </div>
        <ul className="sidebarlist">
          <li className="listItem">
            <SchoolIcon className='sidebarIcon' />
            <div className="ItemName">Course</div>
          </li>
          <li className="listItem">
            <PersonAddAlt1Icon className='sidebarIcon' />
            <div className="ItemName">Admissions</div>
          </li>
          <li className="listItem">
            <CalendarMonthIcon className='sidebarIcon' />
            <div className="ItemName">Events</div>
          </li>
        </ul>
        <div className="sidebarTitle">
          Human Resource
        </div>
        <ul className="sidebarlist">
          <NavLink
            to="/student"
            className={({ isActive }) => isActive ? "activeItem" : "link"}
          >
            <li className="listItem">
              <BoyIcon className='sidebarIcon' />
              <div className="ItemName">Students</div>
            </li>
          </NavLink>
          <NavLink
            to="/staff"
            className={({ isActive }) => isActive ? "activeItem" : "link"}
          >
            <li className="listItem">
              <WorkOutlineIcon className='sidebarIcon' />
              <div className="ItemName">Staffs</div>
            </li>
          </NavLink>
          <li className="listItem">
            <EngineeringIcon className='sidebarIcon' />
            <div className="ItemName">Workers</div>
          </li>
        </ul>
        <div className="sidebarTitle">
          Contacts
        </div>
        <ul className="sidebarlist">
          <li className="listItem">
            <DirectionsBusFilledIcon className='sidebarIcon' />
            <div className="ItemName">Transport Number</div>
          </li>
          <li className="listItem">
            <LocationCityIcon className='sidebarIcon' />
            <div className="ItemName">Staffs</div>
          </li>
          <li className="listItem">
            <CoPresentIcon className='sidebarIcon' />
            <div className="ItemName">Department</div>
          </li>
        </ul>

      </div>
    </div>
  )
}
