import React from 'react';

const cardsInfo = [
    {
        title: "Sun's Out, BOGO's Out",
        body: "Through 12/1",
        image : "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "New Restaurants",
        body: "Added Daily",
        image : "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "We Deliver Desserts Too",
        body: "Tasty Treat",
        image : "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
]

const Cards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-4 grid md:grid-cols-3 gap-6'>
            {
                cardsInfo.map((item, index) => (
                    <div key={index} className='shadow-lg rounded-lg hover:scale-105 duration-300 rounded-xl relative'>
                        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                            <p className='font-bold text-2xl px-2 pt-4'>{item.title}</p>
                            <p className='px-2'>{item.body}</p>
                            <button className='border-white bg-white text-black mx-2 absolute bottom-4 px-2 rounded-lg'>Order Now</button>
                        </div>
                        <img
                            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                            src= {item.image}
                            alt='/'
                        />
                    </div>
                ))
            }

        </div>
    );
};

export default Cards;