import React, { useEffect } from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router';
import ToyCard from '../Toys/ToyCard';
import Why from './Why';
import Community from './Community';
import Aos from 'aos';
import { FaPaperPlane } from 'react-icons/fa';

const Home = () => {

    const toys = useLoaderData();
    const popular = [...toys].sort((a, b) => b.rating - a.rating).slice(0, 6);

    useEffect(() => {
        Aos.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className='bg-linear-to-br from-yellow-50 via-pink-100 to-purple-50 shadow-2xl'>

            <title>ToyTopia | Home</title>

            <div className="w-full overflow-hidden pt-5">
                <h1
                    data-aos="zoom-in"
                    className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#a57aa6] 
        whitespace-nowrap animate-marquee px-4"
                >
                    Welcome to{" "}
                    <span className="bagel-fat-one-regular">
                        <span className="text-[#9bc1d3]">Toy </span>
                        <span className="text-[#978955]">Topia</span>
                    </span>{" "}
                    <span className="text-[#a57aa6]">.....</span>
                </h1>
            </div>

            <Slider></Slider>
            <div className='text-center my-15'>
                <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>
                    ✨ Popular Toys
                </h1>
                <p className='mt-5 text-accent text-lg font-medium'>
                    Discover our most loved toys...
                </p>
            </div>
            <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    popular.map(toy => <ToyCard key={toy.toyId} toy={toy}></ToyCard>)
                }
            </div>
            <Why></Why>
            <Community></Community>

            <section className='pb-15 bg-gray-100 px-4'>
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700">
                    Stay Updated With ToyTopia!
                </h2>

                <p className="text-center mt-4 text-gray-600 text-lg">
                    Get exclusive offers, new arrivals, and early access directly in your inbox.
                </p>

                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email..."
                        className="w-full md:w-96 px-4 py-3 bg-base-100 rounded-lg border border-gray-300 
                    focus:outline-none shadow-sm"
                    />

                    <button
                        className="flex items-center gap-2 bg-[#7b5772]
                    text-white px-6 py-3 cursor-pointer rounded-lg font-semibold shadow-lg transition">
                        Subscribe
                        <FaPaperPlane />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;