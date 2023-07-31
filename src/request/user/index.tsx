import * as fetch from '@/protocols/fetch'

interface user {
    name: string,
    lastname: string,
    identificationType: string,
    identification: string,
    address: string,
    phone: string,
    email: string,
    isActive: boolean,
    roleId: number,
}

export const createUser = async (data: user, token: string | undefined) => {
    const result = await fetch.post('/api/users/create', data, token);
    return result;
}

export const getUsers = async ( token: string | undefined,limit?:number,offset?:number) => {
    const result = await fetch.get(`/api/users?limit=${limit}&offset=${offset}`, token);
    return result;
}

export const getUsersByTerm = async ( token: string | undefined,term?:number) => {
    const result = await fetch.get(`/api/users/getByterm/${term}`, token);
    return result;
}

export const getUsersByRoleId = async ( token: string | undefined,id?:number) => {
    const result = await fetch.get(`/api/users/getByRoleId/${id}`, token);
    return result;
}


export const editUser = async ( token: string | undefined,id?:number,data?:any) => {
    const result = await fetch.patch(`/api/users/update/${id}`,data, token);
    return result;
}