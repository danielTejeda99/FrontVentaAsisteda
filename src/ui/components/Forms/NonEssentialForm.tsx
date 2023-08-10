// Importamos los componentes necesarios de la librería '@/ui/components', 'formik' y otros módulos requeridos.

import {CheckBox} from '@/ui/components'

// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.
interface Props {
    [x: string]: any
}
// Declaramos el componente funcional UserForm, que acepta las propiedades especificadas en la interfaz Props.

function NonEssentialForm({dataForm, onClickChk}: Props) {
    // Definimos reglas de validación para el formulario.
    console.log("dataformdddd",dataForm)
    return (
        <div>
            <div className='relative py-2 space-y-2'>
                <hr className="border-t border-gray-400"></hr>
                <p className='font-bold'>Configuración de los datos no esenciales</p>
            </div>
            <div>
                {dataForm?.map((item: any, index: number) => (
                    <div key={index} className='grid grid-cols-1 md:grid-cols-2 gap-4 my-8 text-sm'>
                        <p className='font-bold'>{item.name}</p>
                        
                        <div className='flex md:justify-end'>

                            <CheckBox label='¿Visible en el formulario?' name='visible' value='required' checked={item.disabled} onClick={() => { onClickChk(item.name) }} />

                        </div>



                    </div>
                ))}
            </div>
        </div>
    )
}


export default NonEssentialForm;

