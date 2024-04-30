import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";

const SocialLogin = () => {
    return (
        <div>
            <div className='flex items-center justify-center gap-2'>
                <span className='flex-1 bg-slate-300 h-[1px]'></span>
                <span className='text-sm'>Coninue With</span>
                <span className='flex-1 bg-slate-300 h-[1px]'></span>
            </div>
            <div className='flex items-center justify-center gap-3 my-4'>
                <FiFacebook className='h-9 w-9 bg-primaryCol hover:bg-primaryCol/80 px-1 py-1 text-white rounded-md cursor-pointer' />
                <FiInstagram className='h-9 w-9 bg-red-500 hover:bg-red-500/80 px-1 py-1 text-white rounded-md cursor-pointer' />
                <FiTwitter className='h-9 w-9 bg-primaryCol hover:bg-primaryCol/80 px-1 py-1 text-white rounded-md cursor-pointer' />
                <FiGithub className='h-9 w-9 bg-gray-500 hover:bg-gray-500/80 px-1 py-1 text-white rounded-md cursor-pointer' />
            </div>
        </div>
    );
};

export default SocialLogin;