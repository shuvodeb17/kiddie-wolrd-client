import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';



const GoogleSignin = () => {

    const { user, googleSignIn } = useContext(AuthContext)
    console.log(googleSignIn)

    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleSignIn = () => {
        googleSignIn()
            .then(result => {
                const signIn = result.user;
                console.log(signIn);
                toast('Sign in with google Successful');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <button onClick={handleSignIn} className="btn btn-primary gap-2 mt-5">
                <FaGoogle />
                Sign in with Google
            </button>
            <Toaster />
        </div>
    );
};

export default GoogleSignin;