import React from 'react';
import logo from '@/assets/images/logo/main-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { GrProjects } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import NavLink from '../NavLink/NavLink';

const Sidebar = () => {
    return (
        <div className='max-w-72 w-full border-r border-[#E2E8F0] min-h-screen bg-white sticky top-0 px-3 shadow'>
            <div>
                <Link href={'/'}>
                    <Image className='w-1/2 mx-auto py-3' src={logo} alt='Logo of project pulse' />
                </Link>
            </div>
            <div className='my-3'>
                <h6 className='text-black/80 uppercase text-xs font-medium'>Menu</h6>
                <div className='flex flex-col gap-2 my-3'>
                    <NavLink href={'/projects'}> <GrProjects /> Projects</NavLink>
                    <NavLink href={'/tasks'}> <FaTasks /> Tasks</NavLink>
                    <NavLink href={'/my-tasks'}><FaTasks /> My Tasks</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;