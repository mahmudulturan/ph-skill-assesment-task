"use client"
import React, { useState } from 'react';
import { Modal } from 'antd';
import toast from 'react-hot-toast';
import useProjects from '@/hooks/useProjects';
import { MdDelete } from 'react-icons/md';




const DeleteProjectModal = ({ id }) => {
    const [open, setOpen] = useState(false);
    const { refetch } = useProjects();


    // Define the delete function
    const deleteProject = async (projectId) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/projects/${projectId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    };


    const onDelete = async () => {
        const response = await deleteProject(id);
        if (response.success) {
            toast.success(response.message);
            refetch();
            setOpen(false);
        }
        else {
            toast.error("Project delete failed");
        }
    }
    return (
        <>
            <button onClick={() => setOpen(true)} >
                <MdDelete className='h-8 w-8 bg-primaryCol duration-300 hover:text-white px-1 py-1 rounded' />
            </button>
            <div className='flex items-center justify-center'>
                <Modal
                    open={open}
                    title="Are you sure to delete this project?"
                    okText="Delete Project"
                    cancelText="Cancel"
                    okButtonProps={{
                        autoFocus: true,
                    }}
                    onCancel={() => setOpen(false)}
                    destroyOnClose
                    onOk={async () => {
                        try {
                            onDelete();
                        } catch (error) {
                            console.log('Failed:', error);
                        }
                    }}
                >
                </Modal>
            </div>
        </>
    );
};
export default DeleteProjectModal;