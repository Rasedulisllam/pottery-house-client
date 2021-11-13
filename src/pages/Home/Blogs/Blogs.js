import { Container, Grid, ListItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import author from '../../../images/blog/Author.png'
import Blog from '../Blog/Blog';

const useStyle=makeStyles(theme =>{
    return{
        blog_author_img:{
            overflow:'hidden',
            borderRadius:'50%',
            width:'280px',
            height:'280px',
            [theme.breakpoints.down('sm')]:{
                width:'250px',
                height:'250px',
            }
        }
    }
})

const Blogs = () => {
    const classes=useStyle();
    const [blogs,setBlogs] =useState([])
    const history = useHistory()

    // getting some products data from database
    useEffect(()=>{
        const url=`https://serene-brushlands-06959.herokuapp.com/blogs?count=2`
        axios.get(url)
            .then(res =>{
                setBlogs(res.data)
            })
    },[])

    // console.log(blogs)
    

    return (
        <Container sx={{my:10}}>
            <Typography 
            variant='h3' 
            sx={{textTransform:'uppercase',textAlign:'center',my:6,fontSize:{xs:'2rem',sm:'2.5rem', md:'3rem'}}}
            >Our Blogs
            </Typography>

            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        {
                            blogs.map(blog => <Blog 
                                key={blog._id} 
                                blog={blog}
                                ></Blog>)
                        }
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className={classes.blog_author_img}>
                            <img src={author} alt="author" />
                        </Box>
                        <Box sx={{p:2, my:2}}>
                            <Typography 
                            variant='h6' 
                            sx={{mb:1}}
                            >Yui Elizabeth
                            </Typography>
                            <Typography 
                            variant='body2'
                            >Pottery is made up of ceramic materials and encompasses major types of pottery wares such as earthenware, stoneware and porcelain.
                            </Typography>
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
            <button 
            onClick={()=> history.push('/blogs')}
            className='my-btn-outline-dark' 
            style={{my:3, margin:'2rem auto', display:'block',}}
            >More Blogs</button>
        </Container>
    );
};

export default Blogs;

