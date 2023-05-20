import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import './UserProfile.css';
import useTitle from '../../hook/useTitle.js'

const UserProfile = () => {

    const { user } = useContext(AuthContext)
    useTitle('Profile')



    return (
        <div>
            <div className="container mx-auto h-80 lg:px-0 px-5">
                <div className='profile-wrapper lg:w-2/6 bg-base-100 shadow-xl p-5 mt-5 mb-5 rounded-lg mx-auto'>
                    <div>
                        <h1 className="text-3xl font-bold">My Profile</h1>
                        <p>{user?.displayName}</p>
                        <p>{user?.email}</p>
                    </div>
                    <div>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;