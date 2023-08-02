import CustomModal from '@/ui/modals';

import { UserForm, CardComponent, CheckBox } from '@/ui/components'

interface Props {
    [x: string]: any
}
const UserEditModal = ({ showModal, onRequestClose, userEdit, handleEditUser, handleShowCampos, showCampos, dataForm, 
    onClickChk, handleUpdateAlliesForm,showFields,roles, selectedRole,selectedTypeId, onChangeSelect }: Props) => {


    return (
        <CustomModal isOpen={showModal} onClose={onRequestClose}>
            {showModal &&
                <div className='text-sm'>
                    <UserForm onSubmit={handleEditUser} roles={roles} data={userEdit} disabledEmail={true} showCampos={showCampos} handleShowCampos={handleShowCampos} 
                    dataForm={dataForm} onClickChk={onClickChk} showFields={showFields} handleUpdateAlliesForm={handleUpdateAlliesForm} type='edit'
                    selectedRole={selectedRole} selectedTypeId={selectedTypeId} onChangeSelect={onChangeSelect}/>                   
                    
                </div>
            }
        </CustomModal>
    );
};

// Exportamos el componente MyFormik para que pueda ser utilizado en otros archivos.
export default UserEditModal;
