'use client';

import { Card } from 'flowbite-react';
import { CustomButton } from '@/ui/components'
interface Props{
    onClick: Function;
}
export default function CardComponent({onClick}:Props) {
  return (
    <Card className="max-w-xs">
      <h5 className="font-bold text-gray-900">
          Formulario base
      </h5>
      <p className="">
          Ventas xxxx.
      </p>
      <CustomButton title='Editar' onClick={onClick}/>
    </Card>
  )
}


