import React, { useState } from 'react';
import { data } from '../API/foodAPI';

const Meals = () => {
    const filterTypeTerm = [
        {
            name: 'Burger',
            term: 'burger'
        },
        {
            name: 'Pizza',
            term: 'pizza'
        },
        {
            name: 'Salads',
            term: 'salad'
        },
        {
            name: 'Chicken',
            term: 'chicken'
        },
        {
            name: 'Noodles',
            term: 'noodle'
        }
    ];

    const filterPriceTerm = ['100', '150', '175', '200'];
    const [meals, setMeals] = useState(data);

    const filterType = (category) => {
        setMeals(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    const filterPrice = (price) => {
        setMeals(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-700 font-bold text-4xl text-center'>
                Top Rated Menu Items
            </h1>

            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-slate-200'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setMeals(data)} className='px-3 m-1 border-2 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white rounded-full'>All</button>
                        {
                            filterTypeTerm.map((item,index) => (
                                <button key={index} onClick={() => filterType(item.term)} className='px-3 m-1 border-2 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white rounded-full'>{item.name}</button>
                            ))
                        }
                        
                    </div>
                </div>

                <div>
                    <p className='font-bold text-slate-200'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        {
                            filterPriceTerm.map((item,index) => (
                                <button key={index} onClick={() => filterPrice(item)} className='px-3 m-1 border-2 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white rounded-full'>{item} EGP</button>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {
                    meals.map((item, index) => (
                        <div key={index} className='shadow-lg rounded-lg hover:scale-105 duration-300'>
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-full h-[200px] object-cover rounded-t-lg'
                            />
                            <div className='flex justify-between px-2 py-4'>
                                <p className='font-bold text-slate-200'>{item.name}</p>
                                <p>
                                    <span className='bg-orange-600 text-white p-1 rounded-full'>
                                        {item.price}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Meals;