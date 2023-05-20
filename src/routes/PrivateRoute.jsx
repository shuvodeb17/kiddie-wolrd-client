import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    let location = useLocation();

    if (loading) {
        return <div className='mx-auto w-full'>
            <progress className="progress w-56 mx-auto text-center"></progress><div class="open_grepper_editor mx-auto text-center" title="Edit & Save To Grepper"></div>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;