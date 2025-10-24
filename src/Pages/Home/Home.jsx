import React from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router';
import ToyCard from '../Toys/ToyCard';

const Home = () => {

    const toys = useLoaderData();
    const popular = [...toys].sort((a, b) => b.rating - a.rating).slice(0, 6);

    return (
        <div>
            <Slider></Slider>
            <h1 className='text-center text-4xl font-bold my-15'>
                ✨ Popular Toys
            </h1>
            <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 gap-5">
                {
                    popular.map(toy => <ToyCard key={toy.toyId} toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default Home;