import React from 'react';
import loginImage from '../../assets/images/Login/login.svg'
import GoogleSignin from '../GoogleSignin/GoogleSignin';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='bg-[#A06DF2] p-10'>
                    <img className='w-full' src={loginImage} alt="" />
                </div>
                <div className='p-10 bg-[#27343E] text-white flex justify-center flex-col'>
                    <h1 className="text-3xl font-bold">Please Login KiddieWorld!</h1>
                    <div className='text-black'>
                        <div className='mt-5 mb-5'>
                            <p className='text-white'>Email</p>
                            <input type="text" required name='email' placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <p className='text-white'>Password</p>
                            <input type="text" required name='password' placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <button className="px-5 py-2 rounded-lg bg-[#fff] text-black mt-5">Login</button>
                        <p className="text-white mt-5">New To KiddieWorld ? <span className='text-[#E63D30]'><Link to='/register'>Register</Link></span> </p>
                        <h2 className="text-white mt-5">Or Login with</h2>

                        <GoogleSignin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;