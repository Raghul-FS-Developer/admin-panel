import React from 'react'
import '../style/navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='search...'/>
          <SearchOutlinedIcon/>
        </div>
        <div className='items'>
          <div className='item'>
        <LanguageIcon className='icon'/>
        English
          </div>
          <div className='item'>
          <DarkModeOutlinedIcon className='icon'/>
        </div>
          <div className='item'>
          <FullscreenExitOutlinedIcon className='icon'/>
        </div>
        
          <div className='item'>
        <NotificationsActiveOutlinedIcon className='icon'/>
        <div className='counter'>1</div>
        </div>
          <div className='item'>
        <ChatBubbleOutlineOutlinedIcon className='icon'/>
        <div className='counter'>2</div>
        </div>
          
          <div className='item'>
        <ListOutlinedIcon className='icon'/>
        </div>
        <div className='item'>
        <img src="https://lh3.googleusercontent.com/xizfZQO94Mb8W9ZEyKE5ZTmXnkIa4zbBbVbpUUmaVhpHhQffxiTz7ElZS2aaP7CBLKkCljVyX75VNi_9Wd7wdR00jl9ECChHD3QT_BevSD8OS5LsUluRedvZjrGSuQMaq5gEKMXp2cMNu8QdGg"
        alt=''
        className='avatar'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar