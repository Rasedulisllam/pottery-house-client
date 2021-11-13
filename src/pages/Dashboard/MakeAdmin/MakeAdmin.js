import {  TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEamil]=useState('')

    // handle onblur input field
    const handleOnBlur=(e)=>{
        const value= e.target.value;
        setEamil(value) 
    }

    // handle meke submit button
    const handleMakeAdmin=(e)=>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isEmail= re.test(email);
        if(isEmail){
           const ismakeAdmin=window.confirm('Click OK for make a naw ADMIN')
           if(ismakeAdmin){
               axios.put(`https://serene-brushlands-06959.herokuapp.com/users`,{ email })
                        .then(res => {
                            if(res.data.modifiedCount>0){
                                alert('Successfully make Admin')
                            }
                            else{
                                alert(`${res.data.message}`)
                            }
                            
                        })
           }
        }
        else{
            alert('Email not valid')
        }
        e.preventDefault()
    }

    return (
        <Box sx={{margin:{xs:'1rem auto', sm:'1rem auto', md:'1rem'}, width:{xs:"95%", sm:'60%',md:'40%'}}}>
            <form onSubmit={handleMakeAdmin}>
                <Typography 
                variant='h4' 
                sx={{textTransform:'uppercase', my:3}}
                >Make New ADmin</Typography>
                <TextField 
                fullWidth
                onBlur={handleOnBlur}
                id="standard-basic" 
                label="User Email" 
                variant="standard" />
                <button 
                type='submit' 
                className='my-btn-outline-dark' 
                style={{marginTop:'2rem'}}
                >Make Admin</button>
            </form>
        </Box>
    );
};

export default MakeAdmin;