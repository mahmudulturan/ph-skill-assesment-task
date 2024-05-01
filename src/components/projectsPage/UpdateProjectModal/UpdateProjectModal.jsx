"use client"
import React, { useEffect, useState } from 'react';
import { Form, Input, Modal } from 'antd';
import toast from 'react-hot-toast';
import useProjects from '@/hooks/useProjects';
import { MdEdit } from 'react-icons/md';


const ProjectUpdateForm = ({ initialValues, onFormInstanceReady }) => {
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


const UpdateProjectModal = ({ project }) => {
    const [open, setOpen] = useState(false);
    const [formInstance, setFormInstance] = useState();
    const { refetch } = useProjects();


    // Define the create function
    const updateProject = async (projectData) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/projects`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData),
        });
        return response.json();
    };


    // handle for on create
    const onCreate = async (values) => {
        const reqData = { ...values, id: project?._id };
        console.log(reqData)
        const response = await updateProject(reqData);
        if (response.success) {
            toast.success(response.message);
            refetch();
            setOpen(false);
        }
        else {
            toast.error("Project update failed");
        }
    }

    return (
        <>
            <button onClick={() => setOpen(true)} >
                <MdEdit className='h-8 w-8 bg-primaryCol duration-300 hover:text-white px-1 py-1 rounded' />
            </button>
            <Modal
                open={open}
                title="Update The Project"
                okText="Update Project"
                cancelText="Cancel"
                okButtonProps={{
                    autoFocus: true,
                }}
                onCancel={() => setOpen(false)}
                destroyOnClose
                onOk={async () => {
                    try {
                        const values = await formInstance?.validateFields();
                        onCreate(values);
                    } catch (error) {
                        console.log('Failed:', error);
                    }
                }}
            >
                <ProjectUpdateForm
                    initialValues={project}
                    onFormInstanceReady={(instance) => {
                        setFormInstance(instance);
                    }}
                />
            </Modal>
        </>
    );
};
export default UpdateProjectModal;