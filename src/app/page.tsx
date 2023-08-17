'use client'
import { signin } from '@/request/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


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
      <div className="space-y-5 w-3/12">
        loading...
      </div>
    </div>
  )
}



