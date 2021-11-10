import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Reviews from '../Reviews/Reviews';

const Testimonials = () => {
    const data=[
        {
            key:1,
            name:'Erin Ribbink',
            img:'',
            comment:'Well, this is an odd one. I watered my plant for the first time, and a pretty large drip ran down the side of the pot, removing 90% of the white paint.',
            rating:3
        },
        {
            key:2,
            name:'Monkieflower',
            img:'',
            comment:'Absolutely love these pots! They were packed well and arrived with no damage. They are so cute and I love the design and look of them. Would def order more!',
            rating:5
        },
        {
            key:1,
            name:'Crystal Lemon',
            img:'',
            comment:'The amount of thought and care that went into packing them was over and above (and I’m a packaging engineer so I know), it truly enhances the reveal experience for me.',
            rating:5
        },
    ]
    return (
        <Container>
            <Typography variant='h3' sx={{fontWeight:400, textAlign:'center', textTransform:'uppercase'}}>Testimonials</Typography>
            <Box sx={{my:8}}>
                <Grid container spacing={2}>
                   {
                       data.map(review => <Reviews key={review.key} review={review}></Reviews>)
                   }
                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonials;