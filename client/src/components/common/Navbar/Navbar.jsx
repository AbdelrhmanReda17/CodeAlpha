import React from 'react'
import { AppBar , Container, Divider, IconButton } from '@mui/material';
import { Input } from '@mui/joy'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TopBar from './TopBar/TopBar';
import BottomBar from './BottomBar/BottomBar';
import { useNavigate } from 'react-router-dom';


const Navbar = ({searchText, setSearchText,}) => {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleSearchToggle = () => {
    setSearchOpen((prevState) => !prevState);
    setSearchText('');
  }
  const handleSearchSubmit = (e , newVal) => {
      e.preventDefault();
      navigate('/blogs/search');
  }

  const searchButton = (
    searchOpen && (
        <form onSubmit={handleSearchSubmit}>
            <Input placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)}
                endDecorator={ <IconButton onClick={handleSearchToggle}> <HighlightOffIcon /> </IconButton>}> 
            </Input>
        </form>
    )
  )

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }} elevation={0}>
      <Container disableGutters maxWidth="xl" sx= {{ paddingLeft: 3 , paddingRight: 3 , maxWidth: "1600px !important"}} >
        <TopBar searchOpen={searchOpen} handleSearchToggle={handleSearchToggle} handleSearchSubmit={handleSearchSubmit} >
            {searchButton}
        </TopBar>
        <Divider sx={{ height: '1x' , marginTop: 1 , display: { xs: 'none', md: 'block'}}  } />
        <BottomBar searchOpen={searchOpen} handleSearchToggle={handleSearchToggle} >
            {searchButton}
        </BottomBar>
        <Divider sx={{ height: 2, borderRadius: 10, marginBottom: 2, backgroundColor: 'black' }} />
      </Container>
    </AppBar>
  )
}

export default Navbar