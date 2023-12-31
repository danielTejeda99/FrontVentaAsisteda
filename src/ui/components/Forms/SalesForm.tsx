// Importamos los componentes necesarios de la librería '@/ui/components', 'formik' y otros módulos requeridos.
'use client'

import { CheckBox, QuillInput, TextAreaInput } from '@/ui/components'

// Definimos una interfaz llamada 'Props' que describe las propiedades que acepta el componente.
interface Props {
    [x: string]: any
}
// Declaramos el componente funcional UserForm, que acepta las propiedades especificadas en la interfaz Props.

function SalesForm({ dataForm, onClickChk, values }: Props) {
    // Definimos reglas de validación para el formulario.
    return (
        <div>

            <p className='font-sanchez text-c2 mb-3 text-xl'>Formulario de venta</p>

            <div className='py-4 px-6 rounded-xl bg-c4'>
                {dataForm?.map((item: any, index: number) => (
                    <div key={index} className='grid grid-cols-1 md:grid-cols-3 gap-4 my-8 text-sm'>
                        <p className='font-bold'>{item.name}</p>

                        <div className='flex md:justify-center'>
                            <CheckBox label='¿Obligatoria?' name='required' value='required'
                                checked={item.required} onClick={() => { onClickChk(item.name, 'required') }} />
                        </div>
                        <div className='flex md:justify-center'>
                            <CheckBox label='¿Visible en el formulario?' name='visible' value='required' checked={item.disabled} onClick={() => { onClickChk(item.name, 'disabled') }} />
                        </div>
                    </div>
                ))}

            </div>
            <div className='relative py-2 space-y-2'>
                <hr className="border-t border-gray-400"></hr>
                <p className='font-bold'>Politica de Uso de Datos</p>
                <p >A continuación ingresa el texto de la politica de uso de datos que deseas asociar:</p>
                <TextAreaInput name='usagePolicy' label='' values={values} />
            </div>
            <div className='relative py-2 space-y-2'>
                <hr className="border-t border-gray-400"></hr>
                <p className='font-bold'>Uso de Datos Particular del Aliado</p>
                <p >A continuación ingresa el texto que deseas agregar a la Politica de Uso de Datos para este Aliado:</p>
                <TextAreaInput name='usagePolicyParticular' label='' values={values} />
            </div>
        </div>
    )
}


export default SalesForm;

