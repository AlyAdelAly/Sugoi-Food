import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

const Hero = () => {
    const foodImages = [
        "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
    
    return (
        <Swiper spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            {
                foodImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className='max-w-[1640px] mx-auto p-4'>
                            <div className='max-h-[550px] relative'>
                                <div className='absolute w-full h-full text-gray-200 max-h-[550px] bg-black/40 flex flex-col justify-center'>
                                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-400'>Best</span></h1>
                                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-400'>Food</span> Delivered</h1>
                                </div>
                                <img className='w-full max-h-[550px] object-cover' src={image} alt="/" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Hero;