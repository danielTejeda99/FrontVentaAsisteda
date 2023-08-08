import { signin } from '@/request/auth';
import { redirect } from 'next/navigation';

async function redirectLogin() {
  const response: any = await signin();
  const { data } = response;    
  // Redirigir a la ruta deseada
  redirect(data); // Aquí asumo que 'data' contiene la ruta de destino 
}

export default async function  Home(){
  await redirectLogin();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="space-y-5 w-3/12">
        loading...
      </div>
    </div>
  )
}



