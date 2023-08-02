'use client'
import { UserForm } from '@/ui/components'
import React, { useState, useEffect } from 'react';
import  CustomModal  from '@/ui/modals';
import UserController from '@/controllers/user.controller';
import { connect } from 'react-redux';

interface Props{
    [x:string]: any
}


function User({dataForm}:Props) {
    const {fetchRequest,handleCreateUser,roles,showModal,
         onRequestClose, messageModal, handleEditUser, 
        showModalEdit, showCampos, handleShowCampos, onChangeSelect, selectedRole, selectedTypeId,
        onClickChk, handleUpdateAlliesForm, handleGetBaseForm, handleGetUserByRol,aliados, onChangeMultiSelect, supervisores,
        selectedSupervisor,selectedDate,handleDateChange} = UserController(dataForm);    

    useEffect(() => {
        fetchRequest();
        handleGetBaseForm();  
        handleGetUserByRol();
    }, [])

    return (
        <div className='px-20 py-10'>
            <h1 className='font-bold mb-8 text-lg'>Registrar Usuarios</h1>
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


const mapStateToProps = (state: any) => ({
    userEdit: state.userEditReducer,
    dataForm: state.userSalesFormReducer.saleForm
});

export default connect(mapStateToProps)(User);