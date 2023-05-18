import React from 'react';
import './Gallery.css'
import image1 from '../../../assets/images/Gallery/gallery1.jpg';
import image2 from '../../../assets/images/Gallery/gallery2.png';
import image3 from '../../../assets/images/Gallery/gallery3.png';
import image4 from '../../../assets/images/Gallery/gallery4.jpg';
import image5 from '../../../assets/images/Gallery/gallery5.png';
import image6 from '../../../assets/images/Gallery/gallery6.png';

import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const Gallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };


    return (
        <div className='mt-20 mb-7'>
            <div className="container mx-auto">
                <h1 className='text-3xl font-bold text-center mt-5  mb-7'>Gallery</h1>
                <div className="App ">
                    <div className='gallery grid grid-cols-3 gap-5'
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                    >
                        <a href={image1}>
                            <img alt="img1" src={image1} />
                        </a>
                        <a href={image2}>
                            <img alt="img2" src={image2} />
                        </a>
                        <a href={image3}>
                            <img alt="img2" src={image3} />
                        </a>
                        <a href={image4}>
                            <img alt="img2" src={image4} />
                        </a>
                        <a href={image5}>
                            <img alt="img2" src={image5} />
                        </a>
                        <a href={image6}>
                            <img alt="img2" src={image6} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;