import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import user from '../../../assets/images/Gallery/gallery1.jpg'
import { AuthContext } from '../../../providers/AuthProvider';
import logo from '../../../assets/images/header/vite.png'

const Header = () => {
    const { user, logout } = useContext(AuthContext)


    const logoutHandler = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='bg-base-100'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/all-toys'>All Toys</Link></li>
                            {
                                user && <li><Link to='/my-toys'>My Toys</Link></li>
                            }
                            {
                                user && <li><Link to='/add-toys'>Add A Toys</Link></li>
                            }
                            <li><Link to='/blogs'>Blogs</Link></li>
                            {
                                user && <li><Link to='/user-profile'>User Profile</Link></li>
                            }
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">KiddieWorld</a> */}
                    <a className="">
                        <img className='w-44' src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/all-toys'>All Toys</Link></li>
                        {
                            user && <li><Link to='/my-toys'>My Toys</Link></li>
                        }
                        {
                            user && <li><Link to='/add-toys'>Add A Toys</Link></li>
                        }
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {
                            user && <li><Link to='/user-profile'>User Profile</Link></li>

                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div style={{ width: '58px' }} className=" mr-5 rounded-full">
                            {
                                user ?
                                    <img title={user?.displayName} src={user?.photoURL} className='' />
                                    :
                                    ''
                            }
                        </div>
                    </div>

                    {
                        user ?
                            <Link onClick={logoutHandler} className="btn btn-secondary">Logout</Link>
                            :
                            <Link to='/login' className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;