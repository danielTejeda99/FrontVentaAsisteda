// Importamos los componentes necesarios de la librería '@/ui/components', 'formik' y otros módulos requeridos.

import {CustomButton, CardComponent, CheckBox, TextAreaInput } from '@/ui/components'

// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.
interface Props {
    [x: string]: any
}
// Declaramos el componente funcional UserForm, que acepta las propiedades especificadas en la interfaz Props.

function SalesForm({ showCampos, handleShowCampos, dataForm, onClickChk, showFields, handleUpdateAlliesForm, type }: Props) {
    // Definimos reglas de validación para el formulario.
    return (
        <div>
            <div className='relative py-2 space-y-2'>
                <hr className="border-t border-gray-400"></hr>
                <p className='font-bold'>Formularios de venta</p>
            </div>           
            <div>
                {dataForm.map((item: any, index: number) => (
                    <div key={index} className='grid grid-cols-3 gap-4 my-5 text-sm'>
                        <p>{item.name}</p>
                        <div className='col-span-2'>
                            <div className='flex space-x-5'>
                                <CheckBox label='¿Obligatoria?' name='required' value='required'
                                    checked={item.required} onClick={() => { onClickChk(item.name, 'required') }}
                                />
                                <CheckBox label='¿Visible en el formulario?' name='visible' value='required' checked={item.disabled} onClick={() => { onClickChk(item.name, 'disabled') }} />

                            </div>

                        </div>


                    </div>
                ))}
                <div className='relative py-2 space-y-2'>
                    <hr className="border-t border-gray-400"></hr>
                    <p className='font-bold'>Configuración del uso de datos</p>
                    <p >A continuación ingresa el texto de la politica de uso de datos que deseas asociar:</p>
                    <TextAreaInput name='usagePolicy' label='' />
                </div>                
            </div>
        </div>
    )
}


export default SalesForm;

