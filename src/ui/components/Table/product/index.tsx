
import { Table } from 'flowbite-react';
import { CustomButton } from '@/ui/components'
import { useState } from 'react';

export default function ProductTable({ data }: any) {
    const [state, setState] = useState(1)
    return (
        <div className='border rounded-md'>
            <div className='bg-green300 text-green0 p-2'>{data.name}</div>
            <div className='p-4 border-b inline-flex space-x-4 font-medium w-full'>
                <p className={state == 1 ? 'text-c2 underline hover:cursor-pointer' : 'text-greenText hover:cursor-pointer'} onClick={() => setState(1)}>Descripción</p>
                <p className={state == 2 ? 'text-c2 underline hover:cursor-pointer' : 'text-greenText hover:cursor-pointer'} onClick={() => setState(2)}>Coberturas</p>
            </div>
            {
                state == 1 ?
                    <div className='p-4 space-y-5'>
                        <p className='text-colorText'>{data.Description}</p>
                        <p className='text-green200 font-bold'>Frecuencia de pago: {data.PaymentFrequency}</p>
                    </div>
                    :
                    <div className='h-200 overflow-auto'>
                        {data.Coverages.map((item: any, key:any) => (
                            <div className='p-4 space-y-2' key={key}> 
                                <p className='text-colorText'>{item.Description}</p>
                                <p className='text-green200 font-bold'>Monto fijo asegurado: {item.FixedInsuredAmount}</p>
                                <p className='text-green200 font-bold'>Prima fija: {item.FixedPremium}</p>
                                <p className='text-green200 font-bold'>Monto de prima anual: {item.AnualPremiumAmount}</p>
                            </div>
                        ))}
                    </div>


            }

        </div >
    )
}


