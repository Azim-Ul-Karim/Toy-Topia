import React from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router';
import ToyCard from '../Toys/ToyCard';
import Why from './Why';
import Community from './Community';

const Home = () => {

    const toys = useLoaderData();
    const popular = [...toys].sort((a, b) => b.rating - a.rating).slice(0, 6);

    return (
        <div className='bg-linear-to-br from-yellow-50 via-pink-100 to-purple-50 shadow-2xl'>
            <Slider></Slider>
            <div className='text-center my-15'>
                <h1 className='text-4xl font-bold'>
                    ✨ Popular Toys
                </h1>
                <p className='mt-5 text-accent text-lg font-medium'>
                    Discover our most loved toys...
                </p>
            </div>
            <div className="w-9/12 mx-auto grid grid-cols-2 md:grid-cols-3 gap-5">
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