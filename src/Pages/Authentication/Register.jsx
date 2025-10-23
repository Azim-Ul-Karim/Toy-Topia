import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='bg-linear-to-br from-[#F3E5F5] to-white min-h-screen flex justify-center items-center'>
            <form className='w-1/2 lg:w-1/3 bg-[#f1fad9] p-15 shadow-xl rounded-md'>
                <h1 className='text-center font-bold text-3xl text-[#656e2f]'>
                    Join The Fun!
                </h1>
                <p className='text-center font-medium text-lg mt-4 mb-8 text-accent'>
                    Create your account and start exploring...
                </p>

                <fieldset className='fieldset'>
                    <label className="label text-sm text-[#720c57] font-semibold">
                        Name
                    </label>
                    <input
                        type="text"
                        name='name'
                        className="input bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none"
                        placeholder="Enter your name" />

                    <label className="label mt-2 text-sm text-[#720c57] font-semibold">
                        Email
                    </label>
                    <input
                        type="email"
                        name='email'
                        className="input bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none"
                        placeholder="Enter your email address" />

                    <label className="label mt-2 text-sm text-[#720c57] font-semibold">
                        Photo URL
                    </label>
                    <input
                        type="url"
                        name='photo'
                        className="input bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none"
                        placeholder="Enter your photo url" />

                    <label className="label mt-2 text-sm text-[#720c57]  font-semibold">
                        Password
                    </label>
                    <input
                        type="password"
                        name='password'
                        className="input bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none"
                        placeholder="Enter your password" />

                    <button type='submit' className="btn flex items-center gap-2 text-base bg-[#48675e] text-white mt-4">
                        <FaUserPlus></FaUserPlus>
                        Register
                    </button>

                    <p className='my-2 text-center'>Or</p>

                    <button className="btn flex items-center gap-2 bg-white text-black shadow-sm border-[#e5e5e5]">
                        <FcGoogle size={18}></FcGoogle>
                        Register with Google
                    </button>

                    <p className='mt-2.5 text-sm'>
                        Already Have An Account? <Link className='text-[#b4063a] font-semibold' to='/login'>Login</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;