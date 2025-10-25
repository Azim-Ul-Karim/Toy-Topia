import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthContext';
import Loading from '../../Components/Loading';
import { toast, ToastContainer } from 'react-toastify';

const Feedback = () => {

    const { loading } = useContext(AuthContext);
    const [toyName, setToyName] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmit = e => {
        e.preventDefault();
        toast('Thanks for your feedback!');
        setToyName('');
        setRating('');
        setComment('');
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-pink-100 via-yellow-100 to-blue-100 flex flex-col items-center justify-center p-4 space-y-10">
            <div className='text-center'>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#847634]">
                    Share Your Toy Experience
                </h2>
                <p className='text-accent mt-4 md:text-lg'>
                    Tell us how much your kid loved their new toy!
                </p>
            </div>

            <div className='bg-[#ebebde] p-6 md:p-8 rounded-xl shadow-2xl w-10/12 md:8-12 lg:w-6/12 border-t-4 border-[#a7b3b3]'>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className='font-semibold'>
                        Toy Name
                    </label>
                    <input
                        type="text"
                        value={toyName}
                        onChange={e => setToyName(e.target.value)}
                        required
                        className='input text-accent bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none mt-2'
                        placeholder="Enter toy name"
                    />

                    <label className='font-semibold'>
                        Rating (1-5)
                    </label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                        className='input text-accent bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none mt-2'
                    />

                    <label className="block text-gray-700 font-semibold mb-1">
                        Your Comment
                    </label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                        className='textarea text-accent  bg-base-100 w-full border-0 shadow-sm text-sm focus:outline-none mt-2'
                        placeholder="Write your feedback..."
                    ></textarea>

                    <button
                        type="submit"
                        className="btn bg-[#826b73] text-white font-medium w-full"
                    >
                        Submit Feedback
                    </button>
                </form>
            </div>

            <p className='text-sm text-accent'>
                Your reviews help us make Toy Topia even more magical!
            </p>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Feedback;