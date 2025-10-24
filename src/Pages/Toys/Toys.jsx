import React from 'react';
import { useLoaderData } from 'react-router';
import ToyCard from './ToyCard';

const Toys = () => {

    const toys = useLoaderData();

    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-3xl font-bold text-center mb-8">
                Toys Collection
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    toys.map(toy => <ToyCard key={toy.toyId} toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default Toys;