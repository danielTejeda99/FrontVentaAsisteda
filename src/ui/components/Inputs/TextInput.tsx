import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;                 
  name: string;                   
  type?: 'text' | 'email' | 'password'; 
  placeholder?: string;          
  [x: string]: any;               
}

const MyTextInput = ({ label, ...props }: Props) => {

  const [field] = useField(props);

  return (
    <div className='flex flex-col'>
      {label && <label htmlFor={props.id || props.name} className={props.labelstyle ? props.labelstyle : "font-bold inline w-auto"}>{label}</label>}
      <div className='inline w-full'>
        {/* Utilizamos el elemento input para renderizar el campo de entrada de texto */}
        {/* El 'type', 'id' y el 'name' se obtienen de las propiedades 'type', 'name' y 'id', respectivamente */}
        {/* También utilizamos el hook useField para agregar atributos y eventos al input */}
        {/* Por ejemplo, el valor del input se actualizará en el estado de 'formik' y se vincula al nombre del campo */}

        <input type="text" id={props.name} className='border border-black-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 w-full' {...field} {...props}/>
      </div>
    </div>
  )
}


export default MyTextInput;

