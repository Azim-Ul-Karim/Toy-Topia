import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='bg-linear-to-br from-[#F3E5F5] to-white min-h-screen flex justify-center items-center'>
            <form className='w-1/2 lg:w-1/3 bg-[#f1fad9] p-15 shadow-xl rounded-md'>
                <h1 className='text-center font-bold text-3xl text-[#617d70]'>
                    Welcome Back!
                </h1>
                <p className='text-center font-medium text-lg mt-4 mb-8 text-accent'>
                    Login to continue exploration...
                </p>

                <fieldset className='fieldset'>
                    <label className="label text-sm text-[#720c57] font-semibold">
                        Email 
                    </label>
                    <input
                        type="email"
                        name='email'
                        className="input bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none"
                        placeholder="Enter your email address" />

                    <label className="label mt-4 text-sm text-[#720c57]  font-semibold">
                        Password
                    </label>
                    <input
                        type="password"
                        name='password'
                        className="input bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none"
                        placeholder="Enter your password" />

                    <Link to='' className='my-2'>
                        Forgot password?
                    </Link>

                    <button type='submit' className="btn text-base bg-[#48675e] text-white mt-4">Login</button>

                    <p className='mt-2.5 text-sm'>
                        Don't Have An Account? <Link className='text-[#be2608] font-semibold' to='/register'>Register</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;