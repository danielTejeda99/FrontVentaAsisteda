'use client'
import CustomModal from '@/ui/modals';
import UserController from '@/controllers/user.controller';
import { UserForm } from '@/ui/components'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function EditUser() {
    const dataForm = useSelector((state: any) => state.userSalesFormReducer.saleForm);
    const userEdit = useSelector((state: any) => state.userEditReducer);
    const idDataForm = useSelector((state: any) => state.userSalesFormReducer.id);

    const { getAllUsers,
        showModal, onRequestClose, messageModal, handleEditUser,
        showCampos, handleShowCampos, selectedRole, selectedTypeId, onChangeSelect, roles, fetchRequest, handleSearchUser,
        onClickChk, handleUpdateAlliesForm, aliados, onChangeMultiSelect, supervisores,
        selectedSupervisor, selectedDate, handleDateChange, handleEndDateChange, selectedEndDate, handleGetUserByRol } = UserController(dataForm, userEdit, idDataForm,);

    useEffect(() => {
        getAllUsers();
        fetchRequest();
        handleSearchUser(1);
        handleGetUserByRol();
    }, []);

    return (
        <div className='px-5 py-5 md:px-10 text-black'>
            <h1 className='font-sanchez text-c2 mb-8 text-2xl'>Editar Usuario</h1>
            <UserForm onSubmit={handleEditUser} roles={roles} data={userEdit} disabledEmail={true} showCampos={showCampos} handleShowCampos={handleShowCampos}
                dataForm={dataForm} onClickChk={onClickChk} showFields={handleShowCampos} handleUpdateAlliesForm={handleUpdateAlliesForm} type='edit'
                selectedRole={selectedRole} selectedTypeId={selectedTypeId} onChangeSelect={onChangeSelect}
                aliados={aliados} onChangeMultiSelect={onChangeMultiSelect} supervisores={supervisores} selectedSupervisor={selectedSupervisor} selectedDate={selectedDate}
                handleDateChange={handleDateChange} handleEndDateChange={handleEndDateChange} selectedEndDate={selectedEndDate} defaultValueMultiSelect={userEdit.allies} />
            <CustomModal isOpen={showModal} onClose={onRequestClose}>
                <div>
                    <h1>{messageModal.title}</h1>
                    <p>{messageModal.description}</p>
                </div>
            </CustomModal>
        </div>
    )
}


