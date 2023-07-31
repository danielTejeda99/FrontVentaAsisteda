import { useState, useEffect } from 'react';
import CookiesUtils from '@/utils/cookieUtils';
import { createUser, getUsers, getUsersByTerm, editUser, getUsersByRoleId } from '@/request/user';
import { createConfigAlly, configAlly, editConfigAlly } from '@/request/allies';
import { getRoles } from '@/request/roles'
import { useAppDispatch } from '@/redux/hooks';
import { setToast } from '@/redux/slices/toastSlice';
import { useRouter } from 'next/navigation';
import { setUserEdit, setUserPolicy } from '@/redux/slices/users/userEditSlice';
import { setSalesForm, setIdForm } from '@/redux/slices/users/userSaleFormSlice';

interface contentModal {
    title: string;
    description: string;
}

interface DataForm {
    name: string,
    required: boolean,
    disabled: boolean,
    type: string
}

export default function UserController(dataForm?: any, userData?: any, idDataForm?: any) {
    const [roles, setRoles] = useState<any>([]);
    const [showModal, setShowModal] = useState<boolean>(false)
    const [messageModal, setMessageModal] = useState<contentModal>({ title: '', description: '' })
    const token = CookiesUtils.getCookie('token');
    const [users, setUsers] = useState<object[]>([])
    // const [userEdit, setUserEdit] = useState<any>()
    const [itemsHead, setItemsHead] = useState<string[]>(["Nombre", "Apellido", "Tipo identificación", "Identificación", "Teléfono", "Dirección"])
    const [page, setPage] = useState<number>(1);
    const [render, setRender] = useState<boolean>(false);
    const [showCampos, setShowCampos] = useState<boolean>(false);
    const [selectedRole, setSelectedRole] = useState<number>(userData ? userData.roleId : 0)
    const [selectedTypeId, setSelectedTypeId] = useState<string>(userData ? userData.typeId : '')
    const [selectedSupervisor, setSelectedSupervisor] = useState<number>(userData ? userData.roleId : 0)
    const [saleForm, setDataForm] = useState<DataForm[]>(dataForm)
    // const [idDataForm, setIdDataForm] = useState<number>();
    const [aliados, setAliados] = useState<any[]>();
    const [supervisores, setSupervisores] = useState<any[]>([]);
    const [selectedAliados, setSelectedAliados] = useState<any[]>();
    const [selectedDate, setSelectedDate] = useState(null);
    const dispatch = useAppDispatch();


    const router = useRouter();
    useEffect(() => {
        setDataForm(dataForm);


    }, [])


    const handleCreateUser = async (values: any) => {
        const data = {
            name: values.name,
            lastname: values.lastName,
            identificationType: selectedTypeId,
            identification: values.id,
            address: values.address,
            phone: values.number,
            email: values.email,
            isActive: true,
            roleId: Number(selectedRole),
            supervisorId: selectedSupervisor,
            aliados: selectedAliados,
            advisorStartDate: selectedDate
        }
        console.log(data);
        // const result = await createUser(data, token);
        // if (result.statusCode === 200) {
        //     const data = {
        //         allyId: result.data.id,
        //         attributes: JSON.stringify(dataForm),
        //         dataPolicy: values.usagePolicy,
        //         noEssentialDataPolicy: JSON.stringify([])
        //     }
        //     const resConfigAlly = await createConfigAlly(token, data);
        //     if (resConfigAlly.statusCode === 200) {
        //         setMessageModal({ title: 'Exito', description: 'El usuario se creó de manera exitosa' })
        //         setShowModal(true);
        //     } else {
        //         setMessageModal({ title: 'Exito', description: 'El usuario se creó de manera exitosa, Pero ocurrió un error al guardar la configuración del formulario' })
        //         setShowModal(true);
        //     }
        // } else if (result.status === 409) {
        //     setMessageModal({ title: 'Error', description: 'El usuario ya se encuentra registrado' })
        //     setShowModal(true);
        // } else {
        //     setMessageModal({ title: 'Error', description: 'Ocurrió un error al crear el usuario' })
        //     setShowModal(true);
        // }
    }

    const onRequestClose = () => {
        setShowModal(false)
    }

    const fetchRequest = async () => {
        const rolesAux: any = [];
        const result = await getRoles(token);
        if (result.statusCode === 200) {
            for (const item of result.data) {
                const data = {
                    name: item.name,
                    value: item.id
                }
                if (item.isActive) rolesAux.push(data)
            }
            setRoles(rolesAux);
        }
    }

    const getAllUsers = async () => {
        const response = await getUsers(token, 10, page);
        if (response.statusCode === 200) {
            setUsers(response.data)
        }
    }

    const searchUser = async (value: any) => {
        const response = await getUsersByTerm(token, value.value);
        if (response.data.length > 0) {
            setUsers(response.data)
        }
    }

    const changeStatus = async (data: any) => {
        const body = {
            isActive: !data.isActive
        }
        console.log("aqui")
        const response = await editUser(token, data.id, body)
        if (response.statusCode === 200) {
            const dataAux = {
                message: 'Estado actualizado con éxito',
                show: true,
                type: 'success'
            }
            setRender(!render);
            dispatch(setToast(dataAux))
        } else {
            const dataAux = {
                message: 'Error actualizando estado',
                show: true,
                type: 'error'
            }
            setShowModal(false);
            dispatch(setToast(dataAux));
        }
    }

    const handleEditUser = async (user: any) => {
        const body = {
            name: user.name,
            lastname: user.lastName,
            address: user.address,
            email: user.email,
            phone: user.number,
            identificationType: user.typeId,
            identification: user.id,
        }
        const response = await editUser(token, user.userId, body)
        if (response.statusCode === 200) {
            const data = {
                allyId: user.userId,
                attributes: JSON.stringify(dataForm),
                dataPolicy: user.usagePolicy,
                noEssentialDataPolicy: JSON.stringify([])
            }
            const resConfigAlly = await editConfigAlly(token, data, idDataForm);
            if (resConfigAlly.statusCode === 200) {
                const dataAux = {
                    message: 'Usuario actualizado con éxito',
                    show: true,
                    type: 'success'
                }
                setRender(!render);
                setShowModal(false);
                dispatch(setToast(dataAux));
            } else {
                const dataAux = {
                    message: 'Usuario actualizado con éxito, pero ocuarrio un error al actualizar formulario de venta',
                    show: true,
                    type: 'success'
                }
                setRender(!render);
                setShowModal(false);
                dispatch(setToast(dataAux));
            }

        } else {
            const dataAux = {
                message: 'Error actualizando usuario',
                show: true,
                type: 'error'
            }
            setShowModal(false);
            dispatch(setToast(dataAux));
        }

    }

    const showModalEdit = async (user: any) => {
        const data = {
            name: user.name,
            lastName: user.lastname,
            id: user.identification,
            address: user.address,
            email: user.email,
            number: user.phone,
            typeId: user.identificationType,
            roleId: user.roleId,
            userId: user.id
        }

        const response = await configAlly(token, undefined, user.id);
        if (response.statusCode === 200) {
            const data = response.data.attributes;
            dispatch(setIdForm({ id: response.data.id }));
            dispatch(setSalesForm({ saleForm: data }));
            if (response.data.dataPolicy) {
                dispatch(setUserPolicy({ usagePolicy: response.data.dataPolicy }));
            }
        }
        dispatch(setUserEdit(data));
        router.push(`/dashboard/user/edit/${user.id}`);
    }

    const handleShowCampos = () => {
        setShowCampos(!showCampos)
    }

    const handleSearchUser = (id: any) => {
        setUserEdit({
            name: 'test',
            lastName: 'test',
            id: 'test',
            address: 'test',
            email: 'test',
            number: 'test',
            typeId: 'test',
            roleId: 'test',
            userId: 'test'
        });
    }

    const onChangeSelect = (value: any, type: string) => {
        console.log(value)
        if (type === 'role') setSelectedRole(value)
        if (type === 'typeId') setSelectedTypeId(value)
        if (type === 'supervisor') setSelectedSupervisor(value)
    }

    const onClickChk = (name: string, type: string) => {
        let arrayAux: any = [];

        for (let item of dataForm) {
            let itemAux = { ...item }
            if (itemAux.name === name) {
                if (type === 'required') itemAux.required = !itemAux.required
                if (type === 'disabled') itemAux.disabled = !itemAux.disabled
            }
            arrayAux.push(itemAux)
        }
        dispatch(setSalesForm({ saleForm: arrayAux }));
    }

    const handleGetBaseForm = async () => {
        const response = await configAlly(token, 1, undefined);
        if (response.statusCode === 200) {
            dispatch(setSalesForm({ saleForm: response.data }));
        }
    }

    const handleUpdateAlliesForm = async (values: any) => {
        console.log("aqui", values)
        // const data = {
        //     allyId: result.data.id,
        //     attributes: JSON.stringify(dataForm),
        //     dataPolicy: values.usagePolicy,
        //     noEssentialDataPolicy: JSON.stringify([])
        // }
        // const resConfigAlly = await createConfigAlly(token, data);
    }

    const handleGetUserByRol = async () => {
        let auxArry = [];
        let auxArrySupervisores = [];
        const resultAliados = await getUsersByRoleId(token, 4);
        const resultSupervisores = await getUsersByRoleId(token, 5);
        if (resultAliados.statusCode === 200) {
            for (const item of resultAliados.data) {
                auxArry.push({
                    value: item.id, label: item.name
                })
            }
        }
        if (resultSupervisores.statusCode === 200) {
            for (const item of resultSupervisores.data) {
                const data = {
                    name: item.name,
                    value: item.id
                }
                auxArrySupervisores.push(data)
            }
        }
        setSupervisores(auxArrySupervisores);
        setAliados(auxArry)
    }

    const onChangeMultiSelect = async (values:any) => {
         let auxArry = [];
         for (const item of values) {
            auxArry.push(item.value)
         }
         setSelectedAliados(auxArry);
    }


    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    return {
        handleCreateUser,
        onRequestClose,
        fetchRequest,
        roles,
        showModal,
        messageModal,
        getAllUsers,
        users,
        setUsers,
        itemsHead,
        page,
        setPage,
        searchUser,
        changeStatus,
        render,
        handleEditUser,
        showModalEdit,
        showCampos,
        handleShowCampos,
        onChangeSelect,
        selectedRole,
        selectedTypeId,
        handleSearchUser,
        onClickChk,
        handleGetBaseForm,
        handleUpdateAlliesForm,
        handleGetUserByRol,
        aliados,
        onChangeMultiSelect,
        supervisores,
        selectedSupervisor,
        selectedDate,
        handleDateChange
    }
}


