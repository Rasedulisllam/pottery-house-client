import React from 'react';
import Footer from '../../Sheared/Footer/Footer';
import Header from '../../Sheared/Header/Header';
import Benner from '../Benner/Benner';
import Blogs from '../Blogs/Blogs';
import LearnWithUs from '../LearnWithUs/LearnWithUs';
import Products from '../Products/Products';
import Speciality from '../Speciality/Speciality';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Benner></Benner>
            <Speciality></Speciality>
            <Products></Products>
            <LearnWithUs></LearnWithUs>
            <Blogs></Blogs>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;