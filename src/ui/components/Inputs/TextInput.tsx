import { ErrorMessage, useField } from 'formik';


// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.
interface Props {
  label: string;                  // Texto que se mostrará junto al campo de entrada de texto.
  name: string;                   // Nombre del campo (nombre que se utilizará para identificar este campo en el formulario).
  type?: 'text' | 'email' | 'password'; // Tipo del campo de entrada de texto ('text' por defecto si no se proporciona).
  placeholder?: string;           // Texto de marcador de posición para el campo de entrada de texto.
  [x: string]: any;               // Otras propiedades opcionales.
}
// Declaramos el componente funcional MyTextInput, que acepta las propiedades especificadas en la interfaz Props.

const MyTextInput = ({ label, ...props }: Props) => {
  // Utilizamos el hook useField de 'formik' para obtener los atributos y eventos relacionados con el campo.

  const [field] = useField(props);

  return (
    <div className='flex '>
      {label && <label htmlFor={props.id || props.name} className={props.labelstyle ? props.labelstyle : "font-bold mr-3 inline w-15"}>{label}</label>}
      <div className='inline flex flex-col w-85'>
        {/* Utilizamos el elemento input para renderizar el campo de entrada de texto */}
        {/* El 'type', 'id' y el 'name' se obtienen de las propiedades 'type', 'name' y 'id', respectivamente */}
        {/* También utilizamos el hook useField para agregar atributos y eventos al input */}
        {/* Por ejemplo, el valor del input se actualizará en el estado de 'formik' y se vincula al nombre del campo */}

        <input type="text" id={props.name} className='border border-black-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 w-full' {...field} {...props}/>
        {/* Utilizamos el componente ErrorMessage de 'formik' para mostrar un mensaje de error si existe algún error de validación */}

        {/* <ErrorMessage name={props.name} component='span' className='text-red-500 mt-1' /> */}
      </div>
    </div>
  )
}


export default MyTextInput;

