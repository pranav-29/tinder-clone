import React from 'react'
import './Footer.css'
import { IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function Footer() {
  return (
    <div className='footer-icons'>
    <IconButton className='replay'>
      <ReplayIcon fontSize='large'/>
    </IconButton>

    <IconButton className='close'>
      <CloseIcon fontSize='large'/>
    </IconButton>

    <IconButton className='star'>
      <StarRateIcon fontSize='large'/>
    </IconButton>

    <IconButton className='favorite'>
      <FavoriteIcon fontSize='large'/>
    </IconButton>

    <IconButton className='flash'>
      <FlashOnIcon fontSize='large'/>
    </IconButton>

    </div>
  )
}

export default Footer