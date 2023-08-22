'use client'
import { signin } from '@/request/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Spinner } from 'flowbite-react';


export default async function  Home(){
  const router = useRouter();

  const redirectLogin = async () => {
    const response: any = await signin();
    const { data } = response;  
    console.log(data)
    router.push(data);
  }

  useEffect(() => {
    redirectLogin();
    return () => {      
    }
  }, [])
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="text-center">
        <Spinner size="xl" color="warning">
        </Spinner>
        <p className='text-c2 mt-5 font-sanchez'>Cargando...</p>
      </div>
    </div>
  )
}



