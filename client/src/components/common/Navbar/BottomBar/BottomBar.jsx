import React from 'react'
import { Toolbar , Box, IconButton } from '@mui/material';
import {  Link } from '@mui/joy'
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom';
const BottomBar = ({searchOpen , handleSearchToggle , children}) => {
    const location = useLocation();
    return (
    <Toolbar variant="dense"  disableGutters sx={{ display: { xs: 'none', md: 'flex' } , color: 'black' }}>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' , columnGap: 4 }}>
            <Link underline={location.pathname === '/' ? 'always' : 'hover'} color='success' className='texthover' href='/' sx={{color : `${location.pathname === '/' ? 'green' : 'black'}` }} level={location.pathname === '/' ? 'h3' : 'h4'} >
                Home
            </Link>
            <Link underline={location.pathname === '/blogs/all' ? 'always' : 'hover'} color='success'  className='texthover' href='/blogs/all' sx={{color : `${location.pathname === '/blogs/all' ? 'green' : 'black'}` }} level={location.pathname === '/blogs/all' ? 'h3' : 'h4'}>
                All Blogs
            </Link>
            <Link underline={location.pathname === '/blogs/technology' ? 'always' : 'hover'} color='success'  className='texthover' href='/blogs/technology' sx={{color : `${location.pathname === '/blogs/technology' ? 'green' : 'black'}` }} level={location.pathname === '/blogs/technology' ? 'h3' : 'h4'}>
                Technology
            </Link>
            <Link underline={location.pathname === '/blogs/artsandculture' ? 'always' : 'hover'} color='success'  className='texthover' href='/blogs/artsandculture' sx={{color : `${location.pathname === '/blogs/artsandculture' ? 'green' : 'black'}` }} level={location.pathname === '/blogs/artsandculture' ? 'h3' : 'h4'}>
                Arts & Culture
            </Link>
            <Link underline={location.pathname === '/blogs/health' ? 'always' : 'hover'} color='success'  className='texthover' href='/blogs/health' sx={{color : `${location.pathname === '/blogs/health' ? 'green' : 'black'}` }} level={location.pathname === '/blogs/health' ? 'h3' : 'h4'}>
                Health
            </Link>
            <Link underline={location.pathname === '/blogs/science' ? 'always' : 'hover'} color='success'  className='texthover' href='/blogs/science' sx={{color : `${location.pathname === '/blogs/science' ? 'green' : 'black'}` }} level={location.pathname === '/blogs/science' ? 'h3' : 'h4'}>
                Science
            </Link>
            <Link underline={location.pathname === '/blogs/travel' ? 'always' : 'hover'} color='success'  className='texthover' href='/blogs/travel' sx={{color : `${location.pathname === '/blogs/travel' ? 'green' : 'black'}` }} level={location.pathname === '/blogs/travel' ? 'h3' : 'h4'}>
                Travel
            </Link>
            <Link underline={location.pathname === '/blogs/opinion' ? 'always' : 'hover'} color='success'  className='texthover' href='/blogs/opinion' sx={{color : `${location.pathname === '/blogs/opinion' ? 'green' : 'black'}` }} level={location.pathname === '/blogs/opinion' ? 'h3' : 'h4'}>
                Opinion
            </Link>
            </Box>
              <Box sx={{ display : { md: 'inline-flex', xs: 'none'}}} >
              {children}
            
              {!searchOpen && (
              <IconButton onClick={handleSearchToggle}>
                <SearchIcon />
              </IconButton>
              )}
              </Box>
          </Box>
    </Toolbar>
  )
}

export default BottomBar