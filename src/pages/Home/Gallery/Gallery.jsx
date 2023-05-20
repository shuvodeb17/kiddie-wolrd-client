import React from 'react';
import './Gallery.css'
import image1 from '../../../assets/images/Gallery/gallery1.jpg';
import image2 from '../../../assets/images/Gallery/gallery2.png';
import image3 from '../../../assets/images/Gallery/gallery3.png';
import image4 from '../../../assets/images/Gallery/gallery4.jpg';
import image5 from '../../../assets/images/Gallery/gallery5.png';
import image6 from '../../../assets/images/Gallery/gallery6.png';


const Gallery = () => {
    return (
        <div className='mt-20 mb-7'>
            <div className="container mx-auto">
                <h1 className='text-3xl font-bold text-center mt-5 mb-7'>Gallery</h1>;
                <div className="App ">
                    <div className='gallery grid lg:grid-cols-3 gap-5 lg:p-0 px-11'>
                        <a>
                            <img alt="img1" src={image1} />
                        </a>
                        <a>
                            <img alt="img2" src={image2} />
                        </a>
                        <a>
                            <img alt="img2" src={image3} />
                        </a>
                        <a>
                            <img alt="img2" src={image4} />
                        </a>
                        <a>
                            <img alt="img2" src={image5} />
                        </a>
                        <a>
                            <img alt="img2" src={image6} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;