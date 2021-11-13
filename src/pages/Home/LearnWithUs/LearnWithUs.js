import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import benner from '../../../images/benner/benner3.jpg'

const useStyle=makeStyles(theme =>{
    return{
        learnUs_main:{
            background:`url(${benner})`,
            backgroundPosition:'center',
            backgroundSize:'cover',
            backgroundAttachment:'fixed',
            height:'360px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',

        }
    }
})

const LearnWithUs = () => {
    const classes=useStyle()
    return (
        <div className={classes.learnUs_main}>
            <Box>
            <Typography variant='body2'>Learn with us</Typography>
            <Typography variant='h6' sx={{fontSize:{xs:'1.1rem',sm:'1.5rem',md:'2rem'},my:2, width:{xs:'90%',sm:'70%'},mx:'auto'}} >WINTER WORKSHOPS ARE UNDERWAY CONTACT US!</Typography>
            <button 
            className='my-btn-outline-dark' 
                >view more</button>
            </Box>
        </div>
    );
};

export default LearnWithUs;