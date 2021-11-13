import { Container, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import axios from 'axios';

const useStyle=makeStyles({
    product_header:{
        padding:'1.4rem 0',
        backgroundColor:'#ffebee',
        textTransform:'uppercase',
        textAlign:'center'
    },
    order_form:{
        marginTop:'1rem',
        boxShadow:'1px 1px 10px #ddd'
    }
})

const ManageProductDetails = () => {
    const classes=useStyle()
    const {id}=useParams()
    const [product,setProduct]=useState({})
    
    // getting single product data depands on product id
    useEffect(()=>{
        const url=`https://serene-brushlands-06959.herokuapp.com/products/${id}`
        axios.get(url)
            .then(res => {
                setProduct(res.data)
            })
    },[id])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const updateProduct={...product}
        updateProduct.name=data.name
        updateProduct.details=data.details
        updateProduct.shortDetails=data.shortDetails
        updateProduct.price=parseFloat(data.price)
        updateProduct.img=data.img
        
        const isUpdate = window.confirm('Click ok for confire UPDATE')
        if(isUpdate){
            const url=`https://serene-brushlands-06959.herokuapp.com/products`
            axios.put(url,updateProduct)
                .then(res =>{
                    if(res.data.matchedCount>0){
                        alert('successfully Update Product data')
                    }
                })
        }
    };
    
    // console.log(product)
    return (
        <Box>
            <Box className={classes.product_header}>
                <Container>
                <Typography variant='h4' >Update product Data</Typography>
                </Container>
            </Box>
            <Box sx={{my:3}}>
                <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={product?.img} width='100%' alt="product img" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {
                            product.name && <Box sx={{ml:3, p:4}} className={classes.order_form} >
                            <form onSubmit={handleSubmit(onSubmit)}>
                             <Box>
                                 <TextField 
                                 fullWidth
                                 sx={{my:2}}
                                 id="name-basic" 
                                 label="Product Name" 
                                 variant="outlined"
                                 defaultValue={product.name}
                                 {...register("name")}
                                 />
                             </Box>
                             <Box>
                                 <TextField 
                                 fullWidth
                                 sx={{my:2}}
                                 id="price-basic" 
                                 label="Product price" 
                                 variant="outlined"
                                 defaultValue={product.price}
                                 {...register("price")}
                                 />
                             </Box>
                             <Box>
                                 <TextField 
                                 fullWidth
                                 sx={{my:2}}
                                 id="short-basic" 
                                 label="short details" 
                                 variant="outlined"
                                 defaultValue={product.shortDetails}
                                 {...register("shortDetails")}
                                 />
                             </Box>
                             <Box>
                                 <TextField 
                                 fullWidth
                                 sx={{my:2}}
                                 id="img-basic" 
                                 label="Image url" 
                                 variant="outlined"
                                 defaultValue={product.img}
                                 {...register("img")}
                                 />
                             </Box>
                             
                             <Box sx={{my:2}}>
                                 <TextField 
                                 fullWidth
                                 id="Details-basic" 
                                 label="Details" 
                                 variant="outlined"
                                 multiline
                                 rows={4}
                                 defaultValue={product.details}
                                 {...register("details")}
                                 />
                             </Box>
                             <button 
                             className='my-btn-outline-dark'
                             type="submit"
                             >update</button>
                          </form>
                        </Box>
                        }
                    </Grid>
                </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default ManageProductDetails;