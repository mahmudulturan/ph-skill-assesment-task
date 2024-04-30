import Sidebar from '@/components/shared/Sidebar/Sidebar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <main className='flex gap-4 bg-[#F1F5F9] relative min-h-screen'>
            {/* sidebar start */}
            <div className='max-w-72 w-full '>
                <Sidebar />
            </div>
            {/* sidebar end */}
            <div className='flex-1 min-h-screen'>
                {children}
                <div className="min-h-screen"></div>
                <div className="min-h-screen"></div>
                <div className="min-h-screen"></div>
            </div>
        </main>
    );
};

export default Layout;