import { Container, Grid, Rating, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../Sheared/Footer/Footer';
import Header from '../../Sheared/Header/Header';
import { useForm } from "react-hook-form";

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
    const classes=useStyle()

    const data={
        key:1,
        name:'Flower Pot',
        img:'https://i.ibb.co/t3BqzbX/flower-Pot.jpg',
        shortDetails:'White with colourful designs.',
        details:'We all love our Home, but for outdoors and having the flowers that you need can sometimes be a drag. This problem is solved with the Flowers. Boasting in 3 separate designs, this Pots can transport anything from flower to Flatware or even your favorite bottled beverage',
        price:19,
        rating:4,
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
        
    
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
                        <img src={data.img} width='100%' alt="product img" />
                        <Typography variant='h6'sx={{my:3}}>Description</Typography>
                        <Typography variant='body2' color='text.disabled'>{data.details}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ml:3}}>
                            <Typography variant='h3'sx={{}}>{data.name}</Typography>
                            <Typography variant='body2' color='text.disabled'>{data.shortDetails}</Typography>
                            <Typography variant='h5'sx={{my:2,fontWeight:'bold'}}>${data.price}</Typography>
                            <Rating name="read-only" value={data.rating} readOnly />
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
                                    defaultValue="name"
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
                                    defaultValue="email"
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