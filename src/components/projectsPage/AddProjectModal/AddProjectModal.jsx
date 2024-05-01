"use client"
import React, { useEffect, useState } from 'react';
import { Form, Input, Modal } from 'antd';
import { FiPlus } from 'react-icons/fi';
import toast from 'react-hot-toast';
import useProjects from '@/hooks/useProjects';


// modal form component
const AddProjectModalForm = ({ initialValues, onFormInstanceReady }) => {
    const [form] = Form.useForm();
    useEffect(() => {
        onFormInstanceReady(form);
    }, []);
    return (
        <Form layout="vertical" form={form} name="form_in_modal" initialValues={initialValues}>
            <Form.Item
                name="project_name"
                label="Project Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input the name of project!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="project_description"
                label="Project Description"
                rules={[
                    {
                        required: true,
                        message: 'Please write the description of project!',
                    },
                ]}
            >
                <Input type="textarea" />
            </Form.Item>
        </Form>
    );
};

// modal component
const AddProjectModal = () => {
    const [open, setOpen] = useState(false);
    const { refetch } = useProjects();
    const [formInstance, setFormInstance] = useState();


    // Define the create function
    const createProject = async (newProject) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProject),
        });
        return response.json();
    };


    const onCreate = async (values) => {
        const reqData = { ...values, tasks: [] };
        const response = await createProject(reqData);
        if (response.success) {
            toast.success(response.message);
            refetch();
            setOpen(false);
        }
        else {
            toast.error("Project add failed");
        }
    }
    return (
        <>
            <div onClick={() => setOpen(true)} className='bg-white px-4 py-6 rounded flex flex-col items-center justify-center gap-3  min-h-44 cursor-pointer group'>
                <FiPlus className='w-10 h-10 text-primaryCol' />
                <h1 className='text-xl font-semibold uppercase mb-3 group-hover:text-primaryCol duration-300'>Add New Project</h1>
            </div>
            <Modal
                open={open}
                title="Add A New Project"
                okText="Add Project"
                cancelText="Cancel"
                okButtonProps={{
                    autoFocus: true,
                }}
                onCancel={() => setOpen(false)}
                destroyOnClose
                onOk={async () => {
                    try {
                        const values = await formInstance?.validateFields();
                        formInstance?.resetFields();
                        onCreate(values);
                    } catch (error) {
                        console.log('Failed:', error);
                    }
                }}
            >
                <AddProjectModalForm
                    initialValues={{
                        modifier: 'public',
                    }}
                    onFormInstanceReady={(instance) => {
                        setFormInstance(instance);
                    }}
                />
            </Modal>
        </>
    );
};
export default AddProjectModal;