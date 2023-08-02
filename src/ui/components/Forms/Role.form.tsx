// Importamos los componentes necesarios de la librería '@/ui/components', 'formik' y otros módulos requeridos.

import { MyFormik } from '@/ui/components'
import { Form } from 'formik'
import { TextInput, TextAreaInput, CheckBox, Toggle } from '@/ui/components'
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
                <Form className='space-y-10'>
                    <TextInput
                        label="Nombre del rol"
                        name="nameRol"
                    />
                    <TextAreaInput
                        label="Descripción rol"
                        name="descriptionRol"
                    />
                    <div className='grid grid-cols-2 gap-4 '>

                        {permissions.map((item: permissions, index: number) => (
                            // Mostramos una lista de CheckBoxes para los diferentes permisos disponibles.
                            // Si el formulario es de edición ('type' === 'edit'), comprobamos si el permiso está presente en 'permissionsAdd' para marcar el checkbox.
                            // Si es un formulario de creación ('type' === 'create'), los checkboxes estarán sin marcar.

                            <CheckBox key={index} label={item.name}
                                name="permissions" value={item.value} checked={type === 'create' ? undefined : permissionsAdd.some((x: any) => x.value === item.value && x.id === data.id)} onClick={type === 'create' ? undefined : () => props.onClickChk(item, data.id)} />
                        ))}
                    </div>
                    <div className="flex justify-between">
                        <div className="float-left">
                            {/* Si el formulario es de edición, mostramos un componente Toggle para activar o desactivar el rol. */}

                            {type === 'edit' ? <Toggle label='Activar o desactivar rol' name='isActive' checked={data.isActive} /> : null}</div>
                        <div className="float-right">
                            {/* Botón para enviar el formulario con el texto correspondiente según el tipo de formulario ('create' o 'edit'). */}

                            <button type='submit' className='bg-gray-200 px-8 py-2 rounded-md'>
                                {type === 'create' ? 'Crear Rol' : 'Guardar cambios'}
                            </button></div>
                    </div>
                </Form>
            )
            }
            validation={validations}
        />
    )
}


export default RoleForm;

