import React from 'react';
import { FaStar } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';

const ToyCard = ({ toy }) => {

    const { pictureURL, toyName, rating, price, availableQuantity } = toy;

    return (
        <div className="bg-white rounded-xl shadow-md border border-pink-200 overflow-hidden">
            <div className="relative">
                <img src={pictureURL} className="w-full h-60 object-cover" />

                <div className="absolute top-2 right-2 bg-white/90 text-[#c44109] text-sm font-medium flex items-center gap-1 px-2 py-1 rounded-xl shadow-md">
                    <FaStar></FaStar>
                    {rating}
                </div>
            </div>

            <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg">
                    {toyName}
                </h3>

                <div className="flex justify-between items-center">
                    <p className="text-[#069683] font-semibold">
                        ${price}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm gap-1">
                        <GoPackage></GoPackage>
                        {availableQuantity} Available
                    </div>
                </div>

                <button className="w-full mt-3 bg-linear-to-r from-[#b4a27d] to-[#776288] text-white py-2 rounded-full font-medium">
                    View More
                </button>
            </div>
        </div>
    );
};

export default ToyCard;