// Importamos los componentes Field y ErrorMessage de 'formik'.
import { Field, ErrorMessage } from 'formik';

// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.
interface Props {
    label: string;       // Texto que se mostrará junto al campo de selección.
    name: string;        // Nombre del campo (nombre que se utilizará para identificar este campo en el formulario).
    data: Children[];    // Un array de objetos que contiene las opciones para el campo de selección.
    [x: string]: any;    // Otras propiedades opcionales.
}

// Definimos una interfaz llamada 'Children' que describe la estructura de los objetos de opciones.
interface Children {
    name: string;       // Texto que representa el nombre de la opción.
    value: string | number | undefined; // Valor que representa el valor de la opción.
}

const CustomSelect = ({ label, name, data, ...props }: Props) => {
    return (
        <div className='flex flex-col'>
            <label htmlFor={name} className={props.labelstyle ?props.labelstyle: "font-bold inline w-auto"}>{label}</label>
            {/* Utilizamos el componente Field de 'formik' para renderizar el campo de selección */}
            {/* Usamos 'as="select"' para especificar que queremos que se renderice como una lista desplegable */}
            {/* El 'id' y el 'name' se obtienen de la propiedad 'name', y se asocia a las etiquetas 'for' y 'name' */}
            {/* También podemos utilizar otras propiedades opcionales pasadas a través de 'props'. */}

            <Field as="select" id={name} name={name} className='border border-black-300 h-full rounded-md focus:outline-none focus:border-blue-500 w-full'
            onChange={props.onChange} value={props.value}>
                {/* Mapeamos las opciones proporcionadas en la propiedad 'data' y las mostramos como elementos de la lista desplegable */}

                {data.map((item: Children, index: number) => (
                    <option value={item.value} key={index}>{item.name}</option>
                )
                )}
            </Field >
            {/* Utilizamos el componente ErrorMessage de 'formik' para mostrar un mensaje de error si existe algún error de validación */}

            <ErrorMessage name={name} component="div" />
        </div>
    )
}


export default CustomSelect;

