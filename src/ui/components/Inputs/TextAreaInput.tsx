import { ErrorMessage, Field, useField } from 'formik';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
interface Props {
  label?: string;
  name: string;        // Nombre del campo (nombre que se utilizará para identificar este campo en el formulario).
  [x: string]: any;    // Otras propiedades opcionales.
}


const TextAreaInput = ({ label, ...props }: Props) => {


  return (

    <div className='flex flex-col'>
      {label && <label htmlFor={props.id || props.name} className="font-bold inline w-auto">{label}</label>}
      <div className='flex flex-col w-full'>
        <Field name={props.name}>
          {({ field }:any) => (
            <ReactQuill
              value={props.values[props.name]}
              onChange={field.onChange(props.name)}
              modules={{
                toolbar: {
                  container: [
                    [{ font: [] }],
                    [{ size: ['small', false, 'large', 'huge'] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ color: [] }, { background: [] }],
                    ['link', 'image', 'video'],
                    [{ align: [] }],
                    ['clean'],
                  ]
                },
              }}
            />
          )}
        </Field>

        {/* <textarea id={props.name} className='border border-black-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 w-full' rows={4} {...field} {...props}></textarea> */}

        <ErrorMessage name={props.name} component='span' className='text-red-500 mt-1' />
      </div>
    </div>
  )
}


export default TextAreaInput;

