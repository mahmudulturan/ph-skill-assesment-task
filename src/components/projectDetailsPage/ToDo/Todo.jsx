import React from 'react';

const Todo = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
            <div className='flex-1 bg-white min-h-[79vh] px-4 py-4 rounded group'>
                <h3 className='text-xl font-medium duration-300 group-hover:text-primaryCol'>Pending</h3>
            </div>
            <div className='flex-1 bg-white min-h-[79vh] px-4 py-4 rounded group'>
                <h3 className='text-xl font-medium duration-300 group-hover:text-primaryCol'>Ongoing</h3>
            </div>
            <div className='flex-1 bg-white min-h-[79vh] px-4 py-4 rounded group'>
                <h3 className='text-xl font-medium duration-300 group-hover:text-primaryCol'>Completed</h3>
            </div>
        </div>
    );
};

export default Todo;