import React from 'react';

const layout = ({ children }) => {
    return (
        <main className='min-h-screen flex flex-col items-center justify-center'>
            {children}
        </main>
    );
};

export default layout;