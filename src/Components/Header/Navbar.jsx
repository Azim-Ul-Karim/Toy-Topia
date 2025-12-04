import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider/AuthContext';
import Loading from '../Loading';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { IoIosArrowDropup } from 'react-icons/io';

const Navbar = () => {

    const { user, logoutUser, loading } = use(AuthContext);
    const fallbackImage = "https://i.postimg.cc/vHRwqWXs/prop.jpg";
    const [mobile, setMobile] = useState(false);


    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(() => { })
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <nav className='bg-linear-to-r from-[#FFF3E0] to-[#F3E5F5] shadow-md'>

            <div className='flex items-center justify-between w-11/12 mx-auto p-2 md:hidden'>
                <div className='cursor-pointer text-2xl' onClick={() => setMobile(!mobile)}>
                    {
                        mobile ? <IoIosArrowDropup /> : <AiOutlineMenuUnfold />
                    }
                </div>

                <Link to='/'>
                    <h2 className='bagel-fat-one-regular font-bold text-lg'>
                        <span className='text-[#9bc1d3]'>Toy</span> <span className='text-[#978955]'>Topia</span>
                    </h2>
                </Link>

                {
                    user && (
                        <img
                            src={user.photoURL || fallbackImage}
                            className='w-8 h-8 rounded-full object-cover border-2 border-[#c89aa8]'
                        />
                    )
                }
            </div>

            <div className={`md:hidden flex flex-col gap-2 absolute bg-[#fdfcf3] rounded-lg shadow-md p-4 w-48 left-4 transition-all duration-300 ${mobile ? 'top-13' : '-top-60'}`}>
                <NavLink to='/' onClick={() => setMobile(false)}>Home</NavLink>
                <NavLink to='/toys' onClick={() => setMobile(false)}>Toys</NavLink>
                <NavLink to='/about-us' onClick={() => setMobile(false)}>About Us</NavLink>
                <NavLink to='/support' onClick={() => setMobile(false)}>Support</NavLink>
                {
                    user ? (
                        <>
                            <NavLink to='/profile' onClick={() => setMobile(false)}>Profile</NavLink>
                            <NavLink to='/feedback' onClick={() => setMobile(false)}>Feedback</NavLink>
                            <button onClick={handleLogout} className='text-left hover:text-[#632EE3]'>Log Out</button>
                        </>
                    ) : (
                        <NavLink to='/login' onClick={() => setMobile(false)}>Log In</NavLink>
                    )
                }
            </div>

            <div className='w-11/12 mx-auto p-3 hidden md:flex items-center justify-between'>
                <Link to='/'>
                    <h2 className='bagel-fat-one-regular font-bold text-2xl'>
                        <span className='text-[#9bc1d3]'>Toy</span> <span className='text-[#978955]'>Topia</span>
                    </h2>
                </Link>

                <div className='flex items-center justify-between gap-10'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/toys'>Toys</NavLink>
                    <NavLink to='/about-us'>About Us</NavLink>
                    <NavLink to='/support'>Support</NavLink>
                    {
                        user && <>
                            <NavLink to='/profile'>My Profile</NavLink>
                            <NavLink to='/feedback'>Feedback</NavLink>
                        </>
                    }
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