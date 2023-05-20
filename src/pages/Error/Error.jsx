import React from 'react';
import errorImage from '../../assets/images/Error/error.png'

const Error = () => {
    return (
        <div className='h-screen'>
            <img className='h-screen w-4/6 mx-auto' src={errorImage} alt="" />
        </div>
    );
};

export default Error;