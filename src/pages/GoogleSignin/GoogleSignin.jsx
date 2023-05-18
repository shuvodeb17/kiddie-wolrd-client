import React from 'react';
import { FaGoogle } from 'react-icons/fa';


const GoogleSignin = () => {
    return (
        <div>
            <button className="btn btn-primary gap-2 mt-5">
                <FaGoogle />
                Sign in with Google
            </button>
        </div>
    );
};

export default GoogleSignin;