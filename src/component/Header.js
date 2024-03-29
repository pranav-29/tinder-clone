import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css'
import { IconButton } from '@mui/material';
function Header() {
  return (
    <div className='tinder-header'>
    
    <IconButton className='tinder-icons' fontSize='large'>
            <PersonIcon fontSize='large' />
    </IconButton>
    
    <img src='https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg'
    alt='icon'
    />
    
    <IconButton className='tinder-icons' fontSize='large'>
         <ForumIcon fontSize='large' />
    </IconButton>
    
    </div>
  )
}

export default Header