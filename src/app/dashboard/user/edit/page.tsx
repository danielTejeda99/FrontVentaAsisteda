'use client'
import { useEffect } from 'react';
import UserController from "@/controllers/user.controller"
import { Table } from '@/ui/components';
import { SearchUser } from '@/ui/components'
import { Pagination } from 'flowbite-react';


export default function UserEditById() {
    const { getAllUsers, users, itemsHead, page, setPage, searchUser, changeStatus,
        render,
        showModalEdit, fetchRequest,
        handleGetBaseForm } = UserController();
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

