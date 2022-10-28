import React from 'react'
import "./Header.css"
import Icon from '@mui/material/Icon';
import HomeIcon from '@mui/icons-material/Home'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'


function Header() {
  return (
    <div className='header'>
      <div className='header-icons'>

        <div className='header-icon'>
          < HomeIcon />
          <p>Home</p>
        </div>
        <div>
          <FlashOnIcon />
        </div>
        <div>
          <LiveTvIcon />
        </div>
        <div>
          <VideoLibraryIcon />
        </div>
        <div>
          <SearchIcon />
        </div>
        <div>
          <PersonOutlineIcon />
          </div>
      </div>
      <img src='https://suplari.com/wp-content/uploads/2019/09/hulu-logo-white.png' alt=''/>
    </div>
  )
}

export default Header