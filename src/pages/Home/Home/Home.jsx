import React from 'react';
import AllToys from '../AllToys/AllToys';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <AllToys />
        </div>
    );
};

export default Home;