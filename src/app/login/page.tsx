
import { redirect } from 'next/navigation';
import { signin } from '@/request/auth'
import { Spinner } from 'flowbite-react';

const fetchData = async () => {
    const response = await signin();
    const { data } = response;
    redirect(data);
}

export default async function Login() {
    await fetchData();
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className='text-center'>
                <Spinner size="xl" color="warning">
                </Spinner>
                <p className='text-c2 mt-5 font-sanchez'>Cargando...</p>
            </div>
        </div>
    )
}
