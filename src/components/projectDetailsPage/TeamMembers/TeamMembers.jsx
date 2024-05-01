import React from 'react';
import { FaUser } from 'react-icons/fa';

const TeamMembers = () => {
    return (
        <div className='max-w-xs w-full bg-white px-4 py-4 rounded '>
            <h3 className='text-2xl font-semibold'>Team Members</h3>
            <p className='my-1 text-sm font-medium text-black/80'>View the team members working on this project.</p>
            <div className='flex flex-col gap-2 my-3'>
                <div className='flex items-center justify-start gap-2'>
                    <FaUser className='text-3xl p-1 rounded-full bg-black/10' />
                    <div><h4 className='text-lg font-medium'>Sofia Davis</h4> <p className='text-sm'>Project Manager</p></div>
                </div>
                <div className='flex items-center justify-start gap-2'>
                    <FaUser className='text-3xl p-1 rounded-full bg-black/10' />
                    <div><h4 className='text-lg font-medium'>Jared Palmer</h4> <p className='text-sm'>Project Manager</p></div>
                </div>
                <div className='flex items-center justify-start gap-2'>
                    <FaUser className='text-3xl p-1 rounded-full bg-black/10' />
                    <div><h4 className='text-lg font-medium'>Olivia Martin</h4> <p className='text-sm'>Project Manager</p></div>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;