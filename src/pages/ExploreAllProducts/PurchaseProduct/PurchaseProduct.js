import { Container, Grid, Rating, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Footer from '../../Sheared/Footer/Footer';
import Header from '../../Sheared/Header/Header';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const useStyle=makeStyles({
    product_header:{
        padding:'3rem 0',
        backgroundColor:'#ffebee',
        textTransform:'uppercase'
    },
    order_form:{
        marginTop:'3rem',
        boxShadow:'1px 1px 10px #ddd'
    }
})

const PurchaseProduct = () => {
    const history = useHistory()
    const {user} = useAuth()
    const classes=useStyle()
    const {id}=useParams()
    const [product,setProduct]=useState({rating:0})
    
    // getting single product data depands on product id
    useEffect(()=>{
        const url=`https://serene-brushlands-06959.herokuapp.com/products/${id}`
        axios.get(url)
            .then(res => {
                setProduct(res.data)
            })
    },[id])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.productName=product.name;
        data.ProductImg=product.img;
        data.price=product.price;
        data.status='painding'
        axios.post('https://serene-brushlands-06959.herokuapp.com/orderProducts',data)
            .then(res =>{
                if(res.data.insertedId){
                    alert('Order place successfully')
                    history.push('/exploreProducts')
                }
            })
    };
    
    // console.log(product)
    return (
        <Box>
            <Header></Header>
            <Box className={classes.product_header}>
                <Container>
                <Typography variant='h4' >Purchase product details</Typography>
                </Container>
            </Box>
            <Box sx={{my:3}}>
                <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={product?.img} width='100%' alt="product img" />
                        <Typography variant='h6'sx={{my:3}}>Description</Typography>
                        <Typography variant='body2' color='text.disabled'>{product?.details}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ml:3}}>
                            <Typography variant='h3'sx={{}}>{product?.name}</Typography>
                            <Typography variant='body2' color='text.disabled'>{product?.shortDetails}</Typography>
                            <Typography variant='h5'sx={{my:2,fontWeight:'bold'}}>${product?.price}</Typography>
                            <Rating name="read-only" value={product?.rating} readOnly />
                        </Box>
                        <Box sx={{ml:3, p:4}} className={classes.order_form} >
                             <Typography variant='h5' sx={{textTransform:'uppercase',mb:2}}>Order Form</Typography>
                               <form onSubmit={handleSubmit(onSubmit)}>
                                <Box>
                                    <TextField 
                                    fullWidth
                                    sx={{my:2}}
                                    id="name-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    defaultValue={user.displayName}
                                    {...register("name")}
                                    />
                                </Box>
                                <Box>
                                    <TextField 
                                    fullWidth
                                    sx={{my:2}}
                                    id="email-basic" 
                                    label="Eamil" 
                                    type='email'
                                    variant="outlined"
                                    defaultValue={user.email}
                                    {...register("email")}
                                    />
                                </Box>
                                <Box sx={{my:2}}>
                                    <TextField 
                                    fullWidth
                                    id="number-basic" 
                                    label="Number" 
                                    variant="outlined"
                                    placeholder="phone number"
                                    {...register("number", { 
                                        required: 'number field is require',
                                        pattern: {
                                            value: /^\d+$/,
                                            message: "value must be number"
                                          }
                                    })}
                                    />
                                    {errors.number && <Typography 
                                    variant='caption' 
                                    color='warning.main'
                                    >{errors.number.message}</Typography>}
                                </Box>
                                <Box sx={{my:2}}>
                                    <TextField 
                                    fullWidth
                                    id="address-basic" 
                                    label="Address" 
                                    variant="outlined"
                                    placeholder="address"
                                    {...register("address", { required: true })}
                                    />
                                    {errors.address && <Typography 
                                    variant='caption'
                                    color='warning.main'>address field is require</Typography>}
                                </Box>
                                <Box sx={{my:2}}>
                                    <TextField 
                                    fullWidth
                                    id="message-basic" 
                                    label="Message" 
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    placeholder="Type Order message"
                                    {...register("message", { required: true })}
                                    />
                                    {errors.message && <Typography 
                                    variant='caption'
                                    color='warning.main'>message field is require</Typography>}
                                </Box>
                                <button 
                                className='my-btn-outline-dark'
                                type="submit"
                                >place order</button>
                                </form>
                        </Box>
                    </Grid>
                </Grid>
                </Container>
            </Box>
            <Footer></Footer>
        </Box>
    );
};

export default PurchaseProduct;