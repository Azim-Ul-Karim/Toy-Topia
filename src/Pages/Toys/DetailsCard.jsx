import React from 'react';
import { FaStar } from 'react-icons/fa';

const DetailsCard = ({ toy }) => {

    const { pictureURL, toyName, sellerName, sellerEmail, price, rating, availableQuantity, description, subCategory } = toy;

    return (
        <div className='space-y-4 my-10'>

            <title>ToyTopia | Toy Details</title>

            <img src={pictureURL} className='lg:w-3/4 mx-auto h-70 md:h-80 lg:h-110 object-cover rounded-lg border-2 border-gray-200' />
            <h2 className='font-bold text-2xl'>
                {toyName}
            </h2>
            <div className='space-y-1.5 px-6'>
                <p>
                    <span className='font-medium text-[#b42163]'>Type:</span> {subCategory}
                </p>
                <p>
                    <span className='font-medium text-[#b42163]'>Price:</span> $ <span className='text-emerald-600'>{price}</span>
                </p>
                <p>
                    <span className='font-medium text-[#b42163]'>Available:</span> {availableQuantity}
                </p>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-[#b42163]'>Rating:</span> <span className='flex gap-1 items-center'><span className='text-[#cd7903]'><FaStar></FaStar></span> {rating}</span>
                </p>
                <p>
                    <span className='font-medium text-[#b42163]'>Seller:</span> {sellerName}
                </p>
                <p>
                    <span className='font-medium text-[#b42163]'>Contact:</span> {sellerEmail}
                </p>
            </div>
            <p className='flex flex-col gap-3'>
                <span className='font-semibold'>Description: </span>
                <span className='text-accent text-justify'>{description}</span>
            </p>
        </div>
    );
};

export default DetailsCard;