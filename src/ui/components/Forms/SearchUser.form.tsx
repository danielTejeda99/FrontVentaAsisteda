import { useState } from 'react'
import { MyFormik } from '@/ui/components'
import { Form } from 'formik'
import { TextInput } from '@/ui/components'
import { BiSearch } from 'react-icons/bi'

interface Props {
  submit: Function
}

export default function SearchForm ({ submit }: Props) {
  const [options, setOptions] = useState([
    { name: 'Tipo de busqueda', value: '' },
    { name: 'Nombre', value: 'name' }
  ])
  const validations = [
    {
      name: 'value',
      type: 'string',
      required: true
    }
  ]

  return (
    <div className='p-5  '>
      <MyFormik
        initialValues={{
          value: ''
        }}
        onSubmit={(value: string) => submit(value)}
        form={() => (
          <Form className='flex text-black w-full'>
            <label className='relative flex items-center'>
              
                <span className='flex flex-shrink-0 mr-3'>Buscar Usuario</span>
                
                <TextInput label='' name='value' className='w-5/6' />
                
            </label>
            <div className='flex justify-center items-stretch'>
            <button
              type='submit'
              className='border px-5 bg-blue-500 hover:bg-blue-700 text-white rounded-md'
            >
              Buscar
            </button>
            </div>
            
          </Form>
        )}
        validation={validations}
      />
    </div>
  )
}
