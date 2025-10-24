import React from 'react';
import { BsGift } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { FaHeartPulse } from 'react-icons/fa6';

const Community = () => {
    return (
        <div className='bg-linear-to-br from-[#FFF9F5] to-[#F0F4F8]'>
            <div className='text-center py-15'>
                <h1 className='text-4xl font-bold'>
                    Community Stories
                </h1>
                <p className='mt-5 mb-12 text-accent text-lg font-medium'>
                    See how families in our community are making memories with their favorite toys...
                </p>
                <div className='grid grid-cols-3 w-4xl mx-auto gap-5'>
                    <div className="bg-linear-to-br from-[#FFF3E0] to-white p-10 rounded-xl border-2 border-gray-300 flex flex-col items-center justify-center space-y-3">
                        <span className='text-[#48751b]'>
                            <BsGift size={30}></BsGift>
                        </span>
                        <h3 className='font-bold text-2xl text-[#944f4f]'>
                            2.5K+
                        </h3>
                        <p className='text-accent'>
                            Happy Families
                        </p>
                    </div>

                    <div className="bg-linear-to-br from-[#E1F5FE] to-white p-10 rounded-xl border-2 border-gray-300 flex flex-col items-center justify-center space-y-3">
                        <span className='text-[#e75b5b]'>
                            <FaHeartPulse size={30}></FaHeartPulse>
                        </span>
                        <h3 className='font-bold text-2xl text-[#625b72]'>
                            1.2K+
                        </h3>
                        <p className='text-accent'>
                            Toys Loved
                        </p>
                    </div>

                    <div className="bg-linear-to-br from-[#F3E5F5] to-white p-10 rounded-xl border-2 border-gray-300 flex flex-col items-center justify-center space-y-3">
                        <span className='text-[#e5a400]'>
                            <FaStar size={30}></FaStar>
                        </span>
                        <h3 className='font-bold text-2xl text-[#7e250c]'>
                            600+
                        </h3>
                        <p className='text-accent'>
                            Reviews Shared
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;