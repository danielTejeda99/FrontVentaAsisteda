'use client'
import CustomModal from '@/ui/modals';
import UserController from '@/controllers/user.controller';
import { UserForm } from '@/ui/components'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
interface Props {
    [x: string]: any
}

function EditUser({ userEdit, dataForm, idDataForm }: Props) {
    const { getAllUsers, users, itemsHead, page, setPage, searchUser, changeStatus,
        showModal, onRequestClose, messageModal, handleEditUser,
        showModalEdit, showCampos, handleShowCampos, selectedRole, selectedTypeId, onChangeSelect, roles, fetchRequest, handleSearchUser,
        handleGetBaseForm, onClickChk, handleUpdateAlliesForm, aliados, onChangeMultiSelect, supervisores,
        selectedSupervisor, selectedDate, handleDateChange } = UserController(dataForm, userEdit, idDataForm,);

    useEffect(() => {
        getAllUsers();
        fetchRequest();
        handleSearchUser(1);

    }, []);

    return (
        <div className='px-10 py-10 md:px-20 text-black'>
            <h1 className='font-bold mb-8 text-lg'>Editar Usuario</h1>
            <UserForm onSubmit={handleEditUser} roles={roles} data={userEdit} disabledEmail={true} showCampos={showCampos} handleShowCampos={handleShowCampos}
                dataForm={dataForm} onClickChk={onClickChk} showFields={handleShowCampos} handleUpdateAlliesForm={handleUpdateAlliesForm} type='edit'
                selectedRole={selectedRole} selectedTypeId={selectedTypeId} onChangeSelect={onChangeSelect}
                aliados={aliados} onChangeMultiSelect={onChangeMultiSelect} supervisores={supervisores} selectedSupervisor={selectedSupervisor} selectedDate={selectedDate}
                handleDateChange={handleDateChange} />
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
    dataForm: state.userSalesFormReducer.saleForm,
    idDataForm: state.userSalesFormReducer.id
});

export default connect(mapStateToProps)(EditUser);