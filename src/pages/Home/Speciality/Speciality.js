import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {  Box } from '@mui/system';
import React from 'react';
import {BiSupport} from 'react-icons/bi';
import {MdLocalShipping} from 'react-icons/md';
import {RiSecurePaymentFill} from 'react-icons/ri';
import {FaPercent} from 'react-icons/fa';

const useStyle=makeStyles({
    spaciality_main:{
        backgroundColor:'#ffebee',
        padding:'3rem 0'
    },
    spaciality_item:{
        display:'flex', 
        alignItems:'center',
        backgroundColor:'#ffcdd2', 
        padding:'2rem 1.5rem'  
    },
    spaciality_icon:{
        marginRight:'.2rem'
    }
})

const Speciality = () => {
    const classes=useStyle()
    return (
        <Box className={classes.spaciality_main}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item sm={6} md={3}>
                       <Box  className={classes.spaciality_item}>
                       <BiSupport size={50} className={classes.spaciality_icon}></BiSupport> 
                       <Typography variant='h5'>24/7 support</Typography>
                       </Box>
                    </Grid>
                    <Grid item sm={6} md={3}>
                       <Box  className={classes.spaciality_item}>
                       <MdLocalShipping size={50} className={classes.spaciality_icon}></MdLocalShipping> 
                       <Typography variant='h5'>Quick Shipping</Typography>
                       </Box>
                    </Grid>
                    <Grid item sm={6} md={3}>
                       <Box  className={classes.spaciality_item}>
                       <RiSecurePaymentFill size={50} className={classes.spaciality_icon}></RiSecurePaymentFill> 
                       <Typography variant='h6'>Secure payment</Typography>
                       </Box>
                    </Grid>
                    <Grid item sm={6} md={3}>
                       <Box  className={classes.spaciality_item}>
                       <FaPercent size={50} className={classes.spaciality_icon}></FaPercent> 
                       <Typography variant='h5'>special offers</Typography>
                       </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Speciality;