"use client"
import { useQuery } from '@tanstack/react-query';

const useProjectById = ({ id }) => {
    const { data: project, isLoading, refetch } = useQuery({
        queryKey: ["project", id], queryFn: async () => {
            const response = await (await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/project/${id}`)).json();
            return response.data;
        }
    })
    return ({ project, isLoading, refetch });
};

export default useProjectById;