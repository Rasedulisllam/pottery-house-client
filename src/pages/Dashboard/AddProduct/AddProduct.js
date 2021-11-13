
import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

import { useForm } from "react-hook-form";

import axios from 'axios';


const useStyle=makeStyles(theme =>{
    return {
        product_header:{
            padding:'3rem 0',
            backgroundColor:'#ffebee',
            textTransform:'uppercase'
        },
        order_form:{
            width:'70%',
            marginTop:'1.5rem',
            boxShadow:'1px 1px 10px #ddd',
            [theme.breakpoints.down('md')]:{
                width:'70%',
                margin:'1.5rem auto'
                
            },
            [theme.breakpoints.down('sm')]:{
                width:'100%',
                margin:'1rem auto'
    
            },
            [theme.breakpoints.down('xs')]:{
                width:'100%',
                margin:'1rem auto'
            }
        }
    }
})

const AddProduct = () => {
    const classes=useStyle()

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const isAdd=window.confirm('Click Confirm to add product')
        data.price=parseFloat(data.price)
        if(isAdd){
            axios.post('https://serene-brushlands-06959.herokuapp.com/Products',data)
            .then(res =>{
                if(res.data.insertedId){
                    alert('Successfully Add product')
                    reset()
                }
            })
        }
    };


    return (
        <Box sx={{m:2, p:4}} className={classes.order_form} >
            <Typography 
            variant='h5' 
            sx={{textTransform:'uppercase',mb:3,}} 
            align='center'
            >Add a New Product
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{my:2}}>
                <TextField 
                fullWidth
                id="product-name-basic" 
                label="Product Name" 
                variant="outlined"
                placeholder='Product name'
                {...register("name", { 
                    required: 'Product name field is require',
                })}
                />
                {errors.name && <Typography 
                variant='caption' 
                color='warning.main'
                >{errors.name.message}</Typography>}
            </Box>
            <Box sx={{my:2}}>
                <TextField 
                fullWidth
                id="price-basic" 
                label="Price" 
                type='text'
                variant="outlined"
                placeholder='Product price'
                {...register("price", { 
                    required: 'price field is require',
                    pattern: {
                        value: /^\d+$/,
                        message: "Price value must be number"
                        }
                })}
                />
                {errors.price && <Typography 
                variant='caption' 
                color='warning.main'
                >{errors.price.message}</Typography>}
            </Box>
            <Box sx={{my:2}}>
                <TextField 
                fullWidth
                id="shortDetails-basic" 
                label="Short Details" 
                variant="outlined"
                placeholder="Short Details"
                {...register("shortDetails", { 
                    required: 'shortDetails field is require',
                })}
                />
                {errors.shortDetails && <Typography 
                variant='caption' 
                color='warning.main'
                >{errors.shortDetails.message}</Typography>}
            </Box>
            <Box sx={{my:2}}>
                <TextField 
                fullWidth
                id="details-basic" 
                label="Details" 
                variant="outlined"
                multiline
                rows={4}
                placeholder="Type product  details"
                {...register("details", { required: true })}
                />
                {errors.details && <Typography 
                variant='caption'
                color='warning.main'>details field is require</Typography>}
            </Box>
            <Box sx={{my:2}}>
                <TextField 
                fullWidth
                id="image-basic" 
                label="Image url" 
                variant="outlined"
                placeholder="Image url"
                {...register("img", { 
                    required: 'Image field is require',
                    pattern: {
                        value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/,
                        message: "Only image url support"
                        }
                })}
                />
                {errors.img && <Typography 
                variant='caption' 
                color='warning.main'
                >{errors.img.message}</Typography>}
            </Box>
            <Box sx={{ minWidth: 120, my:2 }}>
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
                <MenuItem value={0}>0</MenuItem>
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
            <button 
            className='my-btn-outline-dark'
            type="submit"
            style={{margin:'1rem 0'}}
            >Add Product</button>
            </form>
    </Box>
    );
};

export default AddProduct;