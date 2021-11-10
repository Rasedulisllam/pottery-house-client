import { Container, Grid, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { makeStyles } from '@mui/styles';
import {FiPhone} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillDribbbleCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import footerBenner from '../../../images/benner/footer_benner.jpg'

const useStyle=makeStyles({
    footer_main:{
        padding:'4rem 0',
        background:`url(${footerBenner})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundColor:'#424242',
        backgroundBlendMode:'darken, luminosity',
        color:'white'
    },
    footer_categories_item:{
        display:'block',
        textAlign:'center',
        color:'#bdbdbd',
        transition:'.3s',
        '&:hover':{
            color:'#f44336',
        }
    },
    footer_mail_phone:{
        display:'flex',  
        marginTop:'.8rem'
    },
    footer_bottom:{
        textAlign:'center'
    },
    footer_social:{
        display:'flex',
        listStyle:'none',
        cursor:'pointer'
    },
    footer_social_item:{
        margin:'0 .8rem'
    },
})

const Footer = () => {

    const classes=useStyle();

    return (
        <Box className={classes.footer_main} >
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{mb:4}}>
                            <Typography
                                variant="h4"
                                noWrap
                                component="div"
                            >
                                POTTERY HOUSE
                            </Typography>
                            <Typography variant='body2' sx={{color:'#bdbdbd'}}>Pottery Made With Love</Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6'>Contact us</Typography>
                            <Typography variant='body2' sx={{color:'#bdbdbd'}}>Kochukhet 7/3, Dhaka</Typography>
                            <Box className={classes.footer_mail_phone}>
                                <span>
                                    <FiPhone size={24} color='#f44336'></FiPhone>
                                </span>
                                <span>
                                    <Typography variant='body1' sx={{color:'#bdbdbd',ml:2}}>+88 0191000000</Typography>
                                </span>
                            </Box>
                            <Box className={classes.footer_mail_phone}>
                                <span>
                                    <FiMail size={24} color='#f44336'></FiMail>
                                </span>
                                <span>
                                    <Typography variant='body1' sx={{color:'#bdbdbd',ml:2}}>potteryhouse@gmail.com</Typography>
                                </span>
                            </Box>
                            <Box className={classes.footer_bottom}>
                                <ul className={classes.footer_social}>
                                    <li >
                                        Follow us:
                                    </li>
                                    <li >
                                        <BsFacebook size={26} style={{margin:'0 .3rem'}}> </BsFacebook>
                                    </li>
                                    <li >
                                    <AiFillTwitterCircle size={30} style={{margin:'0 .3rem'}}></AiFillTwitterCircle>
                                    </li>
                                    <li >
                                    <AiFillDribbbleCircle size={30} style={{margin:'0 .3rem'}}></AiFillDribbbleCircle>
                                    </li>
                                    <li >
                                    <AiFillGithub size={30} style={{margin:'0 .3rem'}}></AiFillGithub>
                                    </li>
                                </ul>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{textAlign:'center'}}>
                        <Typography variant='h5' sx={{mb:4}}>Categories &#38; Support</Typography>
                            <ListItem className={classes.footer_categories_item}>
                                <Typography >Secure payment</Typography>
                            </ListItem>
                            <ListItem className={classes.footer_categories_item}>
                                <Typography>Stores</Typography>
                            </ListItem>
                            <ListItem className={classes.footer_categories_item}>
                                <Typography>Accessories</Typography>
                            </ListItem>
                            <ListItem className={classes.footer_categories_item}>
                                <Typography>Term of use</Typography>
                            </ListItem>
                            <ListItem className={classes.footer_categories_item}>
                                <Typography>Help Center</Typography>
                            </ListItem>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{textAlign:'right'}}>
                        <Typography variant='h5' sx={{mb:4}}>Latest updates</Typography>
                        <Box sx={{my:2}}>
                            <Typography variant='subtitle1'>Against all odds see good results</Typography>
                            <Typography variant="caption" sx={{color:'#bdbdbd'}}>November 05, 2021</Typography>
                        </Box>
                        <Box sx={{my:2}}>
                            <Typography variant='subtitle1'>First tried and true dish line</Typography>
                            <Typography variant="caption" sx={{color:'#bdbdbd'}}>November 01, 2021</Typography>
                        </Box>
                    </Grid>
                </Grid> 
            </Container>
            
        </Box>
    );
};

export default Footer;