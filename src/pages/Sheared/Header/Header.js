import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Container } from '@mui/material';
import { useHistory } from 'react-router';



export default function Header() {
  const history = useHistory();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


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
    >
      <MenuItem
        onClick={handleMenuClose}
      >
        <Button>Home</Button>
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
      >
        <Button>Home</Button>
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
      >
        <Button>Home</Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, position:'sticky' }} >
      <AppBar position="sticky" color='' elevation={0} >
        <Container sx={{px:0}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: 'block' } }}
          >
            POTTERY HOUSE
          </Typography>

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
            <Button variant='text' color='inherit'>Dashboard</Button>
            <button 
            onClick={()=> history.push('/login')}
             className='my-btn-dark'
            >login</button>
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
