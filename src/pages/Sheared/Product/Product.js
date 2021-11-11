import React from 'react';
import { Grid, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router';

const useStyle = makeStyles({
    product_main:{
        boxShadow:0,
        '&:hover':{
            boxShadow:'1px 1px 10px #85828294'
        }
    },
    product_text:{
        display:'flex',
        justifyContent:'space-between'
    },
    product_action:{
        display:'flex',
        justifyContent:'space-between',
        padding:'.8rem .8rem'
    }
})

const Product = (props) => {
    const history = useHistory()
    const {name, img, shortDetails, price, rating,_id}=props.product;
    const classes=useStyle()

    // handle buy now button click
    const handleBuyNowButton =()=>{
        history.push(`/purchaseProduct/${_id}`)
    }

    return (
       <Grid item xs={4} sm={4} md={4}>
             <Card sx={{height:'100%'}} className={classes.product_main} elevation={0} >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="360"
                    image={img}
                />
                <CardContent sx={{}}>
                    <Box className={classes.product_text}>
                        <Typography gutterBottom variant="h5" component="div" sx={{width:'75%'}}>
                        {name}
                        </Typography>
                        <Typography variant="h4" color="" sx={{fontWeight:'bold'}}>
                        {price} $
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{width:'75%'}}>
                    {shortDetails}
                    </Typography>
                </CardContent>
                <CardActions className={classes.product_action}>
                   <Rating name="read-only" value={rating} readOnly />
                   <button 
                   onClick={handleBuyNowButton}
                   className="my-btn-outline-dark"
                   >buy now</button>
                </CardActions>
            </Card>
       </Grid>
    );
};

export default Product;