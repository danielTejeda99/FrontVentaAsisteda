import React, { useEffect } from 'react'
import { TextInput, MyFormik, TextAreaInput, ProductTable, CustomButton, CheckBox } from '@/ui/components'
import { Form } from 'formik'

export default function ProductForm({ itemsHead, data, onSubmit, setSubmit, dataTable }: any) {
    const validations = [{
        name: 'productCode',
        type: 'number',
        required: true
    }
    ]

    const initialValues = {
        productName: '', productCode: null, productDesc: '', exclusions: '', acquisitionAge: '',
        renewalAge: '', cumulusValue: '', productBouquet: '', beneficiaries: false, Renewal: false
    }



    return (
        <div >
            <MyFormik initialValues={initialValues} onSubmit={onSubmit} validation={validations} form={
                () => (
                    <Form className='space-y-4 '>
                        {/* <CustomButton title="Importar datos"/>                         */}
                        <div className='flex justify-between items-end gap-10'>
                            <div className='flex items-end justify-center gap-3'>
                                
                                <div className='flex items-center'>
                                <p className='font-bold inline text-sm w-5/6'>Código del producto</p>
                                <TextInput label='' name='productCode' />
                                </div>
                                <CustomButton formik={true} className='' title='Importar datos' type='submit' onClick={() => setSubmit('code')} />
                            </div>
                            <div className='flex items-center justify-center gap-3'>
                                <p className='font-bold inline text-sm w-5/6'>Nombre del producto</p>
                                <TextInput label='' name='productName' disabled value={data && data.Modules[0].ProductName} />
                            </div>
                        </div>
                        <TextAreaInput name='productDesc' label='Descripción del producto' value={data && data.description} />
                        <h1 className='font-bold mb-3 text-md '>Planes disponibles</h1>
                        <div className='grid grid-cols-2 gap-10'>
                            {dataTable.map((item: any, key: any) => (
                                <ProductTable itemHead={itemsHead} data={item} key={key} />
                            ))}
                        </div>
                        <TextAreaInput name='exclusions' label='Exclusiones' value={data && data.exclusions} />
                        <div className=' grid grid-cols-3 gap-4 place-content-center'>
                            <TextInput label='Edad de adquisición' name='acquisitionAge' disabled value={data && `${data.Modules[0].ProductAgeAcquireStart}-${data.Modules[0].ProductAgeAcquireEnd} años`} />
                            <TextInput label='Edad de renovación' name='renewalAge' disabled value={data && `${data.Modules[0].ProductAgeRenewStart}-${data.Modules[0].ProductAgeRenewEnd} años`} />
                            <TextInput label='Valor del cúmulo' name='cumulusValue' disabled value={data && data.Modules[0].CumulosValue} />
                            <TextInput label='Ramo del producto' name='productBouquet' disabled />
                            
                            
                                <CheckBox label='Permite incluir beneficiarios'
                            name="beneficiaries" value='required' />
                            <CheckBox label='Renovación automatica'
                            name="Renewal" checked={data && data.Modules[0].RenewAutomatic == 'T' ? true : false} value='required' />
                               
                        </div>

                        <CustomButton formik={true} title='Agregar producto' name='submit' onClick={() => setSubmit('create')} />
                    </Form>
                )
            } />
        </div>

    )
}
