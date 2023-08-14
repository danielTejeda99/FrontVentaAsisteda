// Importamos el componente Button de la librería 'flowbite-react' y React.
import { Button } from 'flowbite-react';
import { Field, useField } from 'formik';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
// Definimos el componente CustomButtons, que acepta dos propiedades (props) como argumentos: onClick y title.
export default function CustomButtons({ onClick, title, icon, color, formik, ...props }: any) {
  // const [field] = useField(props);

  return (
    <div>
      {formik ? (
        <button type='submit'  onClick={onClick} className='bg-blue-500 flex py-4 px-3 items-center justify-center rounded-md md:float-right text-white hover:bg-blue-700 w-full md:w-auto'>
        {title}
        </button>
      ) : (<Button className={`w-full ${color ? color : 'bg-blue-500'} text-white`} onClick={onClick}>
        {icon === 'edit' && <BiEdit className="mr-2 h-5 w-5" />}
        {title}
      </Button>)}

    </div>
    // Renderizamos el componente Button con las siguientes configuraciones:

  )
}