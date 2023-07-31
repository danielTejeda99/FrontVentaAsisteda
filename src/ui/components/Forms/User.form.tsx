// Importamos los componentes necesarios de la librería '@/ui/components', 'formik' y otros módulos requeridos.

import { Form, } from 'formik'
import { TextInput, CustomSelect, MyFormik, SalesForm, DatePicker, MultiSelect } from '@/ui/components'

// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.
interface Props {
    onSubmit: any;  // Una función que se ejecutará cuando se envíe el formulario.
    roles: any;     // Datos de roles para la lista desplegable.
    [x: string]: any
}
// Declaramos el componente funcional UserForm, que acepta las propiedades especificadas en la interfaz Props.

function UserForm({ onSubmit, roles, data, disabledEmail, showCampos, handleShowCampos, dataForm, onClickChk, showFields,
    handleUpdateAlliesForm, onChangeSelect, selectedRole, type, selectedTypeId, aliados, onChangeMultiSelect, supervisores, selectedSupervisor,
    selectedDate, handleDateChange }: Props) {
    // Definimos reglas de validación para el formulario.

    const validations = [{
        name: 'name',
        type: 'string',
        required: true
    },
    {
        name: 'lastName',
        type: 'string',
        required: true
    },
    {
        name: 'id',
        type: 'string',
        required: true
    },
    {
        name: 'address',
        type: 'string',
        required: true
    },
    {
        name: 'email',
        type: 'email',
        required: true
    },
    {
        name: 'number',
        type: 'number',
        required: true
    }]
    // Definimos los valores iniciales del formulario con campos vacíos y el roleId inicialmente como nulo.

    const initialValues = {
        name: '',
        lastName: '',
        id: '',
        address: '',
        email: '',
        number: '',
        typeId: null,
        roleId: null,
        usagePolicy: '',
        aliados: null,
        supervisor: null
    }

    const typesId = [{ name: 'Seleccionar', value: '' }, { name: 'CC', value: 'CC' }, { name: 'NIT', value: 'NIT' }]
    return (
        <div>
            <MyFormik
                initialValues={data ? data : initialValues}
                onSubmit={onSubmit}
                form={() => (
                    <Form className='space-y-10 pb-20 '>
                        <TextInput
                            label="Nombres"
                            name="name"
                        />
                        <TextInput
                            label="Apellidos"
                            name="lastName"
                        />
                        <div className='grid grid-cols-2 gap-4 '>
                            {/* Usamos el componente CustomSelect para mostrar una lista desplegable para el campo 'typeId'. */}

                            <CustomSelect label="Tipo documento"//TODO: AGREGAR onChange
                                name="typeId" data={typesId}
                                labelstyle="font-bold mr-3 inline w-50"
                                onChange={(event: any) => onChangeSelect(event.target.value, 'typeId')}
                                value={selectedTypeId} />
                            <TextInput
                                label="N° documento"
                                name="id"
                                labelstyle="font-bold mr-3 inline w-50"
                            />
                        </div>

                        <TextInput
                            label="Dirección de residencia"
                            name="address"
                        />
                        <TextInput
                            label="Correo electrónico"
                            name="email"
                            disabled={disabledEmail}
                        />
                        <div className='grid grid-cols-2 gap-4 '>
                            <TextInput
                                label="Teléfono"
                                name="number"
                                labelstyle="font-bold mr-3 inline w-50"
                            />

                            {/* Usamos otro componente CustomSelect para mostrar una lista desplegable para el campo 'roleId' (Rol del usuario). */}

                            <CustomSelect label="Rol del usuario"
                                name="roleId" data={roles}
                                labelstyle="font-bold mr-3 inline w-50"
                                onChange={(event: any) => onChangeSelect(event.target.value, 'role')}
                                value={selectedRole} />


                            {selectedRole == 3 && <DatePicker label='Fecha de ingreso' selectedDate={selectedDate} handleDateChange={handleDateChange} />}
                            {selectedRole == 3 && <CustomSelect label="Supervisor"
                                name="supervisor" data={supervisores}
                                labelstyle="font-bold mr-3 inline w-50"
                                onChange={(event: any) => onChangeSelect(event.target.value, 'supervisor')}
                                value={selectedSupervisor} />}

                            {selectedRole == 3 && <MultiSelect label="Aliados asignados"
                                options={aliados} onChange={onChangeMultiSelect} />}



                        </div>
                        {selectedRole == 4 && <SalesForm showCampos={showCampos} handleShowCampos={handleShowCampos}
                            dataForm={dataForm} onClickChk={onClickChk} showFields={showFields} type={type} handleUpdateAlliesForm={handleUpdateAlliesForm} />}


                        <button type='submit' className='bg-blue-500 px-8 py-2 rounded-md float-right text-white'>
                            {data ? 'Editar usuario' : 'Crear usuario'}
                        </button>

                    </Form>
                )
                }
                validation={validations}
            />
        </div>

    )
}


export default UserForm;

