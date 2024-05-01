"use client"
import React, { useEffect, useState } from 'react';
import { DatePicker, Form, Input, Modal, Space } from 'antd';
import toast from 'react-hot-toast';
import useProjects from '@/hooks/useProjects';
import { MdEdit } from 'react-icons/md';
import dayjs from 'dayjs';


const ProjectUpdateForm = ({ initialValues, onFormInstanceReady }) => {
    const { RangePicker } = DatePicker;
    const onOk = (value) => {
        console.log('onOk: ', value);
    };
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
            <Space direction="vertical" className='w-full'>
                <DatePicker
                    className='w-full'
                    defaultValue={dayjs('2015-01-01', 'YYYY-MM-DD')}
                    onChange={(value, dateString) => {
                        console.log('Selected Time: ', value);
                        console.log('Formatted Selected Time: ', dateString);
                    }}
                    onOk={onOk}
                />
            </Space>
            <Form.Item
                name="description"
                label="Task Description"
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


const TasksDetailsModal = ({ task }) => {
    const [open, setOpen] = useState(false);
    const [formInstance, setFormInstance] = useState();
    const { refetch } = useProjects();


    // Define the create function
    const updateTask = async (taskData) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/projects`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });
        return response.json();
    };


    // handle for on create
    const onCreate = async (values) => {
        const reqData = { ...values, id: project?._id };
        console.log(reqData)
        const response = await updateTask(reqData);
        if (response.success) {
            toast.success(response.message);
            refetch();
            setOpen(false);
        }
        else {
            toast.error("Task update failed");
        }
    }

    return (
        <>
            <button onClick={() => setOpen(true)} >
                <MdEdit className='h-8 w-8 bg-primaryCol duration-300 hover:text-white px-1 py-1 rounded' />
            </button>
            <Modal
                open={open}
                title="Edit The Task"
                okText="Edit Task"
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
                    initialValues={task}
                    onFormInstanceReady={(instance) => {
                        setFormInstance(instance);
                    }}
                />
            </Modal>
        </>
    );
};
export default TasksDetailsModal;