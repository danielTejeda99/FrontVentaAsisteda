'use client'
import { useEffect } from 'react';
import UserController from "@/controllers/user.controller"
import { Table } from '@/ui/components';
import { SearchUser } from '@/ui/components'
import { Pagination, Flowbite } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react'

const customTheme: CustomFlowbiteTheme = {
    pagination:{
        pages:{
            selector:{
                active:'bg-c2 text-white'
            }
        }
    }
}


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
            <Flowbite theme={{ theme: customTheme }}>
            <Pagination
                currentPage={page}
                onPageChange={page => { setPage(page) }}
                totalPages={10}
                showIcons
                nextLabel=''
                previousLabel=''
                className='p-5 float-right mb-5'
            />     
            </Flowbite> 
            
        </div>
    )
}

