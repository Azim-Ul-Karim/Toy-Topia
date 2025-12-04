import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { RiUserCommunityLine } from 'react-icons/ri';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

const Why = () => {
    return (
        <div>
            <div className='text-center py-15'>
                <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>
                    Why Choose Us?
                </h1>
                <p className='mt-5 mb-12 text-accent text-lg font-medium'>
                    See how families in our community are making memories with their favorite toys...
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto gap-5'>
                    <div className="bg-linear-to-br from-[#fbeed8] to-white p-10 rounded-xl border-2 border-gray-300 flex flex-col items-center justify-center space-y-3">
                        <span className='text-[#48751b]'>
                            <VscWorkspaceTrusted size={40}></VscWorkspaceTrusted>
                        </span>
                        <h3 className='font-bold text-xl text-[#944f4f]'>
                            Safe and Tested
                        </h3>
                        <p className='text-accent text-sm'>
                            All toys meet safety standards
                        </p>
                    </div>

                    <div className="bg-linear-to-br from-[#e0fffe] to-white p-10 rounded-xl border-2 border-gray-300 flex flex-col items-center justify-center space-y-3">
                        <span className='text-[#7d4198]'>
                            <CiDeliveryTruck size={50}></CiDeliveryTruck>
                        </span>
                        <h3 className='font-bold text-xl text-[#4f7c94]'>
                            Local Delivery
                        </h3>
                        <p className='text-accent text-sm'>
                            Fast shipping from nearby sellers
                        </p>
                    </div>

                    <div className="bg-linear-to-br from-[#ffe0fc] to-white p-10 rounded-xl border-2 border-gray-300 flex flex-col items-center justify-center space-y-3">
                        <span className='text-[#ef81c3]'>
                            <FaHandHoldingHeart size={40}></FaHandHoldingHeart>
                        </span>
                        <h3 className='font-bold text-xl text-[#8d0028]'>
                            Quality Guaranteed
                        </h3>
                        <p className='text-accent'>
                            Carefully curated selections
                        </p>
                    </div>

                    <div className="bg-linear-to-br from-[#e9f0f2] to-white p-10 rounded-xl border-2 border-gray-300 flex flex-col items-center justify-center space-y-3">
                        <span className='text-[#b3bfa6]'>
                            <RiUserCommunityLine size={40}></RiUserCommunityLine>
                        </span>
                        <h3 className='font-bold text-xl text-[#787744]'>
                            Community Driven
                        </h3>
                        <p className='text-accent'>
                            Support local businesses
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;