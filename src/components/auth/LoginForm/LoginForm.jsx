"use client"
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import logo from '@/assets/images/logo/main-logo.png';
import Image from 'next/image';
import Link from 'next/link';
const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className=''>
            <div className='my-5'>
                <Link href={'/'}>
                    <Image className='w-1/2 mx-auto ' src={logo} alt='Logo of project pulse' />
                </Link>
                <div>
                    <h3 className='text-xl font-semibold text-primaryCol text-center my-2'>Wellcome Back!</h3>
                    <h3 className='text-base font-medium text-black/70 text-center my-2'>Sign in to continue to Project Pulse.</h3>
                </div>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Enter Password"
                    />
                </Form.Item>
                <Form.Item>
                    <div className='flex justify-between'>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="">
                            Forgot password?
                        </a>
                    </div>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button w-full text-base flex items-center justify-center">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;