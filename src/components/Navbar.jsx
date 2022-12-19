import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'


const sidebarNavItems = [
    {
        display: 'Orders',
        icon: <TbTruckDelivery size={25} className='mr-4' />
    },
    {
        display: 'Favorites',
        icon: <MdFavorite size={25} className='mr-3' />
    },
    {
        display: 'Wallet',
        icon: <FaWallet size={25} className='mr-3' />
    },
    {
        display: 'Help',
        icon: <MdHelp size={25} className='mr-3' />
    },
    {
        display: 'Promotions',
        icon: <AiFillTag size={25} className='mr-3' />
    },
    {
        display: 'Best Ones',
        icon: <BsFillSaveFill size={25} className='mr-3' />
    }
];

const Navbar = () => {
    const [nav, setNav] = useState(false);


    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu className='text-white' size={30} />
                </div>
                <h1 className='text-white text-xl sm:text-2xl lg:text-3xl px-2'>
                    Sugoi <span className='font-bold text-slate-400'>Food</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[14px]'>
                    <p className='bg-neutral-700 text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>
            <div className='bg-gray-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={22} />
                <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search Foods' />
            </div>
            <div>
                <button type="button" className="px-4 py-2 bg-gray-300 text-neutral-800 hidden md:flex items-center rounded-full">
                    <BsFillCartFill size={20} className='mr-2' /> Cart
                </button>
            </div>
            {
                nav ? <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'></div> : ''
            }
            <div className={nav ? 'fixed top-0 left-0 w-[200px] h-screen bg-neutral-900 z-10 duration-300' : 'fixed top-0 left-[-100%] w-[200px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose onClick={()=>setNav(!nav)} size={25} className='absolute right-4 top-4 cursor-pointer' />
                <h2 className='text-2xl p-3 text-white'>
                    Sugoi <span className='font-bold text-slate-400'>Food</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-200'>
                        {
                            sidebarNavItems.map((item, index) => (
                                <li key={index} className='text-lg font-bold py-4 flex'> {item.icon} {item.display}</li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;