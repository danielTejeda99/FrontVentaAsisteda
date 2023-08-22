// Importamos el ícono AiOutlineCloseCircle de 'react-icons/ai'.
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.
interface Props {
  isOpen: boolean;    // Booleano que indica si el modal está abierto (true) o cerrado (false).
  onClose: any;       // Función que se ejecutará cuando se cierre el modal. 
  children: React.ReactNode
}

// Declaramos el componente funcional CustomModal, que acepta las propiedades especificadas en la interfaz Props.
const CustomModal = ({ isOpen, onClose,  children }: Props) => {
  return (
    <Modal show={isOpen}  popup onClose={onClose} size="sm" className='text-black' >
      <Modal.Header />
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  );
};

// Exportamos el componente CustomModal para que pueda ser utilizado en otros archivos.
export default CustomModal;
