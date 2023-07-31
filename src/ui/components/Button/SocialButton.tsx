
import React from 'react';
import { FaMicrosoft, FaFacebook, FaGoogle} from 'react-icons/fa';
// Definimos una interfaz llamada Props que describe las propiedades que acepta el componente.
interface Props {
    onClick: any;   // Una función que se ejecutará cuando se haga clic en el botón.
    title: string;  // El texto que se mostrará junto al icono del botón.
    type: string;   // El tipo de botón que se mostrará (ms: Microsoft, fb: Facebook, gg: Google).
  }
  
  // Declaramos el componente funcional SocialButtons, que acepta las propiedades especificadas en la interfaz Props.
  

const SocialButtons: React.FC<Props> = ({ onClick, title, type }) => {
    return (
        // Renderizamos un botón con diferentes iconos y estilos basados en el valor de la propiedad 'type'.
        <button className='w-full border-2 flex items-center justify-center px-4 py-2' onClick={onClick}>
            {type === 'ms' ? <FaMicrosoft className="w-5 h-5 text-red-500" /> : type === 'fb' ? <FaFacebook className="mr-2 h-5 w-5 text-cyan-600" /> : type === 'gg' ? <FaGoogle className="text-pink-500 mr-2 h-5 w-5" /> : null}
            <span className="mx-auto">{title}</span>
        </button>
    )
}

export default SocialButtons;