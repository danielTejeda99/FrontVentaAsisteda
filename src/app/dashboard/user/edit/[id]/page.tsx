'use client'
import CustomModal from '@/ui/modals';
import UserController from '@/controllers/user.controller';
import { UserForm } from '@/ui/components'
import { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
interface Props {
    [x: string]: any
}

export default function EditUser() {
    const dataForm = useSelector((state: any) => state.userSalesFormReducer.saleForm);
    const userEdit = useSelector((state: any) => state.userEditReducer);
    const idDataForm = useSelector((state: any) => state.userSalesFormReducer.id);

    const { getAllUsers, users, itemsHead, page, setPage, searchUser, changeStatus,
        showModal, onRequestClose, messageModal, handleEditUser,
        showModalEdit, showCampos, handleShowCampos, selectedRole, selectedTypeId, onChangeSelect, roles, fetchRequest, handleSearchUser,
        handleGetBaseForm, onClickChk, handleUpdateAlliesForm, aliados, onChangeMultiSelect, supervisores,
        selectedSupervisor, selectedDate, handleDateChange, handleEndDateChange,selectedEndDate, handleGetUserByRol, selectedAliados, defaultAllies } = UserController(dataForm, userEdit, idDataForm,);

    useEffect(() => {
        getAllUsers();
        fetchRequest();
        handleSearchUser(1);
        handleGetUserByRol();
    }, []);

    return (
        <div className='px-20 py-10'>
            <h1 className='font-bold mb-8 text-lg'>Registrar Usuarios</h1>
            <UserForm onSubmit={handleEditUser} roles={roles} data={userEdit} disabledEmail={true} showCampos={showCampos} handleShowCampos={handleShowCampos}
                dataForm={dataForm} onClickChk={onClickChk} showFields={handleShowCampos} handleUpdateAlliesForm={handleUpdateAlliesForm} type='edit'
                selectedRole={selectedRole} selectedTypeId={selectedTypeId} onChangeSelect={onChangeSelect}
                aliados={aliados} onChangeMultiSelect={onChangeMultiSelect} supervisores={supervisores} selectedSupervisor={selectedSupervisor} selectedDate={selectedDate}
                handleDateChange={handleDateChange} handleEndDateChange={handleEndDateChange} selectedEndDate={selectedEndDate} defaultValueMultiSelect={userEdit.allies}/>
            <CustomModal isOpen={showModal} onClose={onRequestClose}>
                <div>
                    <h1>{messageModal.title}</h1>
                    <p>{messageModal.description}</p>
                </div>
            </CustomModal>
        </div>
    )
}


