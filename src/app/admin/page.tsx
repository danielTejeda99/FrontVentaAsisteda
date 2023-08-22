'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/slices/users/userSlice';
import { getUserAndToken } from '@/request/auth';
import { signout } from '@/request/auth';
import CookiesUtils from '@/utils/cookieUtils';
import CustomModal from '@/ui/modals';
import { KeyComponent } from '@/ui/components'
import { Spinner } from 'flowbite-react';

export default function Admin() {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const code = searchParams.get('code');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<any>(null);

  const onRequestClose = async () => {
    setShowModal(false)
    const resSignout = await signout();
    if (resSignout.statusCode === 200) {
      const { data } = resSignout;
      Object.keys(CookiesUtils.getAllCookie()).forEach((cookieName) => {
        CookiesUtils.removeCookie(cookieName);
      });
      localStorage.clear();
      router.push(data);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (code) {
        const response = await getUserAndToken(code);
        if (response.statusCode === 200) {
          const { data } = response;
          const dateExp = new Date(data.idTokenClaims.exp * 1000);
          CookiesUtils.setCookie('token', data.token, { expires: dateExp, path: '/' });
          data.user.modules = data.modules;
          dispatch(setUser(data.user))
          CookiesUtils.setCookie('user', JSON.stringify(data.user));
          await router.push('/dashboard');
        } else {
          setMessageModal({ title: 'El usuario no se encuentra registrado', description: 'Por favor verifica los datos ingresados' })
          setShowModal(true)
        }
      }
    }
    if (code) fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className='text-center'>
        <Spinner size="xl" color="warning">
        </Spinner>
        <p className='text-c2 mt-5 font-sanchez'>Cargando...</p>
      </div>

      <CustomModal isOpen={showModal} onClose={onRequestClose}>
        <div className='flex flex-col items-center justify-center text-center space-y-2'>
          <KeyComponent />
          <h1 className='text-#008296 font-bold'>{messageModal?.title}</h1>
          <p className='text-greenText text-sm'>{messageModal?.description}</p>
        </div>
      </CustomModal>
    </div>
  )
}
