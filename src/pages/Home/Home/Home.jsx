import React from 'react';
import useTitle from '../../../hook/useTitle';
import AllToys from '../AllToys/AllToys';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <Gallery />
            <AllToys />
        </div>
    );
};

export default Home;