import React, { useContext, useState } from 'react';
import loginImage from '../../assets/images/Login/login.svg'
import GoogleSignin from '../GoogleSignin/GoogleSignin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hook/useTitle';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('')
    useTitle('Login')


    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // loginHandler
    const loginHandler = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                toast('Login Successful');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div>
            <div className='grid lg:grid-cols-2'>
                <div className='bg-[#A06DF2] p-10 lg:block hidden'>
                    <img className='w-full' src={loginImage} alt="" />
                </div>
                <div className='p-10 bg-[#27343E] text-white flex justify-center flex-col'>
                    <h1 className="text-3xl font-bold">Please Sign In KiddieWorld!</h1>
                    <form onSubmit={loginHandler} className='text-black'>
                        <div className='mt-5 mb-5'>
                            <p className='text-white'>Email</p>
                            <input type="email" required name='email' placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <p className='text-white'>Password</p>
                            <input type="password" required name='password' placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <p className="text-red-600">{error}</p>
                        </div>

                        <button className="px-5 py-2 rounded-lg bg-[#fff] text-black mt-5">Login</button>
                        <Toaster />



                        <p className="text-white mt-5">New To KiddieWorld ? <span className='text-[#E63D30]'><Link to='/register'>Sign Up</Link></span> </p>
                        <h2 className="text-white mt-5">Or Login with</h2>

                    </form>
                    <GoogleSignin />
                </div>
            </div>
        </div>
    );
};

export default Login;