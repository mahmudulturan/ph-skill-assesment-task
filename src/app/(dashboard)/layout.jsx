import Navbar from '@/components/shared/Navbar/Navbar';
import Sidebar from '@/components/shared/Sidebar/Sidebar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <main className='flex bg-[#F1F5F9] relative min-h-screen'>
            {/* sidebar start */}
            <div className='max-w-72 w-full '>
                <Sidebar />
            </div>
            {/* sidebar end */}
            <div className='flex-1 min-h-screen'>
                <Navbar />
                <div className='mx-4 my-4'>
                    {children}
                </div>
                <div className="min-h-screen"></div>
                <div className="min-h-screen"></div>
                <div className="min-h-screen"></div>
            </div>
        </main>
    );
};

export default Layout;