import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider/AuthContext';

const Navbar = () => {

    const { user, logoutUser } = use(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <nav className='bg-linear-to-r from-[#FFF3E0] to-[#F3E5F5] shadow-md'>
            <div className='w-11/12 mx-auto p-3 flex items-center justify-between'>
                <h2 className='bagel-fat-one-regular font-bold text-2xl'>
                    <span className='text-[#9bc1d3]'>Toy</span> <span className='text-[#978955]'>Topia</span>
                </h2>

                <div className='flex items-center justify-between gap-10'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/profile'>My Profile</NavLink>
                </div>

                {
                    user ?
                        <button onClick={handleLogout} className='bg-linear-to-br from-[#FFF9F5] to-[#F0F4F8] shadow-md font-medium px-4 py-1.5 rounded-md'>
                            Log Out
                        </button>
                        : <Link to='/login' className='bg-linear-to-br from-[#FFF9F5] to-[#F0F4F8] shadow-md font-medium px-4 py-1.5 rounded-md'>
                            Log In
                        </Link>
                }
            </div>
        </nav>
    );
};

export default Navbar;