'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react'
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/slices/users/userSlice';
import { getUserAndToken } from '@/request/auth';
import { signout } from '@/request/auth';
import CookiesUtils from '@/utils/cookieUtils';
export default function Admin() {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const code = searchParams.get('code');

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
        } else if (response.statusCode === 401) {
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
      }
    }
    if (code) fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <h1>loading...</h1>
    </div>
  )
}
