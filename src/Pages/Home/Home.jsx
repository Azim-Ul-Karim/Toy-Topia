import React, { useEffect } from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router';
import ToyCard from '../Toys/ToyCard';
import Why from './Why';
import Community from './Community';
import Aos from 'aos';

const Home = () => {

    const toys = useLoaderData();
    const popular = [...toys].sort((a, b) => b.rating - a.rating).slice(0, 6);

    useEffect(() => {
        Aos.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className='bg-linear-to-br from-yellow-50 via-pink-100 to-purple-50 shadow-2xl'>

            <title>ToyTopia | Home</title>

            <h1 data-aos='zoom-in' className='text-2xl md:text-4xl font-extrabold text-[#a57aa6] inline-block animate-marquee p-15'>
                Welcome to <span className='bagel-fat-one-regular'><span className='text-[#9bc1d3]'>Toy </span><span className='text-[#978955]'>Topia</span></span> <span className='text-[#a57aa6]'>.....</span>
            </h1>

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
        </div>
    );
};

export default Home;