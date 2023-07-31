// Importamos el componente Field de 'formik'.
import { Field } from 'formik';

// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.
interface Props {
    label: string;    // Texto que se mostrará junto al interruptor de palanca.
    name: string;     // Nombre del interruptor de palanca (nombre que se utilizará para identificar este campo en el formulario).
    [x: string]: any; // Otras propiedades opcionales.
}

// Declaramos el componente funcional Toggle, que acepta las propiedades especificadas en la interfaz Props.
const Toggle = ({ label, ...props }: Props) => {
    return (
        <>
            {/* Mostramos el texto 'label' junto al interruptor de palanca */}
            <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
            {/* Utilizamos un label y un input con el tipo 'checkbox' para simular el interruptor de palanca */}
            <label className="relative inline-flex items-center mb-4 cursor-pointer" htmlFor={props.name}>
                <Field type="checkbox" id={props.name} name={props.name} className="sr-only peer" />
                {/* Creamos una representación visual del interruptor de palanca con estilos */}
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </>
    );
};

// Exportamos el componente Toggle para que pueda ser utilizado en otros archivos.
export default Toggle;
