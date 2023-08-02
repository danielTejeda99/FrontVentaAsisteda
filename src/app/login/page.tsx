
import { redirect } from 'next/navigation';
import {signin} from '@/request/auth'

const fetchData = async () => {
    const response = await signin();
    const { data } = response;
    redirect(data);
}

export default async function Login() {    
    await fetchData();
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
           <h1>loading...</h1>
        </div>
    )
}
