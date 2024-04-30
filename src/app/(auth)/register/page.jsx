import React from 'react';
import RegisterForm from '@/components/auth/RegisterForm/RegisterForm';
import SocialLogin from '@/components/auth/SocialLogin.jsx/SocialLogin';
import Link from 'next/link';

const RegisterPage = () => {
    return (
        <div className='max-w-[450px] py-8 rounded-md shadow bg-white px-10'>
            <RegisterForm />
            <SocialLogin />
            <p className='text-center my-6'>Already have an account ? <Link className='font-medium underline' href={'/login'}>Login</Link></p>
        </div>
    );
};

export default RegisterPage;