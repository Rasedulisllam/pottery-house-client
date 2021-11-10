import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Blog = (props) => {
    const {title, details, img, author, date}=props.blog
    return (
        <Card sx={{mb:10}} elevation={0}>
            <CardMedia
                component="img"
                height="440"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div" >
                   <span>{author}</span>--- <span>{date}</span>
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {details}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="text" sx={{color:'text.primary'}} >Read more</Button>
            </CardActions>
            </Card>
    );
};

export default Blog;