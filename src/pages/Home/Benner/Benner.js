import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import bennerImg from '../../../images/benner/benner1.jpg'

const useStyle=makeStyles({
    benner_img:{
        width:'100%', 
        height:'550px',
        backgroundImage:`url(${bennerImg})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundAttachment:'fixed'
    },
    benner_text:{
        display:'flex',
        alignItems:'center',
        height:'100%',
    },
    benner_text_h1:{
        textTransform:'uppercase',
        letterSpacing:'7px',
        fontSize:'5rem',
        fontWeight:'bold',
        marginBottom:'.4rem'
    }
})

const Benner = () => {
    const classes=useStyle()
    return (
        <div className={classes.benner_img}>
            <Container sx={{height:'100%'}}>
            <Grid container spacing={2} sx={{height:'100%'}} >
                <Grid item xs={12} md={7} className={classes.benner_text}>
                    <Box >
                        <Typography color='white' variant='h6' sx={{fontStyle:'italic'}} >We Make Things With Love</Typography>
                        <Typography variant='h1' color='white' className={classes.benner_text_h1}>HandMade unique pieces</Typography>
                        <Typography variant='body1' sx={{color:'#e0e0e0',my:2,width:'75%'}}>Check out our handmade flower pot selection for the very best in unique or custom, handmade pieces from our planters &#38; pots shops.</Typography>
                        <button className='my-btn-white' >Read more</button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box >

                    </Box>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default Benner;