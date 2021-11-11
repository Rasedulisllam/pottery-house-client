import { Container, Typography,Grid, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import Product from '../../Sheared/Product/Product';


const useStyle=makeStyles({
    product_header:{
        padding:'3rem 0',
        backgroundColor:'#ffebee',
        textTransform:'uppercase'
    }
})

const AllProducts = () => {
    const classes=useStyle()

    const data=[
        {
            key:1,
            name:'Flower Pot',
            img:'https://i.ibb.co/t3BqzbX/flower-Pot.jpg',
            shortDetails:'White with colourful designs.',
            details:'We all love our Home, but for outdoors and having the flowers that you need can sometimes be a drag. This problem is solved with the Flowers. Boasting in 3 separate designs, this Pots can transport anything from flower to Flatware or even your favorite bottled beverage',
            price:19,
            rating:4,
        },
        {
            key:2,
            name:'Clay Bowl',
            img:'https://i.ibb.co/K2mLYWM/clayBowl.jpg',
            shortDetails:'Can be used for office or kitchen storage',
            details:'DIY clay bowls take just minutes to make and decorate, which means you can create a bunch and keep them on hand. Paired with simple add-ons like incense, jewelry, candles, or plants they make thoughtful gifts with a sweet, personal touch. Follow these simple directions to make two different kinds of bowls.',
            price:20,
            rating:4,
        },
    ]


    return (
        <Box>
            <Box className={classes.product_header}>
                <Container>
                <Typography variant='h4' >Explore Our All products</Typography>
                </Container>
            </Box>
            <Container>
                <Grid container spacing={2} sx={{my:3}}>
                    <Grid item xs={12} md={9}>
                        <Typography variant='body1' sx={{mb:2}}>Showing {0} results</Typography>
                        <Box>
                            <Grid container spacing={{ xs: 3, md: 6 }} columns={{ xs: 4, sm: 8, md:8 }}>
                                {
                                    data.map(product => <Product key={product.key} product={product}></Product>)
                                }
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{pl:2}} >
                        <TextField fullWidth label="Search Products" id="fullWidth" sx={{my:4}} />
                        <Box>
                            <Typography variant='h6' sx={{}}>Categorise</Typography>
                               <Box sx={{mt:2}}>
                                   <Typography>
                                   <Button variant='text' sx={{color:'black'}}>Black Clay</Button>
                                   </Typography>
                                   <Typography>
                                   <Button variant='text' sx={{color:'black'}}>Fire</Button>
                                   </Typography>
                                   <Typography>
                                   <Button variant='text' sx={{color:'black'}}>New Pottery</Button>
                                   </Typography>
                                   <Typography>
                                   <Button variant='text' sx={{color:'black'}}>Workshops</Button>
                                   </Typography>
                                   <Typography>
                                   <Button variant='text' sx={{color:'black'}}>Unique pieces</Button>
                                   </Typography>
                               </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AllProducts;