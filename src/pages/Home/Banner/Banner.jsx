import React from 'react';
import './Banner.css';
import image1 from '../../../assets/images/Banner/banner1.png'
import image2 from '../../../assets/images/Banner/banner2.png'
// import image3 from '../../../assets/images/Banner/banner3.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full" style={{ height: '86vh' }}>
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='w-full'>
                        <div>
                            <img src={image1} className="w-full relative h-screen" />
                        </div>
                        <div className='banner-text absolute top-0 flex flex-col justify-center'>
                            <div className='lg:w-2/4 px-5 mx-auto'>
                                <h1 className="text-4xl mb-3 font-bold">KiddieWorld</h1>
                                <p className='lg:w-3/4'>Welcome to KiddieWorld, your ultimate destination for all things toys! We are delighted to offer a wide range of toys that will ignite the imagination and bring endless joy to children of all ages</p>
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
                            <img src={image2} className="w-full relative h-screen" />
                        </div>
                        <div className='banner-text absolute top-0 flex flex-col justify-center'>
                            <div className='lg:w-2/4 px-5 mx-auto'>
                                <h1 className="text-4xl mb-3 font-bold">KiddieWorld</h1>
                                <p className='lg:w-3/4'>At KiddieWorld, we understand the importance of play in a child's development. That's why we curate a diverse collection of high-quality toys that inspire creativity, encourage problem-solving skills, and promote cognitive and physical development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;