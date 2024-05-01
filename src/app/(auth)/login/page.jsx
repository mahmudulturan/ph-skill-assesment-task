import React from 'react';
import LoginForm from '@/components/auth/LoginForm/LoginForm';
import SocialLogin from '@/components/auth/SocialLogin.jsx/SocialLogin';
import Link from 'next/link';
const LoginPage = () => {

    return (
        <div className='max-w-[450px] py-8 rounded-md shadow bg-white px-3 md:px-10'>
            <LoginForm />
            <SocialLogin />
            <p className='text-center my-6'>Don't have an account ? <Link className='font-medium underline' href={'/register'}>SignUp</Link></p>
        </div>
    );
};

export default LoginPage;