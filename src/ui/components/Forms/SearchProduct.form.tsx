import {useState} from 'react'
import {MyFormik} from '@/ui/components'
import {Form} from 'formik'
import {TextInput} from '@/ui/components'
import {BiSearch} from 'react-icons/bi';

interface Props {
    submit: Function
}

export default function SearchProductForm({submit}: Props) {
    const [options, setOptions] = useState([{name: 'Tipo de busqueda', value: ''}, {name: 'Nombre', value: 'name'}]);
    const validations = [
        {
            name: 'value',
            type: 'string',
            required: true
        }]

    return (
        <div className=''>
            <MyFormik
                initialValues={{
                    value: ''
                }}
                onSubmit={(value: string) => submit(value)}
                form={() => (
                    <Form className='flex text-black flex-col max-sm:space-y-4 sm:flex-row items-center'>
                        <p className='sm:mr-2 font-bold'>Código o nombre del producto</p>

                        <label className='flex flex-row'>
                            <TextInput

                                label=""
                                placeholder="A123456"
                                name="value"

                                className="pl-4  rounded-lg w-[144px] h-[30px] stroke-[#E9EAEC]"

                            /></label>
                        <button type='submit'
                                className=' border px-5  h-[30px] bg-colmena3 hover:bg-yellow-400 text-black rounded-md sm:ml-5'>


                            <p className='font-bold'><BiSearch className="mr-2 h-5 w-5 inline"/>Buscar</p>
                        </button>
                    </Form>
                )
                }
                validation={validations}
            />
        </div>
    )
}