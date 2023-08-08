import { ErrorMessage, useField } from 'formik';

interface Props {
  label?: string;
  name: string;        // Nombre del campo (nombre que se utilizará para identificar este campo en el formulario).
  [x: string]: any;    // Otras propiedades opcionales.
}

const TextAreaInput = ({ label, ...props }: Props) => {

  const [field] = useField(props);

  return (

    <div className='flex flex-col'>
      {label && <label htmlFor={props.id || props.name} className="font-bold inline w-auto">{label}</label>}
      <div className='flex w-full flex-col'>
        {/* Utilizamos el elemento textarea para renderizar el campo de texto */}
        {/* El 'id' y el 'name' se obtienen de la propiedad 'name', y se asocia a las etiquetas 'for' y 'name' */}
        {/* También utilizamos el hook useField para agregar atributos y eventos al textarea */}
        {/* Por ejemplo, el valor del textarea se actualizará en el estado de 'formik' y se vincula al nombre del campo */}

        <textarea id={props.name} className='border border-black-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 w-full' rows={4} {...field} {...props}></textarea>
        {/* Utilizamos el componente ErrorMessage de 'formik' para mostrar un mensaje de error si existe algún error de validación */}

        <ErrorMessage name={props.name} component='span' className='text-red-500 mt-1' />
      </div>
    </div>
  )
}


export default TextAreaInput;

