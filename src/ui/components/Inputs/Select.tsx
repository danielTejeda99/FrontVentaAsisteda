import { Field, ErrorMessage } from 'formik';

interface Props {
    label: string;      
    name: string;        
    data: Children[];   
    [x: string]: any;    
}

interface Children {
    name: string;       
    value: string | number | undefined; 
}

const CustomSelect = ({ label, name, data, ...props }: Props) => {
    return (
        <div className='flex flex-col'>
            <label htmlFor={name} className={props.labelstyle ?props.labelstyle: "font-bold inline w-auto"}>{label}</label>

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

