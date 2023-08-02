'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default async function Home() {
  const router = useRouter();
  

  useEffect(() =>{
    const handleNavigate = async () => {
      await router.push('/login');
    };
    handleNavigate();
  },[])

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="space-y-5 w-3/12">
        loading...
      </div>
    </div>
  )
}
