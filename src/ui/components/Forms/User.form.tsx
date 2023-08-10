// Importamos los componentes necesarios de la librería '@/ui/components', 'formik' y otros módulos requeridos.
import { Form, Field } from 'formik'
import { TextInput, CustomSelect, MyFormik, SalesForm, DatePicker, MultiSelect, Toggle, NonEssentialForm } from '@/ui/components'
import { BiPlusCircle } from 'react-icons/bi';

// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.
interface Props {
    onSubmit: any;  // Una función que se ejecutará cuando se envíe el formulario.
    roles: any;     // Datos de roles para la lista desplegable.
    [x: string]: any
}
// Declaramos el componente funcional UserForm, que acepta las propiedades especificadas en la interfaz Props.

function UserForm({ onSubmit, roles, data, disabledEmail, showCampos, handleShowCampos, dataForm, onClickChk, showFields,
    handleUpdateAlliesForm, onChangeSelect, selectedRole, type, selectedTypeId, aliados, onChangeMultiSelect, supervisores, selectedSupervisor,
    selectedDate, handleDateChange, handleEndDateChange, selectedEndDate, defaultValueMultiSelect,nonEssentialForm, onClickChkNonEssential }: Props) {
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
        supervisor: null,
        isActive: true,
        usagePolicyParticular: ''
    }

    const typesId = [{ name: 'Seleccionar', value: '' }, { name: 'CC', value: 'CC' }, { name: 'NIT', value: 'NIT' }]
    return (
        <div className='text-black'>
            <MyFormik
                initialValues={data ? data : initialValues}
                onSubmit={onSubmit}
                form={({ values, handleChange, handleSubmit }:any) => (
                    <Form className='space-y-6 pb-20 '>
                        <TextInput
                            label="Nombres"
                            name="name"
                            placeholder='Ingrese el nombre'
                        />
                        <TextInput
                            label="Apellidos"
                            name="lastName"
                            placeholder='Ingrese los apellidos'
                        />
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {/* Usamos el componente CustomSelect para mostrar una lista desplegable para el campo 'typeId'. */}
                            <TextInput
                                label="N° documento"
                                name="id"
                                placeholder='Ingrese el N° de documento'
                            />
                            <CustomSelect label="Tipo documento"//TODO: AGREGAR onChange
                                name="typeId" data={typesId}
                                labelstyle="font-bold mr-3 inline w-50"
                                onChange={(event: any) => onChangeSelect(event.target.value, 'typeId')}
                                value={selectedTypeId} />

                        </div>
                        <TextInput

                            label="Dirección de residencia"

                            name="address"

                            placeholder='Ingrese la dirección de residencia'

                        />

                        <TextInput

                            label="Correo electrónico"

                            name="email"

                            disabled={disabledEmail}

                            placeholder='Ingrese el correo electrónico'

                        />


                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <TextInput
                                label="Teléfono"
                                name="number"
                                placeholder='Ingrese el télefono'
                            />


                            {/* Usamos otro componente CustomSelect para mostrar una lista desplegable para el campo 'roleId' (Rol del usuario). */}

                            <CustomSelect label="Rol del usuario"
                                name="roleId" data={roles}
                                labelstyle="font-bold mr-3 inline w-50"
                                onChange={(event: any) => onChangeSelect(event.target.value, 'role')}
                                value={selectedRole} />

                            {selectedRole == 3 && <>
                                <DatePicker label='Fecha de ingreso' selectedDate={selectedDate} handleDateChange={handleDateChange} />
                                <CustomSelect label="Supervisor"
                                    name="supervisor" data={supervisores}
                                    labelstyle="font-bold mr-3 inline w-50"
                                    onChange={(event: any) => onChangeSelect(event.target.value, 'supervisor')}
                                    value={selectedSupervisor} />
                            </>}
                        </div>

                        {selectedRole == 3 && <div className='flex'>
                            <div className=''><label htmlFor='name' className={"font-bold mr-3 inline w-full"}>Aliados asignados</label></div>
                            <div className='w-full'><MultiSelect label="Aliados asignados"
                                options={aliados} onChange={onChangeMultiSelect} defaultValue={defaultValueMultiSelect} /></div>
                        </div>}
                        <div className='grid grid-cols-2 gap-4 '>
                            {data && <Toggle label='Activar o desactivar usuario' name='isActive' checked={data.isActive} />}
                            <Field name="isActive">
                                {({ field }: any) => (
                                    (data && !field.value) && <div className='flex'>
                                        <div className=''><label htmlFor='name' className={"font-bold mr-3 inline w-full"}>Fecha de retiro</label></div>
                                        <div className='w-full'><DatePicker label='Fecha de retiro' selectedDate={selectedEndDate} handleDateChange={handleEndDateChange} block={type === 'edit' ? true : false} /></div>
                                    </div>
                                )}
                            </Field>

                        </div>



                        {selectedRole == 4 && 
                            <>
                            <SalesForm dataForm={dataForm} onClickChk={onClickChk} values={values} /> 
                            <NonEssentialForm dataForm={nonEssentialForm} onClickChk={onClickChkNonEssential} /> 
                            </>}


                        <button type='submit' className='bg-blue-500 flex py-4 px-3 items-center justify-center rounded-md md:float-right text-white hover:bg-blue-700 w-full md:w-auto'>
                            {data ? 'Guardar cambios' : 'Crear usuario'}
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

