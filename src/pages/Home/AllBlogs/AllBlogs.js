import { Container, Grid, ListItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import author from '../../../images/blog/Author.png'
import Header from '../../Sheared/Header/Header';
import Blog from '../Blog/Blog';

const useStyle=makeStyles({
    blog_author_img:{
        overflow:'hidden',
        borderRadius:'50%',
        width:'280px',
        height:'280px'
    },
    product_header:{
        padding:'3rem 0',
        backgroundColor:'#ffebee',
        textTransform:'uppercase'
    }
})

const Blogs = () => {
    const classes=useStyle();
    const [blogs,setBlogs] =useState([])

    // getting some products data from database
    useEffect(()=>{
        const url=`https://serene-brushlands-06959.herokuapp.com/blogs`
        axios.get(url)
            .then(res =>{
                setBlogs(res.data)
            })
    },[])

    console.log(blogs)
    

    return (
        <Box>
            <Header></Header>
            <Box className={classes.product_header}>
                <Container>
                <Typography variant='h4' >Our Blogs </Typography>
                </Container>
            </Box>
            <Container sx={{my:6}}>
            
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        {
                            blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                        }
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className={classes.blog_author_img}>
                            <img src={author} alt="author" />
                        </Box>
                        <Box sx={{p:2, my:2}}>
                            <Typography variant='h6' sx={{mb:1}}>Yui Elizabeth</Typography>
                            <Typography variant='body2'>Pottery is made up of ceramic materials and encompasses major types of pottery wares such as earthenware, stoneware and porcelain.</Typography>
                        </Box>
                        <Box sx={{p:2, my:2}}>
                            <Typography variant='h6'>Categories</Typography>
                            <ListItem>
                                <Typography>Adjust</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>Artistic</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>Create</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>Tableware</Typography>
                            </ListItem>
                            </Box>
                        </Grid>
                    </Grid> 
                </Box>
            </Container>
        </Box>
    );
};

export default Blogs;



// const data= [
//     {
//         key:1,
//         title:'Ceramics courses that will elevate',
//         details:'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis in exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh. enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.',
//         date:'October 10, 2021',
//         author:'Yui Elizabeth',
//         img:'https://i.ibb.co/mtyd1dk/bl-img2.jpg'
//     },
//     {
//         key:2,
//         title:'Do a deep dive into the pots and pans',
//         details:'Due to the Coronavirus pandemic, for most people, the last year was the most amount of time they have ever spent inside. For others, it was the year with the most amount of takeout ordered or the most amount of TV watched. While some people have discovered a new appreciation for cooking or baking while being stuck at home, others are itching to go back to safe and comfortable restaurant dining. As we reflect on the way food habits have changed in the last year, it is compelling to look at how food habits have changed throughout history.',
//         date:'October 7, 2021',
//         author:'Yui Elizabeth',
//         img:'https://i.ibb.co/9pwhzPc/bl-img1.jpg'
//     },
//     {
//         key:3,
//         title:'Only the best ways to sculpt pottery',
//         details:'Pottery is made up of ceramic materials and encompasses major types of pottery wares such as earthenware, stoneware and porcelain. To be considered pottery, a piece must be a fired ceramic ware that contains clay when formed To create a piece of pottery, the potter must form a ceramic clay body into a specific object, whether by hand built or wheel thrown techniques, and then heat it at a high temperature in a kiln to remove water from the clay. This allows for changes in the molded object, increasing its strength and durability while permanently setting its shape.',
//         date:'October 1, 2021',
//         author:'Yui Elizabeth',
//         img:'https://i.ibb.co/3pt1Htg/bl-img3.jpg'
//     },
//     {
//         key:4,
//         title:'100 working days in a workshop',
//         details:'Workshops aren’t like regular online courses or webinars which are largely passive, single-player experiences. They’re not like traditional education; sitting still obediently, listening to an expert who’s been put up on a pedestal.Instead, workshops are about connecting with others, applying ideas, and trying things out. They’re about developing and improving work, and learning every step of the way. And they offer a degree of interactivity, generosity, and shared experience that’s hard to match.',
//         date:'September 26, 2021',
//         author:'Yui Elizabeth',
//         img:'https://i.ibb.co/mJH4z78/bl-img4.jpg'
//     },
// ]