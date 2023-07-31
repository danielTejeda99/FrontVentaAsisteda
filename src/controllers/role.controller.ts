import { useState } from 'react';
import { createRol, getRoles, editRol } from '@/request/roles'
import CookiesUtils from '@/utils/cookieUtils';
import { getPermissions } from '@/request/permissions'

interface contentModal {
    title: string;
    description: string;

}

interface Permission {
    name: string;
    value: string;
}

export default function RoleController(){
    const token = CookiesUtils.getCookie('token');
    const [render, setRender] = useState<boolean>(false);
    const [messageModal, setMessageModal] = useState<contentModal>({ title: '', description: '' });
    const [showModal, setShowModal] = useState<boolean>(false);
    const [permissionsAdd, setPermissionsAdd] = useState<any[]>([{}])
    const [idShowRole, setIdShowRole] = useState<number>();
    const [show, setShow] = useState<boolean>(false);
    const [permissions, setPermissions] = useState<Permission[]>([])
    const [roles, setRoles] = useState<any>([]);

    const handleCreateRole = async (values: any) => {
        const data = {
            name: values.nameRol,
            description: values.descriptionRol,
            permissions: values.permissions.map((str: any) => parseInt(str)),
        }
        if (data.name && data.description && data.permissions) {
            const result = await createRol(data, token);
            if (result.statusCode === 200) {
                setRender(!render);
                setMessageModal({ title: 'Exito', description: 'El rol se creó de manera exitosa' })
                setShowModal(true);
            } else {
                setMessageModal({ title: 'Error', description: 'Ocurrió un error al crear el rol' })
                setShowModal(true);
            }
        }

    }

    const handleEditRol = async (values: any, idRol: any) => {
        const permissions = [];
        const permissionRole = permissionsAdd.filter((item: any) => item.id === idRol);
        for (const iterator of permissionRole) {
            permissions.push(iterator.value)
        }
        const data = {
            name: values.nameRol,
            description: values.descriptionRol,
            permissions: permissions.map((str: any) => parseInt(str)),
            isActive: values.isActive
        }
        if (data.name && data.description) {
            const result = await editRol(token, data, values.id);
            if (result.statusCode === 200) {
                setRender(!render);
                setMessageModal({ title: 'Exito', description: 'El rol se editó de manera exitosa' })
                setShowModal(true);
            } else {
                setMessageModal({ title: 'Error', description: 'Ocurrió un error al editar el rol' })
                setShowModal(true);
            }
        }
    }

    const changeShow = (index: number) => {
        setIdShowRole(index);
        setShow(!show)
    }

    const onRequestClose = () => {
        setShowModal(false)
    }

    const onClickChk = (permiso: any, idRol: any) => {

        permiso.id = idRol;        
        let exists = false;
        for (const item of permissionsAdd) {
            if (item.name === permiso.name && item.value === permiso.value && item.id === permiso.id) {
                exists = true
                break
            }
        }
        if (!exists) setPermissionsAdd([...permissionsAdd, permiso])
        else {

            const newArray: any = []
            for (const item of permissionsAdd) {
                if( item.value !== permiso.value || item.id !== permiso.id){
                }                
            }
        setPermissionsAdd(newArray)
        }
    }

    const handleGetRoles = async () => {
        const arrayAux: any = [];
        const permissionsAux: any = [];
        const result = await getRoles(token);
        const resultPermissions = await getPermissions(token);
        if (result.statusCode === 200) {
            const { data } = result;
            for (const item of data) {
                const permissionsAuxEdit: any = [];
                for (const iterator of item.rolesPermissions) {
                    const permissions = { name: iterator.permissions.description, value: iterator.permissionId.toString(), id: item.id }
                    permissionsAuxEdit.push(permissions);
                    arrayAux.push(permissions);
                }
                item.permissionsAux = permissionsAuxEdit;
            }
            setRoles(data);
            setPermissionsAdd(arrayAux)

        }

        if (resultPermissions.statusCode === 200) {
            const { data } = resultPermissions;
            for (const item of data) {
                const dataPermissions = { name: item.description, value: item.id.toString() }
                permissionsAux.push(dataPermissions);
            }
            setPermissions(permissionsAux);
        }
    }

    return {
        handleCreateRole,
        handleEditRol,
        changeShow,
        onRequestClose,
        onClickChk,
        token,
        render,
        permissionsAdd,
        idShowRole,
        show,
        showModal,
        messageModal,
        handleGetRoles,
        permissions,
        roles
    }
}
