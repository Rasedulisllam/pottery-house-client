import { Grid, Paper, Rating, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import {ImQuotesLeft} from 'react-icons/im';
import {CgProfile} from 'react-icons/cg';

const useStyle=makeStyles({
    review_identy:{
        display:'flex',
        margin:'.9rem 0'
    },
    review_images:{
        overflow:'hidden',
        width:'54px',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center'
    }
})

const Reviews = (props) => {
    const {name, comment, img, rating}=props.review;

    const classes= useStyle();

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{p:3, bgcolor:'#ffebee'}}>
                <Box>
                    <ImQuotesLeft size={40} color="#e57373"></ImQuotesLeft>
                    <Typography variant='body1' color='text.disabled' sx={{my:1}}> {comment}</Typography>
                </Box>
                <Box className={classes.review_identy}>
                    <Box className={classes.review_images}>
                        {
                            img?<img width='40px' sx={{borderRadius:'50%'}} src={img} alt="review images" />: <CgProfile size={35} color='#e57373'></CgProfile>
                        }  
                    </Box>
                    <Box>
                        <Typography>{name}</Typography>
                        <Rating name="read-only" value={rating} readOnly />
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default Reviews;