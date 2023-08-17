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
        <div className='flex flex-col items-center justify-center '>
            <label className='flex md:flex-row-reverse items-center md:justify-center'>{label}
                {/* Utilizamos el componente Field de 'formik' para renderizar la casilla de verificación */}
                {/* El 'type' es 'checkbox', el 'name' se obtiene de la propiedad 'name', el 'value' se obtiene de la propiedad 'value'. */}
                {/* También podemos utilizar otras propiedades opcionales pasadas a través de 'props', como 'checked' y 'onClick'. */}

                <Field type="checkbox" name={name} value={props.value} className='ml-3 text-c2 md:mr-3 rounded-md' checked={props.checked} onClick={props.onClick} /></label>
        </div>
    )
}

export default CheckBox;

