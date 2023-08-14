'use client'
import { Component, useEffect, useState } from 'react'
import '@/styles/globals.css'
import { signout } from '@/request/auth';
import { useRouter } from 'next/navigation';
import CookiesUtils from '@/utils/cookieUtils';
import Dashboard from '@/ui/layouts/Dashboard';
import { HiOfficeBuilding, HiUserGroup } from 'react-icons/hi';


interface Module {
  id: number;
  description: string;
  path?: string;
  children: object[];
  icon?: any
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const [modules, setModules] = useState<Module[]>([])

  const logout = async () => {
    const response = await signout();
    if (response.statusCode === 200) {
      const { data } = response;
      Object.keys(CookiesUtils.getAllCookie()).forEach((cookieName) => {
        CookiesUtils.removeCookie(cookieName);
      });
      localStorage.clear();
      router.push(data);
    }
  }

  const filterModules = (userModules: any[]): Module[] => {
    const filteredModules: Module[] = [];

    for (const item of userModules) {
      if (item.permissions) {
        for (const iterator of item.permissions) {
          switch (iterator.description) {
            case 'crear usuario':
              const exists = filteredModules.some((item) => item.id === 1);
              if (exists) {
                for (const child of filteredModules) {
                  if (child.id === 1) {
                    child.children.push({
                      description: 'Crear Usuarios',
                      path: '/dashboard/user',
                    })
                  }
                }
              } else {
                filteredModules.push({
                  id: 1,
                  description: 'Gestión de Usuarios',
                  icon: HiOfficeBuilding,
                  children: [
                    {
                      description: 'Crear Usuarios',
                      path: '/dashboard/user',
                    }
                  ],

                });
              }

              break;
            case 'actualizar usuario':
              const existsUser = filteredModules.some((item) => item.id === 1);
              if (existsUser) {
                for (const child of filteredModules) {
                  if (child.id === 1) {
                    child.children.push({
                      description: 'Editar Usuarios',
                      path: '/dashboard/user/edit',
                    })
                  }
                }
              } else {
                filteredModules.push({
                  id: 1,
                  description: 'Usuarios',
                  children: [
                    {
                      description: 'Actualizar Usuarios',
                      path: '/dashboard/user/edit',
                    }
                  ],

                });
              }
              break;
          }

          if (iterator.description === 'crear rol' || iterator.description === 'actualizar rol') {
            const exists = filteredModules.some((item) => item.id === 3);
            if (!exists) {
              filteredModules.push({
                id: 3,
                description: 'Gestionar Roles',
                path: '/dashboard/role',
                children: [],
                icon: HiUserGroup
              });
            }
          }
        }
      }
    }

    return filteredModules;
  };

  useEffect(() => {
    const user: any = CookiesUtils.getCookie('user');
    if (user) {
      const userJson = JSON.parse(user);
      const filteredModules = filterModules(userJson.modules);
      setModules(filteredModules);
    }
  }, [])


  return (
    <Dashboard logout={logout} modules={modules}>
      <div className='w-full overflow-y-scroll h-93 '>
        {children}
      </div>
      {/* {children} */}
    </Dashboard>
  )
}
