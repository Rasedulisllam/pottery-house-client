import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useHistory, useRouteMatch } from 'react-router';
import { NavLink,Switch,Route } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {GrUnorderedList} from 'react-icons/gr'
import {GrUserAdmin} from 'react-icons/gr'
import {MdOutlineRateReview} from 'react-icons/md'
import {MdPayment} from 'react-icons/md'
import {MdOutlineManageSearch} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineFileAdd} from 'react-icons/ai'
import useAuth from '../../../hooks/useAuth'
import MyOrders from '../MyOrders/MyOrders';
import UserReview from '../UserReview/UserReview';
import Payment from '../Payment/Payment';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../AdminRoute/AdminRoute';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageProductDetails from '../ManageProductDetails/ManageProductDetails';

const drawerWidth = 200;

const useStyle=makeStyles({
    navlink:{
        textDecoration:'none',
        color:'black',
        fontWeight:'bold'
    },
    Navlink_active:{
        display:'block',
        backgroundColor:'#ffcdd2',
    }
})

function Dashboards(props) {
    const history= useHistory()
    const { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes =useStyle()
    const {isAdmin,logout}=useAuth()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // handle log out button
    const handleLogout=()=>{
        logout()
    }

    // console.log(isAdmin)
    const drawer = (
        <div>
        <Toolbar />
        <Divider />
        {
          !isAdmin?(<List>
                <NavLink 
                to={`${url}/myOrder`}
                className={classes.navlink}
                activeClassName={classes.Navlink_active}
                >
                    <ListItem button>
                        <ListItemIcon>
                        <GrUnorderedList />
                        </ListItemIcon>
                        <ListItemText>
                            My Order
                        </ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink 
                to={`${url}/reviews`}
                className={classes.navlink}
                activeClassName={classes.Navlink_active}
                >
                    <ListItem button>
                        <ListItemIcon>
                        <MdOutlineRateReview />
                        </ListItemIcon>
                        <ListItemText>
                            Reviews
                        </ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink 
                to={`${url}/payment`}
                className={classes.navlink}
                activeClassName={classes.Navlink_active}
                >
                    <ListItem button>
                        <ListItemIcon>
                        <MdPayment />
                        </ListItemIcon>
                        <ListItemText>
                            Payment
                        </ListItemText>
                    </ListItem>
                </NavLink>
            </List>):(
        <List>
            <NavLink 
            to={`${url}/manageAllOrders`}
            className={classes.navlink}
            activeClassName={classes.Navlink_active}
            >
                <ListItem button>
                    <ListItemIcon>
                    <GrUnorderedList />
                    </ListItemIcon>
                    <ListItemText>
                       Manage All Orders
                    </ListItemText>
                </ListItem>
            </NavLink>
            <NavLink 
            to={`${url}/addProduct`}
            className={classes.navlink}
            activeClassName={classes.Navlink_active}
            >
                <ListItem button>
                    <ListItemIcon>
                    <AiOutlineFileAdd />
                    </ListItemIcon>
                    <ListItemText>
                    Add Product
                    </ListItemText>
                </ListItem>
            </NavLink>
            <NavLink 
            to={`${url}/makeAdmin`}
            className={classes.navlink}
            activeClassName={classes.Navlink_active}
            >
                <ListItem button>
                    <ListItemIcon>
                    <GrUserAdmin />
                    </ListItemIcon>
                    <ListItemText>
                        Make Admin
                    </ListItemText>
                </ListItem>
            </NavLink>
            <NavLink 
            to={`${url}/manageProducts`}
            className={classes.navlink}
            activeClassName={classes.Navlink_active}
            >
                <ListItem button>
                    <ListItemIcon>
                    <MdOutlineManageSearch />
                    </ListItemIcon>
                    <ListItemText>
                       Manage Products
                    </ListItemText>
                </ListItem>
            </NavLink>
        </List>
            )}
        <button
        onClick={()=>history.push('/home')}
        className='my-btn-white' 
        style={{display:'block',margin:'1rem auto',fontWeight:'bold',color:'black'}}
        ><AiOutlineHome size={18}/> go home
        </button>
        <button 
         onClick={handleLogout}
        className='my-btn-white' 
        style={{display:'block',margin:'.7rem auto',backgroundColor:'gray',color:'white'}}
        >Logout <FiLogOut/>
        </button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' }}}
          >
          <MenuIcon />
          </IconButton>
            <Typography variant="h6" noWrap component="div">
              Pottery House Dashboard
            </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sx: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p:2, width: {xs:'100%', md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
            <Switch>
                <Route exact path={path}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/myOrder`}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/reviews`}>
                    <UserReview></UserReview>
                </Route>
                <Route path={`${path}/payment`}>
                    <Payment></Payment>
                </Route>
                <AdminRoute path={`${path}/manageAllOrders`}>
                    <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/addProduct`}>
                    <AddProduct></AddProduct>
                </AdminRoute>
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProducts`}>
                    <ManageProducts  url={url}></ManageProducts>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProductDetails/:id`}>
                    <ManageProductDetails></ManageProductDetails>
                </AdminRoute>
            </Switch>
      </Box>
    </Box>
  );
}

Dashboards.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboards;
