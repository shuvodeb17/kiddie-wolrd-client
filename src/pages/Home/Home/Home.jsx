import React from 'react';
import useTitle from '../../../hook/useTitle';
import AboutUs from '../AboutUs/AboutUs';
import AllToys from '../AllToys/AllToys';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <Gallery />
            <AboutUs />
            <AllToys />
            <ContactUs />
        </div>
    );
};

export default Home;