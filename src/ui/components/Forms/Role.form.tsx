// Importamos los componentes necesarios de la librería '@/ui/components', 'formik' y otros módulos requeridos.

import { MyFormik } from '@/ui/components'
import { Form } from 'formik'
import { TextInput, TextAreaInput, CheckBox, Toggle } from '@/ui/components'
import { BiPencil } from 'react-icons/bi';
// Definimos una interfaz llamada 'permissions' que describe la estructura de los objetos de permisos.

interface permissions {
    name: string,
    value: string
}

// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.
interface Props {
    permissions: permissions[];    // Un array de objetos de permisos.
    onSubmit: any;                 // Una función que se ejecutará cuando se envíe el formulario.
    data: any | undefined;         // Datos del rol a editar (si se está editando).
    type: string;                  // Tipo del formulario ('create' o 'edit').
    permissionsAdd: object[];      // Array de permisos adicionales.
    [x: string]: any;              // Otras propiedades opcionales.
}

// Declaramos el componente funcional RoleForm, que acepta las propiedades especificadas en la interfaz Props.
const RoleForm = ({ permissions, onSubmit, data, type, permissionsAdd, ...props }: Props) => {
    // Definimos reglas de validación para el formulario.
    const validations = [{
        name: 'nameRol',
        type: 'string',
        required: true
    },
    {
        name: 'descriptionRol',
        type: 'string',
        required: true
    }]
    // Definimos los valores iniciales del formulario, basados en los datos del rol a editar (si los hay) o valores predeterminados si es un nuevo rol.

    const initialValues = data ? {
        nameRol: data.name,
        descriptionRol: data.description,
        isActive: data.isActive,
        id: data.id
    } : {
        nameRol: '',
        descriptionRol: '',
        isActive: true,
        id: null,
        permissions: []
    }
    return (
        <MyFormik
            initialValues={initialValues}
            onSubmit={onSubmit}
            form={() => (
                <Form className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                    <div className='space-y-5'>
                        <TextInput
                            label="Nombre del rol"
                            name="nameRol"
                        />
                        <TextAreaInput
                            label="Descripción del rol"
                            name="descriptionRol"
                            labelstyle="mt-3"
                        />
                    </div>
                    <div className='flex flex-col '>
                        <p className='text-c2 font-sanchez'>Permisos</p>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 shadow-md p-3 h-full w-full rounded-xl mt-5 md:place-items-center'>

                            {permissions.map((item: permissions, index: number) => (
                                // Mostramos una lista de CheckBoxes para los diferentes permisos disponibles.
                                // Si el formulario es de edición ('type' === 'edit'), comprobamos si el permiso está presente en 'permissionsAdd' para marcar el checkbox.
                                // Si es un formulario de creación ('type' === 'create'), los checkboxes estarán sin marcar.

                                <CheckBox key={index} label={item.name}
                                    name="permissions" value={item.value} checked={type === 'create' ? undefined : permissionsAdd.some((x: any) => x.value === item.value && x.id === data.id)} onClick={type === 'create' ? undefined : () => props.onClickChk(item, data.id)} />
                            ))}
                        </div>
                    </div>


                    <div className='flex justify-center items-center mt-3'>
                        {/* Si el formulario es de edición, mostramos un componente Toggle para activar o desactivar el rol. */}

                        {type === 'edit' ? <Toggle label='Activar o desactivar rol' name='isActive' checked={data.isActive} /> : null}
                    </div>




                    {/* Botón para enviar el formulario con el texto correspondiente según el tipo de formulario ('create' o 'edit'). */}
                    <div className='flex place-content-end'>
                    <button type='submit' className='bg-c1 flex py-3 px-5 items-center justify-center rounded-xl w-auto  text-black font-bold mt-5'>
                        <BiPencil className="mr-2 h-5 w-5" />
                        {type === 'create' ? 'Crear Rol' : 'Guardar cambios'}
                    </button>
                    </div>
                    


                </Form>
            )
            }
            validation={validations}
        />
    )
}


export default RoleForm;

