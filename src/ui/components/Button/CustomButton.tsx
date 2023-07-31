// Importamos el componente Button de la librería 'flowbite-react' y React.
import { Button } from 'flowbite-react';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
// Definimos el componente CustomButtons, que acepta dos propiedades (props) como argumentos: onClick y title.
export default function CustomButtons({onClick,title,icon, color}:any){
  return(
    // Renderizamos el componente Button con las siguientes configuraciones:
    <Button className={`w-full ${color ? color : 'bg-blue-500'} text-white`} onClick={onClick}>
       {icon === 'edit' && <BiEdit className="mr-2 h-5 w-5" />}
      {title}
    </Button>
  )
}