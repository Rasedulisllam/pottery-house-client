import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user,isLoading,isAdmin}=useAuth();

    // wait for observeimg user
    if(isLoading){
        return <Box sx={{display:'flex',justifyContent:'center', height:'100vh', alignItems:"center"}}>
            <CircularProgress color="inherit" />
        </Box>
    }

    return (
        <Route
        {...rest}
        render={({location})=>(user?.email) && isAdmin?children:(
            <Redirect 
                to={{
                    pathname:'/home',
                    state:{from:location}
                }}
            >
            </Redirect>
        )}
        >
            
        </Route>
    );
};

export default AdminRoute;