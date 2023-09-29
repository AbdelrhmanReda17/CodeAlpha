import React from 'react'
import { Link , Button , Typography , Dropdown , Menu , MenuButton , MenuItem } from '@mui/joy'
import { Box, Divider, IconButton, Toolbar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LogoutIcon from '@mui/icons-material/Logout';

import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate  } from 'react-router-dom';

const TopBar = ({children , searchOpen , handleSearchToggle , handleSearchSubmit}) => {
    const [user, setUser] = React.useState({});
    React.useEffect(() => {
      const profile = JSON.parse(localStorage.getItem("auth"));
      setUser(profile);
    }, []);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleDrawerToggle = () => {
        setDrawerOpen((prevState) => !prevState);
      };
    const buttonHandleSubmit =() =>{
      !user ? navigate('/login') : navigate('/create');
    }
    const handleClick =() =>{
      if(user.result._id !== undefined){
        navigate(`/user/blogs/${user?.result?._id}`);
      }
    }
    const handleLogout = () => {
      localStorage.removeItem('auth');
      setUser({});
      window.location.reload();
    }
    const customDrawer = 
        ( <Menu size="lg"  sx={{ width: "100%", marginTop: "10px !important" }}>
            <MenuItem onClick={() => navigate('/')} > Home </MenuItem>
            <MenuItem onClick={() => navigate('/blogs/all')}>  All Blogs </MenuItem>
            <MenuItem onClick={() => navigate('/blogs/technology')}>  Technology </MenuItem>
            <MenuItem onClick={() => navigate('/blogs/artsandculture')}>   Arts & Culture </MenuItem>
            <MenuItem onClick={() => navigate('/blogs/health')}>  Health </MenuItem> 
            <MenuItem onClick={() => navigate('blogs/science/')}>  Science </MenuItem>
            <MenuItem onClick={() => navigate('/blogs/opinion')}>  Opinion </MenuItem>
         </Menu> )
    return (
      <Toolbar disableGutters sx={{ color: 'black' , flexDirection: { xs: 'column', md: 'row-reverse' }, justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' , alignItems: 'center' , justifyContent: 'flex-end' , width: { xs: '100%', md: 'auto' } }}>
             {user && <Button variant="plain" color="neutral" onClick={handleClick} > <Typography level="h4"> My Blogs </Typography></Button>}
            <Button variant="plain" color="neutral" onClick={buttonHandleSubmit} > <Typography level="h4"> {!user ? 'Sign In' : ' Create a Blog' }</Typography></Button>
            {user && <IconButton onClick={handleLogout}>
                  <LogoutIcon sx={{color : 'black'}} />
            </IconButton> }
            <Divider orientation="vertical" sx={{ mx: 1, height: 20 }} />
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <IconButton>
                <FacebookIcon sx={{color : 'black'}} />
                </IconButton>
                <IconButton>
                <LinkedInIcon sx={{color : 'black'}}/>
                </IconButton>
                <IconButton>
                <TwitterIcon sx={{color : 'black'}}/>
                </IconButton>
                <IconButton>
                <InstagramIcon sx={{color : 'black'}} />
                </IconButton>
            </Box>
            </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , width: { xs: '100%', md: 'auto' } }}>
              <Link variant="h6" component="div" >
                  <img src="/LOGO.png" alt="logo" width="140PX"  height="50px" />
              </Link>
              <Box sx={{ display: 'flex', alignItems: 'center' , gap: 1 }} > 
                <Box sx={{ width: { xs: '100%', md: 'auto' } , display : { xs: 'inline-flex', md: 'none'}}} >
                      {children}
                </Box>
                {!searchOpen && (
                    <IconButton sx={{ display : { xs: 'inline-flex', md: 'none'} , color: 'black' , height: 'fit-content'}} onClick={handleSearchToggle}>
                    <SearchIcon />
                </IconButton>
                )}
                <Dropdown
                 open={drawerOpen}
                 onOpenChange={handleDrawerToggle}
                 >
                <MenuButton sx={{ display : { xs: 'inline-flex', md: 'none'} , color: 'black' , height: 'fit-content'}}>
                  <MenuIcon/>
                </MenuButton>                    
                {customDrawer}
                </Dropdown>
            </Box>
        </Box>
    </Toolbar>
  )
}

export default TopBar