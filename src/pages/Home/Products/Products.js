import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Product from '../../Sheared/Product/Product';

const Products = () => {
    const history= useHistory()
    const [products,setProducts] =useState([])

    // getting some products data from database
    useEffect(()=>{
        const url=`http://localhost:5000/products?count=6`
        axios.get(url)
            .then(res =>{
                setProducts(res.data)
            })
    },[])

    // console.log(products)
    
    return (
        <Container sx={{my:6}}>
            <Box sx={{textAlign:'center', mb:8}}>
                <Typography variant='body1' sx={{fontStyle:'italic'}}>Latest products</Typography>
                <Typography variant='h3' sx={{ textTransform:'uppercase'}}>Perfect decor prices for daily life</Typography>
            </Box>
            <Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Grid>
            </Box>
            <button 
            onClick={()=> history.push('/exploreProducts')}
            className='my-btn-outline-dark' 
            style={{my:3, margin:'2rem auto', display:'block',}}
            >Explore all Products</button>
        </Container>
    );
};

export default Products;



// const data=[
//     {
//         key:1,
//         name:'Flower Pot',
//         img:'https://i.ibb.co/t3BqzbX/flower-Pot.jpg',
//         shortDetails:'White with colourful designs.',
//         details:'We all love our Home, but for outdoors and having the flowers that you need can sometimes be a drag. This problem is solved with the Flowers. Boasting in 3 separate designs, this Pots can transport anything from flower to Flatware or even your favorite bottled beverage',
//         price:19,
//         rating:4,
//     },
//     {
//         key:2,
//         name:'Clay Bowl',
//         img:'https://i.ibb.co/K2mLYWM/clayBowl.jpg',
//         shortDetails:'Can be used for office or kitchen storage',
//         details:'DIY clay bowls take just minutes to make and decorate, which means you can create a bunch and keep them on hand. Paired with simple add-ons like incense, jewelry, candles, or plants they make thoughtful gifts with a sweet, personal touch. Follow these simple directions to make two different kinds of bowls.',
//         price:20,
//         rating:4,
//     },
//     {
//         key:3,
//         name:'Glazed Pot',
//         img:'https://i.ibb.co/prgxMgx/clazed-Pot.jpg',
//         shortDetails:'Gardeen decoration pot for home and outdore plantation',
//         details:'HX10369 Glazed Ceramic Pots are used to decor interior, garden or balcony. These pots are used by professional landscape architects and interior designers to add beauty to their creativity. We have a new range of new small sized ceramic pots/ planters which are used for indoor/ outdoor plants.',
//         price:60,
//         rating:4,
//     },
//     {
//         key:4,
//         name:'Clay Plate',
//         img:' https://i.ibb.co/BTQzvr0/clay-Plate.jpg',
//         shortDetails:'Gibson Elite Rhinebeck Double Bowl Dinnerware Set',
//         details:'This plate produces a real culinary celebration, will provide an overwhelming character to every dinner. It creates a stylish and aesthetic presentation.',
//         price:23,
//         rating:5,
//     },
//     {
//         key:5,
//         name:'Suger Cup',
//         img:'https://i.ibb.co/hgbyVVK/sugarCup.jpg',
//         shortDetails:'suger-cup with lock and creame-pot with green vineberry leafe decor',
//         details:'Swedish vintage 1960s highquality Hackefors porcelain fabric bone white suger-cup with lock and creame-pot with green vineberries leafe motive and gold decor.',
//         price:60,
//         rating:4,
//     },
//     {
//         key:6,
//         name:'Etrusco-Corinthian Olpe',
//         img:'https://i.ibb.co/sRS2w7C/olpa.jpg',
//         shortDetails:'Etrusco-Corinthian was a universal Etruscan style of pottery',
//         details:'A combination of floral and animal designs arranged in four registers decorates the body of this Corinthian black-figure olpe, or pitcher. The four superimposed friezes repeat many of the animals that form the Corinthian vase-painter’s standard repertoire: lions, panthers, goats, deer, bulls, boars, swans. Dot-rosettes surround and separate the animals. Both the creatures and the filling ornaments are carefully laid out and meticulously drawn.',
//         price:50,
//         rating:5,
//     },
//     {
//         key:7,
//         name:'Tea Set',
//         img:'https://i.ibb.co/VHrDRjL/teaSet.jpg',
//         shortDetails:'Porcelain Ceramic Tea set, Ceramic teapot set,',
//         details:'The full prcelain tea set are packed in a gift box. It could be an ideal gift for men who is tea drinker or as a gift at speical holiday like Fathers day, Christmas or other special occasions. Enjoy your good time by sharing excellent teas with your boyfriend,your father or your friends in weekend.',
//         price:22,
//         rating:5,
//     },
//     {
//         key:8,
//         name:'Red and Blue Amphora',
//         img:'https://i.ibb.co/VvBPth1/red-Blue-Vase.jpg',
//         shortDetails:'Each amphora only holds 9 gallons of wine',
//         details:'ancient vessel form used as a storage jar and one of the principal vessel shapes in Greek pottery, a two-handled pot with a neck narrower than the body.Wide-mouthed, painted amphorae were used as decanters and were given as prizes. Amphora, a storage jar used in ancient Greece.',
//         price:65,
//         rating:5,
//     },
//     {
//         key:9,
//         name:'Fruit Bowl',
//         img:'https://i.ibb.co/jHWQhJF/fruit-Bowl.jpg',
//         shortDetails:'Shallow Bowl-Large Concrete Bowl-Handmade Fruit Bowl',
//         details:'This piece is very sleek and has a simplistic, yet interesting design. The bowls rim varies slightly in height, giving it a really subtle wave-like affect. Ive done by best to show this in the photos. We wanted this piece to be both clean and organic, so we decided keep the little imperfections on the exterior of the bowl (shown in the close up photos) made by our amateur ceramist all those years ago just as they are, because those little imperfections are what really make this piece super cool and unique.',
//         price:26,
//         rating:4,
//     },
//     {
//         key:10,
//         name:'Coffe Set',
//         img:'https://i.ibb.co/dGxjkJ4/coffeSet.jpg',
//         shortDetails:'Ceramic Pour Over Coffee Set,Coffee Dripper',
//         details:'Ceramic Pour Over Coffee Set,Retro Coffee Dripper,Stone Glaze Coffee Pour Over,Ceramic Coffee Maker,Vintage Coffee Filter Brewer,Unique Rock Pottery Gift Ideas,Kitchen Decor.',
//         price:31,
//         rating:5,
//     },
//     {
//         key:11,
//         name:'African Pot',
//         img:'https://i.ibb.co/pr9sVcT/african-Pot.jpg',
//         shortDetails:'Handmade African pot on a white background.',
//         details:'This American Blue African Violet Pot is part of our American Blue Pottery Collection. The glossy glaze of this pottery has tones of deep, rich, speckled blue.',
//         price:45,
//         rating:4,
//     },
//     {
//         key:12,
//         name:'Clay Mug',
//         img:'https://i.ibb.co/xstB72r/clayMug.jpg',
//         shortDetails:'SUPPLIES for hand-built pottery mugs',
//         details:'Our ceramics are handmade in Geigertown, Pennsylvania using traditional pottery tools and techniques. We believe in craftsmanship, quality and sustainability in all things. No matter what you drink, we hope to add beauty to your ritual.',
//         price:8,
//         rating:4,
//     },
//     {
//         key:13,
//         name:'Bottles',
//         img:' https://i.ibb.co/S3jGvYG/bottles.jpg',
//         shortDetails:'Handmade ceramic bottles. wheel thrown ceramic bottles.',
//         details:'A collection of wheel thrown ceramic bottles. Bottles can be used individually or grouped for flower arrangements, or stand alone as decorative piece. The bottles I offer in my shop are made on the potter wheel, and then slightly shaped individually.',
//         price:18,
//         rating:4,
//     },
// ]