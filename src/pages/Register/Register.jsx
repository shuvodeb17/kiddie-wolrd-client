import React, { useContext, useState } from 'react';
import loginImage from '../../assets/images/Login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from "firebase/auth";


const Register = () => {

    const { signUp } = useContext(AuthContext);
    const [success,setSuccess] = useState('')
    const [error,setError] = useState('')

    const registerHandler = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        signUp(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setUserNameAndPhoto(result.user, name, photo)
                setError('')
                setSuccess('User Created Successful')
            })
            .catch(error => {
                setSuccess('')
                setError(error.message) 
            })
    }

    const setUserNameAndPhoto = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='bg-[#A06DF2] p-10'>
                    <img className='w-full' src={loginImage} alt="" />
                </div>
                <div className='p-10 bg-[#27343E] text-white flex justify-center flex-col'>
                    <h1 className="text-3xl font-bold">Sign Up KiddieWorld!</h1>
                    <form onSubmit={registerHandler} className='text-black'>
                        <div className='mt-5 mb-5'>
                            <p className='text-white'>Name</p>
                            <input type="text" required name='name' placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className='mt-5 mb-5'>
                            <p className='text-white'>Email</p>
                            <input type="email" required name='email' placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <p className='text-white'>Password</p>
                            <input type="password" required name='password' placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className='mt-5 mb-2'>
                            <p className='text-white'>Photo URL</p>
                            <input type="url" required name='photo' placeholder="Enter Your Photo URL" className="input input-bordered w-full max-w-xs" />
                        </div>
                        
                        <div>
                            <p className="text-red-600">{error}</p>
                            <p className="text-green-600">{success}</p>
                        </div>

                        <button className="px-5 py-2 rounded-lg bg-[#fff] text-black mt-2">Register</button>


                        <p className="text-white mt-5">Already have an Account ? <span className='text-[#E63D30]'><Link to='/login'>Sign In</Link></span> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;