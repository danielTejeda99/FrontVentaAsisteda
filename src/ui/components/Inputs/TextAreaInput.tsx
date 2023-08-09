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
      <div className='flex flex-col w-full'>
        <textarea id={props.name} className='border border-black-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 w-full' rows={4} {...field} {...props}></textarea>

        <ErrorMessage name={props.name} component='span' className='text-red-500 mt-1' />
      </div>
    </div>
  )
}


export default TextAreaInput;

