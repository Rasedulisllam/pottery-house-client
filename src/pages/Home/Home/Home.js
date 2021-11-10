import React from 'react';
import Header from '../../Sheared/Header/Header';
import Benner from '../Benner/Benner';
import Blogs from '../Blogs/Blogs';
import Products from '../Products/Products';
import Speciality from '../Speciality/Speciality';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Benner></Benner>
            <Speciality></Speciality>
            <Products></Products>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;