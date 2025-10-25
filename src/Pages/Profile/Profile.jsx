import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthContext';
import Loading from '../../Components/Loading';

const Profile = () => {
    const { user, updateUser, setUser, loading } = useContext(AuthContext);

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

    const handleUpdate = e => {
        e.preventDefault();

        updateUser({ displayName: name, photoURL })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL });
                setIsEditing(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-10/12 md:8-12 lg:w-6/12 mx-auto bg-linear-to-br from-[#FFF9F5] to-[#F0F4F8] my-12 bg-[#f1fad9] p-8 rounded-lg shadow-xl'>

            <title>ToyTopia | My Profile</title>

            <div className='flex justify-center mb-6'>
                <img
                    src={user?.photoURL || "https://i.postimg.cc/vHRwqWXs/prop.jpg"}
                    className='w-22 md:w-28 h-22 md:h-28 rounded-full border-2 border-[#e2b9c5] object-cover shadow-lg'
                />
            </div>

            {!isEditing ? (
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='bg-linear-to-br from-[#f7dac6] to-[#F0F4F8] p-3 md:p-6 rounded-lg'>
                            <h3 className='font-semibold text-lg'>
                                Name
                            </h3>
                            <p className='px-2 mt-2 text-accent'>
                                {user?.displayName}
                            </p>
                        </div>

                        <div className='bg-linear-to-br from-[#cfdcb0] to-[#F0F4F8] p-6 rounded-lg'>
                            <h3 className='font-semibold text-lg'>Email</h3>
                            <p className='px-2 mt-2 text-accent'>
                                {user?.email}
                            </p>
                        </div>

                        <div className='md:col-span-2 bg-linear-to-br from-[#f3f2c2] to-[#F0F4F8] p-6 rounded-lg'>
                            <h3 className='font-semibold text-lg'>
                                Photo URL
                            </h3>
                            <p className='px-2 mt-2 text-accent break-words'>
                                {user?.photoURL}
                            </p>
                        </div>
                    </div>

                    <div className='text-center mt-6'>
                        <button
                            onClick={() => setIsEditing(true)}
                            className='bg-[#60694c] text-white font-medium px-6 py-2 rounded-md'
                        >
                            Edit Profile
                        </button>
                    </div>
                </>
            ) : (
                <form onSubmit={handleUpdate} className='space-y-4'>
                    <label className='font-semibold'>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full mt-2 border border-gray-300 px-3 py-2 bg-linear-to-r from-[#FFF3E0] to-[#e5f5ef] rounded-sm focus:outline-none'
                    />

                    <label className='font-semibold'>Photo URL</label>
                    <input
                        type="text"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className='w-full mt-2 border border-gray-300 px-3 py-2 bg-linear-to-r from-[#FFF3E0] to-[#e5f5ef] rounded-sm focus:outline-none'
                    />

                    <div className='flex justify-between mt-3'>
                        <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className='bg-gray-300 px-5 py-2 rounded-md cursor-pointer'
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className='bg-[#48675e] text-white px-5 py-2 rounded-md cursor-pointer'
                        >
                            Update
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Profile;