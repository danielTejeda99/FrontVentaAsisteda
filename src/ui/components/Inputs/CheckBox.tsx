// Importamos el componente Field de 'formik'.

import { Field } from 'formik';

// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.

interface Props {
    label: string;   // Texto que se mostrará junto a la casilla de verificación.
    name: string;    // Nombre del campo (nombre que se utilizará para identificar este campo en el formulario).
    [x: string]: any; // Otras propiedades opcionales.
}

const CheckBox = ({ label, name, ...props }: Props) => {
    return (
        <div className='inline-block'>
            <label className='flex md:flex-col items-center justify-center md:text-center'>{label}

                <Field type="checkbox" name={name} value={props.value} className='ml-3 md:ml-0 rounded-md' checked={props.checked} onClick={props.onClick} /></label>
        </div>
    )
}

export default CheckBox;

