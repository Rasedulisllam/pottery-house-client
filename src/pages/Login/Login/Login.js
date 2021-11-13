import {  Alert, Container, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link,useLocation,useHistory } from 'react-router-dom';
import loginImg from '../../../images/login/login1.jpg'
import useAuth from '../../../hooks/useAuth'
import { AiOutlineHome } from 'react-icons/ai';

const useStyle=makeStyles(theme =>{
    return {
        login_main:{
            background:`url(${loginImg})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundAttachment:'fixed',
            height:'120vh',
            width:'100%',
            overflow:'hidden',
            [theme.breakpoints.down('md')]:{
                background:'#ffcdd2',
                height:'100vh',
            }
        },
        product_header:{
            padding:'1.5rem 0',
            backgroundColor:'#ffebee',
            textTransform:'uppercase'
        },
        order_form:{
            width:'70%',
            padding:'3rem',
            backgroundColor:'#ffebee',
            boxShadow:'1px 1px 10px #ddd',
            [theme.breakpoints.down('md')]:{
                background:'#ddd',
                textAlign:'center',
                width:'60%',
            },
            [theme.breakpoints.down('sm')]:{
                background:'#ddd',
                textAlign:'center',
                width:'90%',
                padding:'2rem',
            },
        }
    }
})

const Login = () => {
    const {login,err}=useAuth()
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
                <Container sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                    <Typography variant='h6' sx={{fontSize:{sm:'2rem'}}} >
                    Login Now
                    </Typography>
                    <Box>
                        <button
                        onClick={()=>history.push('/home')}
                        className='my-btn-white' 
                        style={{display:'block',margin:'1rem auto',fontWeight:'bold',color:'black'}}
                        ><AiOutlineHome size={18}/> go home
                        </button>
                    </Box>
                </Container>
            </Box>
        <Container sx={{}}>
            <Grid container>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={6} sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}}>
                    <Box className={classes.order_form} >
                        <Typography 
                        variant='h5' 
                        sx={{textTransform:'uppercase',mb:2}}
                        >Login
                        </Typography>
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
                        {err && <Alert 
                        severity="error"
                        >{err}</Alert>}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  );
};

export default Login;