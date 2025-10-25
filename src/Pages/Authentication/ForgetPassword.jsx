import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthProvider/AuthContext';
import { useLocation } from 'react-router';

const ForgetPassword = () => {

    const { forgetPassword } = useContext(AuthContext);
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || '');

    const handleReset = e => {
        e.preventDefault();
        forgetPassword(email)
            .then(() => {
                toast.success('Password reset email sent! Redirecting to Gmail...');
                window.open('https://mail.google.com', '_blank');
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-linear-to-br from-[#F3E5F5] to-white'>
            <div className='w-1/2 lg:w-1/3 bg-[#f1fad9] p-10 shadow-xl rounded-md'>
                <h1 className='text-2xl font-bold text-center mb-6 text-[#617d70]'>
                    Reset Your Password
                </h1>
                <form onSubmit={handleReset} className='space-y-4'>
                    <label className='font-medium'>
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='input mt-2 bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none'
                        required
                    />
                    <button type='submit' className='bg-[#48675e] text-white px-5 py-2 rounded-md w-full cursor-pointer'>
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;