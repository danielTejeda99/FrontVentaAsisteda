import * as fetch from '@/protocols/fetch'


export const getPermissions = async (token: string | undefined) => {
    const result = await fetch.get('/api/permissions', token);
    return result;
}

export const getPermissionsByRole = async (token: string | undefined) => {
    const result = await fetch.get('/api/permissions/getPermissionsByRole/2', token);
    return result;
}
