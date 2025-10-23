import React, { use, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoEnterOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider/AuthContext';

const Login = () => {

    const { loginUser, setUser, googleUser } = use(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleLogin = () => {
        googleUser()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='bg-linear-to-br from-[#F3E5F5] to-white flex justify-center items-center'>
            <div className='w-1/2 lg:w-1/3 my-10 bg-[#f1fad9] p-15 shadow-xl rounded-md'>
                <h1 className='text-center font-bold text-3xl text-[#617d70]'>
                    Welcome Back!
                </h1>
                <p className='text-center font-medium text-lg mt-4 mb-8 text-accent'>
                    Login to continue exploration...
                </p>

                <form onSubmit={handleLogin}>
                    <fieldset className='fieldset'>
                        <label className="label text-sm text-[#720c57] font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            name='email'
                            className="input bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none"
                            placeholder="Enter your email address"
                        />

                        <label className="label mt-2 text-sm text-[#720c57] font-semibold">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                className="input bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none pr-3"
                                placeholder="Enter your password"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                            >
                                {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                            </span>
                        </div>

                        <Link to='' className='my-2'>
                            Forgot password?
                        </Link>

                        <button type='submit' className="btn flex items-center gap-2 text-base bg-[#48675e] text-white mt-4">
                            <IoEnterOutline></IoEnterOutline>
                            Login
                        </button>
                    </fieldset>
                </form>

                <fieldset className='fieldset'>
                    <p className='my-2 text-center'>Or</p>

                    <button onClick={handleGoogleLogin} className="btn flex items-center gap-2 bg-white text-black shadow-sm border-[#e5e5e5]">
                        <FcGoogle size={18}></FcGoogle>
                        Continue with Google
                    </button>

                    <p className='mt-2.5 text-sm'>
                        Don't Have An Account? <Link className='text-[#be2608] font-semibold' to='/register'>Register</Link>
                    </p>
                </fieldset>
            </div>
        </div>
    );
};

export default Login;