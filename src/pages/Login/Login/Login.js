import {  Container, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link,useLocation,useHistory } from 'react-router-dom';
import loginImg from '../../../images/login/login1.jpg'
import useAuth from '../../../hooks/useAuth'

const useStyle=makeStyles({
    login_main:{
        background:`url(${loginImg})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundAttachment:'fixed',
        height:'120vh'
    },
    product_header:{
        padding:'1.5rem 0',
        backgroundColor:'#ffebee',
        textTransform:'uppercase'
    },
    order_form:{
        width:'70%',
        marginTop:'3rem',
        boxShadow:'1px 1px 10px #ddd'
    }
})

const Login = () => {
    const {login}=useAuth()
    const classes=useStyle()
    const location=useLocation()
    const history=useHistory()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        login(data.email, data.password, location, history)
    };

  return (
    <Box className={classes.login_main}>
         <Box className={classes.product_header}>
                <Container sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography variant='h4' >
                    Login Now
                    </Typography>
                    <Link  to='/home'>Go Home</Link>
                </Container>
            </Box>
        <Container sx={{my:4}}>
            <Grid container>
                <Grid item md={6}></Grid>
                <Grid item md={6}>
                    <Box sx={{ml:3, p:6}} className={classes.order_form} >
                        <Typography variant='h5' sx={{textTransform:'uppercase',mb:2}}>Login</Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{my:2}}>
                            <TextField 
                            fullWidth
                            id="email-basic" 
                            label="Eamil" 
                            type='email'
                            variant="standard"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                                }
                            })}
                            />
                            {errors.email && <Typography
                                variant='caption'
                                color='warning.main'
                                >{errors.email.message}</Typography>}
                        </Box>
                        <Box sx={{my:2}}>
                            <TextField 
                            fullWidth
                            id="Password-basic" 
                            label="Password" 
                            variant="standard"
                            type='password'
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                value: 6,
                                message: "Min length is 6"
                                }
                            })}
                            />
                            {errors.password && <Typography 
                            variant='caption'
                            color='warning.main'
                            >{errors.password.message}</Typography>}
                        </Box>
                        <button 
                        className='my-btn-outline-dark'
                        type="submit"
                        style={{marginTop:'1rem'}}
                        >Login</button>
                        </form>
                        <Typography 
                        vatiant='subtitle1' 
                        sx={{mt:2}} 
                        >
                            <Link to='/register'>Create an account</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  );
};

export default Login;