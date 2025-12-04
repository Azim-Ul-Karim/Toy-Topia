import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import ToyCard from './ToyCard';

const Toys = () => {

    const toys = useLoaderData();

    const [filteredToys, setFilteredToys] = useState(toys);
    const [sortOrder, setSortOrder] = useState('asc');
    const [subCategory, setSubCategory] = useState('all');

    const subCategories = ['all', ...new Set(toys.map(t => t.subCategory))];

    useEffect(() => {
        let updatedToys = [...toys];

        if (subCategory !== 'all') {
            updatedToys = updatedToys.filter(t => t.subCategory === subCategory);
        }

        updatedToys.sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

        setFilteredToys(updatedToys);
    }, [sortOrder, subCategory, toys]);

    return (
        <div className="w-11/12 mx-auto my-10">

            <title>ToyTopia | Toys</title>

            <h2 className="text-3xl font-bold text-center mb-6">
                Toys Collection
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-2">
                    <label htmlFor="sort" className="font-medium">Sort by Price:</label>
                    <select
                        id="sort"
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                        className="border rounded px-2 py-1"
                    >
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <label htmlFor="filter" className="font-medium">Filter by Category:</label>
                    <select
                        id="filter"
                        value={subCategory}
                        onChange={e => setSubCategory(e.target.value)}
                        className="border rounded px-2 py-1"
                    >
                        {subCategories.map((cat, idx) => (
                            <option key={idx} value={cat}>
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredToys.length > 0 ? (
                    filteredToys.map(toy => <ToyCard key={toy.toyId} toy={toy} />)
                ) : (
                    <p className="text-center col-span-full">No toys found for this category.</p>
                )}
            </div>
        </div>
    );
};

export default Toys;