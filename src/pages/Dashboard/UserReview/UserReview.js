import React from 'react';
import { useForm } from "react-hook-form";
import { TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useAuth from '../../../hooks/useAuth';

const useStyle=makeStyles({
    product_header:{
        padding:'3rem 0',
        backgroundColor:'#ffebee',
        textTransform:'uppercase'
    },
    order_form:{
        width:'50%',
        margin:'1rem',
    }
})

const UserReview = () => {
    const {user}=useAuth()
    const classes=useStyle()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Box sx={{ml:3, p:4}} className={classes.order_form} >
        <Typography variant='h5' sx={{textTransform:'capitalize',mb:2}}>Please Rating our services</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
           <Box>
               <TextField 
               fullWidth
               sx={{my:2}}
               id="name-basic" 
               label="Name" 
               variant="outlined"
               defaultValue={user?.displayName}
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
               defaultValue={user?.email}
               {...register("email")}
               />
           </Box>
           <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Rating"
                // onChange={handleChange}
                {...register("rating", { required: true })}
                >
                <MenuItem value={1}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                </Select>
                {errors.rating && <Typography 
               variant='caption'
               color='warning.main'>Rating field is require</Typography>}
            </FormControl>
            </Box>
           <Box sx={{my:2}}>
               <TextField 
               fullWidth
               id="message-basic" 
               label="Message" 
               variant="outlined"
               multiline
               rows={4}
               placeholder="Type Rating message"
               {...register("message", { required: true })}
               />
               {errors.message && <Typography 
               variant='caption'
               color='warning.main'>message field is require</Typography>}
           </Box>
           <button 
           className='my-btn-dark'
           type="submit"
           >Submit</button>
           </form>
   </Box>
    );
};

export default UserReview;