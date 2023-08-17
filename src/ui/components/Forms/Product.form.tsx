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
                        <div className='grid grid-cols-2 gap-40'>
                            <div className='grid grid-cols-3'>
                                <p className='font-bold inline mb-3 text-sm'>Código del producto</p>
                                <TextInput label='' name='productCode' />
                                <CustomButton formik={true} title='Importar datos' name='submit' onClick={() => setSubmit('code')} />
                            </div>
                            <div className='inline-flex'>
                                <p className='font-bold inline mb-3 text-sm'>Nombre del producto</p>
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
                        <div className=' grid grid-cols-3 gap-4'>
                            <TextInput label='Edad de adquisición' name='acquisitionAge' disabled value={data && `${data.Modules[0].ProductAgeAcquireStart}-${data.Modules[0].ProductAgeAcquireEnd} años`} />
                            <TextInput label='Edad de renovación' name='renewalAge' disabled value={data && `${data.Modules[0].ProductAgeRenewStart}-${data.Modules[0].ProductAgeRenewEnd} años`} />
                            <TextInput label='Valor del cúmulo' name='cumulusValue' disabled value={data && data.Modules[0].CumulosValue} />
                            <TextInput label='Ramo del producto' name='productBouquet' disabled />
                            <CheckBox label='Permite incluir beneficiarios'
                                name="beneficiaries" />
                            <CheckBox label='Renovación automatica'
                                name="Renewal" checked={data && data.Modules[0].RenewAutomatic == 'T' ? true : false} />
                        </div>

                        <CustomButton formik={true} title='Agregar producto' name='submit' onClick={() => setSubmit('create')} />
                    </Form>
                )
            } />
        </div>

    )
}
