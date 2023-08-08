'use client'
import { useEffect, useState } from 'react';
import UserController from "@/controllers/user.controller"
import RoleController from "@/controllers/role.controller"
import { Table,UserEditModal } from '@/ui/components';
import { SearchUser} from '@/ui/components'
import { useSearchParams } from 'next/navigation';
import { Pagination } from 'flowbite-react';


export default function () {
    const searchParams = useSearchParams();
    const { getAllUsers, users, itemsHead, page, setPage, searchUser, changeStatus,
        render, showModal, onRequestClose, messageModal, handleEditUser, 
        showModalEdit, showCampos, handleShowCampos, selectedRole,selectedTypeId,onChangeSelect, roles, fetchRequest,
        handleGetBaseForm,  onClickChk, handleUpdateAlliesForm } = UserController();



    useEffect(() => {
        getAllUsers();
        handleGetBaseForm();
        fetchRequest();
    }, [page, render]);

    return (
        <div>
            <SearchUser submit={(value: string) => searchUser(value)} />
            <Table itemHead={itemsHead} data={users} setCurrentPage={setPage} page={page} changeStatus={changeStatus} editUser={showModalEdit} />
            <Pagination
                currentPage={page}
                onPageChange={page => { setPage(page) }}
                totalPages={10}
                className='p-5 mb-5'
            />      

        </div>
    )
}

