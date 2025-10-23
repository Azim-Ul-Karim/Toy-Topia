import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <section className='bg-linear-to-br from-[#FFF3E0] via-[#f3f5e4] to-[#F3E5F5]'>
            <div className='grid grid-cols-4 gap-16 w-11/12 mx-auto p-4 md:py-8'>
                <div>
                    <h2 className='bagel-fat-one-regular font-bold text-2xl md:text-3xl lg:text-4xl'>
                        <span className='text-[#9bc1d3]'>Toy</span> <span className='text-[#978955]'>Topia</span>
                    </h2>
                    <p className='mt-6 text-justify text-accent'>
                        A vibrant and playful online marketplace for kids' toys, encouraging families to discover and support local toy sellers.
                    </p>
                </div>

                <div>
                    <h3 className='text-lg font-semibold'>
                        Quick Links
                    </h3>
                    <div className='flex flex-col gap-1.5 mt-4 text-accent'>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Toys</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>

                <div>
                    <h3 className='text-lg font-semibold'>
                        Legal
                    </h3>
                    <div className='flex flex-col gap-1.5 mt-4 text-accent'>
                        <Link to='/'>Terms of Services</Link>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>Refund Policy</Link>
                    </div>
                </div>

                <div>
                    <h3 className='text-lg font-semibold'>
                        Follow Us
                    </h3>
                    <div className='flex gap-1.5 mt-4 text-accent'>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Login</Link>
                    </div>
                </div>
            </div>
            <div className='pb-4 md:pb-8 text-center'>
                <p>
                    Made with 💖 for families everywhere.
                </p>
                <p className='text-accent mt-1'>
                    &copy; 2025 <span className='font-medium text-[#cb2fa2b4]'>Toy Topia</span>. All rights reserved.
                </p>
            </div>
        </section>
    );
};

export default Footer;