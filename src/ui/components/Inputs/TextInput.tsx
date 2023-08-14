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
    <div className='flex flex-col w-full'>
      {label && <label htmlFor={props.id || props.name} className={props.labelstyle ? props.labelstyle : "font-bold inline w-auto mb-3 text-sm"}>{label}</label>}
      <div className='inline w-full'>
        {/* Utilizamos el elemento input para renderizar el campo de entrada de texto */}
        {/* El 'type', 'id' y el 'name' se obtienen de las propiedades 'type', 'name' y 'id', respectivamente */}
        {/* También utilizamos el hook useField para agregar atributos y eventos al input */}
        {/* Por ejemplo, el valor del input se actualizará en el estado de 'formik' y se vincula al nombre del campo */}

        <input type="text" id={props.name} required className='border border-gray-300 px-4 py-2 rounded-xl focus:border-c2 focus:ring-c2 w-full h-[36px]' {...field} {...props}/>
      </div>
    </div>
  )
}


export default MyTextInput;

