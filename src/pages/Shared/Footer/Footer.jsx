import React from 'react';
import logo from '../../../assets/images/header/vite.png'
import { FaFacebookSquare, FaInstagram ,FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-base-200'>
            <div className="container mx-auto">
                <footer className="footer p-10 text-base-content">
                    <div>
                        <img className='w-44' src={logo} alt="" />
                        Our extensive inventory includes toys <br /> from renowned brands and independent <br /> manufacturers ensuring that you'll <br /> find the perfect toy for every child's <br /> interests and  preferences. From classic <br /> favorites to  the latest trends, we strive to cater <br /> to a variety of tastes and provide <br /> a well-rounded selection
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Social</span>
                        <div className='grid grid-cols-3 gap-5'>
                            <button className="btn btn-circle btn-outline">
                                <FaFacebookSquare />
                            </button>
                            <button className="btn btn-circle btn-outline">
                                <FaInstagram />
                            </button>
                            <button className="btn btn-circle btn-outline">
                                <FaTwitter />
                            </button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;