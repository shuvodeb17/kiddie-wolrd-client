import React from 'react';
import './Banner.css';
import image1 from '../../../assets/images/Banner/banner1.jpg'
import image2 from '../../../assets/images/Banner/banner2.jpg'
import image3 from '../../../assets/images/Banner/banner3.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full" style={{ height: '86vh' }}>
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='w-full'>
                        <div>
                            <img src={image1} className="w-full relative" />
                        </div>
                        <div className='banner-text absolute top-0 flex flex-col justify-center'>
                            <div className='w-3/4 mx-auto'>
                                <h1 className="text-4xl mb-3 font-bold">KiddieWorld</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id deserunt eum quod magnam odit quos ipsum. Excepturi aperiam, fugiat pariatur, aut sint porro accusamus animi, enim nemo odio consequatur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='w-full'>
                        <div>
                            <img src={image2} className="w-full relative" />
                        </div>
                        <div className='banner-text absolute top-0 flex flex-col justify-center'>
                            <div className='w-3/4 mx-auto'>
                                <h1 className="text-4xl mb-3 font-bold">KiddieWorld</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id deserunt eum quod magnam odit quos ipsum. Excepturi aperiam, fugiat pariatur, aut sint porro accusamus animi, enim nemo odio consequatur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='w-full'>
                        <div>
                            <img src={image3} className="w-full relative" />
                        </div>
                        <div className='banner-text absolute top-0 flex flex-col justify-center'>
                            <div className='w-3/4 mx-auto'>
                                <h1 className="text-4xl mb-3 font-bold">KiddieWorld</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id deserunt eum quod magnam odit quos ipsum. Excepturi aperiam, fugiat pariatur, aut sint porro accusamus animi, enim nemo odio consequatur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;