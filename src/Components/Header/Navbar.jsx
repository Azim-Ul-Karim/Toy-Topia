import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider/AuthContext';
import Loading from '../Loading';

const Navbar = () => {

    const { user, logoutUser, loading } = use(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(() => { })
    }

    if (loading) {
        return <Loading></Loading>
    }

    const fallbackImage = "https://i.postimg.cc/vHRwqWXs/prop.jpg";

    return (
        <nav className='bg-linear-to-r from-[#FFF3E0] to-[#F3E5F5] shadow-md'>
            <div className='w-11/12 mx-auto p-3 flex items-center justify-between'>
                <Link to='/'>
                    <h2 className='bagel-fat-one-regular font-bold text-2xl'>
                        <span className='text-[#9bc1d3]'>Toy</span> <span className='text-[#978955]'>Topia</span>
                    </h2>
                </Link>

                <div className='flex items-center justify-between gap-10'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/toys'>Toys</NavLink>
                    <NavLink to='/profile'>My Profile</NavLink>
                </div>

                <div>
                    {
                        user ? (
                            <div className="flex items-center gap-4">
                                <div className="relative group">
                                    <img
                                        src={user.photoURL || fallbackImage}
                                        onError={(e) => e.currentTarget.src = fallbackImage}
                                        className="w-10 h-10 rounded-full border-2 border-[#c89aa8] cursor-pointer object-cover"
                                    />
                                    <span className="absolute right-[45px] top-1/2 -translate-y-1/2 hidden group-hover:block bg-[#eef3ea] text-[#3A0A2A] text-sm font-medium px-4 py-1 shadow-md border-2 border-gray-300 whitespace-nowrap">
                                        {user.displayName}
                                    </span>
                                </div>

                                <button onClick={handleLogout} className='bg-linear-to-br from-[#FFF9F5] to-[#F0F4F8] shadow-md font-medium px-4 py-1.5 rounded-md'>
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <Link to="/login" className="bg-linear-to-br from-[#FFF9F5] to-[#F0F4F8] shadow-md font-medium px-4 py-1.5 rounded-md">
                                Log In
                            </Link>
                        )
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;