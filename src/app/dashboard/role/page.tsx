'use client'
import React, { useState, useEffect } from 'react';
import { RoleForm } from '@/ui/components'
import CustomModal from '@/ui/modals'
import RoleController from '@/controllers/role.controller';
import { BiPencil } from 'react-icons/bi';

export default function Role() {
    const { token, render, handleCreateRole, permissionsAdd, onClickChk, changeShow, idShowRole, show,
        handleEditRol, showModal, onRequestClose, messageModal, handleGetRoles, permissions, roles } = RoleController()

    useEffect(() => {
        const controller = new AbortController();
        handleGetRoles();
        return () => {
            controller.abort();
        }
    }, [render])


    return (
        <div className='px-10 py-10 text-black'>
            <h1 className='font-sanchez text-c2 mb-8 text-xl'>Crear Roles</h1>
            <RoleForm permissions={permissions} onSubmit={handleCreateRole} data={undefined} type='create' permissionsAdd={permissionsAdd} onClickChk={onClickChk} />
            <h1 className='font-sanchez text-c2 my-8 text-xl'>Roles Creados</h1>
            {roles.map((item: any, index: number) => (
                <div key={index}>
                    <div className='border border-gray-300 px-4 py-2 rounded-xl mb-5 flex justify-between' key={index}>
                        <h1 className='text-black float-left'>{item.name}</h1>
                        <button onClick={() => changeShow(index)} className="float-right text-black font-bold flex items-center"><span className='border-b-2'>Editar</span> <BiPencil className="ml-2 h-5 w-5 inline-block" /> </button>
                    </div>
                    {(idShowRole == index && show) && (
                        <div className='mb-5'>
                            <RoleForm permissions={permissions} onSubmit={(value: any) => handleEditRol(value, item.id)} data={item} key={index} type='edit' permissionsAdd={permissionsAdd} onClickChk={onClickChk} />
                        </div>
                    )}
                </div>

            ))}

            <CustomModal isOpen={showModal} onClose={onRequestClose}>
                <div>
                    <h1>{messageModal.title}</h1>
                    <p>{messageModal.description}</p>
                </div>
            </CustomModal>
        </div>

    )
}
