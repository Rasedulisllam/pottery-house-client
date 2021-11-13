import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';

const Testimonials = () => {
    const [reviews,setReviews]=useState([])
    
    // load all reviews data on database
    useEffect(()=>{
        const url=`https://serene-brushlands-06959.herokuapp.com/reviews`
        axios.get(url)
            .then(res =>{
                setReviews(res.data)
            })
    },[])
    return (
        <Container>
            <Typography 
            variant='h3' 
            sx={{fontWeight:400, textAlign:'center', textTransform:'uppercase',fontSize:{xs:'2rem',sm:'2.5rem', md:'3rem'}}}
            >Testimonials
            </Typography>
            <Box sx={{my:8}}>
                <Grid container spacing={2}>
                   {
                       reviews.map(review => <Reviews 
                        key={review._id} 
                        review={review}
                        ></Reviews>)
                   }
                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonials;