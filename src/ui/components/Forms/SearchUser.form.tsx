import { useState } from 'react'
import { MyFormik } from '@/ui/components'
import { Form } from 'formik'
import { TextInput } from '@/ui/components'
import { BiSearch } from 'react-icons/bi';

interface Props {
    submit: Function
}

export default function SearchForm({ submit }: Props) {
    const [options, setOptions] = useState([{ name: 'Tipo de busqueda', value: '' }, { name: 'Nombre', value: 'name' }]);
    const validations = [
        {
            name: 'value',
            type: 'string',
            required: true
        }]

    return (
        <div className='p-5  '>
            <MyFormik
                initialValues={{
                    value: ''
                }}
                onSubmit={(value: string) => submit(value)}
                form={() => (
                    <Form className='flex text-black'>
                        <label className='relative'>
                            <div className='absolute top-2 ml-1'>
                                <BiSearch className="mr-2 h-5 w-5 inline" />
                            </div><TextInput
                                label=""

                                name="value"
                                className="pl-7 rounded-lg"
                            /></label>
                        <button type='submit' className='border px-5 bg-blue-500 hover:bg-blue-700 text-white rounded-md ml-5'>Buscar</button>
                    </Form>
                )
                }
                validation={validations}
            />
        </div>
    )
}