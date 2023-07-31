import * as fetch from '@/protocols/fetch'

interface role {
    name: string,
    description: string,
    permissions: number[],
}


export const createRol = async (data: role, token: string | undefined) => {
    const result = await fetch.post('/api/roles/create', data, token);
    return result;
}

export const getRoles = async (token: string | undefined) => {
    const result = await fetch.get('/api/roles', token);
    return result;
}

export const editRol = async (token: string | undefined, data: any,id:number) => {
    const result = await fetch.patch(`/api/roles/${id}`, data, token);
    return result;
}