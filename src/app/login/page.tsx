'use client'
import { redirect, useRouter } from 'next/navigation';
import {signin} from '@/request/auth'
import { useEffect } from 'react';



export default async function Login() {  
    const router = useRouter(); 
    useEffect(() => {
      
        const fetchDataAndRedirect = async () => {
            try {
              const response = await signin();
              const { data } = response;
              
              // Redirigir a la ruta deseada
              router.push(data); // Aquí asumo que 'data' contiene la ruta de destino
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchDataAndRedirect();
      return () => {
        
      }
    }, [])
     
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
           <h1>loading...</h1>
        </div>
    )
}
