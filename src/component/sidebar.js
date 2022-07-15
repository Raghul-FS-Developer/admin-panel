import React from "react";
import "../style/sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSystemDaydreamTwoToneIcon from '@mui/icons-material/SettingsSystemDaydreamTwoTone';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import {useNavigate} from 'react-router-dom'
function Sidebar() {
  const nav = useNavigate()
  return (
    <div className="sidebar">
      <div className="top" onClick={()=>nav('/')}>
        <span className="logo" >Admin Panel</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li onClick={()=>nav('/')}>
            <DashboardIcon className="icon"/>
            <span className="" >Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li onClick={()=>nav('/users')}>
            <PeopleOutlineSharpIcon className="icon"/>
            <span className="" >Users</span>
          </li>
          <li onClick={()=>nav('/products')}>
           <AddBusinessOutlinedIcon className="icon"/>
            <span className="" >Products</span>
          </li>
          <li>
            <AddShoppingCartOutlinedIcon className="icon"/>
            <span className="">Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon"/>
            <span className="">Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsRoundedIcon className="icon"/>
            <span className="">Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className="icon"/>
            <span className="">Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamTwoToneIcon className="icon"/>
            <span className="">System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon"/>
            <span className="">Logs</span>
          </li>
          <li>
            <SettingsApplicationsOutlinedIcon className="icon"/>
            <span className="">Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span className="">Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon"/>
            <span className="">Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>

      </div> */}
    </div>
  );
}

export default Sidebar;
