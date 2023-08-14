// Importamos el componente ErrorMessage y la función useField de 'formik'.
import { ErrorMessage, useField } from 'formik';

// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.
interface Props {
  label?: string;       // Texto que se mostrará junto al campo de texto.
  name: string;        // Nombre del campo (nombre que se utilizará para identificar este campo en el formulario).
  [x: string]: any;    // Otras propiedades opcionales.
}

const TextAreaInput = ({ label, ...props }: Props) => {

  const [field] = useField(props);

  return (

    <div className='flex flex-col'>
      {label && <label htmlFor={props.id || props.name} className="font-bold mr-3 inline w-full">{label}</label>}
      <div className='inline flex flex-col w-full'>

        <textarea id={props.name} className='text-sm border border-black-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500' rows={4} {...field} {...props}></textarea>

        <ErrorMessage name={props.name} component='span' className='text-red-500 mt-1' />
      </div>
    </div>
  )
}


export default TextAreaInput;

