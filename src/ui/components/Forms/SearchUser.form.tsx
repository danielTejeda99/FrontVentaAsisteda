import {useState} from 'react'
import { MyFormik } from '@/ui/components'
import { Form } from 'formik'
import { TextInput } from '@/ui/components'

interface Props {
    submit: Function
}

export default function SearchForm({submit}:Props){
    const [options, setOptions] = useState([{ name: 'Tipo de busqueda', value: '' },{ name: 'Nombre', value: 'name' }]);
    const validations = [
    {
        name: 'value',
        type: 'string',
        required: true
    }]

    return(
        <div className='p-5  '>
                <MyFormik
                    initialValues={{                        
                        value: ''
                    }}
                    onSubmit={(value:string) => submit(value)}
                    form={() => (
                        <Form className='flex'>
                            <div><TextInput
                                label=""
                                name="value"
                            /></div>
                            <button type='submit' className='border px-5 bg-blue-500 text-white rounded-md'>Buscar</button>                           
                        </Form>
                    )
                    }
                    validation={validations}
                />
            </div>
    )
}