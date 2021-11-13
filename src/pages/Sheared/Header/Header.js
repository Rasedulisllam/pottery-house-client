import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Container } from '@mui/material';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { FiLogOut } from 'react-icons/fi';
import brand from '../../../images/logo/logo1.png'



export default function Header() {
  const {user,logout}=useAuth()
  const history = useHistory();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (path) => {
    if(path==='logout'){
      logout()
    }
    else{
      history.push(path)
    }
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // handle logout system
  const handleLogout=()=>{
    logout()
  }


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{minWidth:'400px'}}
    >
      <MenuItem
        onClick={()=>handleMenuClose('/home')}
      >
        <Button 
        sx={{color:'black'}}
         >Home</Button>
      </MenuItem>
      <MenuItem
        onClick={()=>handleMenuClose('/exploreProducts')}
      >
        <Button 
        sx={{color:'black'}}
        >All Products</Button>
      </MenuItem>

      {
        user.email?(
          <Box>
            <MenuItem
              onClick={()=>handleMenuClose('/dashboard')}
            >
              <Button 
              sx={{color:'black'}}
              >Dashboard</Button>
            </MenuItem>
            <MenuItem
              onClick={()=>handleMenuClose('logout')}
            >
              <button 
                className='my-btn-dark'
              >logout</button>
            </MenuItem>
          </Box>
        ):(
          <MenuItem
          onClick={()=>handleMenuClose('/login')}
          >
            <button 
              className='my-btn-outline-dark'
            >login</button>
          </MenuItem>
        )
      }
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, position:'sticky' }} >
      <AppBar position="sticky" color='' elevation={0} sx={{py:1}} >
        <Container sx={{px:0}}>
        <Toolbar>
          <img 
          src={brand}
          width='190px'
          alt="brand img" 
          />

          <Box sx={{ display: { xs: 'none', md: 'flex' },ml:4 }}>
            <Button 
            onClick={()=> history.push('/home')}
            variant='text' 
            color='inherit'>Home</Button>
            <Button 
            onClick={()=> history.push('/exploreProducts')}
            variant='text'
            color='inherit'
            >All Products</Button>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {
              user.email?(
                  <Box>
                  <Button 
                  onClick={()=>history.push('/dashboard')}
                  variant='text'
                  color='inherit'
                  sx={{mr:2}}
                  >Dashboard</Button>

                  <button 
                  onClick={handleLogout}
                  className='my-btn-dark'
                  >logout <FiLogOut/>
                  </button>
                </Box>
              ):(
                <button 
                onClick={()=> history.push('/login')}
                 className='my-btn-outline-dark'
                >login</button>
              )
            }
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-controls={mobileMenuId}
                onClick={handleMobileMenuOpen}
                aria-label="open drawer"
            >
                <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
