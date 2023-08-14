'use client'
import { UserForm } from '@/ui/components'
import React, { useEffect } from 'react';
import  CustomModal  from '@/ui/modals';
import UserController from '@/controllers/user.controller';
import { useSelector } from 'react-redux';


export default function User(){
    const dataForm = useSelector((state: any) => state.userSalesFormReducer.saleForm);
    const {fetchRequest,handleCreateUser,roles,showModal,
         onRequestClose, messageModal,  
        showCampos, handleShowCampos, onChangeSelect, selectedRole, selectedTypeId,
        onClickChk, handleUpdateAlliesForm, handleGetBaseForm, handleGetUserByRol,aliados, onChangeMultiSelect, supervisores,
        selectedSupervisor,selectedDate,handleDateChange} = UserController(dataForm);    

    useEffect(() => {
        fetchRequest();
        handleGetBaseForm();  
        handleGetUserByRol();
    }, [])

    return (
        <div className='px-5 py-5 md:px-10  text-black'>
            <h1 className='font-sanchez text-c2 mb-8 text-xl'>Crear Usuario</h1>
            <UserForm onSubmit={handleCreateUser} roles={roles} showCampos={showCampos} handleShowCampos={handleShowCampos} 
                    dataForm={dataForm} onClickChk={onClickChk} showFields={handleShowCampos} handleUpdateAlliesForm={handleUpdateAlliesForm} 
                    onChangeSelect={onChangeSelect} selectedRole={selectedRole} type='create' selectedTypeId={selectedTypeId} aliados={aliados}
                    onChangeMultiSelect={onChangeMultiSelect} supervisores={supervisores} selectedSupervisor={selectedSupervisor} selectedDate={selectedDate}
                    handleDateChange={handleDateChange}/>
            <CustomModal isOpen={showModal} onClose={onRequestClose}>
                <div>
                    <h1>{messageModal.title}</h1>
                    <p>{messageModal.description}</p>
                </div>
            </CustomModal>
        </div>
    )
}
