import { Container, Typography,Grid, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    const [products,setProducts] =useState([])

    // getting all products data from database
    useEffect(()=>{
        const url=`http://localhost:5000/products`
        axios.get(url)
            .then(res =>{
                setProducts(res.data)
            })
    },[])

    // console.log(products)
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
                        <Typography variant='body1' sx={{mb:2}}>Showing {products.length} results</Typography>
                        <Box>
                            <Grid container spacing={{ xs: 3, md: 6 }} columns={{ xs: 4, sm: 8, md:8 }}>
                                {
                                    products.map(product => <Product key={product._id} product={product}></Product>)
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