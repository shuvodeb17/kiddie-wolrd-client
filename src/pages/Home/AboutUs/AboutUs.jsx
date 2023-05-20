import React, { useEffect } from 'react';
import aboutImage from '../../../assets/images/About/about.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutUs = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <div className="container mx-auto lg:h-screen">
                <h1 className='mb-5 tracking-normal text-3xl font-bold mt-10 text-center '>About Us</h1>
                <div className='grid lg:grid-cols-2 lg:px-0 px-5 gap-5'>
                    <div data-aos="flip-up" className='flex flex-col justify-center leading-relaxed'>
                        <h1 className='text-3xl font-bold mb-5'>At <span className='text-sky-600'>KiddieWorld</span> we strive to deliver exceptional customer service. </h1>
                        <p>Our dedicated support team is always ready to assist you with any inquiries or concerns. We offer secure payment options and fast shipping, ensuring that your toys arrive promptly and in pristine condition.

                            Join us at Playful Treasures and embark on a delightful journey of imagination and play. Let us be your go-to destination for all your toy needs, and together, we'll create endless moments of joy and laughter for the children in your life.
                        </p>
                    </div>
                    <div data-aos="flip-down">
                        <img src={aboutImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;