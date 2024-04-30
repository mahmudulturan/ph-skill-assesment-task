import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='sticky top-0 bg-white shadow flex items-center justify-end px-6 gap-4'>
            <div className='relative'>
                <IoSearchOutline className='absolute top-6 left-3 ' />
                <input className='w-96 my-4 py-1 pl-8 px-3 outline-primaryCol rounded duration-300 border' type='text' placeholder="Search Tasks..." />
            </div>
            <button className='w-9 h-9 bg-primaryCol/70 flex items-center justify-center rounded-md'><FaRegUser /> </button>
        </div>
    );
};

export default Navbar;