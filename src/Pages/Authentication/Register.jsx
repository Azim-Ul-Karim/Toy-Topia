import React, { useContext, useState } from 'react';
import { FaRegEye, FaRegEyeSlash, FaUserPlus } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {

    const { createUser, setUser, googleUser } = useContext(AuthContext);

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const photo = form.photo.value;

        const lengthPattern = /^.{6,}$/;
        const upperPattern = /[A-Z]/;
        const lowerPattern = /[a-z]/;

        if (!lengthPattern.test(password)) {
            toast.error('Password must be at least 6 characters long!');
            return;
        }
        else if (!upperPattern.test(password)) {
            toast.error('Password must include an uppercase letter.');
            return;
        }
        else if (!lowerPattern.test(password)) {
            toast.error('Password must include a lowercase letter.');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                toast.success('Registration Successful!');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleRegister = () => {
        googleUser()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                toast.success('Registration Successful!');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='bg-linear-to-br from-[#F3E5F5] to-white flex justify-center items-center'>
            <div className='w-1/2 lg:w-1/3 my-10 bg-[#f1fad9] p-15 shadow-xl rounded-md'>
                <h1 className='text-center font-bold text-3xl text-[#656e2f]'>
                    Join The Fun!
                </h1>
                <p className='text-center font-medium text-lg mt-4 mb-8 text-accent'>
                    Create your account and start exploring...
                </p>

                <form onSubmit={handleRegister}>
                    <fieldset className='fieldset'>
                        <label className="label text-sm text-[#720c57] font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            name='name'
                            className="input bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none"
                            placeholder="Enter your name"
                        />

                        <label className="label mt-2 text-sm text-[#720c57] font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            name='email'
                            className="input bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none"
                            placeholder="Enter your email address"
                        />

                        <label className="label mt-2 text-sm text-[#720c57] font-semibold">
                            Photo URL
                        </label>
                        <input
                            type="url"
                            name='photo'
                            className="input bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none"
                            placeholder="Enter your photo url"
                        />

                        <label className="label mt-2 text-sm text-[#720c57]  font-semibold">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                        <button type='submit' className="btn flex items-center gap-2 text-base bg-[#48675e] text-white mt-4">
                            <FaUserPlus></FaUserPlus>
                            Register
                        </button>
                    </fieldset>
                </form>

                <fieldset className='fieldset'>
                    <p className='my-2 text-center'>Or</p>

                    <button onClick={handleGoogleRegister} className="btn flex items-center gap-2 bg-white text-black shadow-sm border-[#e5e5e5]">
                        <FcGoogle size={18}></FcGoogle>
                        Continue with Google
                    </button>

                    <p className='mt-2.5 text-sm'>
                        Already Have An Account? <Link className='text-[#b4063a] font-semibold' to='/login'>Login</Link>
                    </p>
                </fieldset>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;