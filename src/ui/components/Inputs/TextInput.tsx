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
    <div className='flex flex-coll'>
      {label && <label htmlFor={props.id || props.name} className={props.labelstyle ? props.labelstyle : "font-bold inline w-auto"}>{label}</label>}
      <div className='inline w-full'>
        <input type="text" id={props.name} className='border border-black-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 w-full' {...field} {...props}/>
      </div>
    </div>
  )
}


export default MyTextInput;

