import React from 'react';

const ErrorPage: React.FC = () => (
    <div className='relative z-[100]'>
        
        <div className='bg-red-100 py-10 px-30 rounded-lg'>
            <h1 style={{ fontSize: '3rem', color: '#d32f2f' }}>Oih!</h1>
            <p style={{ fontSize: '1.25rem', color: '#555' }}>
                Midagi läks valesti.
            </p>

        </div>
    </div>
);

export default ErrorPage;