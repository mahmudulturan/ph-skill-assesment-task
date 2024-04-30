import React from 'react';
import LoginForm from '@/components/auth/LoginForm/LoginForm';
import SocialLogin from '@/components/auth/SocialLogin.jsx/SocialLogin';
const LoginPage = () => {

    return (
        <div className='max-w-96'>
            <LoginForm />
            <SocialLogin />
        </div>
    );
};

export default LoginPage;