import { useState } from 'react'
import { MyFormik } from '@/ui/components'
import { Form } from 'formik'
import { TextInput } from '@/ui/components'
import { BiSearch } from 'react-icons/bi'


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
          <Form className='flex flex-col md:flex-row gap-2 justify-between text-black w-full'>
            <label className='flex flex-col md:flex-row md:items-center md:w-80'>
              <p className='font-bold text-sm w-auto shrink-0 mr-2'>Buscar Usuario</p>
              <div className='w-full mb-4 md:mb-0'>
              <TextInput
                label=""
                name="value"
              />
              </div>
              
              </label>
            <button type='submit' className='flex justify-center items-center bg-c1 px-5 rounded-xl text-black font-bold w-auto h-[35px] md:h-auto'><BiSearch className="mr-2 h-5 w-5 inline" />Buscar</button>
          </Form>
        )
        }
        validation={validations}
      />
    </div>
  )
}
