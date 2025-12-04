import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailsCard from './DetailsCard';
import { AuthContext } from '../../Contexts/AuthProvider/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const ToyDetails = () => {

    const { user } = useContext(AuthContext);
    const toys = useLoaderData();
    const { id } = useParams();
    const [toy, setToy] = useState({});

    useEffect(() => {
        const toyDetails = toys.find(t => t.toyId == id);
        setToy(toyDetails);
    }, [id, toys])

    const handleTry = e => {
        e.preventDefault();
        toast.success('Awesome! You just tried this toy — hope it brings you joy 🎈');
    }

    return (
        <div className='w-11/12 md:5/7 lg:5/8 mx-auto'>
            <h2 className='font-semibold text-xl my-10 px-4'>
                Toy Details
            </h2>

            <DetailsCard toy={toy}></DetailsCard>

            <div className='my-10 p-6 border-2 border-gray-200 rounded-lg shadow-sm md:w-4/5 mx-auto'>
                <h3 className='text-xl md:text-2xl font-semibold mb-4 text-[#058338]'>
                    Try This Toy Before You Buy!
                </h3>
                <form onSubmit={handleTry} className='space-y-4'>
                    <label className='font-medium'>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={user?.displayName || ''}
                        className='w-full mt-2 border border-gray-300 px-3 py-2 rounded-md focus:outline-none'
                        required
                    />

                    <label className='font-medium'>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={user?.email || ''}
                        className='w-full mt-2 border border-gray-300 px-3 py-2 rounded-md focus:outline-none'
                        required
                    />

                    <button type="submit" className='bg-[#b49272] text-white px-5 py-2 rounded-md hover:bg-[#9a581b] cursor-pointer'>
                        Try Now
                    </button>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ToyDetails;