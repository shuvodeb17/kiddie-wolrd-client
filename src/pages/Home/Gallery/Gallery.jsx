import React from 'react';
import './Gallery.css'
import image1 from '../../../assets/images/Gallery/gallery1.jpg';
import image2 from '../../../assets/images/Gallery/gallery2.png';
import image3 from '../../../assets/images/Gallery/gallery3.png';
import image4 from '../../../assets/images/Gallery/gallery4.jpg';
import image5 from '../../../assets/images/Gallery/gallery5.png';
import image6 from '../../../assets/images/Gallery/gallery6.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Gallery = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <div className='mt-20 mb-7'>
            <div className="container mx-auto">
                <h1 className='text-3xl font-bold text-center mt-5 mb-7'>Gallery</h1>;
                <div>
                    <Carousel responsive={responsive}>
                        <div>
                            <img src={image1} alt="" />
                        </div>
                        <div>
                            <img src={image2} alt="" />
                        </div>
                        <div>
                            <img src={image3} alt="" />
                        </div>
                        <div>
                            <img src={image4} alt="" />
                        </div>
                        <div>
                            <img src={image5} alt="" />
                        </div>
                        <div>
                            <img src={image6} alt="" />
                        </div>
                    </Carousel>;
                </div>
            </div>
        </div>
    );
};

export default Gallery;