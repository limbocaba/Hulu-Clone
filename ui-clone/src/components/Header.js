import React from 'react'
import "./Header.css"
import Icon from '@mui/material/Icon';
import HomeIcon from '@mui/icons-material/Home'



function Header() {
  return (
    <div className='header'>
      <div className='header-icons'>
        < HomeIcon />
      </div>
      <img src='https://suplari.com/wp-content/uploads/2019/09/hulu-logo-white.png' alt=''/>
    </div>
  )
}

export default Header