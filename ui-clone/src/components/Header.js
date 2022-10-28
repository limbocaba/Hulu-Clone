import React from 'react'
import "./Header.css"
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

        <div className='header-icon header-icon--active'>
          < HomeIcon />
          <p>Home</p>
        </div>
        <div className='header-icon'>
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className='header-icon'>
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className='header-icon'>
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <div className='header-icon'>
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className='header-icon'>
          <PersonOutlineIcon />
          <p>Account</p>
          </div>
      </div>
      <img className='header-img' src='https://suplari.com/wp-content/uploads/2019/09/hulu-logo-white.png' alt=''/>
    </div>
  )
}

export default Header